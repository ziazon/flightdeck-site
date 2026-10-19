# The iPhone companion

::: warning Coming soon: planned, not available
The iPhone companion is planned and approved, but it isn't built yet. Nothing on this page is available today, and details may change as it is built.
:::

The companion is a native iPhone app that drives Flightdeck on your Mac while you're away from it. Your Mac keeps doing the work; the phone lets you watch it and act on it.

## What it will do

- **Watch a monitor:** see a [monitor's](/guide/monitors) board on your phone.
- **Answer Needs You:** read what's waiting on you, type an answer or pick an offered option, and see whether your answer went through. See [Needs You](/guide/needs-you).
- **Start and stop jobs:** start and stop [jobs](/guide/jobs), and turn them on or off.
- **Run a command:** a command box runs a shell command on your Mac, in a project folder you've registered with Flightdeck. It runs without a terminal, stops after 10 minutes, and sends back the exit code and the end of the output. Every command is written to an audit log on your Mac.
- **Get notified:** a push notification when something needs you. The lock screen shows no details; the text loads when you open the app.

A monitor's chat and the Inbox's work actions are planned for the phone as well.

### With the redesign

- **Overview, Planner and Flights** come to the phone: follow a group's board, approve a plan and queue it, and start or stop a Flight.
- **Talk by voice:** a hold-to-talk button on every tab, so you can ask about your work and hear the answer.
- **Notifications move to the companion:** once its push notifications work, they replace the Pushover alerts Flightdeck uses today.

See [What's coming](/whats-coming#the-phone).

The companion will also run on Macs with Apple silicon, through the Mac App Store.

## How it's secured

The phone never talks to your Mac directly, and nothing passes through a server we run.

- **Your own iCloud.** The phone and the Mac exchange records through the private CloudKit database in your own iCloud account. Every field is end-to-end encrypted, so the records can't be read in iCloud.
- **Pairing is approved on your Mac.** The phone shows a six-digit code and its key's fingerprint. You run `flightdeck phone pair <code>` at your Mac, check the fingerprint and confirm. A QR code shown by the desktop app, scanned with the phone, will work too, and still ends with you confirming at the Mac. Signing in to the same iCloud account is never enough to pair.
- **Face ID protects every action.** The phone's signing key is created in the Secure Enclave and can't be used without Face ID or your passcode. One check covers five minutes of actions, so a run of answers costs one scan.
- **Your Mac checks every request.** Before anything runs, Flightdeck on your Mac checks the signature and the pairing, and refuses a request it has already seen or one older than 10 minutes by its own clock. Each request gets a receipt, so the phone shows whether it ran, was refused or expired.
- **Only Flightdeck's own actions.** The phone can trigger only the actions Flightdeck exposes to it, plus the command box. It can't type into a terminal or open an interactive shell.
- **Lost phone?** Revoke it from your Mac with `flightdeck phone revoke`, and its next request is refused.

::: info Your Mac needs to be on
The work happens on your Mac, so it needs to be on. While a phone is paired, Flightdeck keeps the Mac from going to sleep.
:::

## Where to get it

When the companion is ready, it will be on the App Store. Watch the [Download](/download) page.
