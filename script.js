// ===================== CONTOH DATA SOAL LENGKAP =====================
const dataSoal = {
  "10": {
    "BIG": {
      "mudah": [
        {q: "Apa kepanjangan dari BIG?", a: "Bahasa Inggris"},
        {q: "What is 'sekolah' in English?", a: "school"},
        {q: "Apa bahasa Inggrisnya 'laptop'?", a: "laptop"},
        {q: "What is 'rumah' in English?", a: "house"},
        {q: "What is 'fifty' in Bahasa Indonesia?", a: "lima puluh"}
        // Tambah sampai 50 soal sejenis
      ],
      "sedang": [
        {q: "What is the past tense of 'go'?", a: "went"},
        {q: "Translate: 'Saya suka belajar' ke bahasa Inggris", a: "I like studying"},
        {q: "What is the opposite of 'tall'?", a: "short"}
        // Tambah soal menengah (PASTI dalam bahasa Indonesia perintah/maksud soalnya)
      ],
      "sulit": [
        {q: "Tulis kalimat Bahasa Inggris: 'Ali membaca buku setiap hari.'", a: "Ali reads a book every day"},
        {q: "Apa sinonim 'happy' dalam Bahasa Inggris?", a: "joyful"}
      ],
      "mustahil": [
        {q: "Sebutkan 5 idiom Bahasa Inggris dan maknanya!", a: "open"},
        {q: "Uraikan perbedaan 'present perfect' dan 'past perfect' beserta contoh!", a: "open"}
      ]
    },
    "MAT": {
      "mudah": [
        {q: "Berapakah hasil dari 5 x 4?", a: "20"},
        {q: "Berapakah hasil 12 + 8?", a: "20"},
        {q: "Hasil dari 15 : 3?", a: "5"},
        {q: "10 dikali 2 sama dengan?", a: "20"},
        {q: "30 kurang 7 hasilnya?", a: "23"}
      ],
      "sedang": [
        {q: "Hasil dari 45 : 9 x 2 adalah?", a: "10"},
        {q: "Jika x=5, berapakah 2x+3?", a: "13"},
        {q: "Akar dari 64 adalah?", a: "8"}
      ],
      "sulit": [
        {q: "Jika f(x) = 2x+1, berapa nilai f(7)?", a: "15"},
        {q: "Berapakah hasil dari 117 - (3 x 7) + 29?", a: "117 - 21 + 29 = 125"},
        {q: "Jika y^2 = 49, berapa dua kemungkinan nilai y?", a: "7 dan -7"}
      ],
      "mustahil": [
        {q: "Jika x^2 + 4x + 4 = 0, berapa akar-akar x?", a: "-2"},
        {q: "Jelaskan dalil Pythagoras beserta contohnya!", a: "open"}
      ]
    },
    "BIO": {
      "mudah": [
        {q: "Apa alat pernapasan ikan?", a: "Insang"},
        {q: "Fungsi daun pada tumbuhan?", a: "Fotosintesis"},
        {q: "Organ utama pernapasan manusia?", a: "Paru-paru"}
      ],
      "sedang": [
        {q: "Dimana proses pencernaan protein dimulai?", a: "Lambung"},
        {q: "Bagian otak yang mengatur keseimbangan adalah?", a: "Cerebellum/serebelum"}
      ],
      "sulit": [
        {q: "Bagian sel tumbuhan yang tidak ada pada sel hewan?", a: "Dinding sel"},
        {q: "Apa itu mitosis?", a: "Pembelahan sel secara langsung"}
      ],
      "mustahil": [
        {q: "Jelaskan proses fotosintesis secara lengkap!", a: "open"},
        {q: "Sebutkan 5 peran enzim pada pencernaan manusia", a: "open"}
      ]
    }
    // Tambahkan Informatika, SBK dan materi lain mengikuti pola di atas
  },
  "11": {
    "FISIKA": {
      "mudah": [
        {q: "Alat untuk mengukur berat benda?", a: "Neraca/timbangan"},
        {q: "Apa satuan SI untuk waktu?", a: "detik"}
      ],
      "sedang": [
        {q: "Sebutkan rumus GLB!", a: "s = vt"},
        {q: "Energi potensial gravitasi benda rumusnya?", a: "Ep = mgh"}
      ],
      "sulit": [
        {q: "Hukum II Newton adalah?", a: "F = m x a"},
        {q: "Satuan daya listrik?", a: "watt"}
      ],
      "mustahil": [
        {q: "Jelaskan rangkaian listrik paralel dan seri!", a: "open"}
      ]
    },
    "BIG": {
      "mudah": [
        {q: "How do you say 'pintu' in English?", a: "door"}
        // dst
      ],
      "sedang": [
        {q: "Translate: 'Dia sedang makan' ke bahasa Inggris", a: "He is eating"},
        // dst
      ]
      // dst level lain
    }
    // Lanjutkan untuk materi kelas 11 (BIO MAT(WJB), MAT(TL), BIG, FISIKA, SBK, EKONOMI, BIG WJB, BIG TL, SOSIOLOGI, SEJARAH)
  },
  "12": {
    "EKONOMI": {
      "mudah": [
        {q: "Apa yang dimaksud kebutuhan primer?", a: "Kebutuhan pokok"},
        {q: "Contoh barang ekonomi?", a: "Beras"}
      ],
      "mustahil": [
        {q: "Jelaskan pengertian inflasi dan dampaknya", a: "open"}
      ]
    }
    // Lanjutkan sisa materi kelas 12, sesuai pola kelas 11
  }
  // Lengkapi sesuai daftar materi, level dan jumlah soal
};

