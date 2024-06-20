import { playAudit } from 'playwright-lighthouse';
import playwright from 'playwright';
import { test } from '@playwright/test';
import { format } from 'date-fns';


test.describe('audit example', () => {
    test('open browser', async () => {
    const formattedDate = format(new Date(), 'yyyy-MM-dd_HH-mm-ss');

    const browser = await playwright['chromium'].launch({
      args: ['--remote-debugging-port=9222'],
    });
    const page = await browser.newPage();
    await page.goto('https://angular.io/');

    await playAudit({
      page: page,
      thresholds: {
        performance: 30,
        accessibility: 60,
        'best-practices': 60,
        seo: 60,
        pwa: 0,
      },
      reports: {
        formats: {
          json: true, //defaults to false
          html: true, //defaults to false
          csv: true, //defaults to false
        },
        name: `lighthouse-${formattedDate}`, //defaults to `lighthouse-${new Date().getTime()}`
        directory: `${process.cwd()}/lighthouse`, //defaults to `${process.cwd()}/lighthouse`
      },
      port: 9222,
    });

    await browser.close();
  }, 600000);
});