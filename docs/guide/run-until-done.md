# Run an agent until its work is done

This guide sets up an agent that works through a list of tickets on its own and stops when the list is empty. You need the Flightdeck app, Claude Code signed in on your Mac, and a project with tickets in Jira or Trello ([connect them first](/guide/connect-jira-slack-trello)).

It takes three pieces: a [work bucket](/guide/work-buckets) that says which tickets, a [job](/guide/jobs) that says what the agent does with each one, and the job's timeline, which points the job at the bucket.

<AppScreenshot name="work-buckets" alt="The Work Buckets page with sample buckets" />

## 1. Make a bucket of work

1. Open **Work Buckets** and click **New bucket**.
2. Give it a **Name** and pick the **Project** its tickets live in.
3. Add the work: choose a kind (**Ticket**, **Epic**, **Label** or **Plan**), enter its key or name, and click **Add**. Repeat for each one. For Jira you can also add a **JQL clause**.
4. Click **Create bucket**.

The bucket is a markdown note in your workspace, so you can also edit it by hand.

## 2. Create the job

1. Open **Jobs** and click **New job**.
2. Under **Kind**, choose **Run until done**.
3. Set **Runners** (1 to 5) for how many agents work side by side, and **Start each one** for how many minutes apart they start.
4. Under **Start**, keep **By hand only**. (**Start at…** starts it once at a time you pick; **Start every…** starts it on a schedule.)
5. Fill in **Name**, **Description** and **Timeout (seconds)**, the limit for each session.
6. Choose a **Profile**:
   - **Work** runs the agent with your Claude Code hooks and settings, in auto permission mode, in a fresh git worktree of the **Repo** you name.
   - **Narrow** gives it only the tools you list under **Allowed tools**.
7. Write the **Prompt**. Tell the agent to take its work from Flightdeck and report each item back:

   ```text
   Take the next item with `flightdeck job next`, finish it, open a pull request,
   then report it with `flightdeck job done`. If you can't take an item now,
   give it back with `flightdeck job pass`.
   ```

8. Click **Create job**. A new job starts **Off**.

::: warning A work job runs code as you
A **Work** profile job can do anything you can do in that repository. Read the prompt before you turn it on.
:::

## 3. Point the job at the bucket

1. On the job's card, click **Details**, then open the **Timeline** tab.
2. Click **Add**, pick your bucket, and click **Save timeline**.

The timeline can only be edited while the job is Off. With more than one bucket, each one starts at an item count you choose, so a second bucket can wait until the first is partly done.

## 4. Turn it on and start it

1. Flip the job's switch to **On**. Nothing runs yet.
2. Click **Start**.

The same from the command line, with the job's id:

```sh
flightdeck job enable <id>
flightdeck job start <id>
```

<AppScreenshot name="jobs" alt="The Jobs page with sample jobs" />

## 5. Watch it work

The job's card under **Run until done** shows where it is: **Running 2 of 2**, how many items are left, and **Done** with the time once it finishes. **Details** opens the job's runs, each with its outcome, a short status line and the session's final text. A question an agent can't answer alone shows up in [Needs You](/guide/needs-you).

## When it stops

- **The work runs out.** Each runner asks for the next item. When no runner gets one, the job is done.
- **You stop it.** Click **Stop**, or run `flightdeck job stop <id>`. Sessions already running finish their item, and no new one starts.
- **A runner keeps failing.** After three failed sessions in a row, that runner stops and the job shows up in Needs You.

To have a finished job start again by itself when new work lands in its buckets, turn on **Wake on new work** in its settings.
