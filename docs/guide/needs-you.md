# Needs You

Needs You is the list of things waiting on you. It appears on the desktop app's Overview and in the terminal dashboard, so you can see in one glance whether any agent or job is stuck on you, and when nothing is, it says so: *nothing needs you*.

## What shows up

Flightdeck builds the list from local files, with no AI model involved. A row appears when:

- **An agent session is blocked on you**, for example waiting for an answer or a permission. For Claude Code sessions, Flightdeck tells blocked, working and waiting apart.
- **A session hit an error** recently, or has sat parked for hours.
- **A Slack DM is waiting on you**: the newest message in it is someone else's. The background sync checks your DMs every two minutes.
- **A job is switched on but doesn't run.** The row names the job and the reason, such as an unreadable note, and stays until you fix it.
- **A job's runner stopped** after three failed sessions in a row. It stays until you start the job again.
- **A runner holds an item but hasn't run for four hours.** The row gives you the exact `flightdeck job release` command to free it, or you can start the runner.
- **A question needs your answer.** Some questions can be answered right in the app, in your own words or by picking an offered option. Flightdeck hands your answer to an agent to act on.

::: info These are signals, not certainties
Some rows come from heuristics. A blocked row clears once the session shows new activity, and one older than 12 hours is dropped, because a session that was killed can't clear its own row.
:::

## How you hear about it

- **On the Mac:** the app and the dashboard update as rows come and go. Each change is also an event you can follow from a terminal:

  ```sh
  flightdeck events -f
  ```

  Look for `needs_you.raised` and `needs_you.cleared`.

- **From a job:** a job's prompt can raise its hand with `flightdeck notify needs-you`. You get a macOS notification titled with the job's name.
- **On your phone (optional):** with Pushover set up, a job's notification also reaches your phone, as only `<job id>: needs you`. The text stays on your Mac.

A job that fails is announced on its own, even if its prompt never got the chance to say so: the Mac shows that it didn't finish, and with Pushover set up, the phone gets `<job id>: failed`.

## Answering keeps work moving

An until-done job whose runner is waiting for work checks every 30 seconds for answers to open questions about its projects. When you answer one, the runner starts its next session right away instead of finishing its wait. See [Jobs](/guide/jobs).

## Coming soon

- **Monitors** show each monitor's own questions beside its board, and those rows still appear in Needs You, naming the monitor they belong to. See [Monitors](/guide/monitors).
- **The iPhone companion** will let you answer Needs You from your phone. See [The iPhone companion](/guide/companion).
