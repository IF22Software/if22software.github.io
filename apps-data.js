/* App catalogue — drives the floating logos (index), the grid (apps) and the detail pages (app.html?app=…).
   Screenshots live in screens/<id>/1.jpg … <screens>.jpg (pulled from the App Store listing). */
window.IF22_APPS = [
    {
        id: 'hibi',
        name: 'Hibi 日々',
        logo: 'logos/hibi.png',
        color: '#F3E3C7',
        status: 'soon',
        platforms: ['iPhone', 'iPad', 'Android'],
        tagline: {
            tr: 'Sayfa çevirme hissi veren dijital ajanda.',
            en: 'A digital planner that feels like turning real pages.'
        },
        desc: {
            tr: 'Günlük planlarını, hedeflerini, notlarını ve anılarını kalemle yazıp çizebildiğin, kapağından kâğıdına kadar kişiselleştirebildiğin bir ajandada topla.',
            en: 'Bring your daily plans, goals, notes and memories together in a planner you can write and draw in with a pen, and personalise from cover to paper.'
        },
        features: {
            tr: ['Gerçek sayfa çevirme animasyonu', 'Kalemle yaz, çiz, çıkartma yapıştır', 'Kapak ve kâğıt türünü sen seç', 'Yapılacaklar, alışkanlık ve su takibi', 'Fotoğraflarla anı sayfaları', 'Hibi Plus ile cihazlar arası eşitleme'],
            en: ['Real page-turn animation', 'Write, draw and add stickers with a pen', 'Pick your own cover and paper', 'To-dos, habits and water tracking', 'Memory pages with photos', 'Sync across devices with Hibi Plus']
        },
        links: {},
        screens: 0,
        legal: [
            { key: 'privacy', href: 'hibi_privacy_policy.html' },
            { key: 'terms', href: 'hibi_terms.html' },
            { key: 'deletion', href: 'hibi_data_deletion.html' }
        ]
    },
    {
        id: 'pawfecttime',
        name: 'Pawfect Time',
        logo: 'logos/pawfecttime.png',
        color: '#F7BBAE',
        status: 'soon',
        platforms: ['iPhone', 'Apple Watch'],
        tagline: {
            tr: 'Evcil dostlarının bakımı, tek yerde.',
            en: 'All your pets\' care in one place.'
        },
        desc: {
            tr: 'Mama, kum ve bakım görevleri, ilaç dozları, aşılar, kilo takibi ve günlük; zamanında hatırlatmalar. Verilerin yalnızca cihazında ve kendi iCloud\'unda.',
            en: 'Feeding, litter and grooming tasks, medication doses, vaccinations, weight tracking and a diary, with timely reminders. Your data stays on your device and in your own iCloud.'
        },
        features: {
            tr: ['Mama, kum ve bakım görevleri', 'İlaç dozları ve aşı takvimi', 'Kilo takibi ve günlük', 'Zamanında hatırlatmalar', 'Ailenle paylaş', 'Widget, Apple Watch ve Siri'],
            en: ['Feeding, litter and grooming tasks', 'Medication doses and vaccinations', 'Weight tracking and a diary', 'Timely reminders', 'Share with your family', 'Widgets, Apple Watch and Siri']
        },
        links: {},
        screens: 0,
        legal: [
            { key: 'privacy', href: 'pawfecttime_privacy_policy.html' },
            { key: 'terms', href: 'pawfecttime_terms.html' },
            { key: 'deletion', href: 'pawfecttime_data_deletion.html', label: 'apps.dataDeletion' }
        ]
    },
    {
        id: 'netsayacim',
        name: 'Net Sayacım',
        logo: 'logos/netsayacim.png',
        color: '#FFD23F',
        status: 'live',
        platforms: ['iPhone', 'Android'],
        tagline: {
            tr: 'Netlerini tek bakışta gör.',
            en: 'See your exam scores at a glance.'
        },
        desc: {
            tr: 'TYT, AYT, KPSS ve ALES\'e hazırlananlar için net takip ve deneme analiz uygulaması. Her denemeden sonra netlerini gir, gelişimini grafiklerle izle.',
            en: 'A score tracker and practice-exam analyser for students preparing for TYT, AYT, KPSS and ALES. Log your results after every exam and watch your progress on charts.'
        },
        features: {
            tr: ['Ders ders deneme takibi', 'Otomatik net ve TYT/AYT tahmini', 'Konu bazlı zayıf nokta analizi', 'Gelişim grafikleri', 'Çözemediğin soruların fotoğrafını klasörle', 'Rozetler ve hatırlatıcılar'],
            en: ['Subject-by-subject exam tracking', 'Automatic score and TYT/AYT estimate', 'Find weak topics', 'Progress charts', 'Save photos of questions you missed', 'Badges and reminders']
        },
        links: {
            appstore: 'https://apps.apple.com/tr/app/net-sayac%C4%B1m-s%C4%B1nav-takibi/id6783307079',
            play: 'https://play.google.com/store/apps/details?id=com.if22software.net_sayacim'
        },
        screens: 5,
        legal: [
            { key: 'privacy', href: 'netsayacim_privacy_policy.html' },
            { key: 'terms', href: 'netsayacim_terms.html' },
            { key: 'deletion', href: 'netsayacim_data_deletion.html' }
        ]
    },
    {
        id: 'pomoquest',
        name: 'PomoQuest',
        logo: 'logos/pomoquest.png',
        color: '#FFB3CF',
        status: 'live',
        platforms: ['iPhone'],
        tagline: {
            tr: 'Odaklanmak bir maceraya dönüşüyor.',
            en: 'Focusing turns into an adventure.'
        },
        desc: {
            tr: 'Pomodoro tekniğini oyunla birleştiren odaklanma uygulaması. Her seans XP ve coin kazandırır; seviye atla, pixel art avatarını giydir, günlük görevleri tamamla.',
            en: 'A focus app that turns the Pomodoro technique into a game. Every session earns XP and coins: level up, dress your pixel-art avatar and finish daily quests.'
        },
        features: {
            tr: ['25, 45 ve 60 dakikalık seanslar', 'XP ve seviye sistemi', 'Pixel art avatar ve kıyafetler', 'Günlük görevler, haftalık meydan okuma', 'Yağmur, kafe ve lo-fi sesler', 'Canlı Etkinlik ve widget'],
            en: ['25, 45 and 60 minute sessions', 'XP and levels', 'Pixel-art avatar and outfits', 'Daily quests and weekly challenges', 'Rain, café and lo-fi sounds', 'Live Activity and widget']
        },
        links: {
            appstore: 'https://apps.apple.com/tr/app/pomoquest/id6764025307'
        },
        screens: 5,
        legal: [
            { key: 'privacy', href: 'pomoquest_privacy_policy.html' }
        ]
    },
    {
        id: 'spendwise',
        name: 'SpendWise',
        logo: 'logos/spendwise.png',
        color: '#9BE59B',
        status: 'live',
        platforms: ['iPhone'],
        tagline: {
            tr: 'Faturalar ve abonelikler, tek yerde.',
            en: 'Bills and subscriptions, in one place.'
        },
        desc: {
            tr: 'Elektrik, su, internet gibi faturalarını ve tüm dijital aboneliklerini takip et. Son ödeme tarihi yaklaşınca bildirim al, harcamalarını grafiklerle gör. Tamamen Türkçe, TL bazlı.',
            en: 'Track your utility bills and every digital subscription. Get notified before due dates and see your spending on charts. Built for Turkey, in lira.'
        },
        features: {
            tr: ['Fatura ve abonelikleri kategorile', '1–14 gün önceden hatırlatma', 'Aylık ve yıllık harcama grafikleri', 'Ödeme geçmişi', 'iCloud ile senkronizasyon', 'Ana ekran widget\'ı'],
            en: ['Organise bills and subscriptions', 'Reminders 1–14 days ahead', 'Monthly and yearly spending charts', 'Payment history', 'iCloud sync', 'Home screen widget']
        },
        links: {
            appstore: 'https://apps.apple.com/tr/app/spendwise-harcama-takibi/id6767567712'
        },
        screens: 5,
        legal: [
            { key: 'privacy', href: 'spendwise_privacy_policy.html' },
            { key: 'terms', href: 'spendwise_terms.html' }
        ]
    },
    {
        id: 'dreamoracle',
        name: 'Dream Oracle',
        logo: 'logos/dreamoracle.png',
        color: '#C3B5FF',
        status: 'live',
        platforms: ['iPhone'],
        tagline: {
            tr: 'Rüyalarının şifresini çöz.',
            en: 'Decode your dreams.'
        },
        desc: {
            tr: 'Rüyanı anlat, yapay zeka sana özel bir yorum yazsın. Psikolojik, İslami, Şamanik ya da bilimsel; dört farklı yorumlama stili.',
            en: 'Describe your dream and AI writes an interpretation just for you, in one of four styles: psychological, Islamic, shamanic or scientific.'
        },
        features: {
            tr: ['Yapay zeka destekli rüya yorumu', '4 farklı yorumlama stili', 'Rüya günlüğü', 'Anonim ve gizlilik odaklı'],
            en: ['AI-powered dream interpretation', 'Four interpretation styles', 'Dream journal', 'Anonymous and privacy-first']
        },
        links: {
            appstore: 'https://apps.apple.com/tr/app/dream-oracle-r%C3%BCya-kahini/id6759988615'
        },
        screens: 5,
        legal: [
            { key: 'privacy', href: 'https://docs.google.com/document/u/2/d/e/2PACX-1vSI9sQMsHO62MEwDjXHwFXK-LKktwKJ1ZGJ9RWYuU6cbdVOMV4fRl_Cix9upjBhRHihJ8L7-PS8oJds/pub' }
        ]
    },
    {
        id: 'checkmybite',
        name: 'CheckMyBite',
        initials: 'CB',
        color: '#8FD3FF',
        status: 'soon',
        platforms: ['iPhone'],
        tagline: {
            tr: 'Fotoğrafını çek, içinde ne var öğren.',
            en: 'Snap a photo, see what\'s inside.'
        },
        desc: {
            tr: 'Ürünlerin içerikleri, alerjenler ve besin değerleri hakkında anında bilgi al. Özel beslenme tercihleri veya hassasiyetleri olanlar için tasarlandı.',
            en: 'Get instant information about ingredients, allergens and nutritional values. Designed for people with special dietary preferences or sensitivities.'
        },
        features: { tr: [], en: [] },
        links: {},
        screens: 0,
        legal: [
            { key: 'privacy', href: 'checkmybite_privacy_policy.html' },
            { key: 'terms', href: 'checkmybite_terms.html' }
        ]
    },
    {
        id: 'giftie',
        name: 'Giftie',
        initials: 'GI',
        color: '#FF9F5A',
        status: 'soon',
        platforms: ['iPhone'],
        tagline: {
            tr: 'Doğru hediyeyi bulmak artık kolay.',
            en: 'Finding the right gift, made easy.'
        },
        desc: {
            tr: 'Sevdiklerin için kişiselleştirilmiş hediye önerileri.',
            en: 'Personalised gift ideas for the people you love.'
        },
        features: { tr: [], en: [] },
        links: {},
        screens: 0,
        legal: [
            { key: 'privacy', href: 'giftie_privacy_policy.html' }
        ]
    }
];
