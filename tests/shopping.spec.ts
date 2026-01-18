import { test, expect } from '@playwright/test';
import {
  addItem,
  addAllItems,
  removeItem,
  reomveAllItems,
} from '../handlers/shoppingHandlers';

test.describe('Shopping cart - Actions', () => {
  test('TC01 - Add single item to cart', async ({ page }) => {       // can use test.only -> to run only 1 test 
    await page.goto('/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await addItem(page);
  });

  test('TC02 - Remove single item from cart', async ({ page }) => {
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

test.describe('Inventory - Sort Filters', ()=> {

  // send values and sort based on the passing value
  test.only('TC01 - Apply filters by value options)', async ({ page }) => {
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

