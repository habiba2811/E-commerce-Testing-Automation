import { test, expect } from '@playwright/test';

const validUsers = [
  'standard_user',
  'locked_out_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
];

test.describe('Login Tests - Saucedemo', () => {
  for (const username of validUsers) {
    test(`TC01 - Valid Login with user: ${username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', username);
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');

      if (username === 'locked_out_user') {
        await expect(page.locator('[data-test="error"]')).toContainText('locked out');
      } else {
        await expect(page).toHaveURL(/inventory.html/);
        await page.goto('https://www.saucedemo.com/');
      }
    });
  }

  test('TC02 - Invalid Password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_pass');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
  });

  test('TC03 - Empty Credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });
});
