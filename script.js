// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initScrollAnimations();
    initWaveformCanvas();
    initNavbar();
    createParticles();
    initUISounds();
});

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    // Animate hero title words
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Create intersection observer for fade-in elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Observe portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        observer.observe(item);
    });
}

// Animated waveform canvas
function initWaveformCanvas() {
    const canvas = document.getElementById('waveform-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Handle resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    // Waveform parameters - Cyberpunk colors
    const waves = [
        { amplitude: 30, frequency: 0.02, speed: 0.03, color: 'rgba(0, 255, 255, 0.5)' },
        { amplitude: 40, frequency: 0.015, speed: 0.02, color: 'rgba(255, 0, 255, 0.5)' },
        { amplitude: 25, frequency: 0.025, speed: 0.025, color: 'rgba(0, 255, 0, 0.3)' }
    ];
    
    let time = 0;
    
    function drawWave(wave, offset) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        
        for (let x = 0; x < width; x++) {
            const y = height / 2 + 
                     Math.sin(x * wave.frequency + time * wave.speed + offset) * wave.amplitude;
            ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        waves.forEach((wave, index) => {
            drawWave(wave, index * Math.PI / 3);
        });
        
        time += 0.5;
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add floating particles effect - Data stream style
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create data stream particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Alternate colors for variety
        if (Math.random() > 0.5) {
            particle.style.background = 'linear-gradient(to bottom, transparent, #ff00ff, transparent)';
            particle.style.boxShadow = '0 0 10px #ff00ff';
        }
        
        hero.appendChild(particle);
    }
}
