import { test, expect } from '@playwright/test'

test.describe('Wedding Starter - Non-Demo Mode', () => {
  test('homepage loads with wedding content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Emma.*James/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Emma')
  })

  test('homepage shows stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Sept 12', { exact: true })).toBeVisible()
    await expect(page.getByText('Rosewood', { exact: true })).toBeVisible()
    await expect(page.getByText('Guests Invited')).toBeVisible()
  })

  test('events page lists all events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.getByRole('heading', { name: 'Events' }).first()).toBeVisible()
    await expect(page.getByText('Welcome Dinner').first()).toBeVisible()
    await expect(page.getByText('Wedding Ceremony').first()).toBeVisible()
    await expect(page.getByText('Reception', { exact: false }).first()).toBeVisible()
  })

  test('event detail page renders content', async ({ page }) => {
    await page.goto('/events/welcome-dinner')
    await expect(page.getByRole('heading', { name: 'Welcome Dinner' }).first()).toBeVisible()
    await expect(page.getByText('wood-fired pizza')).toBeVisible()
  })

  test('our story page lists chapters', async ({ page }) => {
    await page.goto('/our-story')
    await expect(page.getByText('How We Met').first()).toBeVisible()
    await expect(page.getByText('The Proposal').first()).toBeVisible()
  })

  test('story chapter detail page renders', async ({ page }) => {
    await page.goto('/our-story/the-proposal')
    await expect(page.getByRole('heading', { name: 'The Proposal' }).first()).toBeVisible()
    await expect(page.getByText('Mount Tamalpais').first()).toBeVisible()
  })

  test('info page lists RSVP info cards', async ({ page }) => {
    await page.goto('/info')
    await expect(page.getByText('RSVP Details').first()).toBeVisible()
    await expect(page.getByText('Accommodations', { exact: false }).first()).toBeVisible()
    await expect(page.getByText('Things to Do').first()).toBeVisible()
  })

  test('info detail page renders', async ({ page }) => {
    await page.goto('/info/accommodations')
    await expect(page.getByRole('heading', { name: /Accommodations/ }).first()).toBeVisible()
    await expect(page.getByText('Meadowlark').first()).toBeVisible()
  })

  test('static pages render via catch-all route', async ({ page }) => {
    await page.goto('/registry')
    await expect(page.getByRole('heading', { name: 'Gift Registry' })).toBeVisible()
    await expect(page.getByText('Crate', { exact: false }).first()).toBeVisible()
  })

  test('navigation header is present on all pages', async ({ page }) => {
    await page.goto('/events')
    await expect(page.getByRole('banner')).toBeVisible()
  })
})
