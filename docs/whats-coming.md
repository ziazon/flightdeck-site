---
title: What's coming
outline: [2, 3]
---

# What's coming: the redesign

::: warning In development: planned, not available
The whole desktop app is being redesigned. Every section has been designed and the work is under way, but none of it ships yet. Today's app works as the [guide](/guide/getting-started) describes, and details may change as it is built.
:::

The redesign is about one thing: watching a lot of agent work at once without hunting for it. Most of your time goes to one page that shows progress, everything else is a click or a keystroke away, and the app keeps working when your agents run on more than one machine.

## A new menu

The top menu becomes, in order: **Overview**, **Planner**, **Flights**, **Inbox**, **Buckets**, **Tickets**, **Skills**, **ToDos** and **Terminals**. The Settings gear stays at the right. Today's Jobs page is renamed **Flights**.

Every page shares the same parts: a page header, a row of key numbers, one table style with filters, and a side panel for the details of whatever you clicked. You can **pin** the side panel, so it stays open as you move between pages and follows what you select.

## The fleet bar

A thin bar across the top of every page gives a rough overview of all your machines. Hover it for more, or open it for a row per machine. It is built to stay readable with dozens of machines, not just one or two.

Your agent accounts' usage and limits move into the same bar, so you can see how close you are to a limit from any page.

## Overview: watch the work

Overview becomes the page you watch. It takes over what the Monitor screen was going to do:

- **A board** for the work in view: counters, an estimated finish, what is running now, recent runs and the run log.
- **Tabs beside it** for Needs you and Walks. Walks are the checks your agents could not do themselves, such as looking at a screen in light and dark, gathered into a checklist you walk through and record.
- **A chat bar** along the bottom to talk to the agents doing the work. You pick which Flight, or which group, the message goes to.

**Pick several Flights at once.** Select any mix of Flights to watch them together, for example two Flights working on the same product. Save a selection as a **group** to come back to it. A saved group takes the place of a [monitor](/guide/monitors): it keeps the monitor's notification rules and chat. The Overview opens on whatever you were last looking at.

**Since you last looked.** The numbers show what changed since your last visit, with a seven-day trend line.

## Planner

A new page for the plans your agents write before they build. A table of plans, grouped by **Waiting for you**, **Drafting**, **Approved**, **Executing** and **Done**, sits above the open plan. You read it, answer its questions in one go, approve it, and **Queue it**, which turns the approved plan into tickets, with a preview before anything is created. A plan waiting on you also shows in Needs you.

## Flights

Today's Jobs page, with the shared table and the pinnable side panel. A **Machine** filter shows only the Flights running on the machines you pick, and a one-line **Next up** strip shows what each Flight will take next. Attended sessions, the ones you are working in yourself, keep a section of their own.

## Inbox: a triage desk

The [Inbox](/guide/inbox) becomes a desk with the message list and a reading pane side by side. It opens on **To sort**, the messages that have no kind yet.

- **Auto-sort.** Sorting can run by itself, behind a switch you can turn off at any time, or you can press **Sort now** to sort once. Fixed rules go first, with no AI model. Only what the rules leave goes to a small Claude model, in batches, under a daily token limit shown on a meter.
- **Accept guesses in bulk.** **Review & accept** lists every guess at once. Move the ones that are wrong, then accept the rest in one click, and archive the chatter at the same time if you want. Undo is there if you change your mind.
- **Keyboard first.** `j` and `k` move, `x` selects, `e` archives.

Everything in today's Inbox plan still holds: your mark always wins, and nothing is posted to Slack unless you confirm it.

## Buckets, Tickets, Skills and ToDos

- **Buckets:** one table of your [work buckets](/guide/work-buckets), grouped by project, with the editor in the side panel. A bucket no Flight is working shows a **Not worked** label, and each one gets a seven-day trend.
- **Tickets:** one table across every tracker you connect, with a filter bar, grouped by status. A **Standup** mode walks you through your tickets one at a time, highest priority first.
- **Skills:** a list of your skills first, with the graph one click away. The graph still opens in today's circle layout.
- **ToDos:** a quick-add bar, and your to-dos grouped into **Today**, **This week**, **Later** and **Someday**.

## Terminals

Your terminal sessions, grouped by machine, in tabs, with split panes. Sessions keep running when you close the app. You can also open a read-only view of what a Flight's runner is doing.

## ⌘K: search and run

Press ⌘K on any page to find anything, a Flight, a plan, a ticket, a bucket, a skill, or to run an action without leaving the keyboard. On the Terminals page, actions come first.

## Settings and adding machines

Settings keeps today's appearance options. **Settings › Fleet** shows the whole fleet in the main area: a summary row, then a table of machines, each editable with the same form as this Mac.

**Add a machine** gives you an install command for the system you pick. macOS is shown first. Linux comes next: Debian and Ubuntu first, then Fedora and RHEL, Arch, and other distributions. A Linux machine will run agents for you, without the desktop app. Windows is not planned for now.

## The phone

The [iPhone companion](/guide/companion) grows with the redesign:

- **Overview, Planner and Flights on the phone.** Follow a group's board, answer questions, approve a plan and queue it with Face ID, and start or stop a Flight.
- **Talk by voice.** A hold-to-talk button on every tab, so you can ask about your work and hear the answer.
- **Phone notifications from the companion.** Once its push notifications work, they replace the Pushover alerts Flightdeck uses today. The lock screen shows no details.
