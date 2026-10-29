## Dead Grid 1.4.1: quieter rain and reliable downloads

Android `.apk` only.

### What's new
- **Sound settings** (More → Sound, or About → Sound settings): separate sliders for master volume, effects, music, ambience and weather, saved on your phone.

### Fixes
- **Rain is no longer deafening.** An old rain layer was still playing loud white noise underneath the newer rain sound. It's gone, and the remaining rain, drips and thunder are much quieter and softer, with a weather volume slider of their own. Measured on the game's output, rain used to push the whole mix about 4.5 dB louder; it no longer raises the overall level at all.
- **Downloads from the website are reliable.** The download buttons now link straight to a copy of the APK on the website itself, with no redirect to GitHub's storage servers, and they work even if the page's scripts haven't loaded. The GitHub release link is still there as a backup, along with a note about in-app browsers that block downloads.
- The in-app update check downloads from the same direct link.

### Tested
- Measured the game's audio output in clear weather and in rain, outside and inside the bunker, before and after the change.
- Checked that the website's download link responds directly with the APK, without a redirect.
- The APK built, signed with the pinned key and passed the version check. It has not been run on a physical phone.
