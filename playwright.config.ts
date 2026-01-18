import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests', 
  globalSetup: require.resolve('./auth.setup'),       // regenrates the auth.json so it's valid everytime  
  timeout: 30 * 1000,              
  expect: {
    timeout: 5000,                 
  },
 
  //retries: 1,  
                      
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }], 
    ['list'],                      
  ],
  use: {
    baseURL: 'https://www.saucedemo.com', 
    storageState: 'auth.json',         // add this instead of adding test.use({ storageState: 'auth.json' }); to every test
   // headless: true,    
     launchOptions: {
    slowMo: 1000,
  },                    
    screenshot: 'only-on-failure',         
    trace: 'retain-on-failure',           
    actionTimeout: 10000,   
               
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  workers: 1,                  
});
