/* Pawfect Time tanıtım sayfası — 5 dil (tr, en, de, es, fr).
   Dil sırası: ?lang= → localStorage('pt-lang') → tarayıcı dilleri → İngilizce. */
(function () {
    'use strict';

    var T = {
        tr: {
            'meta.title': 'Pawfect Time — Evcil hayvan bakım takipçisi',
            'meta.description': 'Mama, ilaç, aşı ve kilo takibi tek yerde. Zamanında hatırlatmalar, ailenle paylaşım, widget ve Apple Watch desteği. Hesap yok, reklam yok, izleme yok.',
            'nav.features': 'Özellikler',
            'nav.screens': 'Ekranlar',
            'nav.watch': 'Apple Watch',
            'nav.privacy': 'Gizlilik',
            'nav.faq': 'SSS',
            'ui.theme': 'Temayı değiştir',
            'ui.lang': 'Dil',
            'ui.skip': 'İçeriğe geç',

            'hero.eyebrow': 'Ücretsiz · iPhone, iPad ve Apple Watch',
            'hero.title1': 'Dostlarının bakımı,',
            'hero.title2': 'tek sevimli uygulamada.',
            'hero.sub': 'Mama, ilaç, aşı ve kilo takibi tek yerde. Zamanında hatırlatmalar, ailenle paylaşım, widget ve Apple Watch desteğiyle evcil dostunun bakımı artık çok kolay.',
            'cta.soonTop': 'Çok yakında',
            'cta.storeTop': 'İndir',
            'cta.storeBottom': 'App Store',
            'hero.film': 'Tanıtım filmini izle',
            'hero.note1': 'Hesap yok',
            'hero.note2': 'Reklam yok',
            'hero.note3': 'İzleme yok',

            'features.kicker': 'Özellikler',
            'features.title': 'Aklında tutmana gerek yok',
            'features.sub': 'Mama saatleri, kum temizliği, ilaç dozları, aşılar ve kilo; hepsi zamanında hatırlatılır.',
            'f1.title': 'Günün rutini bir bakışta',
            'f1.body': 'Bugünün görevlerini ve ilerlemeni gör, tek dokunuşla tamamla. Günlük, haftalık, aylık ya da yıllık tekrarlar; takvimde ayın tamamı.',
            'f2.title': 'Zamanında hatırlatmalar',
            'f2.body': 'Görev, ilaç ve aşı hatırlatmaları. Bildirimden doğrudan "Tamamlandı" de ya da 10 dakika ertele; istediğin hayvanı sessize al.',
            'f3.title': 'Sağlık merkezi',
            'f3.body': 'İlaç doz saatleri, doz geçmişi, aylık uyum ve stok; aşı tarihleri ve gecikenler; kilo grafiği, sağlık günlüğü ve aylık rapor.',
            'f4.title': 'Dijital pet kimliği',
            'f4.body': 'Mikroçip numarası, kan grubu, alerjiler ve veteriner bilgileri her an elinin altında; veterinerini tek dokunuşla ara.',
            'f5.title': 'Ailenle paylaş',
            'f5.body': 'Bir hayvanı ailen ya da ev arkadaşınla iCloud üzerinden paylaş. Kimin yaptığı görünür, kimse mamayı iki kez vermez.',
            'f6.title': 'Sevimli ve motive edici',
            'f6.body': 'Her tür için özel çizimler, rozetler ve küçük kutlamalar; bakım keyifli bir rutine dönüşür.',

            'screens.kicker': 'Ekranlar',
            'screens.title': 'Her şey yerli yerinde',
            'screens.sub': 'iPhone ve iPad için tasarlandı; koyu tema ve büyük yazı desteğiyle.',
            's1': 'Anasayfa',
            's2': 'Hayvan profili',
            's3': 'Takvim',
            's4': 'İlaçlar',
            's5': 'Aylık rapor',
            's6': 'Kilo takibi',
            'screens.prev': 'Önceki ekran',
            'screens.next': 'Sonraki ekran',

            'watch.kicker': 'Her yerde yanında',
            'watch.title': 'Bileğinden, kilit ekranından, sesinle',
            'watch.sub': 'Uygulamayı açmadan da bakım rutinin hep bir bakış uzağında.',
            'watch.b1.title': 'Apple Watch',
            'watch.b1.body': 'Bugünün görevlerini gör ve bileğinden tamamla. Kadran komplikasyonu da var.',
            'watch.b2.title': 'Widget\'lar',
            'watch.b2.body': 'Ana ekran ve kilit ekranında bugünün görevleri.',
            'watch.b3.title': 'Siri ve Kestirmeler',
            'watch.b3.body': 'Sesinle sor ya da kaydet:',
            'siri.q1': '"Pawfect Time\'da bugün ne var"',
            'siri.q2': '"Pawfect Time\'da Mochi beslendi"',
            'siri.q3': '"Pawfect Time\'a kilo ekle"',
            'watch.alt': 'Apple Watch\'ta bugünün görevleri',

            'pets.kicker': 'Herkes için',
            'pets.title': 'Kedin, köpeğin, kuşun… hepsi burada',
            'pets.sub': 'Her tür için özel çizimler ve renk seçenekleri.',
            'sp.cat': 'Kedi', 'sp.dog': 'Köpek', 'sp.bird': 'Kuş', 'sp.rabbit': 'Tavşan', 'sp.hamster': 'Hamster',
            'sp.guinea': 'Kobay', 'sp.fish': 'Balık', 'sp.turtle': 'Kaplumbağa', 'sp.other': 'Diğer',

            'privacy.kicker': 'Gizlilik',
            'privacy.title': 'Verilerin yalnızca sende',
            'privacy.sub': 'Hesap açman gerekmez. Verilerin yalnızca cihazında ve kendi iCloud hesabında saklanır.',
            'p1.title': 'Hesap yok', 'p1.body': 'Kayıt, giriş ya da şifre yok; hemen başla.',
            'p2.title': 'Sunucu yok', 'p2.body': 'Veriler cihazında ve kendi iCloud\'unda; bize ulaşmaz.',
            'p3.title': 'Reklam yok', 'p3.body': 'Dikkatin dostunda kalsın.',
            'p4.title': 'İzleme yok', 'p4.body': 'Analitik ya da izleme aracı kullanılmaz.',
            'privacy.link': 'Gizlilik politikasını oku',

            'faq.kicker': 'SSS',
            'faq.title': 'Sık sorulan sorular',
            'q1': 'Pawfect Time ücretli mi?',
            'a1': 'Hayır. Pawfect Time ücretsizdir; reklam ve uygulama içi satın alma yoktur.',
            'q2': 'Hesap açmam gerekiyor mu?',
            'a2': 'Hayır. Uygulamayı açıp hemen kullanabilirsin. Kimlik olarak cihazındaki Apple hesabın kullanılır.',
            'q3': 'Verilerim nerede saklanıyor?',
            'a3': 'Cihazında ve iCloud açıksa kendi özel iCloud hesabında. Geliştirici sunucusu yoktur. Tüm verilerini Ayarlar > Veri > Tüm verileri sil ile kalıcı olarak silebilirsin.',
            'q4': 'Ailemle nasıl paylaşırım?',
            'a4': 'Hayvan profilindeki "kişi ekle" düğmesiyle iCloud daveti gönder. Davet edilen kişinin kendi Apple hesabı ve uygulaması olmalı. İkiniz de görevleri tamamlayabilir, kimin yaptığını görebilirsiniz.',
            'q5': 'Hangi cihazlarda çalışıyor?',
            'a5': 'iOS 17 ve sonrası yüklü iPhone ve iPad, watchOS 10 ve sonrası yüklü Apple Watch. Uygulama Türkçe, İngilizce, Almanca, İspanyolca ve Fransızca.',
            'q6': 'Veteriner tavsiyesi veriyor mu?',
            'a6': 'Hayır. Pawfect Time bir kayıt ve hatırlatma aracıdır; veteriner tavsiyesinin yerini tutmaz.',

            'final.title': 'Dostun için küçük, düzenli bir rutin',
            'final.sub': 'Pawfect Time ücretsiz. Hesap açmadan hemen başla.',

            'footer.privacy': 'Gizlilik Politikası',
            'footer.terms': 'Kullanım Koşulları',
            'footer.deletion': 'Veri Silme',
            'footer.support': 'Destek',
            'footer.by': 'IF22 Software tarafından geliştirildi',
            'footer.rights': '© 2026 IF22 Software. Tüm hakları saklıdır.',
            'footer.apple': 'Apple, iPhone, iPad, Apple Watch ve App Store, Apple Inc.\'in ticari markalarıdır.',

            'film.title': 'Pawfect Time tanıtım filmi',
            'film.close': 'Kapat'
        },

        en: {
            'meta.title': 'Pawfect Time — Pet care & reminder tracker',
            'meta.description': 'Feeding, meds, vaccines and weight in one place. Timely reminders, family sharing, widgets and Apple Watch. No account, no ads, no tracking.',
            'nav.features': 'Features',
            'nav.screens': 'Screens',
            'nav.watch': 'Apple Watch',
            'nav.privacy': 'Privacy',
            'nav.faq': 'FAQ',
            'ui.theme': 'Toggle theme',
            'ui.lang': 'Language',
            'ui.skip': 'Skip to content',

            'hero.eyebrow': 'Free · iPhone, iPad and Apple Watch',
            'hero.title1': 'Your pets\' care,',
            'hero.title2': 'in one friendly app.',
            'hero.sub': 'Feeding, meds, vaccines and weight in one place. Timely reminders, family sharing, widgets and Apple Watch make caring for your pet effortless.',
            'cta.soonTop': 'Coming soon on the',
            'cta.storeTop': 'Download on the',
            'cta.storeBottom': 'App Store',
            'hero.film': 'Watch the film',
            'hero.note1': 'No account',
            'hero.note2': 'No ads',
            'hero.note3': 'No tracking',

            'features.kicker': 'Features',
            'features.title': 'Nothing to keep in your head',
            'features.sub': 'Feeding times, litter cleaning, medication doses, vaccinations and weight, all remembered for you, right on time.',
            'f1.title': 'Your day at a glance',
            'f1.body': 'See today\'s tasks and progress and complete them with a tap. Daily, weekly, monthly or yearly repeats, and the whole month in the calendar.',
            'f2.title': 'Timely reminders',
            'f2.body': 'Reminders for tasks, medications and vaccinations. Mark "Done" or snooze for 10 minutes right from the notification, and mute any pet you choose.',
            'f3.title': 'Health center',
            'f3.body': 'Dose times, dose history, monthly adherence and stock; vaccination due dates and overdue items; weight chart, health diary and a monthly report.',
            'f4.title': 'Digital pet ID',
            'f4.body': 'Microchip number, blood type, allergies and vet details always at hand; call your vet with a single tap.',
            'f5.title': 'Share with your family',
            'f5.body': 'Share a pet with family or roommates over iCloud. You can see who did what, so nobody feeds the cat twice.',
            'f6.title': 'Cute and motivating',
            'f6.body': 'Custom illustrations for every species, badges and little celebrations turn care into a happy routine.',

            'screens.kicker': 'Screens',
            'screens.title': 'Everything in its place',
            'screens.sub': 'Designed for iPhone and iPad, with Dark Mode and Larger Text support.',
            's1': 'Home',
            's2': 'Pet profile',
            's3': 'Calendar',
            's4': 'Medications',
            's5': 'Monthly report',
            's6': 'Weight',
            'screens.prev': 'Previous screen',
            'screens.next': 'Next screen',

            'watch.kicker': 'Always with you',
            'watch.title': 'From your wrist, your Lock Screen, your voice',
            'watch.sub': 'Your care routine is always a glance away, even without opening the app.',
            'watch.b1.title': 'Apple Watch',
            'watch.b1.body': 'See today\'s tasks and complete them from your wrist. Watch face complication included.',
            'watch.b2.title': 'Widgets',
            'watch.b2.body': 'Today\'s tasks on your Home Screen and Lock Screen.',
            'watch.b3.title': 'Siri and Shortcuts',
            'watch.b3.body': 'Ask or log with your voice:',
            'siri.q1': '"What\'s due today in Pawfect Time"',
            'siri.q2': '"Fed Mochi in Pawfect Time"',
            'siri.q3': '"Add weight in Pawfect Time"',
            'watch.alt': 'Today\'s tasks on Apple Watch',

            'pets.kicker': 'For everyone',
            'pets.title': 'Cats, dogs, birds… they\'re all here',
            'pets.sub': 'Custom illustrations and color options for every species.',
            'sp.cat': 'Cat', 'sp.dog': 'Dog', 'sp.bird': 'Bird', 'sp.rabbit': 'Rabbit', 'sp.hamster': 'Hamster',
            'sp.guinea': 'Guinea pig', 'sp.fish': 'Fish', 'sp.turtle': 'Turtle', 'sp.other': 'Other',

            'privacy.kicker': 'Privacy',
            'privacy.title': 'Your data stays with you',
            'privacy.sub': 'No account needed. Your data stays on your device and in your own iCloud account.',
            'p1.title': 'No account', 'p1.body': 'No sign-up, no login, no password. Just start.',
            'p2.title': 'No servers', 'p2.body': 'Data lives on your device and in your iCloud, never with us.',
            'p3.title': 'No ads', 'p3.body': 'Keep your attention on your pet.',
            'p4.title': 'No tracking', 'p4.body': 'No analytics or tracking tools.',
            'privacy.link': 'Read the privacy policy',

            'faq.kicker': 'FAQ',
            'faq.title': 'Frequently asked questions',
            'q1': 'Is Pawfect Time free?',
            'a1': 'Yes. Pawfect Time is free, with no ads and no in-app purchases.',
            'q2': 'Do I need an account?',
            'a2': 'No. Open the app and start right away. The Apple Account on your device is your identity.',
            'q3': 'Where is my data stored?',
            'a3': 'On your device and, if iCloud is on, in your own private iCloud account. There is no developer server. You can permanently erase everything in Settings > Data > Delete all data.',
            'q4': 'How do I share with my family?',
            'a4': 'Tap the "add person" button on a pet\'s profile to send an iCloud invite. The other person needs their own Apple Account and the app. You can both complete tasks and see who did what.',
            'q5': 'Which devices are supported?',
            'a5': 'iPhone and iPad with iOS 17 or later, and Apple Watch with watchOS 10 or later. The app is available in English, Turkish, German, Spanish and French.',
            'q6': 'Does it give veterinary advice?',
            'a6': 'No. Pawfect Time is a record-keeping and reminder tool and does not replace advice from your vet.',

            'final.title': 'A small, steady routine for your best friend',
            'final.sub': 'Pawfect Time is free. Start right away, no account needed.',

            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Use',
            'footer.deletion': 'Data Deletion',
            'footer.support': 'Support',
            'footer.by': 'Made by IF22 Software',
            'footer.rights': '© 2026 IF22 Software. All rights reserved.',
            'footer.apple': 'Apple, iPhone, iPad, Apple Watch and App Store are trademarks of Apple Inc.',

            'film.title': 'Pawfect Time film',
            'film.close': 'Close'
        },

        de: {
            'meta.title': 'Pawfect Time — Haustierpflege & Erinnerungen',
            'meta.description': 'Füttern, Medikamente, Impfungen und Gewicht an einem Ort. Erinnerungen, Teilen mit der Familie, Widgets und Apple Watch. Kein Konto, keine Werbung, kein Tracking.',
            'nav.features': 'Funktionen',
            'nav.screens': 'Bildschirme',
            'nav.watch': 'Apple Watch',
            'nav.privacy': 'Datenschutz',
            'nav.faq': 'FAQ',
            'ui.theme': 'Design wechseln',
            'ui.lang': 'Sprache',
            'ui.skip': 'Zum Inhalt springen',

            'hero.eyebrow': 'Kostenlos · iPhone, iPad und Apple Watch',
            'hero.title1': 'Die Pflege deiner Tiere,',
            'hero.title2': 'in einer liebevollen App.',
            'hero.sub': 'Füttern, Medikamente, Impfungen und Gewicht an einem Ort. Erinnerungen, Teilen mit der Familie, Widgets und Apple Watch machen die Tierpflege ganz leicht.',
            'cta.soonTop': 'Bald im',
            'cta.storeTop': 'Laden im',
            'cta.storeBottom': 'App Store',
            'hero.film': 'Film ansehen',
            'hero.note1': 'Kein Konto',
            'hero.note2': 'Keine Werbung',
            'hero.note3': 'Kein Tracking',

            'features.kicker': 'Funktionen',
            'features.title': 'Du musst nichts im Kopf behalten',
            'features.sub': 'Fütterungszeiten, Katzenklo, Medikamente, Impfungen und Gewicht: Die Erinnerung kommt pünktlich.',
            'f1.title': 'Dein Tag auf einen Blick',
            'f1.body': 'Sieh die heutigen Aufgaben und deinen Fortschritt und hake sie mit einem Tippen ab. Tägliche, wöchentliche, monatliche oder jährliche Wiederholungen und der ganze Monat im Kalender.',
            'f2.title': 'Pünktliche Erinnerungen',
            'f2.body': 'Erinnerungen für Aufgaben, Medikamente und Impfungen. Direkt in der Mitteilung „Erledigt“ tippen oder 10 Minuten verschieben; einzelne Tiere stummschalten.',
            'f3.title': 'Gesundheitszentrum',
            'f3.body': 'Einnahmezeiten, Verlauf, monatliche Treue und Vorrat; Impftermine und Überfälliges; Gewichtsdiagramm, Gesundheitstagebuch und Monatsbericht.',
            'f4.title': 'Digitaler Tierausweis',
            'f4.body': 'Chipnummer, Blutgruppe, Allergien und Tierarzt immer griffbereit; ruf deinen Tierarzt mit einem Tippen an.',
            'f5.title': 'Mit der Familie teilen',
            'f5.body': 'Teile ein Tier über iCloud mit Familie oder Mitbewohnern. Du siehst, wer was gemacht hat; so wird niemand doppelt gefüttert.',
            'f6.title': 'Niedlich und motivierend',
            'f6.body': 'Eigene Illustrationen für jede Tierart, Abzeichen und kleine Feiern machen Pflege zur schönen Routine.',

            'screens.kicker': 'Bildschirme',
            'screens.title': 'Alles an seinem Platz',
            'screens.sub': 'Für iPhone und iPad, mit Dunkelmodus und großer Schrift.',
            's1': 'Start',
            's2': 'Tierprofil',
            's3': 'Kalender',
            's4': 'Medikamente',
            's5': 'Monatsbericht',
            's6': 'Gewicht',
            'screens.prev': 'Vorheriger Bildschirm',
            'screens.next': 'Nächster Bildschirm',

            'watch.kicker': 'Immer dabei',
            'watch.title': 'Am Handgelenk, auf dem Sperrbildschirm, per Stimme',
            'watch.sub': 'Deine Pflegeroutine ist immer nur einen Blick entfernt, auch ohne die App zu öffnen.',
            'watch.b1.title': 'Apple Watch',
            'watch.b1.body': 'Sieh die heutigen Aufgaben und erledige sie am Handgelenk. Mit Komplikation fürs Zifferblatt.',
            'watch.b2.title': 'Widgets',
            'watch.b2.body': 'Die heutigen Aufgaben auf Home- und Sperrbildschirm.',
            'watch.b3.title': 'Siri und Kurzbefehle',
            'watch.b3.body': 'Frag oder trag per Stimme ein:',
            'siri.q1': '„Was steht heute in Pawfect Time an“',
            'siri.q2': '„Mochi in Pawfect Time gefüttert“',
            'siri.q3': '„Gewicht in Pawfect Time eintragen“',
            'watch.alt': 'Heutige Aufgaben auf der Apple Watch',

            'pets.kicker': 'Für alle',
            'pets.title': 'Katze, Hund, Vogel… alle sind dabei',
            'pets.sub': 'Eigene Illustrationen und Farben für jede Tierart.',
            'sp.cat': 'Katze', 'sp.dog': 'Hund', 'sp.bird': 'Vogel', 'sp.rabbit': 'Kaninchen', 'sp.hamster': 'Hamster',
            'sp.guinea': 'Meerschweinchen', 'sp.fish': 'Fisch', 'sp.turtle': 'Schildkröte', 'sp.other': 'Andere',

            'privacy.kicker': 'Datenschutz',
            'privacy.title': 'Deine Daten bleiben bei dir',
            'privacy.sub': 'Kein Konto nötig. Deine Daten bleiben auf deinem Gerät und in deinem eigenen iCloud.',
            'p1.title': 'Kein Konto', 'p1.body': 'Keine Registrierung, kein Login, kein Passwort.',
            'p2.title': 'Keine Server', 'p2.body': 'Daten auf deinem Gerät und in deinem iCloud, nie bei uns.',
            'p3.title': 'Keine Werbung', 'p3.body': 'Deine Aufmerksamkeit gehört deinem Tier.',
            'p4.title': 'Kein Tracking', 'p4.body': 'Keine Analyse- oder Tracking-Tools.',
            'privacy.link': 'Datenschutzerklärung lesen',

            'faq.kicker': 'FAQ',
            'faq.title': 'Häufige Fragen',
            'q1': 'Ist Pawfect Time kostenlos?',
            'a1': 'Ja. Pawfect Time ist kostenlos, ohne Werbung und ohne In-App-Käufe.',
            'q2': 'Brauche ich ein Konto?',
            'a2': 'Nein. App öffnen und loslegen. Dein Apple Account auf dem Gerät ist deine Identität.',
            'q3': 'Wo werden meine Daten gespeichert?',
            'a3': 'Auf deinem Gerät und, wenn iCloud aktiv ist, in deinem eigenen privaten iCloud. Es gibt keinen Entwickler-Server. Unter Einstellungen > Daten > Alle Daten löschen entfernst du alles dauerhaft.',
            'q4': 'Wie teile ich mit meiner Familie?',
            'a4': 'Tippe im Tierprofil auf „Person hinzufügen“ und sende eine iCloud-Einladung. Die andere Person braucht einen eigenen Apple Account und die App. Ihr könnt beide Aufgaben erledigen und seht, wer was gemacht hat.',
            'q5': 'Welche Geräte werden unterstützt?',
            'a5': 'iPhone und iPad ab iOS 17 sowie Apple Watch ab watchOS 10. Die App gibt es auf Deutsch, Englisch, Türkisch, Spanisch und Französisch.',
            'q6': 'Gibt die App tierärztlichen Rat?',
            'a6': 'Nein. Pawfect Time ist ein Werkzeug zum Erfassen und Erinnern und ersetzt keinen tierärztlichen Rat.',

            'final.title': 'Eine kleine, feste Routine für deinen Liebling',
            'final.sub': 'Pawfect Time ist kostenlos. Leg sofort los, ohne Konto.',

            'footer.privacy': 'Datenschutz',
            'footer.terms': 'Nutzungsbedingungen',
            'footer.deletion': 'Datenlöschung',
            'footer.support': 'Support',
            'footer.by': 'Entwickelt von IF22 Software',
            'footer.rights': '© 2026 IF22 Software. Alle Rechte vorbehalten.',
            'footer.apple': 'Apple, iPhone, iPad, Apple Watch und App Store sind Marken von Apple Inc.',

            'film.title': 'Pawfect Time Film',
            'film.close': 'Schließen'
        },

        es: {
            'meta.title': 'Pawfect Time — Rutina de cuidado de mascotas',
            'meta.description': 'Comida, medicinas, vacunas y peso en un solo lugar. Recordatorios a tiempo, compartir en familia, widgets y Apple Watch. Sin cuentas, sin anuncios, sin rastreo.',
            'nav.features': 'Funciones',
            'nav.screens': 'Pantallas',
            'nav.watch': 'Apple Watch',
            'nav.privacy': 'Privacidad',
            'nav.faq': 'Preguntas',
            'ui.theme': 'Cambiar tema',
            'ui.lang': 'Idioma',
            'ui.skip': 'Ir al contenido',

            'hero.eyebrow': 'Gratis · iPhone, iPad y Apple Watch',
            'hero.title1': 'El cuidado de tus mascotas,',
            'hero.title2': 'en una app adorable.',
            'hero.sub': 'Comida, medicinas, vacunas y peso en un solo lugar. Recordatorios a tiempo, compartir en familia, widgets y Apple Watch para cuidar a tu mascota sin esfuerzo.',
            'cta.soonTop': 'Muy pronto en',
            'cta.storeTop': 'Descárgalo en',
            'cta.storeBottom': 'App Store',
            'hero.film': 'Ver el vídeo',
            'hero.note1': 'Sin cuentas',
            'hero.note2': 'Sin anuncios',
            'hero.note3': 'Sin rastreo',

            'features.kicker': 'Funciones',
            'features.title': 'Ya no tienes que recordarlo todo',
            'features.sub': 'Horas de comida, arenero, dosis de medicamentos, vacunas y peso: te avisamos a tiempo.',
            'f1.title': 'Tu día de un vistazo',
            'f1.body': 'Ve las tareas de hoy y tu progreso y complétalas con un toque. Repeticiones diarias, semanales, mensuales o anuales, y todo el mes en el calendario.',
            'f2.title': 'Recordatorios a tiempo',
            'f2.body': 'Recordatorios de tareas, medicamentos y vacunas. Marca "Hecho" o pospón 10 minutos desde la notificación; silencia la mascota que quieras.',
            'f3.title': 'Centro de salud',
            'f3.body': 'Horarios de dosis, historial, cumplimiento mensual y existencias; fechas de vacunas y atrasos; gráfico de peso, diario de salud e informe mensual.',
            'f4.title': 'Identificación digital',
            'f4.body': 'Microchip, grupo sanguíneo, alergias y datos del veterinario siempre a mano; llama a tu veterinario con un toque.',
            'f5.title': 'Comparte con tu familia',
            'f5.body': 'Comparte una mascota con tu familia o compañeros de piso por iCloud. Se ve quién hizo qué, así nadie le da de comer dos veces.',
            'f6.title': 'Adorable y motivadora',
            'f6.body': 'Ilustraciones propias para cada especie, insignias y pequeñas celebraciones convierten el cuidado en una rutina feliz.',

            'screens.kicker': 'Pantallas',
            'screens.title': 'Todo en su sitio',
            'screens.sub': 'Diseñada para iPhone y iPad, con modo oscuro y texto grande.',
            's1': 'Inicio',
            's2': 'Perfil de mascota',
            's3': 'Calendario',
            's4': 'Medicamentos',
            's5': 'Informe mensual',
            's6': 'Peso',
            'screens.prev': 'Pantalla anterior',
            'screens.next': 'Pantalla siguiente',

            'watch.kicker': 'Siempre contigo',
            'watch.title': 'Desde tu muñeca, tu pantalla bloqueada, tu voz',
            'watch.sub': 'Tu rutina de cuidado siempre a un vistazo, incluso sin abrir la app.',
            'watch.b1.title': 'Apple Watch',
            'watch.b1.body': 'Ve las tareas de hoy y complétalas desde la muñeca. Incluye complicación para la esfera.',
            'watch.b2.title': 'Widgets',
            'watch.b2.body': 'Las tareas de hoy en la pantalla de inicio y la pantalla bloqueada.',
            'watch.b3.title': 'Siri y Atajos',
            'watch.b3.body': 'Pregunta o registra con tu voz:',
            'siri.q1': '"Qué toca hoy en Pawfect Time"',
            'siri.q2': '"Mochi ya comió en Pawfect Time"',
            'siri.q3': '"Añadir peso en Pawfect Time"',
            'watch.alt': 'Tareas de hoy en el Apple Watch',

            'pets.kicker': 'Para todos',
            'pets.title': 'Gatos, perros, pájaros… todos caben',
            'pets.sub': 'Ilustraciones propias y colores para cada especie.',
            'sp.cat': 'Gato', 'sp.dog': 'Perro', 'sp.bird': 'Pájaro', 'sp.rabbit': 'Conejo', 'sp.hamster': 'Hámster',
            'sp.guinea': 'Cobaya', 'sp.fish': 'Pez', 'sp.turtle': 'Tortuga', 'sp.other': 'Otro',

            'privacy.kicker': 'Privacidad',
            'privacy.title': 'Tus datos se quedan contigo',
            'privacy.sub': 'Sin cuentas. Tus datos se guardan en tu dispositivo y en tu propio iCloud.',
            'p1.title': 'Sin cuentas', 'p1.body': 'Sin registro, sin inicio de sesión, sin contraseña.',
            'p2.title': 'Sin servidores', 'p2.body': 'Tus datos están en tu dispositivo y tu iCloud, nunca con nosotros.',
            'p3.title': 'Sin anuncios', 'p3.body': 'Tu atención, para tu mascota.',
            'p4.title': 'Sin rastreo', 'p4.body': 'Ninguna herramienta de analítica ni rastreo.',
            'privacy.link': 'Leer la política de privacidad',

            'faq.kicker': 'Preguntas',
            'faq.title': 'Preguntas frecuentes',
            'q1': '¿Pawfect Time es gratis?',
            'a1': 'Sí. Pawfect Time es gratis, sin anuncios ni compras dentro de la app.',
            'q2': '¿Necesito una cuenta?',
            'a2': 'No. Abre la app y empieza. Tu cuenta de Apple del dispositivo es tu identidad.',
            'q3': '¿Dónde se guardan mis datos?',
            'a3': 'En tu dispositivo y, si iCloud está activado, en tu propio iCloud privado. No hay servidor del desarrollador. Puedes borrarlo todo en Ajustes > Datos > Borrar todos los datos.',
            'q4': '¿Cómo comparto con mi familia?',
            'a4': 'Toca "añadir persona" en el perfil de la mascota para enviar una invitación de iCloud. La otra persona necesita su propia cuenta de Apple y la app. Ambos podéis completar tareas y ver quién hizo qué.',
            'q5': '¿Qué dispositivos son compatibles?',
            'a5': 'iPhone y iPad con iOS 17 o posterior, y Apple Watch con watchOS 10 o posterior. La app está en español, inglés, turco, alemán y francés.',
            'q6': '¿Da consejos veterinarios?',
            'a6': 'No. Pawfect Time es una herramienta de registro y recordatorios y no sustituye el consejo de tu veterinario.',

            'final.title': 'Una rutina pequeña y constante para tu mejor amigo',
            'final.sub': 'Pawfect Time es gratis. Empieza ya, sin cuenta.',

            'footer.privacy': 'Política de privacidad',
            'footer.terms': 'Condiciones de uso',
            'footer.deletion': 'Borrado de datos',
            'footer.support': 'Soporte',
            'footer.by': 'Creada por IF22 Software',
            'footer.rights': '© 2026 IF22 Software. Todos los derechos reservados.',
            'footer.apple': 'Apple, iPhone, iPad, Apple Watch y App Store son marcas de Apple Inc.',

            'film.title': 'Vídeo de Pawfect Time',
            'film.close': 'Cerrar'
        },

        fr: {
            'meta.title': 'Pawfect Time — Soins et rappels pour animaux',
            'meta.description': 'Repas, médicaments, vaccins et poids au même endroit. Rappels à l\'heure, partage en famille, widgets et Apple Watch. Aucun compte, pas de publicité, pas de suivi.',
            'nav.features': 'Fonctions',
            'nav.screens': 'Écrans',
            'nav.watch': 'Apple Watch',
            'nav.privacy': 'Confidentialité',
            'nav.faq': 'FAQ',
            'ui.theme': 'Changer de thème',
            'ui.lang': 'Langue',
            'ui.skip': 'Aller au contenu',

            'hero.eyebrow': 'Gratuit · iPhone, iPad et Apple Watch',
            'hero.title1': 'Les soins de vos animaux,',
            'hero.title2': 'dans une app adorable.',
            'hero.sub': 'Repas, médicaments, vaccins et poids au même endroit. Rappels à l\'heure, partage en famille, widgets et Apple Watch : prendre soin de votre animal devient facile.',
            'cta.soonTop': 'Bientôt sur l\'',
            'cta.storeTop': 'Télécharger dans l\'',
            'cta.storeBottom': 'App Store',
            'hero.film': 'Voir le film',
            'hero.note1': 'Aucun compte',
            'hero.note2': 'Pas de publicité',
            'hero.note3': 'Pas de suivi',

            'features.kicker': 'Fonctions',
            'features.title': 'Plus besoin de tout retenir',
            'features.sub': 'Heures des repas, litière, doses de médicaments, vaccins et poids : le rappel arrive à l\'heure.',
            'f1.title': 'Votre journée en un coup d\'œil',
            'f1.body': 'Voyez les tâches du jour et votre progression et validez-les d\'un toucher. Répétitions quotidiennes, hebdomadaires, mensuelles ou annuelles, et tout le mois dans le calendrier.',
            'f2.title': 'Des rappels à l\'heure',
            'f2.body': 'Rappels pour les tâches, les médicaments et les vaccins. Touchez « Fait » ou reportez de 10 minutes depuis la notification ; mettez un animal en sourdine.',
            'f3.title': 'Centre santé',
            'f3.body': 'Heures de prise, historique, observance mensuelle et stock ; échéances des vaccins et retards ; courbe de poids, journal de santé et bilan mensuel.',
            'f4.title': 'Carte d\'identité numérique',
            'f4.body': 'Puce, groupe sanguin, allergies et vétérinaire toujours à portée de main ; appelez votre vétérinaire d\'un toucher.',
            'f5.title': 'Partagez en famille',
            'f5.body': 'Partagez un animal avec votre famille ou vos colocataires via iCloud. Vous voyez qui a fait quoi : personne ne nourrit le chat deux fois.',
            'f6.title': 'Adorable et motivante',
            'f6.body': 'Illustrations originales pour chaque espèce, badges et petites célébrations font des soins une routine joyeuse.',

            'screens.kicker': 'Écrans',
            'screens.title': 'Chaque chose à sa place',
            'screens.sub': 'Conçue pour iPhone et iPad, avec mode sombre et texte agrandi.',
            's1': 'Accueil',
            's2': 'Profil de l\'animal',
            's3': 'Calendrier',
            's4': 'Médicaments',
            's5': 'Bilan mensuel',
            's6': 'Poids',
            'screens.prev': 'Écran précédent',
            'screens.next': 'Écran suivant',

            'watch.kicker': 'Toujours avec vous',
            'watch.title': 'Au poignet, sur l\'écran verrouillé, à la voix',
            'watch.sub': 'Votre routine de soins toujours à portée de regard, même sans ouvrir l\'app.',
            'watch.b1.title': 'Apple Watch',
            'watch.b1.body': 'Voyez les tâches du jour et validez-les depuis votre poignet. Complication pour le cadran incluse.',
            'watch.b2.title': 'Widgets',
            'watch.b2.body': 'Les tâches du jour sur l\'écran d\'accueil et l\'écran verrouillé.',
            'watch.b3.title': 'Siri et Raccourcis',
            'watch.b3.body': 'Demandez ou notez à la voix :',
            'siri.q1': '« Qu\'est-ce qu\'il y a aujourd\'hui dans Pawfect Time »',
            'siri.q2': '« Mochi a mangé dans Pawfect Time »',
            'siri.q3': '« Ajouter un poids dans Pawfect Time »',
            'watch.alt': 'Tâches du jour sur l\'Apple Watch',

            'pets.kicker': 'Pour tous',
            'pets.title': 'Chat, chien, oiseau… tout le monde est là',
            'pets.sub': 'Illustrations originales et couleurs pour chaque espèce.',
            'sp.cat': 'Chat', 'sp.dog': 'Chien', 'sp.bird': 'Oiseau', 'sp.rabbit': 'Lapin', 'sp.hamster': 'Hamster',
            'sp.guinea': 'Cochon d\'Inde', 'sp.fish': 'Poisson', 'sp.turtle': 'Tortue', 'sp.other': 'Autre',

            'privacy.kicker': 'Confidentialité',
            'privacy.title': 'Vos données restent chez vous',
            'privacy.sub': 'Aucun compte. Vos données restent sur votre appareil et dans votre propre iCloud.',
            'p1.title': 'Aucun compte', 'p1.body': 'Ni inscription, ni connexion, ni mot de passe.',
            'p2.title': 'Aucun serveur', 'p2.body': 'Vos données sont sur votre appareil et dans votre iCloud, jamais chez nous.',
            'p3.title': 'Pas de publicité', 'p3.body': 'Votre attention reste sur votre animal.',
            'p4.title': 'Pas de suivi', 'p4.body': 'Aucun outil d\'analyse ni de suivi.',
            'privacy.link': 'Lire la politique de confidentialité',

            'faq.kicker': 'FAQ',
            'faq.title': 'Questions fréquentes',
            'q1': 'Pawfect Time est-elle gratuite ?',
            'a1': 'Oui. Pawfect Time est gratuite, sans publicité ni achats intégrés.',
            'q2': 'Faut-il créer un compte ?',
            'a2': 'Non. Ouvrez l\'app et commencez. Votre compte Apple sur l\'appareil sert d\'identité.',
            'q3': 'Où sont stockées mes données ?',
            'a3': 'Sur votre appareil et, si iCloud est activé, dans votre propre iCloud privé. Il n\'y a aucun serveur du développeur. Vous pouvez tout effacer dans Réglages > Données > Supprimer toutes les données.',
            'q4': 'Comment partager avec ma famille ?',
            'a4': 'Touchez « ajouter une personne » sur le profil de l\'animal pour envoyer une invitation iCloud. L\'autre personne a besoin de son propre compte Apple et de l\'app. Vous pouvez tous deux valider les tâches et voir qui a fait quoi.',
            'q5': 'Quels appareils sont compatibles ?',
            'a5': 'iPhone et iPad avec iOS 17 ou ultérieur, et Apple Watch avec watchOS 10 ou ultérieur. L\'app est en français, anglais, turc, allemand et espagnol.',
            'q6': 'Donne-t-elle des conseils vétérinaires ?',
            'a6': 'Non. Pawfect Time est un outil de suivi et de rappels et ne remplace pas l\'avis de votre vétérinaire.',

            'final.title': 'Une petite routine régulière pour votre compagnon',
            'final.sub': 'Pawfect Time est gratuite. Commencez tout de suite, sans compte.',

            'footer.privacy': 'Confidentialité',
            'footer.terms': 'Conditions d\'utilisation',
            'footer.deletion': 'Suppression des données',
            'footer.support': 'Assistance',
            'footer.by': 'Créée par IF22 Software',
            'footer.rights': '© 2026 IF22 Software. Tous droits réservés.',
            'footer.apple': 'Apple, iPhone, iPad, Apple Watch et App Store sont des marques d\'Apple Inc.',

            'film.title': 'Film Pawfect Time',
            'film.close': 'Fermer'
        }
    };

    var SUPPORTED = ['tr', 'en', 'de', 'es', 'fr'];
    var FALLBACK = 'en';

    function store(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* özel pencere */ } }
    function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

    function detect() {
        var q = new URLSearchParams(location.search).get('lang');
        if (q && SUPPORTED.indexOf(q) >= 0) return q;
        var s = read('pt-lang');
        if (s && SUPPORTED.indexOf(s) >= 0) return s;
        var langs = navigator.languages || [navigator.language || ''];
        for (var i = 0; i < langs.length; i++) {
            var code = String(langs[i]).toLowerCase().split('-')[0];
            if (SUPPORTED.indexOf(code) >= 0) return code;
        }
        return FALLBACK;
    }

    function apply(lang) {
        if (SUPPORTED.indexOf(lang) < 0) lang = FALLBACK;
        var d = T[lang];
        var root = document.documentElement;
        root.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var k = el.getAttribute('data-i18n');
            if (d[k] !== undefined) el.textContent = d[k];
            else console.warn('[pt-i18n] eksik anahtar', lang, k);
        });
        // data-i18n-attr="aria-label:key;title:key"
        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
                var p = pair.split(':');
                if (p.length === 2 && d[p[1]] !== undefined) el.setAttribute(p[0], d[p[1]]);
            });
        });
        // Dile göre ekran görüntüleri
        document.querySelectorAll('[data-shot]').forEach(function (img) {
            img.src = 'img/' + lang + '/' + img.getAttribute('data-shot');
        });
        // Tanıtım filmi yalnız TR ve EN
        var filmLang = lang === 'tr' ? 'tr' : 'en';
        var v = document.getElementById('filmVideo');
        if (v && v.getAttribute('data-lang') !== filmLang) {
            v.setAttribute('data-lang', filmLang);
            v.poster = 'video/poster-' + filmLang + '.jpg';
            v.src = 'video/ad-' + filmLang + '.mp4';
        }
        document.title = d['meta.title'];
        var md = document.querySelector('meta[name="description"]');
        if (md) md.setAttribute('content', d['meta.description']);

        document.querySelectorAll('.lang-menu [data-lang]').forEach(function (b) {
            b.setAttribute('aria-current', b.getAttribute('data-lang') === lang ? 'true' : 'false');
        });
        var cur = document.getElementById('langCurrent');
        if (cur) cur.textContent = lang.toUpperCase();

        store('pt-lang', lang);
        window.ptLang = lang;
    }

    window.ptI18n = { apply: apply, dict: T, supported: SUPPORTED };
    apply(detect());
}());
