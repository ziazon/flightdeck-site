# Run a job on a schedule

A scheduled job starts an agent at fixed times: a morning triage, a weekly report, a check every 20 minutes. Each start is one session with the job's prompt. macOS starts it through launchd, so it runs whether or not the app is open.

## 1. Create the job

1. Open **Jobs** and click **New job**.
2. Under **Kind**, choose **On a schedule**.
3. In **Every**, write when it runs (see [the schedule format](#the-schedule-format) below), for example `0 8 * * 1` for Mondays at 08:00.
4. Fill in **Name**, **Description**, **Timeout (seconds)**, the **Profile** (and **Repo** for a Work profile), and the **Prompt**.
5. Click **Create job**. A new job starts **Off**.

## 2. Turn it on

Flip the job's switch to **On**, or run `flightdeck job enable <id>`. From then on it runs at every time the schedule names. Off stops future runs; it does not stop one in progress.

To try it straight away, open the job's **Details**, go to **Runs** and click **Run now**. Run now needs the job to be On.

## The schedule format

The schedule has five fields, in your Mac's local time: `minute hour * * days`.

| Field | What it takes |
| --- | --- |
| minute | `0` to `59`, or every N minutes: `*/10`, `*/12`, `*/15`, `*/20` or `*/30` |
| hour | `0` to `23`, or `*` for every hour |
| days | `*` for every day, or a comma list of `0` to `7` (`0` and `7` are Sunday) |

The middle two fields are always `*`.

| Schedule | Runs |
| --- | --- |
| `0 8 * * 1,2,3,4,5` | 08:00 on weekdays |
| `30 9 * * 1` | 09:30 every Monday |
| `*/20 * * * *` | every 20 minutes |

## When the Mac was asleep

A run missed while the Mac slept is not replayed one by one: only the newest missed time runs, once, when the Mac wakes. On the night the clocks go back, the repeated hour runs nothing.

## A job with no schedule

Leave **Every** empty and the job runs only when you click **Run now**. That is useful for a task you want to start by hand but keep written down.
