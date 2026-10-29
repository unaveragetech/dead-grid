# Dead Grid

Dead Grid is an Android app. Download the APK, install it, and update in place.

**Website:** https://unaveragetech.github.io/dead-grid/ (install guide, changelog and the SHA-256 of every release).

## Install on Android

1. Download the latest `.apk` from [Releases](https://github.com/unaveragetech/dead-grid/releases/latest). Wait for the download to finish before opening it.
2. Open the file and allow "install unknown apps" for your browser or file manager if Android asks.
3. Updates install over the existing app and keep its data.

## Checking a download

Each release has a `.sha256` file next to the `.apk`. If Android says the package can't be parsed, the download is
usually incomplete: compare `sha256sum <file>.apk` with that file and download again if they differ.

## Maintainers

Releases are made with the apkship kit: `apkship release`. It builds, checks the signing key,
creates the GitHub release and refreshes `docs/releases.json`, which both the website and the app's update check read.
