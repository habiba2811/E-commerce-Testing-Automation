import { test, expect } from '@playwright/test';
import {
  addItem,
  addAllItems,
  removeItem,
  reomveAllItems,
} from '../handlers/shoppingHandlers';

test.describe('Shopping Tests - Cart functions', () => {
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

test.describe('Shopping Tests - Filters', ()=> {

  // send values and sort based on the passing value
  test.only('TC01 - Apply filters by value)', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    const sort = page.locator('[data-test="product-sort-container"]');
    const values =['az','za','lohi','hilo']
    for(var i=0; i<values.length; i++){
      var currentValue= values[i]
      await sort.selectOption({ value: currentValue});
      await expect(sort).toHaveValue(`${currentValue}`);
    }
  })
})

