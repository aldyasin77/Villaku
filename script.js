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
    
    // Initialize page-specific features
    if (document.getElementById('villas-container')) {
        villasPage.init();
    }
    
    if (document.getElementById('faq-container')) {
        faqPage.init();
    }
    
    if (document.getElementById('contactForm')) {
        contactPage.init();
    }
});

// Villas Page functionality
const villasPage = {
    villas: [
        {
            name: 'Ocean View Villa',
            location: 'Seminyak, Bali',
            description: 'Stunning beachfront villa with panoramic ocean views and private infinity pool.',
            image: '/assets/hero.png',
            features: ['4 Bedrooms', 'Private Pool', 'Ocean View', 'Beach Access'],
            price: '$350/night'
        },
        {
            name: 'Cliffside Retreat',
            location: 'Uluwatu, Bali',
            description: 'Luxurious cliffside villa offering breathtaking sunset views and modern amenities.',
            image: '/assets/hidden_gem.png',
            features: ['3 Bedrooms', 'Infinity Pool', 'Sunset View', 'Spa'],
            price: '$450/night'
        },
        {
            name: 'Tropical Paradise',
            location: 'Ubud, Bali',
            description: 'Secluded jungle villa surrounded by lush tropical gardens and rice terraces.',
            image: '/assets/sunset.png',
            features: ['5 Bedrooms', 'Garden Pool', 'Yoga Deck', 'Rice Field View'],
            price: '$400/night'
        },
        {
            name: 'Modern Beach House',
            location: 'Canggu, Bali',
            description: 'Contemporary villa steps from the beach with rooftop terrace and ocean breeze.',
            image: '/assets/hero.png',
            features: ['3 Bedrooms', 'Rooftop Terrace', 'Near Beach', 'Modern Design'],
            price: '$300/night'
        },
        {
            name: 'Luxury Estate',
            location: 'Nusa Dua, Bali',
            description: 'Elegant estate villa with private beach access and 5-star resort amenities.',
            image: '/assets/hidden_gem.png',
            features: ['6 Bedrooms', 'Private Beach', 'Butler Service', 'Gym'],
            price: '$800/night'
        },
        {
            name: 'Hillside Haven',
            location: 'Jimbaran, Bali',
            description: 'Peaceful hillside villa with valley views and traditional Balinese architecture.',
            image: '/assets/sunset.png',
            features: ['4 Bedrooms', 'Valley View', 'Traditional Style', 'BBQ Area'],
            price: '$380/night'
        }
    ],
    
    init() {
        this.renderVillas();
    },
    
    renderVillas() {
        const container = document.getElementById('villas-container');
        
        this.villas.forEach(villa => {
            const villaCard = document.createElement('div');
            villaCard.className = 'villa-card';
            
            const featuresHTML = villa.features.map(feature => 
                `<span class="feature-tag">${feature}</span>`
            ).join('');
            
            villaCard.innerHTML = `
                <img src="${villa.image}" alt="${villa.name}" class="villa-image">
                <div class="villa-info">
                    <h3>${villa.name}</h3>
                    <p class="villa-location">📍 ${villa.location}</p>
                    <p>${villa.description}</p>
                    <div class="villa-features">${featuresHTML}</div>
                    <div class="villa-price">${villa.price}</div>
                </div>
            `;
            
            container.appendChild(villaCard);
        });
    }
};

// FAQ Page functionality
const faqPage = {
    faqs: [
        {
            question: 'How do I make a reservation?',
            answer: 'You can make a reservation by contacting us through our contact form, email, or phone. Our team will guide you through the booking process and help you choose the perfect villa for your needs.'
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'We offer flexible cancellation policies. Free cancellation is available up to 14 days before check-in. Cancellations made within 14 days may incur a fee. Please contact us for detailed information about our cancellation terms.'
        },
        {
            question: 'Are the villas fully furnished?',
            answer: 'Yes, all our villas are fully furnished with modern amenities including kitchen equipment, linens, towels, WiFi, air conditioning, and entertainment systems. Each villa is equipped to ensure a comfortable and luxurious stay.'
        },
        {
            question: 'Do you provide airport transfers?',
            answer: 'Yes, we offer airport transfer services for all our guests. Please let us know your flight details when booking, and we\'ll arrange a comfortable pickup and drop-off service for you.'
        },
        {
            question: 'Is there a minimum stay requirement?',
            answer: 'Minimum stay requirements vary by season and villa. Generally, we require a minimum of 3 nights during regular season and 5-7 nights during peak season and holidays. Please check with us for specific requirements.'
        },
        {
            question: 'Can you arrange activities and tours?',
            answer: 'Absolutely! We can arrange various activities including spa treatments, yoga classes, cooking classes, water sports, cultural tours, and dining experiences. Just let us know your interests and we\'ll create a personalized itinerary for you.'
        },
        {
            question: 'Are pets allowed?',
            answer: 'Pet policies vary by property. Some of our villas are pet-friendly while others are not. Please inform us if you\'re planning to bring a pet, and we\'ll help you find a suitable accommodation.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods including bank transfers, credit cards (Visa, MasterCard, American Express), and online payment platforms. A deposit is typically required to confirm your booking.'
        }
    ],
    
    init() {
        this.renderFAQs();
        this.attachEventListeners();
    },
    
    renderFAQs() {
        const container = document.getElementById('faq-container');
        
        this.faqs.forEach((faq, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            
            faqItem.innerHTML = `
                <button class="faq-question" data-index="${index}">
                    <span>${faq.question}</span>
                    <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            `;
            
            container.appendChild(faqItem);
        });
    },
    
    attachEventListeners() {
        const questions = document.querySelectorAll('.faq-question');
        
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');
                
                // Close all other FAQs
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                });
                
                // Toggle current FAQ
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });
    }
};

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