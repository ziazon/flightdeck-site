# Getting started

Flightdeck runs on your Mac beside the AI coding agents you already use, such as Claude Code. It shows what each session and job is doing, lists what needs you, and gives you one-click actions. This page covers what you need, where Flightdeck keeps its files, and how to connect Jira, Slack and Trello.

::: info Download coming soon
There is no public build yet. The [Download](/download) page will have it as soon as it is ready.
:::

## What you need

- **A Mac.** Flightdeck is built for macOS: it schedules work with launchd, watches files with FSEvents and keeps credentials in the macOS Keychain.
- **Git.** Your workspace is a git repository, and Flightdeck commits its own changes to it.
- **Claude Code**, to run jobs. Each job run is a headless Claude Code session.
- **Optional:** Jira, Slack or Trello accounts, if you want Flightdeck to read and act on them, and Obsidian, if you want to browse your workspace as a vault.

## The app and the command line

Flightdeck has two front ends that read the same local state:

- **The desktop app** is where you see everything at once and click to act: jobs, Needs You, accounts, settings.
- **The `flightdeck` command** does the same work from a terminal. Run `flightdeck` on its own for the live terminal dashboard, `flightdeck status` to print it once, and `flightdeck --help` for every command.

Both read state written by the Flightdeck daemon, a background process that macOS starts for you. See [How Flightdeck fits together](/guide/overview).

## Create your workspace

The workspace is the folder of markdown notes Flightdeck reads and writes. Preview what would be created, then create it:

```sh
flightdeck workspace init --dry-run
flightdeck workspace init
```

By default the workspace is `~/.flightdeck`. To put it somewhere else, set `workspace.root` in your configuration file before you run `init`. `init` only adds: it never removes or overwrites a file that is already there. It creates the folders, a starter `TEAM.md` for the rules your agents share, and a git repository. More in [The workspace](/guide/workspace).

## Your configuration file

`~/.config/flightdeck/config.toml` belongs to this Mac and holds no secrets. It says where your workspace is, which projects, boards and Slack channels Flightdeck may touch, and who it acts for. `flightdeck config` prints the resolved configuration.

Each project points at the project's `.standup.json`, which names its Jira site and project keys or its Trello board:

```toml
[projects]
my-app = "~/projects/my-app/.standup.json"
```

Anything not named in this file is refused. You register projects by editing the file. Settings such as Slack channel aliases can also be set from the app's **Settings › Integrations** or with `flightdeck link config set`.

## Connect Jira, Slack and Trello

Credentials live in the macOS Keychain. You add them yourself; Flightdeck reads each value from standard input, never from a command-line argument, and never prints it.

```sh
pbpaste | flightdeck secrets set slack
flightdeck secrets status   # true or false per item, never a value
flightdeck link status      # credentials, allowlist and last sync
```

- **Jira:** an Atlassian API token (`secrets set jira`), or an OAuth app's client secret (`secrets set jira-oauth`) followed by a one-time `flightdeck jira auth` in your browser.
- **Slack:** the user token of a small Slack app you create (`secrets set slack`). Posts go out as you. Add channels with `flightdeck link config set slack.channels.<alias> <channel-id>`; `flightdeck slack channels` lists the ones you are in.
- **Trello:** your key and token (`secrets set trello-key`, then `secrets set trello`).
- **Phone alerts (optional):** a Pushover token and user key (`pushover-token`, `pushover-user`).

::: warning Keep tokens out of your shell history
Never type `echo <token> | ...`. Copy the token and pipe it from `pbpaste`, as above.
:::

Everything Flightdeck writes for you is signed: Jira comments end with *via Flightdeck*, and Slack posts and Trello comments with `_via Flightdeck_`.

## Next steps

- [Work buckets](/guide/work-buckets): group the work your agents take on.
- [Jobs](/guide/jobs): run agents on a schedule or until the work is done.
- [Needs You](/guide/needs-you): see what is waiting on you.
