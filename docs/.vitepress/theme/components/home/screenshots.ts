/**
 * The app screenshots that exist in `docs/public/screenshots/`, each as `<name>-light.png` and
 * `<name>-dark.png`, taken from sample data. A section shows its screenshot only once the name is
 * listed here, so the site never renders a broken image. They come from the app's `site-screenshots` e2e
 * spec, which walks the real app over its fixture data.
 */
export const screenshots: readonly string[] = ['overview', 'work-buckets', 'jobs', 'skills', 'settings']

export const hasScreenshot = (name: string) => screenshots.includes(name)
