# UI Sounds Implementation

This document explains how the UI sound system works and how to add your custom sounds.

## Overview

The website now includes a sound system that plays audio feedback when users interact with buttons and links:
- **Hover Sound**: Plays when the mouse hovers over interactive elements
- **Click Sound**: Plays when a user clicks on interactive elements

## Quick Start

### 1. Add Your Sound Files

Place your audio files in the `assets/sounds/` directory with these exact names:
- `hover.mp3` (or `hover.wav` or `hover.ogg`)
- `click.mp3` (or `click.wav` or `click.ogg`)

### 2. That's It!

The sound system is already integrated into all pages. Once you add your sound files, they will automatically play on hover and click events.

## Supported Audio Formats

- **MP3** (.mp3) - Best browser support, recommended
- **WAV** (.wav) - High quality, larger file size
- **OGG** (.ogg) - Good quality and compression

## Sound Design Recommendations

For the best user experience, your sound files should:
- Be **short** (< 500ms duration)
- Be **small** (< 100KB file size)
- Have **normalized volume** to avoid jarring differences
- Use **subtle sounds** that don't distract from the content
- Be **high quality** (at least 44.1kHz sample rate)

### Suggested Sound Characteristics

**Hover Sound:**
- Very short (50-150ms)
- Soft, subtle tone
- Light pitch (helps distinguish from click)
- Example: gentle "whoosh" or soft "blip"

**Click Sound:**
- Short (100-300ms)
- Satisfying, confirmatory tone
- Slightly lower pitch than hover
- Example: soft "click" or gentle "pop"

## Technical Details

### How It Works

1. **soundManager.js**: Contains the `SoundManager` class that handles:
   - Loading audio files
   - Playing sounds
   - Volume control
   - Enable/disable functionality

2. **script.js**: Calls `initUISounds()` on page load to:
   - Initialize the sound manager
   - Attach event listeners to interactive elements

3. **HTML Pages**: All pages include the soundManager.js script

### Which Elements Have Sounds?

The system automatically adds sounds to:
- All `<button>` elements
- Links with `.cta-button` class
- Elements with `.btn` class
- Portfolio card links (`.portfolio-link`)
- Social media links (`.social-link`)
- Navigation links (`.nav-links a`)
- Anchor links (`a[href^="#"]`)

### Testing

Open `test-sounds.html` in your browser to:
- Check if the sound system is initialized correctly
- Test hover and click sounds
- Adjust volume levels
- Toggle sounds on/off
- View console logs for debugging

## Customization

### Changing Sound Files Location

If you want to store sound files in a different location, modify the paths in `soundManager.js`:

```javascript
const defaultPaths = {
    hover: 'your/custom/path/hover.mp3',
    click: 'your/custom/path/click.mp3'
};
```

### Adjusting Default Volume

Change the default volume (0.0 to 1.0) in `soundManager.js`:

```javascript
this.volume = 0.3; // 30% volume (default)
```

### Adding Sounds to More Elements

To add sounds to additional elements, modify the `buttonSelectors` array in `soundManager.js`:

```javascript
const buttonSelectors = [
    'button',
    '.cta-button',
    '.your-custom-class', // Add your selector here
    // ... more selectors
];
```

### Programmatic Control

Access the sound manager in your JavaScript:

```javascript
// Enable/disable all sounds
soundManager.setEnabled(false);

// Toggle sounds
soundManager.toggle();

// Change volume (0.0 to 1.0)
soundManager.setVolume(0.5);

// Play a specific sound manually
soundManager.play('hover');
soundManager.play('click');
```

## Troubleshooting

### Sounds Don't Play

1. **Check file paths**: Ensure sound files are in `assets/sounds/` with correct names
2. **Check browser console**: Open DevTools (F12) and look for error messages
3. **Check file format**: Use MP3 for best compatibility
4. **Check browser autoplay policy**: Some browsers block autoplay; user interaction may be needed first

### Volume Too Low/High

Adjust the volume in soundManager.js or programmatically:

```javascript
soundManager.setVolume(0.5); // 50% volume
```

### Sounds Play Too Often

This happens when many elements trigger sounds. Consider:
- Using more specific selectors
- Adding debouncing logic
- Removing sound from some element types

### Console Warnings

If you see warnings like "Sound file not found", it means you haven't added the sound files yet. This is expected until you add your custom sounds.

## Browser Compatibility

The sound system works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Note**: Some browsers have autoplay restrictions. The sound system handles these gracefully.

## Performance

The sound system is optimized for performance:
- Audio files are preloaded on page load
- Sounds use the Web Audio API efficiently
- No external libraries required
- Minimal memory footprint

## Accessibility

The sound system:
- Does not interfere with screen readers
- Can be disabled programmatically if needed
- Fails gracefully if sound files are missing
- Respects user preferences (can be extended to check system sound settings)

## Future Enhancements

You can extend the sound system to:
- Add more sound types (error, success, notification)
- Store user sound preferences in localStorage
- Add a UI toggle for users to mute sounds
- Implement different sounds for different button types
- Add sound visualization effects
