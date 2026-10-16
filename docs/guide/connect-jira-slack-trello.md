# Connect Jira, Slack and Trello

Flightdeck reads your tickets, cards and messages, and lets your agents comment, post and move work, through one client that only touches what you allow. This guide connects each service. You can connect any one of them on its own.

Two things are true for all three:

- **Credentials go in the macOS Keychain.** Paste each one into its field under **Settings › Integrations**, or pipe it in from the command line, for example `pbpaste | flightdeck secrets set slack`. A value is never shown again: the app and `flightdeck secrets status` only say whether it is set.
- **Nothing is reachable until you name it.** Flightdeck touches only the projects, boards and channels listed in `~/.config/flightdeck/config.toml`. Anything else is refused.

<AppScreenshot name="settings" alt="Flightdeck's Settings page" />

## Name a project

Each Jira project or Trello board belongs to a project entry in `config.toml`, which points to a small `.standup.json` file, usually in the project's repository:

```toml
[projects]
my-app = "~/projects/my-app/.standup.json"
```

The sections below say what goes in that file. Because it lives in the repository, review changes to it as you would any config: it decides what Flightdeck may touch.

## Jira

Flightdeck can reach Jira in two ways. An API token is quicker to set up; OAuth avoids a long-lived token.

### Option A: an API token

1. Create an API token in your Atlassian account settings.
2. Store it: paste it into **API token (only without OAuth)** under Settings › Integrations, or run `pbpaste | flightdeck secrets set jira`.
3. Add the email address of that Atlassian account to `config.toml`:

   ```toml
   [identity]
   jira_email = "you@example.com"
   ```

### Option B: OAuth

1. Create an OAuth 2.0 (3LO) app in the Atlassian developer console. Give it the Jira scopes `read:jira-work` and `write:jira-work`, and register exactly this callback URL: `http://localhost:8766/callback`.
2. Save the app's client id in **OAuth client id** (or `flightdeck link config set jira.oauth.clientId <id>`), and its secret in **OAuth client secret** (or `pbpaste | flightdeck secrets set jira-oauth`).
3. Click **Connect Jira** (or run `flightdeck jira auth`). Atlassian's consent page opens in your browser; approve it within 5 minutes. Integrations then shows **Authorized: Yes**.
4. OAuth also needs your site's cloud id. Open `https://<your-site>.atlassian.net/_edge/tenant_info` and copy the `cloudId`.

### Point a project at Jira

In the project's `.standup.json`:

```json
{
  "jira": {
    "site": "https://your-site.atlassian.net",
    "projectKey": "APP",
    "cloudId": "<cloudId, for OAuth only>"
  }
}
```

Once one Jira project works, **Link Jira project** on the **Work** page sets up the next one for you: it reads the project's statuses, lets you map them to columns, and writes the file after showing a preview.

### Check it

```sh
flightdeck link status                          # what is set, and the last sync
flightdeck jira --project my-app projects       # every project your credential can see
```

Jira syncs every 5 minutes. The **Work** page lists the tickets assigned to you.

## Slack

Flightdeck uses a Slack **user token** from a small Slack app of your own, so what it posts goes out as you, with a "via Flightdeck" footer.

1. Create a Slack app for your workspace and give it these **User Token Scopes**: `channels:history`, `im:history`, `chat:write`, `reactions:write`, `users:read`, `channels:read`, `groups:read`, `im:read`, `im:write` and `files:read`. Install it to your workspace and copy the user token. A missing scope fails with an error that names it.
2. Store it: paste it into **User token** under Settings › Integrations, or run `pbpaste | flightdeck secrets set slack`.
3. Add your own Slack user id to `config.toml`:

   ```toml
   [identity]
   slack_self = "U0123456789"
   ```

4. Add the channels Flightdeck may read. Under **Channels**, pick a **Channel or person**, give it an **Alias**, choose an **Inbox type**, and click **Add**. From the command line:

   ```sh
   flightdeck link config set slack.channels.team C0123456789
   flightdeck link config set slack.channels.team.type work-discussion
   ```

   The Inbox types are `self-dm`, `work-discussion`, `outstanding-prs` and `standup`.
5. Optionally, choose your DM with yourself as the **Self-DM**. A note you leave there for yourself, and haven't answered, shows up in [Needs You](/guide/needs-you).

Slack syncs every 2 minutes, reading the last 14 days of each DM and typed channel into the [Inbox](/guide/inbox). `flightdeck slack channels` and `flightdeck slack users` list what your token can see.

## Trello

1. Get your Trello API key and a token for it from Trello's developer pages.
2. Store both: paste them into **API key** and **Token** under Settings › Integrations, or run `pbpaste | flightdeck secrets set trello-key`, then the same with `trello`. They are a pair: once either is set, both must be.
3. Point a project at its board in the project's `.standup.json`:

   ```json
   {
     "trello": {
       "board": "<board id>"
     }
   }
   ```

   To find a board's id, open the board in your browser, add `.json` to the end of its address, and copy the first `"id"`.

Once one Trello project works, **New board** on the **Work** page creates a new board with Flightdeck's columns and adds it as a project for you.

### Check it

```sh
flightdeck trello --project my-app lists
```

Trello syncs every 15 minutes, and the board's cards appear on the **Work** page.
