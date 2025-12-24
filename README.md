# mikeguerrasound
Sound Design Portfolio

🌐 **Live Website:** https://mikeguerra14.github.io/mikeguerrasound/

## About

Professional sound design portfolio showcasing work in film sound design, game audio, technical audio, and foley/SFX production.

## 🔊 UI Sounds Feature

This website now includes an interactive UI sound system! The system plays audio feedback when users hover over or click buttons and links throughout the site.

### Quick Setup

1. **Add your sound files** to the `assets/sounds/` directory:
   - `hover.mp3` - Plays when hovering over buttons
   - `click.mp3` - Plays when clicking buttons

2. **That's it!** The sound system is already integrated into all pages.

### Documentation

- **[UI Sounds Guide](UI_SOUNDS_GUIDE.md)** - Complete documentation on customization and usage
- **[Test Page](test-sounds.html)** - Open this file in a browser to test the sound system

### Files Added/Modified

- `soundManager.js` - Sound management system
- `script.js` - Added sound initialization
- All HTML pages - Added soundManager.js script
- `assets/sounds/` - Directory for sound files
- `test-sounds.html` - Test page for verifying sounds work
- `UI_SOUNDS_GUIDE.md` - Comprehensive documentation

For more details, see [UI_SOUNDS_GUIDE.md](UI_SOUNDS_GUIDE.md).

## 🚀 Deployment

This website is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch.

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions workflow automatically triggers
3. Site is built and deployed to GitHub Pages
4. Live site is accessible at: https://mikeguerra14.github.io/mikeguerrasound/

### Manual Deployment

You can also manually trigger deployment from the Actions tab in GitHub by running the "Deploy to GitHub Pages" workflow.

