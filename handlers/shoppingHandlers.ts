import { expect, type Page } from '@playwright/test';

async function addItem(page: Page) {
  await page.locator('[data-test^="add-to-cart"]').first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // If you want to check the count, use .shopping_cart_badge with toHaveText('1'). If you want to check the cart link exists, use [data-test="shopping-cart-link"] with toBeVisible().
}

async function addAllItems(page: Page) {
  const buttons = page.locator('[data-test^="add-to-cart"]'); //  ^ It means “attribute starts with”. So [data-test^="add-to-cart"] matches every button whose data-test value starts with add-to-cart-
  const handles = await buttons.elementHandles(); //Takes a snapshot of those buttons as real DOM elements. This is the key: when you click a button it changes to “Remove”, so the locator would shrink if you kept using it live. The snapshot stays fixed.

  for (const handle of handles) {
    await handle.scrollIntoViewIfNeeded();
    await handle.click();
  }
  await expect(page.locator('.shopping_cart_badge')).toHaveText(String(handles.length));
}

async function removeItem(page: Page) {
  await page.locator('[data-test^="remove-"]').first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0); // empty cart
}

async function reomveAllItems(page: Page) {
  const removeButtons = page.locator('[data-test^="remove-"]');
  const reomveHandles = await removeButtons.elementHandles();
  for (const handle of reomveHandles) {
    await handle.scrollIntoViewIfNeeded();
    await handle.click();
  }
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
}

export { addItem, addAllItems, removeItem, reomveAllItems };
