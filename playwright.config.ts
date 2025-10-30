import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',             
  timeout: 30 * 1000,              
  expect: {
    timeout: 5000,                 
  },
  retries: 1,                      
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }], 
    ['list'],                      
  ],
  use: {
    baseURL: 'https://www.saucedemo.com', 
   // headless: true,                        
    screenshot: 'only-on-failure',         
    trace: 'retain-on-failure',           
    actionTimeout: 10000,                  
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  workers: 3,                  
});
