import { test, expect } from '@playwright/test';

test('homepage has title and link to home', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rasgo - Interactive Data Catalog/);

  // create a locator
  const home = page.getByRole('link', { name: 'home' })

  // Expect an attribute "to be strictly equal" to the value.
  await expect(home).toHaveAttribute('href', '/');

  // Click the rasgo link.
  await home.click();

  // Expects the URL to be home.
  await expect(page).toHaveURL('https://www.rasgoml.com');
});
