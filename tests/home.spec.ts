import { test, expect } from '@playwright/test';

test('homepage has title and links to blog', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rasgo - Interactive Data Catalog/);

  // create a locator
  const blogs = page.getByRole('link', { name: 'Blogs' })

  // Expect an attribute "to be strictly equal" to the value.
  await expect(blogs).toHaveAttribute('href', '/blog');

  // Click the rasgo link.
  await blogs.click();

  // Expects the URL to be the blog.
  await expect(page).toHaveURL('https://www.rasgoml.com/blog');
});
