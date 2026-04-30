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
            'apps.terms':   'Şartlar ve Koşullar',
            'apps.soon': 'Yakında',
            'apps.pomoquest.desc':    'Pomodoro tekniğini oyunlaştırılmış bir deneyimle birleştiren odaklanma uygulaması. XP kazan, seviye atla, pixel art avatarını özelleştir.',
            'apps.pomoquest.store':   'App Store\'da İncele',
            'apps.pomoquest.privacy': 'Gizlilik Politikası',

            'pp.pomoquest.title': 'Gizlilik Politikası',
            'pp.pomoquest.meta':  'PomoQuest — IF22 Software — Geçerlilik tarihi: 30 Nisan 2026',
            'pp.pomoquest.intro': 'Bu gizlilik politikası, <strong>IF22 Software</strong> (bundan böyle "Hizmet Sağlayıcı" olarak anılacaktır) tarafından Freemium hizmet olarak oluşturulan <strong>PomoQuest</strong> uygulaması (bundan böyle "Uygulama" olarak anılacaktır) için geçerlidir. Bu hizmet "OLDUĞU GİBİ" kullanım amaçlıdır.',

            'pp.pomoquest.s1.h':  'Bilgi Toplama ve Kullanımı',
            'pp.pomoquest.s1.p1': 'Uygulama indirildiğinde ve kullanıldığında bilgi toplanır. Bu bilgiler şunları içerebilir:',
            'pp.pomoquest.s1.l1': 'Mobil cihazınızın İnternet Protokol adresi (örn. IP adresi)',
            'pp.pomoquest.s1.l2': 'Uygulamada ziyaret ettiğiniz sayfalar, ziyaret tarihi ve saati, bu sayfalarda geçirilen süre',
            'pp.pomoquest.s1.l3': 'Uygulamada geçirilen toplam süre',
            'pp.pomoquest.s1.l4': 'Mobil cihazınızda kullandığınız işletim sistemi',
            'pp.pomoquest.s1.p2': 'Uygulama, mobil cihazınızın kesin konumuna ilişkin bilgi toplamaz.',
            'pp.pomoquest.s1.p3': 'Uygulama, verilerinizi işlemek veya özellik sunmak amacıyla Yapay Zeka (AI) teknolojileri kullanmaz.',
            'pp.pomoquest.s1.p4': 'Hizmet Sağlayıcı, zaman zaman önemli bilgiler, gerekli bildirimler ve pazarlama teklifleri göndermek amacıyla sizinle iletişime geçebilir.',
            'pp.pomoquest.s1.p5': 'Daha iyi bir deneyim sunmak amacıyla Uygulama, DeviceId ve userId dahil ancak bunlarla sınırlı olmamak üzere belirli kişisel bilgiler talep edebilir. Bu bilgiler Hizmet Sağlayıcı tarafından saklanır ve bu politikada belirtildiği şekilde kullanılır.',

            'pp.pomoquest.s2.h':  'Üçüncü Taraf Erişimi',
            'pp.pomoquest.s2.p1': 'Yalnızca toplu ve anonimleştirilmiş veriler, Hizmet Sağlayıcının Uygulamayı geliştirmesine yardımcı olmak amacıyla dış hizmetlere periyodik olarak iletilir.',
            'pp.pomoquest.s2.p2': 'Hizmet Sağlayıcı, kullanıcı tarafından sağlanan ve otomatik olarak toplanan bilgileri şu durumlarda açıklayabilir:',
            'pp.pomoquest.s2.l1': 'Mahkeme celbi gibi yasal zorunluluklar kapsamında;',
            'pp.pomoquest.s2.l2': 'Haklarını korumak, güvenliğinizi veya başkalarının güvenliğini sağlamak, dolandırıcılığı araştırmak ya da devlet talebine yanıt vermek için iyi niyetle gerekli görüldüğünde;',
            'pp.pomoquest.s2.l3': 'Kendi adlarına çalışan, açıklanan bilgileri bağımsız olarak kullanmayan ve bu politikaya uymayı kabul eden güvenilir hizmet sağlayıcılarla.',

            'pp.pomoquest.s3.h':  'Vazgeçme Hakları',
            'pp.pomoquest.s3.p1': 'Uygulamayı kaldırarak tüm bilgi toplamayı durdurabilirsiniz. Mobil cihazınızın standart kaldırma işlemlerini veya uygulama marketi seçeneklerini kullanabilirsiniz.',

            'pp.pomoquest.s4.h':  'Veri Saklama Politikası',
            'pp.pomoquest.s4.p1': 'Hizmet Sağlayıcı, kullanıcı tarafından sağlanan verileri Uygulama kullanımı süresince ve makul bir süre daha saklar. Verilerinizin silinmesini talep etmek için <a href="mailto:if22dev@gmail.com">if22dev@gmail.com</a> adresine başvurabilirsiniz.',

            'pp.pomoquest.s5.h':  'Çocuklar',
            'pp.pomoquest.s5.p1': 'Hizmet Sağlayıcı, 13 yaş altı çocuklardan bilerek veri toplamaz veya onlara yönelik pazarlama yapmaz.',
            'pp.pomoquest.s5.p2': 'Hizmet Sağlayıcı, çocuklardan bilerek kişisel bilgi toplamaz. Ebeveynlerin ve yasal velilerin çocuklarının internet kullanımını denetlemesi ve onları kişisel bilgi paylaşmamaları konusunda uyarması önerilir. 13 yaş altı bir çocuğun kişisel bilgi sağladığına inanıyorsanız lütfen <a href="mailto:if22dev@gmail.com">if22dev@gmail.com</a> adresiyle iletişime geçin. Ayrıca ülkenizde kişisel verilerin işlenmesine onay verebilmek için en az 16 yaşında olmanız gerekir.',

            'pp.pomoquest.s6.h':  'Güvenlik',
            'pp.pomoquest.s6.p1': 'Hizmet Sağlayıcı, bilgilerinizin gizliliğini korumaya önem verir ve işlediği verileri korumak için fiziksel, elektronik ve prosedürel önlemler alır.',

            'pp.pomoquest.s7.h':  'Değişiklikler',
            'pp.pomoquest.s7.p1': 'Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacak; sürekli kullanım, değişikliklerin kabul edildiği anlamına gelir.',
            'pp.pomoquest.s7.p2': 'Bu gizlilik politikası <strong>30 Nisan 2026</strong> tarihinden itibaren geçerlidir.',

            'pp.pomoquest.s8.h':  'Onayınız',
            'pp.pomoquest.s8.p1': 'Uygulamayı kullanarak bu Gizlilik Politikası\'nda belirtilen bilgi işleme faaliyetlerini kabul etmiş olursunuz.',

            'pp.pomoquest.s9.h':  'Bize Ulaşın',
            'pp.pomoquest.s9.p1': 'Gizlilikle ilgili sorularınız için Hizmet Sağlayıcıya <a href="mailto:if22dev@gmail.com">if22dev@gmail.com</a> adresinden ulaşabilirsiniz.',
            'pp.pomoquest.footnote': 'Bu gizlilik politikası sayfası <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a> tarafından oluşturulmuştur.',
            'footer.copy': '© 2026 IF22 Software. Tüm hakları saklıdır.',
            'footer.home': 'Ana Sayfa',

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
            'apps.terms':   'Terms & Conditions',
            'apps.soon': 'Coming Soon',
            'apps.pomoquest.desc':    'A gamified focus app combining the Pomodoro technique with RPG elements. Earn XP, level up, and customize your pixel art avatar.',
            'apps.pomoquest.store':   'View on App Store',
            'apps.pomoquest.privacy': 'Privacy Policy',

            'pp.pomoquest.title': 'Privacy Policy',
            'pp.pomoquest.meta':  'PomoQuest — IF22 Software — Effective 2026-04-30',
            'pp.pomoquest.intro': 'This privacy policy applies to the <strong>PomoQuest</strong> app (hereby referred to as "Application") for mobile devices that was created by <strong>IF22 Software</strong> (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".',

            'pp.pomoquest.s1.h':  'Information Collection and Use',
            'pp.pomoquest.s1.p1': 'The Application collects information when you download and use it. This information may include:',
            'pp.pomoquest.s1.l1': 'Your device\'s Internet Protocol address (e.g. IP address)',
            'pp.pomoquest.s1.l2': 'The pages of the Application that you visit, the time and date of your visit, the time spent on those pages',
            'pp.pomoquest.s1.l3': 'The time spent on the Application',
            'pp.pomoquest.s1.l4': 'The operating system you use on your mobile device',
            'pp.pomoquest.s1.p2': 'The Application does not gather precise information about the location of your mobile device.',
            'pp.pomoquest.s1.p3': 'The Application does not use Artificial Intelligence (AI) technologies to process your data or provide features.',
            'pp.pomoquest.s1.p4': 'The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.',
            'pp.pomoquest.s1.p5': 'For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to DeviceId, userId. The information that the Service Provider requests will be retained by them and used as described in this privacy policy.',

            'pp.pomoquest.s2.h':  'Third Party Access',
            'pp.pomoquest.s2.p1': 'Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service.',
            'pp.pomoquest.s2.p2': 'The Service Provider may disclose User Provided and Automatically Collected Information:',
            'pp.pomoquest.s2.l1': 'as required by law, such as to comply with a subpoena, or similar legal process;',
            'pp.pomoquest.s2.l2': 'when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;',
            'pp.pomoquest.s2.l3': 'with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.',

            'pp.pomoquest.s3.h':  'Opt-Out Rights',
            'pp.pomoquest.s3.p1': 'You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.',

            'pp.pomoquest.s4.h':  'Data Retention Policy',
            'pp.pomoquest.s4.p1': 'The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you\'d like them to delete User Provided Data, please contact them at <a href="mailto:if22dev@gmail.com">if22dev@gmail.com</a> and they will respond in a reasonable time.',

            'pp.pomoquest.s5.h':  'Children',
            'pp.pomoquest.s5.p1': 'The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.',
            'pp.pomoquest.s5.p2': 'The Service Provider does not knowingly collect personally identifiable information from children. Parents and guardians are encouraged to monitor their children\'s Internet usage. If you believe a child has provided personal information, please contact the Service Provider at <a href="mailto:if22dev@gmail.com">if22dev@gmail.com</a>. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country.',

            'pp.pomoquest.s6.h':  'Security',
            'pp.pomoquest.s6.p1': 'The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.',

            'pp.pomoquest.s7.h':  'Changes',
            'pp.pomoquest.s7.p1': 'This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes by updating this page. Continued use is deemed approval of all changes.',
            'pp.pomoquest.s7.p2': 'This privacy policy is effective as of <strong>2026-04-30</strong>.',

            'pp.pomoquest.s8.h':  'Your Consent',
            'pp.pomoquest.s8.p1': 'By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.',

            'pp.pomoquest.s9.h':  'Contact Us',
            'pp.pomoquest.s9.p1': 'If you have any questions regarding privacy while using the Application, please contact the Service Provider via email at <a href="mailto:if22dev@gmail.com">if22dev@gmail.com</a>.',
            'pp.pomoquest.footnote': 'This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a>.',
            'footer.copy': '© 2026 IF22 Software. All rights reserved.',
            'footer.home': 'Home',

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
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
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
