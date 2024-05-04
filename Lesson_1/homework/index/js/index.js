let currentSlide = 1;
    const slideInterval = 5000; // Интервал переключения слайдов в миллисекундах (5 секунд)

    showSlide(currentSlide);

    function showSlide(slideIndex) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        // Цикл через слайды
        if (slideIndex > slides.length) {
            currentSlide = 1;
        }
        if (slideIndex < 1) {
            currentSlide = slides.length;
        }

        // Скрываем все слайды и сбрасываем точки
        slides.forEach(slide => (slide.style.display = 'none'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Показываем текущий слайд и активируем соответствующую точку
        slides[currentSlide - 1].style.display = 'block';
        dots[currentSlide - 1].classList.add('active');
    }

    function changeSlide(n) {
        showSlide(currentSlide += n);
    }

    function setCurrentSlide(n) {
        showSlide(currentSlide = n);
    }

    function autoSlide() {
        changeSlide(1); // Переход к следующему слайду
    }

    // Устанавливаем автоматическое переключение слайдов
    setInterval(autoSlide, slideInterval);