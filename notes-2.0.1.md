## Dead Grid 2.0.1: smoother menus and a field log

Android `.apk`, or play in the browser.

### What's new
- **The tutorial is now a survivor's field log.** Instead of a system telling you the rules, you read 13 pages from someone working it out as they go: what the daylight is good for, why they walked the wall first, what they learned about water, and why they started writing down rules before anyone got bitten. Short notes under each entry still show exactly what to tap next.
- **A new log page on gear.** It covers stripping houses for parts, using the Workbench, and why people notice who goes without.
- **Field log in the menu.** The Tutorial button under More is now Field log, so you can read it again at any time.

### Fixes
- **Menus no longer flicker.** Open panels used to rebuild completely every 1.5 seconds. Now only the values that changed are updated, so your scroll position and buttons stay steady in every menu, not just during the tutorial.
- **The top bar is steadier.** Supplies, the clock and the camp status were being rewritten every frame even when nothing had changed. They now update only when a value changes, which also saves a little work on phones.
- **The tutorial spotlight is calmer.** The highlight and the log card move only when their target actually moves.
