import { test, expect } from '@playwright/test';

test('sing_up', async ({ page }) => {

  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('Archimatch');
  // Wait for 5 seconds
  await new Promise(resolve => setTimeout(resolve, 5000));

});

test('realisation', async ({ page }) => {
  await page.goto('http://localhost:3000/en');
  await page.getByRole('heading', { name: 'An Booster to_Your_NextJS_Apps' }).click();
  await page.getByText('An_approachable_performant_and_versatile_boilerplate_for_building_SSR_applicatio').click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Learn_More' }).click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Use_Template' }).click();
  const page4 = await page4Promise;
  await page.getByLabel('Open Tanstack query devtools').click();
  await page.getByPlaceholder('Filter').fill('hemm');
  await page.getByPlaceholder('Filter').press('Home');
  await page.getByPlaceholder('Filter').press('Home');
  await page.getByRole('combobox').selectOption('query hash');
  await page.getByLabel('Sort order ascending').click();
  await page.getByLabel('Clear query cache').click();
  await page.getByLabel('Mock offline behavior').click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByLabel('Open in picture-in-picture').click();
  const page5 = await page5Promise;
});