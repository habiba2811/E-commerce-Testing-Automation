# Playwright E-commerce Testing (SauceDemo)

## Overview
A Playwright + TypeScript project that automates the [SauceDemo](https://www.saucedemo.com) app.
Covers login scenarios and shopping flows such as cart actions and sorting.

## What is covered
- Login: valid login, invalid password, empty credentials
- Shopping cart: add single item, remove single item, add all items, remove all items
- Shopping: sort products (A-Z, Z-A, low-high, high-low)
- Assertions: title checks, selected sort value, and product order verification

## Structure
- `tests/login.spec.ts` - login tests
- `tests/shopping.spec.ts` - shopping tests (sorting and filters)
- `handlers/shoppingHandlers.ts` - shopping helpers
- `playwright.config.ts` - Playwright configuration

## Run tests
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```
