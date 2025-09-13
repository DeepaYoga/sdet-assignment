// @ts-check
import { test, expect } from '@playwright/test';

test('UI Automation Task for Playwright.dev', async ({ page }) => {
  //step 1: navigate to base URL
  await page.goto('https://playwright.dev');

  // Step 2: Perform search for "API testing"
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('API testing');

  
  const searchResults = page.locator('.DocSearch-Hit');
  await expect(searchResults.first()).toBeVisible();
  await page.click('a[href="/docs/api-testing"]');

  //step 3: Verify Page title
  await expect(page).toHaveTitle('API testing | Playwright');

  // step 4: verify the docs is active and it is visible
   await page.getByRole('link', { name: 'Docs' }).hover();
   //step 5: Go to Annotations and click on it
  await page.getByRole('link', { name: 'Annotations' }).click();

  // Step 6: Find “Skip a test” section, get href and print to console
  const skipLink = page.locator("//a[normalize-space(text())='Skip a test']")
  const href = await skipLink.getAttribute('href');
  console.log('Href for "Skip a test":', href);
  
});
