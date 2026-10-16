# The Inbox

The Inbox collects the Slack messages that matter to your work and keeps track of what has been done with each one. Its job is to help you sort real requests from chatter and act on the real ones.

## Where messages come from

The background sync reads your Slack DMs, plus the channels you give an Inbox type in **Settings**, every two minutes. It keeps the last 14 days. Messages you sent are left out, except in a DM with yourself.

## Marks: what's been done with a message

Every message has a state: `unprocessed`, `noted`, `chatter` or `archived`.

You mark messages in the app. Agents can mark them too, from the command line:

```sh
flightdeck inbox read --channel <alias> --json
flightdeck inbox mark <alias> <ts> noted --by <name>
```

`--by` names the agent or job that handled the message.

::: tip Your mark always wins
When you have marked a message, an agent's mark never replaces it: `mark` prints `kept: the user's mark wins`. An agent can't pretend to be you either, since `--by user` is refused.
:::

## The Inbox overhaul

::: warning In development
Everything below is being built. Today's Inbox works as described above.
:::

The new Inbox sorts every message into a **kind**, then helps you act on it:

- **Work**: a real request.
- **Architecture note**: a decision or design point worth keeping.
- **Chatter**: nothing to act on.
- **Unsure**: a guess Flightdeck isn't confident about, shown with its two best guesses as buttons.

**Who guesses.** Fixed rules go first, with no AI model: a ticket key or a direct question to you points to Work, and bot posts or short acknowledgements point to Chatter. What the rules leave goes to a small Claude model that has no tools and treats the Slack text as data, never as instructions. It never posts, replies or archives anything in Slack. The rules and the model only make guesses, which show as dashed outlines with the reason on hover. One click confirms a guess, or you pick another kind. Your choice always wins.

**Bulk archive.** The Chatter list has one button to archive every guessed chatter message, after showing you the counts per channel, or you tick the ones you want.

**Work actions.** A Work message gets three buttons:

- **Draft ticket** opens a ticket form pre-filled from the message, with a link back to it. Nothing is filed until you confirm.
- **Add to bucket** puts the item in one of your [work buckets](/guide/work-buckets).
- **Send to monitor** hands the message to a [monitor's](/guide/monitors) chat.

Once the action is done, the message is archived with a link to what it became.

**It reads, it doesn't post.** The Inbox has no reply box. Sorting and archiving never touch Slack. The one exception is optional: once a Work action is done, you can send the sender a short reply in the message's thread, drafted for you, edited by you, and sent only when you confirm.

**More sources later.** Slack comes first, and Gmail is planned as a later source. Jira issues and Trello cards stay in Flightdeck's ticket and bucket views, not the Inbox.
