document.addEventListener('DOMContentLoaded', function() {
    // Змінюємо початкову мову на українську
    let currentLang = 'uk';

    // Функція для оновлення текстів
    function updateTexts(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Оновлюємо прапорець в кнопці
        const currentFlag = document.querySelector('.current-flag');
        if (currentFlag) {
            currentFlag.src = lang === 'uk' ? 'flag-of-ukraine.webp' : 'flag-of-poland.webp';
            document.querySelector('.current-lang').textContent = lang.toUpperCase();
        }

        updateFeatures(lang);

        // Оновлюємо відгуки
        const testimonials = translations[lang].testimonials;
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        if (swiperWrapper) {
            swiperWrapper.innerHTML = testimonials.map(testimonial => `
                <div class="swiper-slide">
                    <div class="testimonial-card">
                        <div class="testimonial-header">
                            <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar">
                            <div class="testimonial-info">
                                <div class="testimonial-author">${testimonial.author}</div>
                                <div class="testimonial-business">${testimonial.business}</div>
                            </div>
                        </div>
                        <p class="testimonial-text">${testimonial.text}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    function updateFeatures(lang) {
        if (!translations[lang]) return;

        // Додаємо загальні функції до всіх тарифів
        document.querySelectorAll('.common-features').forEach(ul => {
            if (ul && translations[lang].common_features) {
                ul.innerHTML = translations[lang].common_features
                    .map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`)
                    .join('');
            }
        });

        // Додаємо специфічні функції для кожного тарифу
        const instagramFeatures = document.querySelector('.instagram-features');
        if (instagramFeatures && translations[lang].instagram_features) {
            instagramFeatures.innerHTML = translations[lang].instagram_features
                .map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`)
                .join('');
        }

        const tiktokFeatures = document.querySelector('.tiktok-features');
        if (tiktokFeatures && translations[lang].tiktok_features) {
            tiktokFeatures.innerHTML = translations[lang].tiktok_features
                .map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`)
                .join('');
        }

        const fullFeatures = document.querySelector('.full-features');
        if (fullFeatures && translations[lang].full_features) {
            fullFeatures.innerHTML = translations[lang].full_features
                .map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`)
                .join('');
        }
    }

    // Обробник кліків по перемикачу мови
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = this.getAttribute('data-lang');
            if (newLang !== currentLang) {
                currentLang = newLang;
                updateTexts(newLang);
            }
        });
    });

    // Ініціалізація початкової мови
    updateTexts(currentLang);

    // Оновлений обробник кліків по кнопках тарифів
    document.querySelectorAll('.pricing-card .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const plan = this.closest('.pricing-card').querySelector('.card-title').textContent;
            const selectPlan = document.getElementById('selectedPlan');
            
            // Встановлюємо вибраний тариф
            Array.from(selectPlan.options).forEach(option => {
                if (option.text === plan) {
                    option.selected = true;
                }
            });
            
            // Скролимо до форми
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Оновлюємо ціни в тарифах
    document.querySelector('.pricing-card:first-child .card-price').innerHTML = 
        '999 zł<span data-translate="price_month">/місяць</span>';

    // Анімація кнопки меню
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    // Оновіть обробник форми
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;
        const submitButton = form.querySelector('button[type="submit"]');
        
        // Блокуємо кнопку і додаємо індикатор завантаження
        submitButton.disabled = true;
        submitButton.classList.add('btn-loading');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = `<span>${originalButtonText}</span>`;
        
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Показуємо модальне вікно
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                // Очищаємо форму
                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert(translations[currentLang].form_error || 'Wystąpił błąd. Spróbuj ponownie później.');
        })
        .finally(() => {
            // Відновлюємо кнопку
            submitButton.disabled = false;
            submitButton.classList.remove('btn-loading');
            submitButton.innerHTML = originalButtonText;
        });
    });

    // Додайте обробник закриття модального вікна
    document.getElementById('successModal').addEventListener('hidden.bs.modal', function () {
        const submitButton = document.querySelector('#contactForm button[type="submit"]');
        submitButton.disabled = false;
        submitButton.classList.remove('btn-loading');
    });

    // Ініціалізація слайдера
    new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Додаємо обробник кліку на стрілку
    document.querySelector('.scroll-arrow').addEventListener('click', function() {
        document.getElementById('services').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}); 