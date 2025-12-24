/**
 * Sound Manager Module
 * Handles UI sound effects for button hover and click events
 */

class SoundManager {
    constructor() {
        this.sounds = {
            hover: null,
            click: null
        };
        this.enabled = true;
        this.volume = 0.1; // Default volume (10%)
        this.initialized = false;
    }

    /**
     * Initialize the sound manager with audio files
     * @param {Object} soundPaths - Object containing paths to sound files
     */
    init(soundPaths = {}) {
        const defaultPaths = {
            hover: 'assets/sounds/hover.wav',
            click: 'assets/sounds/click.wav'
        };

        const paths = { ...defaultPaths, ...soundPaths };

        // Load hover sound
        this.sounds.hover = new Audio(paths.hover);
        this.sounds.hover.volume = this.volume;
        this.sounds.hover.preload = 'auto';

        // Load click sound
        this.sounds.click = new Audio(paths.click);
        this.sounds.click.volume = this.volume;
        this.sounds.click.preload = 'auto';

        // Handle load errors gracefully
        this.sounds.hover.addEventListener('error', () => {
            console.warn('Hover sound file not found. Please add hover.mp3, hover.wav, or hover.ogg to assets/sounds/');
        });

        this.sounds.click.addEventListener('error', () => {
            console.warn('Click sound file not found. Please add click.mp3, click.wav, or click.ogg to assets/sounds/');
        });

        this.initialized = true;
    }

    /**
     * Play a sound
     * @param {string} soundType - Type of sound to play ('hover' or 'click')
     */
    play(soundType) {
        if (!this.enabled || !this.initialized) return;
        
        const sound = this.sounds[soundType];
        if (!sound) return;

        // Reset sound to beginning if already playing
        try {
            sound.currentTime = 0;
        } catch (error) {
            // Ignore errors if sound hasn't loaded yet
            console.debug(`Could not reset sound: ${error.message}`);
        }
        
        // Play sound and handle any playback errors
        sound.play().catch(error => {
            // Silently handle autoplay restrictions
            console.debug(`Sound playback prevented: ${error.message}`);
        });
    }

    /**
     * Set volume for all sounds
     * @param {number} volume - Volume level (0.0 to 1.0)
     */
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.sounds.hover) this.sounds.hover.volume = this.volume;
        if (this.sounds.click) this.sounds.click.volume = this.volume;
    }

    /**
     * Enable or disable sounds
     * @param {boolean} enabled - Whether sounds should be enabled
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }

    /**
     * Toggle sounds on/off
     */
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

// Create global instance
const soundManager = new SoundManager();

/**
 * Add sound events to interactive elements
 */
function initUISounds() {
    // Initialize sound manager
    soundManager.init();

    // Selectors for interactive elements that should have sounds
    const buttonSelectors = [
        'button',
        '.cta-button',
        '.btn',
        '.portfolio-link',
        '.social-link',
        'a[href^="#"]',
        '.nav-links a'
    ];

    const selector = buttonSelectors.join(', ');
    const interactiveElements = document.querySelectorAll(selector);

    interactiveElements.forEach(element => {
        // Add hover sound
        element.addEventListener('mouseenter', () => {
            soundManager.play('hover');
        });

        // Add click sound
        element.addEventListener('click', () => {
            soundManager.play('click');
        });
    });

    // Log initialization
    console.log(`UI Sounds initialized for ${interactiveElements.length} interactive elements`);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { soundManager, initUISounds };
}
