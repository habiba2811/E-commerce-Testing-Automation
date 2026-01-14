import { test, expect } from '@playwright/test';
import {
  addItem,
  addAllItems,
  removeItem,
  reomveAllItems,
} from '../handlers/shoppingHandlers';

test.describe('Shopping Tests - Saucedemo', () => {
  test('TC01 - Add 1 item to cart', async ({ page }) => {       // can use test.only -> to run only 1 test 
    await page.goto('/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await addItem(page);
  });

  test('TC02 - Remove 1 item from cart', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await addItem(page);
    await removeItem(page);
  });

  test('TC03 - Adding all items to cart', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await addAllItems(page);
  });

  test('TC04 - Reomve all items from cart', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await addAllItems(page);
    await reomveAllItems(page);
  });
});
