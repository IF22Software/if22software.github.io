(function () {
    'use strict';

    var t = {
        tr: {
            'nav.home':    'Ana Sayfa',
            'nav.apps':    'Uygulamalar',
            'nav.team':    'Ekibimiz',
            'nav.contact': 'İletişim',
            'footer.rights':  '© 2026 IF22 Software. Tüm hakları saklıdır.',
            'footer.privacy': 'Gizlilik Politikaları',

            'index.eyebrow':  'Yapay Zeka Destekli Uygulamalar',
            'index.word1':    'Hayallerinizi',
            'index.word2':    'Koda',
            'index.word3':    'Dönüştürüyoruz',
            'index.sub':      'Yapay zeka destekli, modern ve kullanıcı odaklı mobil deneyimler geliştiren bağımsız bir yazılım stüdyosu.',
            'index.btn.apps':    'Projelerimizi Keşfet',
            'index.btn.contact': 'İletişime Geç →',

            'apps.title': 'Uygulamalar',
            'apps.sub':   'Yapay zeka ile güçlendirilmiş mobil uygulamalarımız.',
            'apps.dreamoracle.desc':  'Google Gemini AI gücüyle rüyalarınızın psikolojik ve mistik analizini saniyeler içinde öğrenin. App Store\'da yayında!',
            'apps.dreamoracle.store': 'App Store\'da İncele',
            'apps.dreamoracle.privacy': 'Gizlilik Politikası',
            'apps.giftie.desc':    'Sevdikleriniz için mükemmel hediyeyi bulmak artık çok kolay. Yapay zeka destekli kişiselleştirilmiş hediye önerileri.',
            'apps.giftie.privacy': 'Gizlilik Politikası',
            'apps.checkmybite.desc': 'Fotoğraf çek, yapay zeka analiz etsin. Ürünlerin içerikleri, alerjenler ve besin değerleri hakkında anında bilgi al. Özel beslenme tercihleri veya hassasiyetleri olanlar için tasarlandı.',
            'apps.checkmybite.privacy': 'Gizlilik Politikası',
            'apps.privacy': 'Gizlilik Politikası',
            'apps.soon': 'Yakında',

            'team.title':       'Ekibimiz',
            'team.sub':         'IF22 Software\'ın arkasındaki insanlar.',
            'team.ibrahim.bio': 'Yazılım Mühendisliği son sınıf öğrencisi. Flutter ve iOS ile mobil uygulama geliştirme, AI entegrasyonları ve App Store yayın süreçleri üzerine deneyim sahibidir.',
            'team.fethiye.bio': 'Yazılım Mühendisliği son sınıf öğrencisi. Flutter ile çok platformlu mobil uygulamalar geliştirir; backend entegrasyonları ve AI destekli ürün geliştirme üzerine odaklanır.',

            'contact.status': 'Mesaj almaya açığız',
            'contact.title':  'Birlikte Çalışalım',
            'contact.sub':    'Projeleriniz, geri bildirimleriniz veya destek talepleriniz için bize ulaşmaktan çekinmeyin.',
            'contact.btn':    'Bize E-Posta Gönder',
        },
        en: {
            'nav.home':    'Home',
            'nav.apps':    'Apps',
            'nav.team':    'Team',
            'nav.contact': 'Contact',
            'footer.rights':  '© 2026 IF22 Software. All rights reserved.',
            'footer.privacy': 'Privacy Policies',

            'index.eyebrow':  'AI-Powered Applications',
            'index.word1':    'Turning',
            'index.word2':    'Your Dreams',
            'index.word3':    'Into Code',
            'index.sub':      'An independent software studio building AI-powered, modern, and user-centered mobile experiences.',
            'index.btn.apps':    'Explore Our Projects',
            'index.btn.contact': 'Get in Touch →',

            'apps.title': 'Apps',
            'apps.sub':   'Our AI-powered mobile applications.',
            'apps.dreamoracle.desc':  'Learn the psychological and mystical analysis of your dreams in seconds, powered by Google Gemini AI. Available on the App Store!',
            'apps.dreamoracle.store': 'View on App Store',
            'apps.dreamoracle.privacy': 'Privacy Policy',
            'apps.giftie.desc':    'Finding the perfect gift for your loved ones has never been easier. Personalized gift suggestions powered by AI.',
            'apps.giftie.privacy': 'Privacy Policy',
            'apps.checkmybite.desc': 'Take a photo, let AI analyze it. Get instant information about product ingredients, allergens, and nutritional values. Designed for people with special dietary preferences or sensitivities.',
            'apps.checkmybite.privacy': 'Privacy Policy',
            'apps.privacy': 'Privacy Policy',
            'apps.soon': 'Coming Soon',

            'team.title':       'Our Team',
            'team.sub':         'The people behind IF22 Software.',
            'team.ibrahim.bio': 'Senior-year Software Engineering student. Experienced in Flutter and iOS mobile app development, AI integrations, and App Store publishing processes.',
            'team.fethiye.bio': 'Senior-year Software Engineering student. Focuses on cross-platform mobile app development with Flutter, backend integrations, and AI-powered product development.',

            'contact.status': 'Open to messages',
            'contact.title':  "Let's Work Together",
            'contact.sub':    "Don't hesitate to reach out for your projects, feedback, or support requests.",
            'contact.btn':    'Send Us an Email',
        }
    };

    function applyLang(lang) {
        if (!t[lang]) lang = 'tr';
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('if22-lang', lang);

        var dict = t[lang];
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        var btn = document.getElementById('langToggle');
        if (btn) btn.textContent = lang === 'tr' ? 'EN' : 'TR';
    }

    window.if22i18n = { applyLang: applyLang };

    var saved = localStorage.getItem('if22-lang') || 'tr';
    applyLang(saved);

    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'langToggle') {
            var cur = localStorage.getItem('if22-lang') || 'tr';
            applyLang(cur === 'tr' ? 'en' : 'tr');
        }
    });
}());
