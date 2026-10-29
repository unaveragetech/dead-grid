## Dead Grid 1.4.2: play in your browser

Android `.apk` only. Or play in the browser, on any device.

### What's new
- **Play in the browser** at https://unaveragetech.github.io/dead-grid/play/: the full game with every feature, on iPhone, iPad, PC, Mac or Android, with no download. It's the exact same build as the Android app and updates with every release.
- **Install it like an app.** On iPhone or iPad, tap Share → Add to Home Screen. On Android or desktop, use the browser's Install option. It gets its own icon, runs full screen, and keeps working offline once loaded.
- **Self-updating.** The browser version checks for new releases. When one is out, a "Reload to update" button appears, and your save stays put.
- On wide screens the panels stay a readable width instead of stretching across the window.

### Fixes
- The website now has a Play button in the header and on the home page, alongside the Android download.

### Tested
- Ran the browser version at phone and desktop sizes: the start screen, the map, panels, the bunker and the About panel all work. The offline service worker registers.
- The APK built, signed with the pinned key and passed the version check. It has not been run on a physical phone.
