// Slider functionality
const heroSlider = {
    images: [
        '/assets/hero.png',
        '/assets/hidden_gem.png',
        '/assets/sunset.png'
        
    ],
    currentIndex: 0,
    init() {
        this.heroSection = document.querySelector('.hero-image');
        this.createSliderControls();
        this.showImage(0);
        this.startAutoSlide();
    },
    createSliderControls() {
        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        
        this.images.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.addEventListener('click', () => this.showImage(index));
            dotsContainer.appendChild(dot);
        });
        
        this.heroSection.appendChild(dotsContainer);
        
        // Create prev/next buttons
        const prevButton = document.createElement('button');
        prevButton.className = 'slider-nav prev';
        prevButton.innerHTML = '❮';
        prevButton.addEventListener('click', () => this.prevImage());
        
        const nextButton = document.createElement('button');
        nextButton.className = 'slider-nav next';
        nextButton.innerHTML = '❯';
        nextButton.addEventListener('click', () => this.nextImage());
        
        this.heroSection.appendChild(prevButton);
        this.heroSection.appendChild(nextButton);
    },
    showImage(index) {
        this.currentIndex = index;
        this.heroSection.style.backgroundImage = `url(${this.images[index]})`;
        
        // Update dots
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    },
    nextImage() {
        const newIndex = (this.currentIndex + 1) % this.images.length;
        this.showImage(newIndex);
    },
    prevImage() {
        const newIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showImage(newIndex);
    },
    startAutoSlide() {
        setInterval(() => this.nextImage(), 5000); // Change slide every 5 seconds
    }
};

// Logo ticker functionality
const logoTicker = {
    init() {
        const tickerTrack = document.querySelector('.ticker-track');
        // Clear existing static content
        tickerTrack.innerHTML = '';
        
        // Logo data
        const logos = [
            { src: '/assets/logo partner/agoda.svg', alt: 'agoda' },
            { src: '/assets/logo partner/airbnb.svg', alt: 'airbnb' },
            { src: '/assets/logo partner/bookingcom.svg', alt: 'bookingcom' },
            { src: '/assets/logo partner/tiketcom.svg', alt: 'tiketcom' },
            { src: '/assets/logo partner/trivago.svg', alt: 'trivago' }
        ];
        
        // Create logo elements dynamically
        [...logos, ...logos, ...logos].forEach(logo => {
            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.alt;
            tickerTrack.appendChild(img);
        });
    }
};

// Mobile menu functionality
const mobileMenu = {
    init() {
        const hamburger = document.querySelector('.hamburger');
        const navlinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navlinks.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navlinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navlinks.classList.remove('active');
            }
        });
    }
};

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize homepage features
    if (document.querySelector('.hero-image')) {
        heroSlider.init();
    }
    
    if (document.querySelector('.ticker-track')) {
        logoTicker.init();
    }
    
    mobileMenu.init();
    
    // Initialize contact form if exists
    if (document.getElementById('contactForm')) {
        contactPage.init();
    }
});

// Contact Page functionality
const contactPage = {
    init() {
        this.attachFormHandler();
    },
    
    attachFormHandler() {
        const form = document.getElementById('contactForm');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                subject: form.subject.value,
                message: form.message.value
            };
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            form.reset();
        });
    }
};