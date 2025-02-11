// Спільні відгуки для обох мов
const sharedTestimonials = [
    {
        text: "Віка чудово розуміє специфіку роботи з Instagram Reels. Завдяки її стратегії наш салон отримав багато нових клієнтів. Професійний підхід та завжди на зв'язку! За 3 місяці співпраці кількість клієнтів зросла вдвічі. Рекомендую!",
        author: "Наталія",
        business: "Novaja sp. z o. o.",
        avatar: "./natalia.jpg"
    },
    {
        text: "Świetna współpraca! Wiktoria przygotowała doskonały plan treści dla naszych Reels na Instagramie. Widać, że zna się na rzeczy! Dzięki jej strategii nasze zasięgi wzrosły o 300% w ciągu dwóch miesięcy. Profesjonalne podejście i świetna komunikacja.",
        author: "Małgosia",
        business: "Warsaw Beauty Bar",
        avatar: "https://ui-avatars.com/api/?name=Małgorzata&background=ff69b4&color=fff"
    },
    {
        text: "Дякую Вікторії за чудову стратегію запуску в TikTok. За перший місяць ми набрали більше 3к підписників в телеграм через TikTok, а за три місяці вийшли на 15k! Результат перевершив всі очікування. Окремо хочу відмітити глибокий аналіз ніші та конкурентів.",
        author: "Володимир",
        business: "Vlodek JD",
        avatar: "./volodymyr.jpg"
    },
    {
        text: "Współpraca z Wiktorią to sama przyjemność! Wszystko dokładnie wytłumaczyła, pokazała jak działa algorytm i pomogła rozwinąć nasz profil. Szczególnie doceniam jej wiedzę o działaniu algorytmów i umiejętność przekazania tej wiedzy w prosty sposób. Polecam!",
        author: "Justyna",
        business: "Biuro rachunkowe",
        avatar: "https://ui-avatars.com/api/?name=Justyna&background=ff69b4&color=fff"
    }
];

const translations = {
    pl: {
        nav_services: "Usługi",
        nav_pricing: "Cennik",
        nav_contact: "Kontakt",
        hero_title: "Twój Sukces w Social Media",
        hero_subtitle: "Profesjonalne zarządzanie mediami społecznościowymi dla branży beauty",
        hero_button: "Poznaj Nasze Usługi",
        services_title: "Nasze Usługi",
        service1_title: "Tworzenie Kontentu",
        service1_desc: "Profesjonalne zdjęcia i grafiki dla social media",
        service2_title: "Strategia SMM",
        service2_desc: "Indywidualna strategia rozwoju w social media",
        service3_title: "Engagement",
        service3_desc: "Aktywne prowadzenie profili i komunikacja z obserwującymi",
        pricing_title: "Cennik",
        
        plan_instagram: "INSTAGRAM",
        plan_tiktok: "TIKTOK",
        plan_full: "INSTAGRAM + TIKTOK",
        
        instagram_price: "999 zł",
        tiktok_price: "999 zł",
        full_price: "1499 zł",
        
        common_features: [
            "Analiza grupy docelowej",
            "Strategia promocji",
            "Plan kontentu",
            "Scenariusze do filmów",
            "Zadania techniczne",
            "Analiza i korekta strategii"
        ],
        
        instagram_features: [
            "Kompleksowa obsługa profilu",
            "5 Stories dziennie (oprócz niedzieli)",
            "3 posty wideo tygodniowo",
            "Optymalizacja profilu",
            "Moderacja komentarzy 7 dni w tygodniu"
        ],
        
        tiktok_features: [
            "Kompleksowa obsługa profilu",
            "5 filmów tygodniowo",
            "Optymalizacja profilu",
            "Moderacja komentarzy 7 dni w tygodniu",
            "Trendy i hashtag research"
        ],
        
        full_features: [
            "Wszystko z pakietów Instagram i TikTok",
            "Spójna strategia dla obu platform",
            "Crossposting kontentu",
            "Priorytetowa obsługa",
            "Cotygodniowe raporty"
        ],
        plan_test: "TEST",
        plan_standard: "STANDARD",
        plan_pro: "PRO",
        price_month: "/miesiąc",
        price_save: "Oszczędzasz 499 zł",
        price_button: "Wybierz Plan",
        test_feature1: "2 posty tygodniowo",
        test_feature2: "Podstawowa analityka",
        test_feature3: "Podstawowe wsparcie",
        standard_feature1: "4 posty tygodniowo",
        standard_feature2: "Pełna analityka",
        standard_feature3: "Priorytetowe wsparcie",
        standard_feature4: "Stories",
        pro_feature1: "Codzienne posty",
        pro_feature2: "Zaawansowana analityka",
        pro_feature3: "24/7 wsparcie",
        pro_feature4: "Stories i Reels",
        pro_feature5: "Strategia rozwoju",
        contact_title: "Kontakt",
        contact_name: "Imię i nazwisko",
        contact_message: "Wiadomość",
        contact_button: "Wyślij",
        footer_rights: "Wszystkie prawa zastrzeżone.",
        basic_features: "Podstawowe funkcje:",
        additional_benefits: "Dodatkowe korzyści:",
        instagram_features_title: "Instagram:",
        tiktok_features_title: "TikTok:",
        brand_name: "Vika SMM",
        copyright: "© 2025 Vika SMM. Wszystkie prawa zastrzeżone.",
        form_success_title: "Dziękujemy!",
        form_success_message: "Skontaktujemy się z Tobą jak najszybciej.",
        form_success_close: "Zamknij",
        form_error: "Wystąpił błąd. Spróbuj ponownie później.",
        contact_phone: "Telefon",
        contact_instagram: "Instagram (opcjonalnie)",
        contact_phone_error: "Proszę wprowadzić prawidłowy numer telefonu (minimum 9 cyfr)",
        select_plan: "Wybierz plan",
        testimonials_title: "Opinie klientów",
        testimonials: sharedTestimonials
    },
    uk: {
        nav_services: "Послуги",
        nav_pricing: "Тарифи",
        nav_contact: "Контакти",
        hero_title: "Ваш Успіх у Соціальних Мережах",
        hero_subtitle: "Професійне управління соціальними мережами для б'юті-сфери",
        hero_button: "Дізнатися про послуги",
        services_title: "Наші Послуги",
        service1_title: "Створення Контенту",
        service1_desc: "Професійні фото та відео для соціальних мереж",
        service2_title: "SMM Стратегія",
        service2_desc: "Індивідуальна стратегія розвитку",
        service3_title: "Залученість",
        service3_desc: "Активне ведення профілів та комунікація",
        pricing_title: "Тарифи",
        
        plan_instagram: "INSTAGRAM",
        plan_tiktok: "TIKTOK",
        plan_full: "INSTAGRAM + TIKTOK",
        
        instagram_price: "999 zł",
        tiktok_price: "999 zł",
        full_price: "1499 zł",
        
        common_features: [
            "Аналіз цільової аудиторії",
            "Стратегія просування",
            "Контент-план",
            "Сценарії для відео",
            "Технічні завдання",
            "Аналіз та коригування стратегії"
        ],
        
        instagram_features: [
            "Повне ведення профілю",
            "5 сторіс щодня (крім неділі)",
            "3 відео-пости на тиждень",
            "Оптимізація профілю",
            "Модерація коментарів 7 днів на тиждень"
        ],
        
        tiktok_features: [
            "Повне ведення профілю",
            "5 відео на тиждень",
            "Оптимізація профілю",
            "Модерація коментарів 7 днів на тиждень",
            "Аналіз трендів та хештегів"
        ],
        
        full_features: [
            "Все з пакетів Instagram та TikTok",
            "Єдина стратегія для обох платформ",
            "Кроспостинг контенту",
            "Пріоритетна підтримка",
            "Щотижнева звітність"
        ],
        plan_test: "ТЕСТ",
        plan_standard: "СТАНДАРТ",
        plan_pro: "ПРО",
        price_month: "/місяць",
        price_save: "Економія 499 zł",
        price_button: "Обрати План",
        test_feature1: "2 пости на тиждень",
        test_feature2: "Базова аналітика",
        test_feature3: "Базова підтримка",
        standard_feature1: "4 пости на тиждень",
        standard_feature2: "Повна аналітика",
        standard_feature3: "Пріоритетна підтримка",
        standard_feature4: "Сторіз",
        pro_feature1: "Щоденні пости",
        pro_feature2: "Розширена аналітика",
        pro_feature3: "Підтримка 24/7",
        pro_feature4: "Сторіз та Рілз",
        pro_feature5: "Стратегія розвитку",
        contact_title: "Контакти",
        contact_name: "Ім'я та прізвище",
        contact_message: "Повідомлення",
        contact_button: "Надіслати",
        footer_rights: "Всі права захищені.",
        basic_features: "Базові функції:",
        additional_benefits: "Додаткові переваги:",
        instagram_features_title: "Instagram:",
        tiktok_features_title: "TikTok:",
        brand_name: "Vika SMM",
        copyright: "© 2025 Vika SMM. Всі права захищені.",
        form_success_title: "Дякуємо!",
        form_success_message: "Ми зв'яжемося з вами найближчим часом.",
        form_success_close: "Закрити",
        form_error: "Виникла помилка. Спробуйте пізніше.",
        contact_phone: "Телефон",
        contact_instagram: "Instagram (опціонально)",
        contact_phone_error: "Будь ласка, введіть правильний номер телефону (мінімум 9 цифр)",
        select_plan: "Оберіть тариф",
        testimonials_title: "Відгуки клієнтів",
        testimonials: sharedTestimonials
    }
}; 