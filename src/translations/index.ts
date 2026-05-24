const tr = {
  nav: {
    about: 'Hakkımda',
    skills: 'Yetenekler',
    projects: 'Projeler',
    contact: 'İletişim',
  },
  hero: {
    badge: 'Staj & Junior Pozisyonlarına Açık',
    greeting: 'Merhaba, ben',
    role: 'Full-Stack Developer',
    tagline:
      'TypeScript ağırlıklı web ve mobil uygulamalar geliştiriyorum. Sistem mimarisi ve UI/UX tasarımına özel bir ilgi duyuyorum.',
    cta_work: 'Projelerimi Gör',
    cta_cv: 'CV İndir',
    scroll: 'Aşağı Kaydır',
  },
  about: {
    title: 'Hakkımda',
    bio1:
      "Kıbrıs'ta yaşayan bir Full-Stack Developer'ım. TypeScript ağırlıklı web ve mobil uygulama geliştirme konusunda deneyimliyim.",
    bio2:
      "Sistem mimarisi ve UI/UX tasarımına özel ilgi duyuyorum. Doğu Akdeniz Üniversitesi'nde Yazılım Mühendisliği okuyorum ve gerçek dünya projelerinde kendimi sürekli geliştiriyorum.",
    bio3:
      'Staj ve junior developer pozisyonlarına açığım. Takım ortamında çalışmaya ve yeni teknolojiler öğrenmeye hazırım.',
    education: 'Eğitim',
    university: 'Doğu Akdeniz Üniversitesi',
    department: 'Yazılım Mühendisliği',
    location: 'Kıbrıs (KKTC)',
    available: 'Staj & Junior Pozisyonlarına Açık',
    interests: 'İlgi Alanları',
    interest_list: ['Web Geliştirme', 'Mobil Uygulama', 'UI/UX Tasarım', 'Sistem Mimarisi'],
  },
  skills: {
    title: 'Yetenekler',
    subtitle: 'Çalıştığım teknolojiler ve araçlar',
    frontend: 'Frontend',
    mobile: 'Mobile',
    backend: 'Backend & DB',
    tools: 'Araçlar',
  },
  projects: {
    title: 'Projeler',
    subtitle: 'Geliştirdiğim bazı projeler',
    github: "GitHub'da Gör",
    items: [
      {
        name: 'HesAppcim',
        desc: 'Fatura ve finansal yönetim platformu. Gerçek zamanlı veri senkronizasyonu ve kullanıcı dostu arayüz.',
        tech: ['TypeScript', 'Next.js', 'Firebase'],
        github: 'https://github.com/Sonasil/HesAppcim',
      },
      {
        name: 'NedirBeo',
        desc: "KKTC yerel terminoloji sözlüğü mobil uygulaması. Yerel dil ve ifadeleri keşfedin.",
        tech: ['TypeScript', 'React Native', 'Expo', 'Firebase'],
        github: 'https://github.com/Sonasil/NedirBeo',
      },
      {
        name: 'Yaylayemekevi',
        desc: 'Modern tasarım ve akıcı kullanıcı deneyimiyle geliştirilmiş restoran web sitesi.',
        tech: ['TypeScript', 'Vite', 'Tailwind CSS'],
        github: 'https://github.com/Sonasil/Yaylayemekevi',
      },
      {
        name: 'NotTakip',
        desc: 'TypeScript ile geliştirilmiş verimli ve sade not takip uygulaması.',
        tech: ['TypeScript'],
        github: 'https://github.com/Sonasil/NotTakip',
      },
    ],
  },
  contact: {
    title: 'İletişim',
    subtitle: 'Birlikte çalışalım ya da sadece merhaba diyebilirsiniz!',
    info_title: 'İletişim Bilgileri',
    form_title: 'Mesaj Gönder',
    name: 'Ad Soyad',
    email: 'E-posta',
    message: 'Mesaj',
    name_ph: 'Adınız Soyadınız',
    email_ph: 'ornek@email.com',
    message_ph: 'Mesajınızı buraya yazın...',
    send: 'Gönder',
    sending: 'Gönderiliyor...',
    success: 'Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.',
    error: 'Bir hata oluştu. Lütfen tekrar deneyin.',
  },
  footer: {
    copy: 'Tüm hakları saklıdır.',
  },
}

const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    badge: 'Open to Internship & Junior Positions',
    greeting: "Hi, I'm",
    role: 'Full-Stack Developer',
    tagline:
      'I build web and mobile applications with TypeScript. Special interest in system architecture and UI/UX design.',
    cta_work: 'View My Work',
    cta_cv: 'Download CV',
    scroll: 'Scroll Down',
  },
  about: {
    title: 'About Me',
    bio1:
      "I'm a Full-Stack Developer based in Cyprus. I have experience in web and mobile application development with a focus on TypeScript.",
    bio2:
      "I have a special interest in system architecture and UI/UX design. I'm studying Software Engineering at Eastern Mediterranean University and continuously improving through real-world projects.",
    bio3:
      "I'm open to internship and junior developer positions, ready to work in team environments and learn new technologies.",
    education: 'Education',
    university: 'Eastern Mediterranean University',
    department: 'Software Engineering',
    location: 'Cyprus (TRNC)',
    available: 'Open to Internship & Junior Positions',
    interests: 'Interests',
    interest_list: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'System Architecture'],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies and tools I work with',
    frontend: 'Frontend',
    mobile: 'Mobile',
    backend: 'Backend & DB',
    tools: 'Tools',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Some of my recent work',
    github: 'View on GitHub',
    items: [
      {
        name: 'HesAppcim',
        desc: 'Invoice and financial management platform with real-time data synchronization and a user-friendly interface.',
        tech: ['TypeScript', 'Next.js', 'Firebase'],
        github: 'https://github.com/Sonasil/HesAppcim',
      },
      {
        name: 'NedirBeo',
        desc: 'TRNC local terminology dictionary mobile application. Discover local language and expressions.',
        tech: ['TypeScript', 'React Native', 'Expo', 'Firebase'],
        github: 'https://github.com/Sonasil/NedirBeo',
      },
      {
        name: 'Yaylayemekevi',
        desc: 'Restaurant website built with modern design and smooth user experience.',
        tech: ['TypeScript', 'Vite', 'Tailwind CSS'],
        github: 'https://github.com/Sonasil/Yaylayemekevi',
      },
      {
        name: 'NotTakip',
        desc: 'Efficient and clean note-taking application built with TypeScript.',
        tech: ['TypeScript'],
        github: 'https://github.com/Sonasil/NotTakip',
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: "Let's work together or just say hello!",
    info_title: 'Contact Info',
    form_title: 'Send a Message',
    name: 'Full Name',
    email: 'Email',
    message: 'Message',
    name_ph: 'John Doe',
    email_ph: 'example@email.com',
    message_ph: 'Write your message here...',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Your message was sent successfully! I will get back to you soon.',
    error: 'An error occurred. Please try again.',
  },
  footer: {
    copy: 'All rights reserved.',
  },
}

export const translations = { tr, en }
export type Lang = 'tr' | 'en'
export type Translations = typeof tr
