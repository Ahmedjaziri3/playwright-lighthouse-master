
import { PlaywrightTestConfig, devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
  timeout: 600000,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium', headless: false },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        headless: false,
        // channel: 'firefox',
        // executablePath: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe', // Path to your Firefox executable
      },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit', headless: false },
    },
    // {
    //   name: 'iPhone 12',
    //   use: {
    //     browserName: 'webkit',
    //     ...devices['iPhone 12'],
    //   },
    // },
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};


export default config;