# Monitors

A monitor is a saved view of one stream of work: a set of [work buckets](/guide/work-buckets), the [jobs](/guide/jobs) that work them, and the repository the work happens in. It is where you will watch progress, answer questions and steer the agents doing that work.

::: warning In development
You can create and edit monitors today, from the command line. The Monitor screen in the desktop app (its board, questions column and chat) and the notification and wake rules are still being built. This page marks each part.
:::

## A monitor is a note

Each monitor is a note in your workspace's `monitors/` folder:

```markdown
---
fd: monitor
id: example-work
title: Example work
repo: ~/projects/example-app
buckets:
  - "[[ops-bucket-example]]"
jobs:
  - "[[example-job]]"
notify:
  - run-failed
  - question-opened
  - idle-runs
idle_runs: 3
wake_on:
  - run-failed
wake_prompt: "Look at the failed run and tell me what broke."
---
Free notes, kept byte for byte.
```

- **`buckets`**: 1 to 20 work buckets. **`jobs`**: up to 20 jobs.
- **`repo`**: the repository the monitor's work happens in, as a `~/` path.
- Unknown properties and the body are kept as you wrote them. Flightdeck never overwrites a monitor note it can't read.

## Manage monitors from the command line

Available now:

```sh
flightdeck monitor list
flightdeck monitor show example-work --json
flightdeck monitor create example-work --title "Example work" \
  --repo ~/projects/example-app --bucket ops-bucket-example \
  --job example-job --dry-run
flightdeck monitor edit example-work --notify run-failed
flightdeck monitor delete example-work
```

Buckets and jobs are given as bare ids, and each must already exist as a valid note. `--dry-run` checks everything and prints the note it would write, without writing anything. Each real change is committed to your workspace.

## The Monitor screen

::: info In development
:::

The desktop app will gain a **Monitors** screen:

- **A switcher** on the left lists your monitors, each with a status dot, its open-question count and an expected finish date.
- **A board** shows the stream's progress: counters, an estimate of when the work will be done, recent runs, what is running now, and the run log. The background sync already counts each bucket's open items for it.
- **A questions column** beside the board lists the open questions for this monitor, and you answer them in place. They also stay in [Needs You](/guide/needs-you).
- **A chat drawer** along the bottom lets you talk to the agents working the monitor. Each message starts a short headless run in the monitor's repository, one at a time, and the transcript stays on your Mac. Nothing runs while you're idle.

## Notification and wake rules

::: info In development
You can save these rules in a monitor note today. Acting on them is still being built.
:::

A monitor can notify you when:

| Rule | When it fires |
| --- | --- |
| `run-failed` | A run of one of its jobs failed |
| `question-opened` | A new question opened |
| `idle-runs` | `idle_runs` runs in a row found nothing to do (1 to 20) |
| `eta-slipped` | The estimated finish slipped by more than a day |

Flightdeck decides these from data, with no AI model. A **wake** rule goes one step further: when one of the chosen notifications fires, it starts a chat run with your `wake_prompt`. Every wake rule must also be a notify rule.
