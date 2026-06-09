export const projects = [
  {
    id: 'bbca-prediction',
    title: 'BBCA Stock Closing Price Prediction System Using Fuzzy Time Series Method',
    category: 'Web Application',
    description:
      'A web-based prediction system for forecasting BBCA stock closing prices using the Fuzzy Time Series Lee model.',
    problem:
      'Stock closing prices fluctuate and are difficult to predict manually. Manual analysis can be subjective and less efficient.',
    solution:
      'The system processes historical stock data, applies preprocessing, performs Fuzzy Time Series Lee prediction, and evaluates prediction accuracy using MAE, MAPE, and RMSE.',
    role: 'Fullstack Developer',
    tools: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Data upload',
      'Data preprocessing',
      'Fuzzy Time Series calculation',
      'Prediction result',
      'Accuracy evaluation',
      'Prediction chart',
      'Report page'
    ],
    result:
      'The system can produce stock closing price predictions and display objective error evaluation results.',
    learned:
      'I learned how to combine forecasting methods, data processing, database management, and web development into one complete system.',
    cover: '/projects/bbca-prediction/cover.png',
    images: [
      '/projects/bbca-prediction/dashboard.png',
      '/projects/bbca-prediction/data-saham.png',
      '/projects/bbca-prediction/preprocessing.png',
      '/projects/bbca-prediction/prediksi.png',
      '/projects/bbca-prediction/evaluasi.png',
      '/projects/bbca-prediction/laporan.png'
    ]
  },
  {
    id: 'pet-family-admin',
    title:
      'Application for Administration of Veterinary Clinic Medical Services at Pet Family Animal Care Jakarta',
    category: 'Desktop Application',
    description:
      'A desktop application for managing customer data, pet data, veterinarian data, employee data, services, transactions, and reports.',
    problem:
      'Administrative activities can become inefficient when customer, pet, veterinarian, employee, service, and transaction data are managed manually.',
    solution:
      'The application helps organize data and transactions through a structured desktop-based information system.',
    role: 'Desktop App Developer',
    tools: ['Java', 'MySQL', 'NetBeans'],
    features: [
      'Login',
      'Dashboard',
      'Customer data management',
      'Pet data management',
      'Veterinarian data management',
      'Employee data management',
      'Service data management',
      'Transaction management',
      'Report generation'
    ],
    result:
      'The application helps improve administrative data management and reporting.',
    learned:
      'I learned how to design database relationships, create CRUD features, and build desktop application workflows.',
    cover: '/projects/pet-family-admin/cover.png',
    images: [
      '/projects/pet-family-admin/login.png',
      '/projects/pet-family-admin/dashboard.png',
      '/projects/pet-family-admin/data-pelanggan.png',
      '/projects/pet-family-admin/data-hewan.png',
      '/projects/pet-family-admin/transaksi.png',
      '/projects/pet-family-admin/laporan.png'
    ]
  },
  {
    id: 'karang-taruna-web',
    title: 'Website Karang Taruna',
    category: 'Website',
    description:
      'An information website for displaying organization profile, activities, news, gallery, and contact information.',
    problem:
      'Organization information and activity documentation need a digital platform so they can be accessed more easily by the public.',
    solution:
      'The website presents organizational information, activity updates, gallery, and contact details in a structured format.',
    role: 'Web Developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Home page',
      'Organization profile',
      'Activity page',
      'Activity detail',
      'News page',
      'Gallery',
      'Contact page'
    ],
    result:
      'The website helps the organization publish information and activity documentation more effectively.',
    learned:
      'I learned how to structure content, build information pages, and organize website navigation for public users.',
    cover: '/projects/karang-taruna-web/cover.png',
    images: [
      '/projects/karang-taruna-web/home.png',
      '/projects/karang-taruna-web/profil.png',
      '/projects/karang-taruna-web/kegiatan.png',
      '/projects/karang-taruna-web/berita.png',
      '/projects/karang-taruna-web/rapat.png',
      '/projects/karang-taruna-web/kas.png',
      '/projects/karang-taruna-web/forum.png',
      '/projects/karang-taruna-web/kontak-dan-aspirasi.png'
    ]
  }
]
