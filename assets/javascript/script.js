// Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

        // Slider functionality
        const slider = document.getElementById('slider');
        const prevSlideBtn = document.getElementById('prev-slide');
        const nextSlideBtn = document.getElementById('next-slide');
        const sliderNav = document.getElementById('slider-nav');
        const navButtons = sliderNav.querySelectorAll('button');
        
        let currentSlide = 0;
        const slideCount = document.querySelectorAll('.slider-slide').length;
        
        function updateSlider() {
            slider.scrollTo({
                left: currentSlide * slider.offsetWidth,
                behavior: 'smooth'
            });
            
            // Update navigation buttons
            navButtons.forEach((btn, index) => {
                if (index === currentSlide) {
                    btn.classList.add('bg-emerald-500');
                    btn.classList.remove('bg-gray-300');
                } else {
                    btn.classList.add('bg-gray-300');
                    btn.classList.remove('bg-emerald-500');
                }
            });
        }
        
        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }
        
        prevSlideBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSlider();
        });
        
        nextSlideBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        });
        
        // Navigation dots
        navButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });
        
        // Auto-advance slider (optional)
        let slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        }, 5000);
        
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slideCount;
                updateSlider();
            }, 5000);
        });