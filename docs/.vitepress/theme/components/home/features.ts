import type { Component } from 'vue'
import {
  IconBellRinging,
  IconLayoutDashboard,
  IconMarkdown,
  IconPlugConnected,
  IconRepeat,
  IconTimeline,
} from '@tabler/icons-vue'

export interface Feature {
  icon: Component
  title: string
  text: string
  /** Shown as a badge when the feature is not in the app yet. */
  status?: 'In development' | 'Coming soon'
}

export const features: Feature[] = [
  {
    icon: IconLayoutDashboard,
    title: 'Every agent at a glance',
    text: 'See what each AI coding agent session is working on, which ones are waiting on you, and which look stuck.',
  },
  {
    icon: IconBellRinging,
    title: 'Needs You',
    text: 'One list of everything waiting on a human: an agent waiting for a reply, a question it parked, a session that errored, a job that cannot start.',
  },
  {
    icon: IconRepeat,
    title: 'Jobs that run themselves',
    text: 'Run an agent on a schedule, or until its work is done, with several runners sharing one queue.',
  },
  {
    icon: IconMarkdown,
    title: 'Plain markdown underneath',
    text: 'Jobs, work buckets and records are markdown notes in a folder you own. Open them in any editor, including Obsidian.',
  },
  {
    icon: IconPlugConnected,
    title: 'Jira, Slack and Trello',
    text: 'Agents read and write your tracker and chat through one allowlisted client that signs everything it sends.',
  },
  {
    icon: IconTimeline,
    title: 'Monitors and the Inbox',
    text: 'A board per stream of work, a chat with the agent behind it, and an inbox for the messages that need a decision.',
    status: 'In development',
  },
]
