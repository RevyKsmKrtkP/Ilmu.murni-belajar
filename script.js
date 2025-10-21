// ========== DATA MATERI DAN SOAL ===========
const dataMateri = {
  "10": ["BIG", "BIO", "INFORMATIKA", "MAT", "SBK"],
  "11": ["BIO MAT(WJB)", "MAT(TL)", "BIG", "FISIKA", "SBK", "EKONOMI", "BIG WJB", "BIG TL", "SOSIOLOGI", "SEJARAH"],
  "12": ["BIO MAT(WJB)", "MAT(TL)", "BIG", "FISIKA", "SBK", "EKONOMI", "BIG WJB", "BIG TL", "SOSIOLOGI", "SEJARAH"] // Bisa tambah materi khusus kelas 12
};

const dataSoal = {
  // Contoh soal, perbanyaklah sesuai kebutuhan (array soal per-materi berdasarkan level)
  "10": {
    "BIG": {
      "mudah": [
        {q: "Apa kepanjangan dari BIG?", a: "Bahasa Inggris"},
        {q: "What is 'buku' in English?", a: "book"}
      ]
    },
    "MAT": {
      "mudah": [
        {q: "Berapakah hasil dari 2 x 5?", a: "10"},
        {q: "Berapakah hasil dari 15 + 7?", a: "22"}
      ]
    }
    // Tambah materi lain, level lain
  }
  // Tambah untuk kelas 11 dan 12
};

// ========== AKUN DAN SESSION ===========
let user = null;
function loginUser() {
  user = {
    nama: document.getElementById('nama').value.trim(),
    usia: document.getElementById('usia').value.trim(),
    asal: document.getElementById('asal').value.trim(),
    nilai: {},
    sejarahQuiz: []
  };
  if(user.nama && user.usia && user.asal) {
    localStorage.setItem('quizUser', JSON.stringify(user));
    document.getElementById('loginPage').classList.add('hidden');
    showMainMenu();
  }
}
function restoreUser() {
  let u = localStorage.getItem('quizUser');
  if(u) {
    user = JSON.parse(u);
    document.getElementById('loginPage').classList.add('hidden');
    showMainMenu();
  }
}
function logout() {
  user = null;
  localStorage.removeItem('quizUser');
  location.reload();
}

// ========== MENU DAN NAVIGASI ===========
function showMainMenu() {
  document.getElementById('mainMenu').classList.remove('hidden');
  document.getElementById('namaUser').innerText = user.nama;
  document.getElementById('quizMenu').classList.add('hidden');
  document.getElementById('scorePage').classList.add('hidden');
  document.getElementById('quizPage').classList.add('hidden');
  document.getElementById('profilePage').classList.add('hidden');
}
function showQuizMenu() {
  // Update materi sesuai kelas
  let kelas = document.getElementById('kelas').value;
  let materiOpt = dataMateri[kelas];
  let materiSel = document.getElementById('materi');
  materiSel.innerHTML = '';
  materiOpt.forEach(m => materiSel.innerHTML += `<option>${m}</option>`);
  document.getElementById('mainMenu').classList.add('hidden');
  document.getElementById('quizMenu').classList.remove('hidden');
}
function backToMenu() { showMainMenu(); }

function showScore() {
  let out='';
  for(const [key,nilai] of Object.entries(user.nilai||{})) {
    out+=`<p>${key}: <b>${nilai}</b></p>`;
  }
  document.getElementById('scoreList').innerHTML = out||"Belum ada nilai";
  document.getElementById('scorePage').classList.remove('hidden');
  document.getElementById('mainMenu').classList.add('hidden');
  document.getElementById('profilePage').classList.add('hidden');
  document.getElementById('quizMenu').classList.add('hidden');
}

// ========== QUIZ ===========
let quizData, quizSoal = [], jawabanUser = [];
let quizIndex = 0, quizSkor = 0, quizKey = '';

function startQuiz() {
  let kelas = document.getElementById('kelas').value;
  let materi = document.getElementById('materi').value;
  let level = document.getElementById('level').value;
  let jumlah = +document.getElementById('jumlahSoal').value;
  // Random soal
  let pool = (dataSoal[kelas]&&dataSoal[kelas][materi]&&dataSoal[kelas][materi][level]) ? dataSoal[kelas][materi][level] : [];
  quizSoal = pool.length >= jumlah ? shuffle(pool).slice(0,jumlah) : pool;
  quizIndex = 0; quizSkor = 0; jawabanUser = [];
  quizKey = `${materi} kelas ${kelas}`;
  document.getElementById('quizMenu').classList.add('hidden');
  document.getElementById('quizPage').classList.remove('hidden');
  document.getElementById('judulQuiz').innerText = `Quiz ${materi} kelas ${kelas} (${level})`;
  nextSoal();
}
function nextSoal() {
  let jawabanInput = document.getElementById('jawaban');
  if(quizIndex>0) {
    let userAns = jawabanInput.value.trim();
    jawabanUser.push(userAns);
    if(userAns.toLowerCase() === quizSoal[quizIndex-1].a.toLowerCase()) quizSkor+=10;
  }
  if(quizIndex < quizSoal.length) {
    document.getElementById('soalBox').innerText = quizSoal[quizIndex].q;
    jawabanInput.value = '';
    document.getElementById('progress').innerText = `Soal ${quizIndex+1} dari ${quizSoal.length}`;
    quizIndex++;
  } else {
    selesaiQuiz();
  }
}
function selesaiQuiz() {
  user.nilai[quizKey] = quizSkor;
  user.sejarahQuiz.push(quizSkor);
  localStorage.setItem('quizUser', JSON.stringify(user));
  document.getElementById('quizPage').classList.add('hidden');
  showScore();
}

// ========== PROFIL, GRAFIK, MOTIVASI ===========
function showProfile() {
  document.getElementById('mainMenu').classList.add('hidden');
  document.getElementById('scorePage').classList.add('hidden');
  document.getElementById('quizMenu').classList.add('hidden');
  document.getElementById('profilePage').classList.remove('hidden');
  document.getElementById('profileNama').innerText = user.nama;
  document.getElementById('profileUsia').innerText = user.usia;
  document.getElementById('profileAsal').innerText = user.asal;
  // Update grafik
  drawChart(user.sejarahQuiz);
  // Motivasi
  let motivasi = [
    "Tetap semangat, sekolah adalah kunci masa depanmu!",
    "Jangan menyerah, usaha tidak pernah menghianati hasil!",
    "Setiap kegagalan adalah awal keberhasilan.",
    "Hasil hari ini lebih baik dari kemarin!",
    "Waktunya berprestasi, tetap percaya diri!"
  ];
  document.getElementById('motivasiText').innerText = motivasi[Math.floor(Math.random()*motivasi.length)];
}

// ========== GRAFIK ===========
function drawChart(sejarah) {
  // Buat grafik sederhana dengan emoji bar
  let ctx = document.getElementById('progChart').getContext('2d');
  ctx.clearRect(0,0,300,150);
  let max = Math.max(...sejarah,100), w=220, h=130;
  sejarah.forEach((val,i) => {
    ctx.fillStyle="#0ea5e9";
    ctx.fillRect(10+i*25,h-val,20,val);
    ctx.fillText(val,14+i*25,h-val-5);
  });
}

// ========== UTILS ===========
function shuffle(array) {
  return array.map(a => [Math.random(),a]).sort().map(a=>a[1]);
}

// ========== EVENT ===========
document.getElementById('loginBtn').onclick = loginUser;
document.getElementById('kelas').onchange = showQuizMenu;
window.onload = restoreUser;
