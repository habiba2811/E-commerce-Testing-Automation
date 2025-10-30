import { test, expect } from '@playwright/test';

test.describe('Login Tests - Saucedemo', () => {

  test('TC01 - Valid Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);
  });

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
