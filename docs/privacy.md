---
title: Privacy
outline: false
---

# Privacy

*Effective October 15, 2026.* Flightdeck collects nothing about you. There is no Flightdeck account and
no Flightdeck server, so there is nowhere for your data to go.

## This website

- The site is hosted on GitHub Pages. GitHub receives the usual request data (such as your IP address)
  when you visit, under [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).
- We use no analytics, no cookies and no third-party scripts.
- Your light or dark preference is kept in your browser's local storage and never leaves your device.

## The Mac app

- The desktop app makes no network calls and opens no port.
- Network access happens outside the app, and only to services you set up yourself: a separate
  command-line client talks to Jira, Slack, Trello and Pushover, and the background service reads your
  pull requests' status from GitHub through your own GitHub CLI login. Everything goes straight from your
  Mac to those services, under their own privacy policies, and never through us.
- Credentials for Jira, Slack, Trello and Pushover are stored in your Mac's Keychain.
- Your workspace, records and settings are files on your Mac.

## The iPhone companion (coming soon)

- The companion talks to your Mac only through your own iCloud private database. Its contents are
  stored as encrypted fields that Apple cannot read, and we never receive them.
- It collects no analytics and has no account of its own.
- This policy will be updated before the companion is released.

## Contact

Questions about privacy: open an issue on [GitHub](https://github.com/ziazon/flightdeck-site/issues).
