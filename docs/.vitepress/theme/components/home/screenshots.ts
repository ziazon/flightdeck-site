/**
 * The app screenshots that exist in `docs/public/screenshots/`, each as `<name>-light.png` and
 * `<name>-dark.png`, taken from sample data. A section shows its screenshot only once the name is
 * listed here, so the site never renders a broken image.
 */
export const screenshots: readonly string[] = []

export const hasScreenshot = (name: string) => screenshots.includes(name)
