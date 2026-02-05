# Playwright E-commerce Testing (SauceDemo)

![Playwright](https://img.shields.io/badge/Playwright-Testing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-green)

## Overview
A Playwright + TypeScript project that automates the [SauceDemo](https://www.saucedemo.com) app.
Covers login scenarios and shopping flows such as cart actions, sorting, and checkout.

## What is covered
- Login: valid login, invalid password, empty credentials
- Shopping cart: add single item, remove single item, add all items, remove all items
- Shopping: sort products (A-Z, Z-A, low-high, high-low)
- Checkout: add items, fill customer info, complete order
- Assertions: title checks, selected sort value, and product order verification

## Structure
- `tests/login.spec.ts` - login tests
- `tests/shopping.spec.ts` - shopping tests (sorting, filters and checkout flow)
- `handlers/shoppingHandlers.ts` - shopping helpers
- `playwright.config.ts` - Playwright configuration

## Run tests
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```
