// Data produk dari Excel - Single source of truth
const PRODUCTS = {
  "id-card-pvc": {
    id: "id-card-pvc",
    name: "ID Card PVC",
    category: "print-a3",
    categoryLabel: "Cetak Digital & Offset",
    image: "img/idcard.jpeg",
    seoKeywords: ["cetak id card jakarta", "id card pvc murah", "cetak member card", "bikin id card satuan", "kartu pelajar pvc", "cetak id card online"],
    specs: [
      "Design Custom",
      "Cetak 1 Sisi / 2 sisi",
      "Uk 85mm x 55mm x0,76mm",
      "Seukuran dengan kartu ATM & Emoney",
      "Bisa di Sudut Rounded",
      "Laminasi Doff / Glossy"
    ],
    details: {
      "Ukuran": "85mm x 55mm",
      "Ketebalan": "0,76mm (Standar ISO)",
      "Material": "PVC Putih High Grade",
      "Waktu Pengerjaan": "1-2 Hari Kerja"
    },
    description: "Jasa cetak ID Card PVC standar ATM berkualitas premium di Jakarta. Material PVC tahan lama, anti air, dan tidak mudah patah. Cocok untuk kartu identitas karyawan, kartu member, kartu pelajar, dan panitia event. Hasil cetak tajam, warna awet, dan tersedia opsi laminasi. Pesan sekarang untuk solusi ID Card profesional Anda.",
    relatedProducts: ["kartu-nama", "poster-a3", "stiker-a3"]
  },
  "kartu-nama": {
    id: "kartu-nama",
    name: "Kartu Nama",
    category: "print-a3",
    categoryLabel: "Cetak Digital & Offset",
    image: "img/kartu_nama.jpeg",
    seoKeywords: ["cetak kartu nama jakarta", "kartu nama murah", "bikin kartu nama sehari jadi", "kartu nama premium", "kartu nama art carton", "cetak name card online"],
    specs: [
      "Ac260grm / Linen / Jasmine",
      "BluesWhite / Concord",
      "Bisa di Sudut Rounded",
      "Laminasi Doff / Glossy"
    ],
    details: {
      "Ukuran": "9cm x 5.5cm (Standar)",
      "Material": "Art Carton 260grm / Linen / Jasmine",
      "Finishing": "Laminasi Doff / Glossy",
      "Waktu Pengerjaan": "1-2 Hari Kerja"
    },
    description: "Cetak kartu nama profesional dengan berbagai pilihan kertas premium (Art Carton, Linen, Jasmine). Tingkatkan kredibilitas bisnis Anda dengan kartu nama berkualitas tinggi. Tersedia finishing laminasi doff untuk kesan elegan atau glossy untuk warna yang lebih cerah.",
    relatedProducts: ["id-card-pvc", "poster-a3", "stiker-a3"]
  },
  "poster-a3": {
    id: "poster-a3",
    name: "Poster A3+",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/posterA3.jpeg",
    seoKeywords: ["cetak poster a3 jakarta", "poster a3 murah", "cetak poster online", "print a3+ murah", "jasa cetak poster event"],
    specs: [
      "Art Karton 260grm / 310gram",
      "Laminasi Doff / Glossy"
    ],
    details: {
      "Ukuran": "A3+ (32 x 48cm)",
      "Material": "Art Karton 260grm / 310gram",
      "Finishing": "Laminasi Doff / Glossy",
      "Waktu Pengerjaan": "1-2 Hari Kerja"
    },
    description: "Layanan cetak Poster A3+ murah dan cepat di Jakarta. Cocok untuk promosi event, dekorasi dinding, atau tugas kuliah. Menggunakan mesin digital printing terbaru untuk hasil warna yang tajam dan material Art Carton tebal.",
    relatedProducts: ["stiker-a3", "kartu-nama", "brosur-flyer"]
  },
  "stiker-a3": {
    id: "stiker-a3",
    name: "Stiker A3+",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/sticker.jpeg",
    seoKeywords: ["cetak stiker a3 jakarta", "print stiker label", "stiker vinyl a3", "stiker chromo murah", "cetak stiker kemasan"],
    specs: [
      "HVS / Kraft / Cromo",
      "Vinyl / Transparan",
      "Gold / Silver / Hologram"
    ],
    details: {
      "Ukuran": "A3+ (32 x 48cm)",
      "Material": "HVS / Kraft / Cromo / Vinyl",
      "Varian": "Transparan / Gold / Silver / Hologram",
      "Waktu Pengerjaan": "1-2 Hari Kerja"
    },
    description: "Cetak stiker A3+ custom untuk label kemasan, branding produk, atau komunitas. Tersedia berbagai bahan seperti Vinyl (anti air), Chromo (ekonomis), dan Transparan. Bisa cutting kis-cut atau die-cut sesuai bentuk desain Anda.",
    relatedProducts: ["poster-a3", "kartu-nama", "id-card-pvc"]
  },
  "brosur-flyer": {
    id: "brosur-flyer",
    name: "Brosur / Flyer",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset",
    image: "img/brosur_flyer.png",
    seoKeywords: ["cetak brosur murah jakarta", "flyer promosi", "cetak leaflet", "brosur a4 a5", "jasa percetakan brosur"],
    specs: [
      "Art paper 120grm, 150grm, 190grm",
      "Ukuran A6 / A5 / A4 / A3",
      "Cetak 1 Sisi / 2 sisi",
      "Full Colour"
    ],
    details: {
      "Ukuran": "A6 / A5 / A4 / A3",
      "Material": "Art Paper 120-190grm",
      "Cetak": "1 Sisi / 2 Sisi Full Colour",
      "Waktu Pengerjaan": "2-3 Hari Kerja"
    },
    description: "Promosikan bisnis Anda dengan Brosur dan Flyer berkualitas. Cetak full colour dengan pilihan kertas Art Paper yang mengkilap dan elegan. Tersedia ukuran A5, A4, hingga custom. Solusi marketing offline yang efektif dan hemat biaya.",
    relatedProducts: ["poster-a3", "kartu-nama", "kop-surat"]
  },
  "jilid-hardcover": {
    id: "jilid-hardcover",
    name: "Jilid Buku Hard Cover",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset & Jilid",
    image: "img/hardcover.jpeg",
    seoKeywords: ["jilid hardcover jakarta", "jilid skripsi terdekat", "jilid buku murah", "cetak buku hardcover", "jilid spiral kawat"],
    specs: [
      "isi 100lbr - 500lbr",
      "Ukuran A6 - A3",
      "Spiral / Ring Kawat / Lem",
      "Board Carton Keras",
      "Laminasi Doff / Glossy"
    ],
    details: {
      "Isi": "100 - 500 lembar",
      "Ukuran": "A6 / A5 / A4 / A3",
      "Jilid": "Spiral / Ring Kawat / Lem",
      "Cover": "Board Carton Keras + Laminasi"
    },
    description: "Layanan Jilid Hard Cover premium untuk skripsi, tesis, dokumen kantor, atau buku kenangan. Menggunakan board carton keras yang kokoh dengan finishing laminasi. Pilihan jilid lem panas atau spiral kawat yang rapi dan awet.",
    relatedProducts: ["jilid-softcover", "kop-surat", "nota-ncr"]
  },
  "jilid-softcover": {
    id: "jilid-softcover",
    name: "Jilid Buku Soft Cover",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset & Jilid",
    image: "img/Book_mockup.jpeg",
    seoKeywords: ["jilid softcover murah", "cetak majalah", "jilid lem panas", "jilid proposal", "percetakan buku jakarta"],
    specs: [
      "isi 100lbr - 500lbr",
      "Ukuran A6 - A3",
      "Spiral / Ring Kawat / Lem",
      "Laminasi Doff / Glossy"
    ],
    details: {
      "Isi": "100 - 500 lembar",
      "Ukuran": "A6 / A5 / A4 / A3",
      "Jilid": "Spiral / Ring Kawat / Lem",
      "Cover": "Art Carton + Laminasi"
    },
    description: "Jilid Soft Cover ekonomis dan rapi. Ideal untuk novel, diktat kuliah, proposal bisnis, atau katalog produk. Finishing lem panas (perfect binding) yang kuat menjamin halaman tidak mudah lepas.",
    relatedProducts: ["jilid-hardcover", "kop-surat", "brosur-flyer"]
  },
  "kalender-dinding": {
    id: "kalender-dinding",
    name: "Kalender Dinding",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/kalenderDinding.jpeg",
    seoKeywords: ["cetak kalender dinding", "kalender 2025 custom", "cetak kalender partai", "kalender promosi murah", "percetakan kalender jakarta"],
    specs: [
      "isi 1 lembar 12 bulan : AC 260 gsm",
      "isi 1 lembar 6 bulan : AC 260 gsm",
      "ukuran kertas ( A3+ 32 x 48cm )"
    ],
    details: {
      "Ukuran": "A3+ (32 x 48cm)",
      "Material": "Art Carton 260gsm",
      "Varian": "12 bulan / 6 bulan per lembar",
      "Waktu Pengerjaan": "2-3 Hari Kerja"
    },
    description: "Cetak Kalender Dinding custom dengan foto dan desain perusahaan Anda. Sarana promosi efektif sepanjang tahun. Menggunakan bahan Art Carton tebal berkualitas. Tersedia template kalender nasional lengkap.",
    relatedProducts: ["kalender-meja", "poster-a3", "brosur-flyer"]
  },
  "kalender-meja": {
    id: "kalender-meja",
    name: "Kalender Meja",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/kalender.jpeg",
    seoKeywords: ["cetak kalender meja", "kalender duduk custom", "souvenir kalender", "kalender meja spiral", "percetakan kalender murah"],
    specs: [
      "art paper 260gr",
      "2 sisi, isi 7 lbr (termasuk cover)",
      "Kawat spiral putih",
      "Posisi landscape",
      "Ring: Spiral Putih",
      "DDK:Duplex/ Hard Cover/ Ivory"
    ],
    details: {
      "Material": "Art Paper 260gr",
      "Isi": "7 lembar (termasuk cover)",
      "Posisi": "Landscape",
      "Dudukan": "Duplex / Hard Cover / Ivory"
    },
    description: "Kalender Meja eksklusif dengan jilid spiral. Souvenir akhir tahun yang mewah dan bermanfaat. Dudukan hard cover kokoh, tidak mudah roboh. Desain custom full color di setiap halaman bulan.",
    relatedProducts: ["kalender-dinding", "poster-a3", "kartu-nama"]
  },
  "kop-surat": {
    id: "kop-surat",
    name: "Kop Surat",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset",
    image: "img/kop_surat.jpeg",
    seoKeywords: ["cetak kop surat jakarta", "kop surat perusahaan", "surat jalan custom", "percetakan offset jakarta", "letterhead printing"],
    specs: [
      "Ukuran A4 (21 x 29,7 cm)",
      "HVS 75grm/ 80grm / 100grm",
      "Min 100lbr"
    ],
    details: {
      "Ukuran": "A4 (21 x 29,7 cm)",
      "Material": "HVS 75-100grm",
      "Minimum Order": "100 lembar",
      "Waktu Pengerjaan": "2-3 Hari Kerja"
    },
    description: "Tingkatkan citra profesional perusahaan dengan Kop Surat resmi. Dicetak di atas kertas HVS berkualitas (75-100gsm) dengan hasil yang bersih dan tajam. Cocok untuk surat penawaran, invoice, dan korespondensi resmi.",
    relatedProducts: ["nota-ncr", "brosur-flyer", "kartu-nama"]
  },
  "nota-ncr": {
    id: "nota-ncr",
    name: "Nota NCR",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset",
    image: "img/nota_ncr.jpeg",
    seoKeywords: ["cetak nota ncr", "bikin kwitansi custom", "nota carbonless", "cetak faktur pajak", "surat jalan ncr 3 ply"],
    specs: [
      "BW / Full Colour",
      "1Buku isi 50set",
      "2ply / 3ply/ 4ply",
      "Bisa Custom",
      "Tanpa Minimum Order"
    ],
    details: {
      "Isi": "50 set per buku",
      "Cetak": "BW / Full Colour",
      "Layer": "2ply / 3ply / 4ply",
      "Minimum Order": "Tanpa Minimum"
    },
    description: "Cetak Nota NCR (Carbonless) tanpa perlu kertas karbon tambahan. Tulisan langsung tembus ke rangkap bawah. Tersedia pilihan 2 ply, 3 ply, atau 4 ply dengan nomorator otomatis. Solusi praktis untuk invoice, kwitansi, dan surat jalan.",
    relatedProducts: ["kop-surat", "brosur-flyer", "kartu-nama"]
  },
  "x-banner": {
    id: "x-banner",
    name: "X-Banner",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/xbanner.jpeg",
    seoKeywords: ["cetak x banner jakarta", "harga x banner murah", "banner wisuda", "standing banner promosi", "cetak banner cepat"],
    specs: [
      "Uk 60x160 / 80x180",
      "Albatros / PVC / Flexi"
    ],
    details: {
      "Ukuran": "60x160cm / 80x180cm",
      "Material": "Albatros / PVC / Flexi",
      "Termasuk": "Tiang X-Banner",
      "Waktu Pengerjaan": "1-2 Hari Kerja"
    },
    description: "Cetak X-Banner murah dan cepat. Media promosi portable yang paling populer, ringan, dan mudah dipasang. Sudah termasuk tiang penyangga letter X. Cocok untuk pameran, bazar, toko, atau banner wisuda.",
    relatedProducts: ["roll-up-banner", "tripod-banner", "print-indoor"]
  },
  "roll-up-banner": {
    id: "roll-up-banner",
    name: "Roll Up Banner",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/roll_up_banner.jpeg",
    seoKeywords: ["cetak roll up banner", "roll banner aluminium", "pull up banner jakarta", "banner gulung premium", "cetak banner portable"],
    specs: [
      "60x160 /85x200 / 120x200 / 150x200",
      "Albatros / Photopaper",
      "PVC / Flexi"
    ],
    details: {
      "Ukuran": "60x160 / 85x200 / 120x200 / 150x200",
      "Material": "Albatros / Photopaper / PVC / Flexi",
      "Termasuk": "Standing Roll Up",
      "Waktu Pengerjaan": "1-2 Hari Kerja"
    },
    description: "Tampil lebih eksklusif dengan Roll Up Banner. Praktis ditarik dan digulung otomatis ke dalam kaset aluminiumnya. Melindungi visual banner dari kerusakan saat disimpan. Pilihan terbaik untuk display kantor dan pameran premium.",
    relatedProducts: ["x-banner", "tripod-banner", "backdrop-system"]
  },
  "tripod-banner": {
    id: "tripod-banner",
    name: "Tripod Banner",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/tripod-banner.jpeg",
    seoKeywords: ["jual tripod banner", "cetak tripod banner", "standing banner 2 sisi", "tripod display poster", "banner menu restoran"],
    specs: [
      "Tinggi bisa sp 2Mtr",
      "uk 60x80 Kdboard 5mm",
      "uk 60x80 Impraboard 3mm / 5mm"
    ],
    details: {
      "Tinggi": "Hingga 2 Meter",
      "Ukuran Banner": "60x80cm",
      "Material": "Kdboard 5mm / Impraboard 3-5mm",
      "Termasuk": "Tripod Stand"
    },
    description: "Tripod Banner fleksibel yang bisa diatur ketinggiannya dan menampilkan visual 2 sisi (depan belakang). Pilihan ideal untuk display menu restoran, promo mall, atau petunjuk arah di event. Menggunakan papan Impraboard/Kdboard yang kaku dan rapi.",
    relatedProducts: ["x-banner", "roll-up-banner", "backdrop-system"]
  },
  "print-kanvas": {
    id: "print-kanvas",
    name: "Print Kanvas",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/print-canvas.jpeg",
    seoKeywords: ["cetak foto kanvas", "print kanvas murah", "cetak lukisan kanvas", "hiasan dinding custom", "canvas printing jakarta"],
    specs: [
      "Foto Canvas Kanvas",
      "Art Kanvas / Cotton Kanvas",
      "Bisa Custom"
    ],
    details: {
      "Material": "Art Canvas / Cotton Canvas",
      "Ukuran": "Custom sesuai permintaan",
      "Finishing": "Spanram kayu (opsional)",
      "Waktu Pengerjaan": "2-3 Hari Kerja"
    },
    description: "Abadikan momen spesial atau karya seni Anda dengan Print Kanvas (Canvas Printing). Tekstur kain kanvas asli memberikan kesan artistik dan mewah seperti lukisan. Sangat cocok untuk dekorasi interior rumah, kafe, atau pameran foto.",
    relatedProducts: ["duratrans", "print-indoor", "poster-a3"]
  },
  "duratrans": {
    id: "duratrans",
    name: "Duratrans",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/Duratrants.jpeg",
    seoKeywords: ["cetak duratrans", "backlite film printing", "isi neon box", "cetak lightbox", "duratrans jakarta"],
    specs: [
      "Backlite Film Duratran",
      "Resolusi tinggi tajam & jelas",
      "Untuk Kebutuhan Lightbox",
      "Bisa Cutom"
    ],
    details: {
      "Material": "Backlite Film Duratran",
      "Resolusi": "Tinggi & Tajam",
      "Penggunaan": "Lightbox / Neonbox",
      "Ukuran": "Custom"
    },
    description: "Cetak Duratrans / Backlite Film untuk neon box dan light box. Material khusus yang menyebarkan cahaya dari belakang secara merata, membuat visual terlihat hidup dan bercahaya. Wajib untuk menu board bioskop, restoran, dan iklan bandara.",
    relatedProducts: ["print-kanvas", "print-indoor", "print-outdoor"]
  },
  "stiker-oneway": {
    id: "stiker-oneway",
    name: "Stiker One Way",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/st_oneway.jpeg",
    seoKeywords: ["stiker one way vision", "stiker kaca mobil", "stiker kaca kantor", "branding kaca ruko", "perforated sticker"],
    specs: [
      "Tempel Di Kaca Ruko / Mobil",
      "Satin / One Way / Flexi"
    ],
    details: {
      "Material": "Satin / One Way / Flexi",
      "Penggunaan": "Kaca Ruko / Mobil",
      "Fitur": "Bisa dilihat dari satu sisi",
      "Ukuran": "Custom"
    },
    description: "Stiker One Way Vision adalah solusi branding kaca yang unik. Dari luar terlihat gambar promosi full color, namun dari dalam Anda tetap bisa melihat keluar dengan jelas. Ideal untuk kaca belakang mobil, pintu kantor, atau jendela ruko.",
    relatedProducts: ["stiker-a3", "print-indoor", "print-outdoor"]
  },
  "print-outdoor": {
    id: "print-outdoor",
    name: "Print Outdoor",
    category: "print-outdoor",
    categoryLabel: "Print Outdoor",
    image: "img/print-outdoor.jpg",
    seoKeywords: ["cetak spanduk murah", "cetak banner outdoor", "bikin baliho", "digital printing outdoor", "cetak umbul umbul"],
    specs: [
      "Bisa di Sudut Rounded",
      "Laminasi Doff / Glossy"
    ],
    details: {
      "Material": "Flexi / Vinyl Outdoor",
      "Finishing": "Laminasi Doff / Glossy",
      "Ketahanan": "Tahan Cuaca",
      "Ukuran": "Custom"
    },
    description: "Layanan Print Outdoor untuk kebutuhan promosi luar ruang. Cetak spanduk, baliho, atau umbul-umbul dengan bahan Flexi yang tahan panas dan hujan. Harga ekonomis dengan daya tahan yang handal untuk jangka panjang.",
    relatedProducts: ["print-indoor", "giant-banner", "roll-up-banner"]
  },
  "plotter-a0": {
    id: "plotter-a0",
    name: "Plotter A0 Warna",
    category: "print-a3",
    categoryLabel: "Cetak Plotter",
    image: "img/Plotter-A0-Warna.jpeg",
    seoKeywords: ["cetak plotter a0", "print a0 murah", "plotter peta a1", "cetak gambar teknik", "jasa plot kalkir"],
    specs: [
      "Poster HVS A2 / A1 / A0+"
    ],
    details: {
      "Ukuran": "A2 / A1 / A0+",
      "Material": "HVS",
      "Cetak": "Full Colour",
      "Waktu Pengerjaan": "Same Day"
    },
    description: "Jasa Plotter / Cetak Format Besar ukuran A2, A1, hingga A0+. Mencetak gambar teknik (CAD), peta, denah, atau poster presentasi dengan presisi garis yang tinggi. Tersedia bahan HVS dan Kalkir untuk kebutuhan arsitek dan insinyur.",
    relatedProducts: ["poster-a3", "print-indoor", "brosur-flyer"]
  },
  "print-indoor": {
    id: "print-indoor",
    name: "Print Indoor",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/print-indoor.jpg",
    seoKeywords: ["cetak indoor high res", "print albatros", "cetak poster indoor", "sticker vinyl indoor", "cetak foto besar"],
    specs: [
      "Albatros / Photopaper",
      "PVC / Stiker Vinyl",
      "Stiker Transparan"
    ],
    details: {
      "Material": "Albatros / Photopaper / PVC / Vinyl",
      "Resolusi": "Tinggi (1440 dpi)",
      "Penggunaan": "Indoor",
      "Ukuran": "Custom"
    },
    description: "Cetak Indoor Resolusi Tinggi (Hi-Res) untuk hasil visual terbaik. Detail gambar sangat tajam dan warna halus. Cocok untuk poster dalam ruangan, foto pameran, dan branding retail. Pilihan bahan: Albatros, Luster, Photo Paper, dan Sticker Vinyl.",
    relatedProducts: ["print-outdoor", "x-banner", "roll-up-banner"]
  },
  "fotocopy": {
    id: "fotocopy",
    name: "Fotocopy",
    category: "cetak-offset",
    categoryLabel: "Copy Center",
    image: "img/fotocopy.png",
    seoKeywords: ["fotocopy murah jakarta", "jasa fotocopy 24 jam", "copy warna a3", "fotocopy dokumen banyak", "jilid fotocopy"],
    specs: [
      "HVS 75grm / 80grm",
      "Uk A4 / Folio / A3",
      "Copy Bw / Warna"
    ],
    details: {
      "Material": "HVS 75-80grm",
      "Ukuran": "A4 / Folio / A3",
      "Cetak": "BW / Warna",
      "Layanan": "Express"
    },
    description: "Pusat Fotocopy (Copy Center) cepat dan murah di Jakarta. Melayani fotocopy hitam putih (BW) dan warna hingga ukuran A3. Mesin kecepatan tinggi siap menangani dokumen dalam jumlah banyak secara kilat.",
    relatedProducts: ["kop-surat", "jilid-softcover", "stempel-laser-warna"]
  },
  "stempel-laser-warna": {
    id: "stempel-laser-warna",
    name: "Stempel Laser Warna",
    category: "cetak-offset",
    categoryLabel: "Stempel & Cap",
    image: "img/stempel-laser-warna.jpeg",
    seoKeywords: ["stempel laser warna", "stempel warna custom", "cap warna perusahaan", "stempel flash warna", "bikin stempel jakarta", "stempel otomatis warna"],
    specs: [
      "Tersedia dalam berbagai model bentuk dan ukuran lengkap",
      "Tinta berkualitas tahan hingga ±300x cap",
      "Stempel dapat di isi ulang/refill",
      "Desain bisa custom sesuai kebutuhan Anda",
      "Ukuran Kotak / Oval / Bulat"
    ],
    details: {
      "Jenis": "Laser Flash Stamp",
      "Warna Tinta": "Multi Warna",
      "Daya Tahan": "±300x cap",
      "Bentuk": "Kotak / Oval / Bulat",
      "Waktu Pengerjaan": "1-2 Hari Kerja"
    },
    description: "Stempel Laser Warna berkualitas tinggi dengan hasil cap berwarna yang tajam dan jelas. Teknologi laser modern menghasilkan detail logo dan teks yang presisi. Tinta tahan lama hingga ±300x cap dan bisa di-refill. Tersedia berbagai bentuk (kotak, oval, bulat) dan ukuran sesuai kebutuhan perusahaan Anda.",
    relatedProducts: ["fotocopy", "kartu-nama", "kop-surat"]
  },
  "event-desk-standard": {
    id: "event-desk-standard",
    name: "Event Desk Standard",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/event-desk-standard.jpeg",
    seoKeywords: ["jual event desk", "meja promosi murah", "booth portable pvc", "meja pameran bongkar pasang", "event desk jakarta"],
    specs: [
      "Plastik PVC Import",
      "Anti Air",
      "Max 48kilo",
      "Tas Kanvas"
    ],
    details: {
      "Material": "Plastik PVC Import",
      "Kapasitas": "Max 48kg",
      "Fitur": "Anti Air",
      "Termasuk": "Tas Kanvas"
    },
    description: "Event Desk Standard adalah meja promosi portable yang terbuat dari bahan PVC berkualitas. Ringan, kokoh, dan mudah dibongkar pasang dalam waktu singkat. Solusi praktis dan ekonomis untuk booth pameran, sampling produk, atau bazar.",
    relatedProducts: ["pop-up-table", "easy-counter", "backdrop-system"]
  },

  "pop-up-table": {
    id: "pop-up-table",
    name: "Pop Up Table",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/pop_up_table.jpeg",
    seoKeywords: ["pop up table display", "meja pameran eksklusif", "pop up counter", "meja booth premium", "promotion desk aluminium"],
    specs: [
      "Pomotion desk",
      "Uk Meja 88 x 40 x 130 cm",
      "Meja hitam motif granit",
      "Rangka Alumunium / Tiang Besi"
    ],
    details: {
      "Ukuran": "88 x 40 x 130 cm",
      "Top Meja": "Hitam motif granit",
      "Rangka": "Aluminium / Tiang Besi",
      "Waktu Setup": "5 menit"
    },
    description: "Pop Up Table menghadirkan kesan profesional dan elegan untuk booth pameran Anda. Dilengkapi dengan top table motif granit hitam dan sistem rangka pop-up yang praktis. Visual branding yang luas dan mulus membuat brand Anda tampil menonjol.",
    relatedProducts: ["event-desk-standard", "easy-counter", "backdrop-system"]
  },
  "easy-counter": {
    id: "easy-counter",
    name: "Easy Counter",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/easy_counter.jpeg",
    seoKeywords: ["easy counter display", "meja booth belakang", "polycounter portable", "meja pameran praktis", "booth display sistem"],
    specs: [
      "Polycounter / Meja Pameran",
      "Uk Meja 86 x 44 x 85 cm",
      "Rangka Alumunium / Tiang Besi",
      "Abalan di bagian belakang meja",
      "Tas Kanvas"
    ],
    details: {
      "Ukuran": "86 x 44 x 85 cm",
      "Rangka": "Aluminium / Tiang Besi",
      "Fitur": "Rak belakang",
      "Termasuk": "Tas Kanvas"
    },
    description: "Easy Counter / Polycounter adalah meja display serbaguna berbahan polikarbonat. Keunggulan utamanya adalah adanya rak penyimpanan (ambalan) di bagian belakang, memudahkan Anda menyimpan stok brosur atau produk saat pameran. Setup sangat mudah tanpa alat.",
    relatedProducts: ["pop-up-table", "event-desk-standard", "backdrop-system"]
  },
  "backdrop-system": {
    id: "backdrop-system",
    name: "Backdrop System",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/backdrop-system.jpeg",
    seoKeywords: ["backdrop portable", "backwall 3x3", "pop up display backwall", "jasa pembuatan backdrop", "sewa backdrop jakarta"],
    specs: [
      "Backwall Portable",
      "Straight / Curve",
      "3 x 3 module / 3 x 4 module",
      "Rangka Alluminum",
      "PVC & Magnet",
      "Lampu Hologen 2 pcs",
      "Tas Trolley"
    ],
    details: {
      "Ukuran": "3x3 module / 3x4 module",
      "Bentuk": "Straight / Curve",
      "Rangka": "Aluminium",
      "Termasuk": "2 Lampu Halogen + Tas Trolley"
    },
    description: "Sistem Backdrop Portable (Backwall) untuk latar belakang panggung atau booth yang megah. Sistem rangka spider dengan magnet membuat pemasangan visual menjadi rapi dan seamless. Tersedia model lurus (straight) atau lengkung (curve) lengkap dengan lampu sorot.",
    relatedProducts: ["pop-up-table", "easy-counter", "roll-up-banner"]
  },
  "mug": {
    id: "mug",
    name: "Mug",
    category: "print-a3",
    categoryLabel: "Merchandise & Souvenir",
    image: "img/mug.jpeg",
    seoKeywords: ["cetak mug custom", "mug bunglon", "sablon mug jakarta", "souvenir mug murah", "mug printing"],
    specs: [
      "Custom Print Full Colour",
      "Tanpa minimum Order",
      "Souvenir / Hadia / Hampers"
    ],
    details: {
      "Material": "Keramik",
      "Cetak": "Full Colour Sublimasi",
      "Minimum Order": "Tanpa Minimum",
      "Waktu Pengerjaan": "2-3 Hari Kerja"
    },
    description: "Cetak Mug Custom satuan atau grosir dengan kualitas foto full colour. Pilihan tepat untuk kado ulang tahun, wisuda, atau souvenir pernikahan. Menggunakan mug keramik berstandar SNI yang aman dan awet.",
    relatedProducts: ["tumbler", "payung", "shopping-bag"]
  },
  "payung": {
    id: "payung",
    name: "Payung",
    category: "print-a3",
    categoryLabel: "Merchandise & Souvenir",
    image: "img/payung.jpeg",
    seoKeywords: ["cetak payung promosi", "sablon payung jakarta", "payung golf custom", "payung souvenir", "grosir payung promosi"],
    specs: [
      "Kualitas Premium & Bergaransi",
      "Payung Golf jumbo",
      "Warna Campur",
      "cetak Custom"
    ],
    details: {
      "Jenis": "Payung Golf Jumbo",
      "Kualitas": "Premium & Bergaransi",
      "Cetak": "Sablon / Digital",
      "Warna": "Custom"
    },
    description: "Payung Promosi berkualitas dengan cetak logo perusahaan Anda. Tersedia payung golf jumbo yang elegan dan tahan angin. Media branding yang sangat efektif karena digunakan di berbagai tempat saat hujan maupun panas.",
    relatedProducts: ["mug", "tumbler", "shopping-bag"]
  },
  "fin-flag": {
    id: "fin-flag",
    name: "Fin Flag",
    category: "print-indoor",
    categoryLabel: "Display Outdoor",
    image: "img/fin-flag.jpeg",
    seoKeywords: ["jual beach flag", "bendera umbul umbul", "fin flag bali", "teardrop banner", "cetak bendera promosi"],
    specs: [
      "flag Banner / Beach Banner",
      "Tiang Max 3.4Mtr / 5.4Mtr",
      "Water Bag",
      "Tas berbahan Oxford"
    ],
    details: {
      "Tinggi": "3.4M / 5.4M",
      "Material": "Kain Polyester",
      "Termasuk": "Tiang + Water Bag + Tas Oxford",
      "Cetak": "2 Sisi"
    },
    description: "Fin Flag / Beach Banner yang eye-catching untuk event outdoor. Bentuknya yang unik dan dinamis berkibar tertiup angin akan menarik perhatian dari kejauhan. Dilengkapi base water bag pemberat agar tetap kokoh berdiri.",
    relatedProducts: ["giant-banner", "x-banner", "roll-up-banner"]
  },
  "tumbler": {
    id: "tumbler",
    name: "Tumbler",
    category: "print-a3",
    categoryLabel: "Merchandise & Souvenir",
    image: "img/tumbler.jpeg",
    seoKeywords: ["cetak tumbler custom", "tumbler stainless grafir", "uv print tumbler", "souvenir tumbler", "botol minum custom"],
    specs: [
      "Uv Print Full Colour",
      "Souvenir / Hadia"
    ],
    details: {
      "Material": "Stainless / Plastik",
      "Cetak": "UV Print Full Colour",
      "Kapasitas": "Berbagai ukuran",
      "Waktu Pengerjaan": "3-5 Hari Kerja"
    },
    description: "Tumbler Custom dengan cetak UV Print yang awet dan tajam. Tersedia berbagai model mulai dari plastik hingga stainless steel (termos). Pilihan souvenir premium yang bermanfaat dan ramah lingkungan.",
    relatedProducts: ["mug", "payung", "shopping-bag"]
  },
  "shopping-bag": {
    id: "shopping-bag",
    name: "Shopping Bag",
    category: "print-a3",
    categoryLabel: "Merchandise & Packaging",
    image: "img/shoping-back.jpeg",
    seoKeywords: ["cetak goodie bag", "tas spunbond custom", "sablon tas belanja", "tas seminar kit", "goodie bag murah jakarta"],
    specs: [
      "Googie Bag / Spunbond",
      "Ukuran Custom"
    ],
    details: {
      "Material": "Spunbond / Non-Woven",
      "Ukuran": "Custom",
      "Cetak": "Sablon",
      "Penggunaan": "Reusable"
    },
    description: "Shopping Bag / Goodie Bag bahan Spunbond ramah lingkungan. Bisa dicetak sablon logo brand Anda. Kemasan eksklusif untuk produk fashion, seminar kit, atau bingkisan acara. Kuat, bisa dipakai berulang kali, dan murah.",
    relatedProducts: ["mug", "tumbler", "payung"]
  },
  "giant-banner": {
    id: "giant-banner",
    name: "Giant Banner",
    category: "print-outdoor",
    categoryLabel: "Display Outdoor",
    image: "img/giant_banner.jpeg",
    seoKeywords: ["cetak giant banner", "backdrop outdoor besar", "baliho portable", "banner panggung outdoor", "jasa pasang banner besar"],
    specs: [
      "Backwall Banner",
      "Max 3 x 3 Mtr",
      "Tiang Besi",
      "Tas Kanvas"
    ],
    details: {
      "Ukuran": "Max 3 x 3 Meter",
      "Material": "Flexi China / Korea",
      "Rangka": "Tiang Besi",
      "Termasuk": "Tas Kanvas"
    },
    description: "Giant Banner adalah display outdoor ukuran jumbo (hingga 3x3 meter). Rangka besi yang kuat dan stabil membuatnya ideal untuk backdrop panggung outdoor, photobooth event besar, atau papan sponsor. Mudah dibawa dengan tas kanvas.",
    relatedProducts: ["fin-flag", "backdrop-system", "print-outdoor"]
  }
};

// Helper function to get product by ID
function getProductById(id) {
  return PRODUCTS[id] || null;
}

// Helper function to get all products as array
function getAllProducts() {
  return Object.values(PRODUCTS);
}

// Helper function to get related products
function getRelatedProducts(productId, limit = 3) {
  const product = PRODUCTS[productId];
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .slice(0, limit)
    .map(id => PRODUCTS[id])
    .filter(p => p != null);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, getProductById, getAllProducts, getRelatedProducts };
}
