import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


//web test :

test('login', async ({ page }) => {
  await page.goto('http://localhost:3000');//in config
  await expect(page).toHaveTitle('Archimatch');
  // Wait for 5 seconds
  await new Promise(resolve => setTimeout(resolve, 5000));

});

//mobile test :

// import { remote } from 'webdriverio';

// describe('My App Test', () => {
//   let client: WebdriverIO.Browser;

//   before(async () => {
//     const opts = {
//       path: '/wd/hub',
//       port: 4723,
//       capabilities: {
//         platformName: 'Android',
//         platformVersion: '13.0', // Specify your Android version
//         deviceName: 'emulator-5554', // Specify your device or emulator name
//         app: 'com.archimatch_mobile.development', // Path to your app
//         automationName: 'UiAutomator2'
//       }
//     };

//     client = await remote(opts);
//   });

//   it('should wait for 5 seconds', async () => {
//     await client.pause(5000); // Wait for 5 seconds
//   });

//   after(async () => {
//     await client.deleteSession();
//   });
// });

