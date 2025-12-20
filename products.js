// Data produk dari Excel - Single source of truth
const PRODUCTS = {
  "id-card-pvc": {
    id: "id-card-pvc",
    name: "ID Card PVC",
    category: "print-a3",
    categoryLabel: "Cetak Digital & Offset",
    image: "img/idcard.jpeg",
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
    description: "Cetak ID Card dengan bahan PVC berkualitas premium yang tahan lama, anti air, dan tidak mudah patah. Hasil cetak tajam dengan resolusi tinggi, cocok untuk kartu identitas karyawan, kartu member, kartu pelajar, dan kebutuhan event.",
    relatedProducts: ["kartu-nama", "poster-a3", "stiker-a3"]
  },
  "kartu-nama": {
    id: "kartu-nama",
    name: "Kartu Nama",
    category: "print-a3",
    categoryLabel: "Cetak Digital & Offset",
    image: "img/kartu_nama.jpeg",
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
    description: "Kartu nama berkualitas tinggi dengan berbagai pilihan material premium. Tersedia finishing laminasi doff atau glossy untuk kesan profesional dan elegan.",
    relatedProducts: ["id-card-pvc", "poster-a3", "stiker-a3"]
  },
  "poster-a3": {
    id: "poster-a3",
    name: "Poster A3+",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/posterA3.jpeg",
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
    description: "Cetak poster dengan kualitas warna tajam dan cerah. Cocok untuk promosi event, dekorasi ruangan, atau keperluan presentasi.",
    relatedProducts: ["stiker-a3", "kartu-nama", "brosur-flyer"]
  },
  "stiker-a3": {
    id: "stiker-a3",
    name: "Stiker A3+",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/sticker.jpeg",
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
    description: "Stiker berkualitas tinggi dengan berbagai pilihan material. Tersedia dalam berbagai finishing termasuk hologram untuk keamanan produk.",
    relatedProducts: ["poster-a3", "kartu-nama", "id-card-pvc"]
  },
  "brosur-flyer": {
    id: "brosur-flyer",
    name: "Brosur / Flyer",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset",
    image: "img/brosur_flyer.png",
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
    description: "Brosur dan flyer berkualitas tinggi untuk kebutuhan promosi bisnis. Tersedia berbagai ukuran dan ketebalan kertas.",
    relatedProducts: ["poster-a3", "kartu-nama", "kop-surat"]
  },
  "jilid-hardcover": {
    id: "jilid-hardcover",
    name: "Jilid Buku Hard Cover",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset & Jilid",
    image: "img/hardcover.jpeg",
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
    description: "Jilid buku hard cover dengan kualitas premium. Cocok untuk skripsi, makalah, company profile, atau buku kenangan.",
    relatedProducts: ["jilid-softcover", "kop-surat", "nota-ncr"]
  },
  "jilid-softcover": {
    id: "jilid-softcover",
    name: "Jilid Buku Soft Cover",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset & Jilid",
    image: "img/Book_mockup.jpeg",
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
    description: "Jilid buku soft cover ekonomis namun tetap berkualitas. Pilihan tepat untuk buku, proposal, atau katalog.",
    relatedProducts: ["jilid-hardcover", "kop-surat", "brosur-flyer"]
  },
  "kalender-dinding": {
    id: "kalender-dinding",
    name: "Kalender Dinding",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/kalenderDinding.jpeg",
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
    description: "Kalender dinding custom dengan desain sesuai keinginan. Cocok untuk promosi brand atau hadiah perusahaan.",
    relatedProducts: ["kalender-meja", "poster-a3", "brosur-flyer"]
  },
  "kalender-meja": {
    id: "kalender-meja",
    name: "Kalender Meja",
    category: "print-a3",
    categoryLabel: "Cetak Digital A3+",
    image: "img/kalender.jpeg",
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
    description: "Kalender meja premium dengan dudukan kokoh. Desain custom untuk branding perusahaan atau hadiah promosi.",
    relatedProducts: ["kalender-dinding", "poster-a3", "kartu-nama"]
  },
  "kop-surat": {
    id: "kop-surat",
    name: "Kop Surat",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset",
    image: "img/kop_surat.jpeg",
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
    description: "Kop surat profesional untuk kebutuhan korespondensi bisnis. Tampil lebih kredibel dengan kop surat berkualitas.",
    relatedProducts: ["nota-ncr", "brosur-flyer", "kartu-nama"]
  },
  "nota-ncr": {
    id: "nota-ncr",
    name: "Nota NCR",
    category: "cetak-offset",
    categoryLabel: "Cetak Offset",
    image: "img/nota_ncr.jpeg",
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
    description: "Nota NCR carbonless untuk kebutuhan transaksi bisnis. Tersedia 2-4 rangkap dengan atau tanpa nomor urut.",
    relatedProducts: ["kop-surat", "brosur-flyer", "kartu-nama"]
  },
  "x-banner": {
    id: "x-banner",
    name: "X-Banner",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/xbanner.jpeg",
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
    description: "X-Banner praktis dan ekonomis untuk promosi. Mudah dipasang dan dibawa kemana-mana.",
    relatedProducts: ["roll-up-banner", "tripod-banner", "print-indoor"]
  },
  "roll-up-banner": {
    id: "roll-up-banner",
    name: "Roll Up Banner",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/roll_up_banner.jpeg",
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
    description: "Roll Up Banner premium dengan standing aluminium. Praktis, elegan, dan tahan lama untuk berbagai event.",
    relatedProducts: ["x-banner", "tripod-banner", "backdrop-system"]
  },
  "tripod-banner": {
    id: "tripod-banner",
    name: "Tripod Banner",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/tripod-banner.jpeg",
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
    description: "Tripod Banner dengan ketinggian adjustable. Cocok untuk pameran, seminar, atau display produk.",
    relatedProducts: ["x-banner", "roll-up-banner", "backdrop-system"]
  },
  "print-kanvas": {
    id: "print-kanvas",
    name: "Print Kanvas",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/print-canvas.jpeg",
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
    description: "Print foto atau artwork di atas kanvas berkualitas tinggi. Hasil seperti lukisan untuk dekorasi rumah atau galeri.",
    relatedProducts: ["duratrans", "print-indoor", "poster-a3"]
  },
  "duratrans": {
    id: "duratrans",
    name: "Duratrans",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/Duratrants.jpeg",
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
    description: "Duratrans untuk kebutuhan lightbox dan neonbox. Warna cerah dan detail tajam saat diterangi dari belakang.",
    relatedProducts: ["print-kanvas", "print-indoor", "print-outdoor"]
  },
  "stiker-oneway": {
    id: "stiker-oneway",
    name: "Stiker One Way",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/st_oneway.jpeg",
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
    description: "Stiker one way vision untuk kaca ruko atau mobil. Tampilan promosi dari luar, tetap bisa melihat keluar dari dalam.",
    relatedProducts: ["stiker-a3", "print-indoor", "print-outdoor"]
  },
  "print-outdoor": {
    id: "print-outdoor",
    name: "Print Outdoor",
    category: "print-outdoor",
    categoryLabel: "Print Outdoor",
    image: "img/print-outdoor.jpg",
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
    description: "Print outdoor tahan cuaca untuk spanduk, billboard, atau signage luar ruangan.",
    relatedProducts: ["print-indoor", "giant-banner", "roll-up-banner"]
  },
  "plotter-a0": {
    id: "plotter-a0",
    name: "Plotter A0 Warna",
    category: "print-a3",
    categoryLabel: "Cetak Plotter",
    image: "img/Plotter-A0-Warna.jpeg",
    specs: [
      "Poster HVS A2 / A1 / A0+"
    ],
    details: {
      "Ukuran": "A2 / A1 / A0+",
      "Material": "HVS",
      "Cetak": "Full Colour",
      "Waktu Pengerjaan": "Same Day"
    },
    description: "Cetak plotter ukuran besar untuk gambar teknik, peta, atau poster. Hasil tajam dan akurat.",
    relatedProducts: ["poster-a3", "print-indoor", "brosur-flyer"]
  },
  "print-indoor": {
    id: "print-indoor",
    name: "Print Indoor",
    category: "print-indoor",
    categoryLabel: "Print Indoor",
    image: "img/print-indoor.jpg",
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
    description: "Print indoor berkualitas tinggi untuk berbagai kebutuhan promosi dalam ruangan.",
    relatedProducts: ["print-outdoor", "x-banner", "roll-up-banner"]
  },
  "fotocopy": {
    id: "fotocopy",
    name: "Fotocopy",
    category: "cetak-offset",
    categoryLabel: "Copy Center",
    image: "img/fotocopy.png",
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
    description: "Layanan fotocopy cepat dan murah untuk kebutuhan dokumen sehari-hari.",
    relatedProducts: ["kop-surat", "jilid-softcover", "jilid-hardcover"]
  },
  "event-desk-standard": {
    id: "event-desk-standard",
    name: "Event Desk Standard",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/event-desk-standard.jpeg",
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
    description: "Event desk portable untuk pameran dan promosi. Ringan, mudah dibawa, dan cepat dipasang.",
    relatedProducts: ["event-desk-premium", "pop-up-table", "easy-counter"]
  },
  "event-desk-premium": {
    id: "event-desk-premium",
    name: "Event Desk Premium",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/event-desk-premium.jpeg",
    specs: [
      "Plastik PVC Import",
      "Anti Air",
      "Max lebih 48kilo",
      "Tas Kanvas"
    ],
    details: {
      "Material": "Plastik PVC Import Premium",
      "Kapasitas": "Lebih dari 48kg",
      "Fitur": "Anti Air",
      "Termasuk": "Tas Kanvas"
    },
    description: "Event desk premium dengan kapasitas lebih besar. Cocok untuk display produk yang lebih berat.",
    relatedProducts: ["event-desk-standard", "pop-up-table", "easy-counter"]
  },
  "pop-up-table": {
    id: "pop-up-table",
    name: "Pop Up Table",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/pop_up_table.jpeg",
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
    description: "Pop up table elegan untuk booth pameran. Tampil profesional dengan meja promosi berkualitas.",
    relatedProducts: ["event-desk-standard", "easy-counter", "backdrop-system"]
  },
  "easy-counter": {
    id: "easy-counter",
    name: "Easy Counter",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/easy_counter.jpeg",
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
    description: "Easy counter praktis untuk reception atau booth pameran. Dilengkapi rak penyimpanan di bagian belakang.",
    relatedProducts: ["pop-up-table", "event-desk-standard", "backdrop-system"]
  },
  "backdrop-system": {
    id: "backdrop-system",
    name: "Backdrop System",
    category: "print-indoor",
    categoryLabel: "Display & Booth",
    image: "img/backdrop-system.jpeg",
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
    description: "Backdrop system portable untuk pameran dan event. Tampil menawan dengan backwall yang mudah dipasang.",
    relatedProducts: ["pop-up-table", "easy-counter", "roll-up-banner"]
  },
  "mug": {
    id: "mug",
    name: "Mug",
    category: "print-a3",
    categoryLabel: "Merchandise & Souvenir",
    image: "img/mug.jpeg",
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
    description: "Mug custom dengan cetak full colour. Cocok untuk souvenir, hadiah, atau merchandise perusahaan.",
    relatedProducts: ["tumbler", "payung", "shopping-bag"]
  },
  "payung": {
    id: "payung",
    name: "Payung",
    category: "print-a3",
    categoryLabel: "Merchandise & Souvenir",
    image: "img/payung.jpeg",
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
    description: "Payung custom berkualitas premium untuk promosi atau merchandise. Tahan angin dan hujan lebat.",
    relatedProducts: ["mug", "tumbler", "shopping-bag"]
  },
  "fin-flag": {
    id: "fin-flag",
    name: "Fin Flag",
    category: "print-indoor",
    categoryLabel: "Display Outdoor",
    image: "img/fin-flag.jpeg",
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
    description: "Fin flag / beach flag untuk promosi outdoor. Eye-catching dan mudah terlihat dari kejauhan.",
    relatedProducts: ["giant-banner", "x-banner", "roll-up-banner"]
  },
  "tumbler": {
    id: "tumbler",
    name: "Tumbler",
    category: "print-a3",
    categoryLabel: "Merchandise & Souvenir",
    image: "img/tumbler.jpeg",
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
    description: "Tumbler custom dengan cetak UV berkualitas tinggi. Pilihan tepat untuk souvenir atau merchandise premium.",
    relatedProducts: ["mug", "payung", "shopping-bag"]
  },
  "shopping-bag": {
    id: "shopping-bag",
    name: "Shopping Bag",
    category: "print-a3",
    categoryLabel: "Merchandise & Packaging",
    image: "img/shoping-back.jpeg",
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
    description: "Shopping bag ramah lingkungan dengan sablon custom. Promosi brand sekaligus peduli lingkungan.",
    relatedProducts: ["mug", "tumbler", "payung"]
  },
  "giant-banner": {
    id: "giant-banner",
    name: "Giant Banner",
    category: "print-outdoor",
    categoryLabel: "Display Outdoor",
    image: "img/giant_banner.jpeg",
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
    description: "Giant banner untuk event outdoor skala besar. Tampil maksimal dengan ukuran jumbo.",
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
