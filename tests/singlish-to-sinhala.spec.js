const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

/**
 * Singlish input box (LEFT textarea)
 */
const getInputBox = (page) => page.locator('textarea').first();

/**
 * Sinhala output box (RIGHT panel – not a textarea)
 */
const getSinhalaOutputBox = (page) =>
  page.locator('div').filter({ hasText: /[\u0D80-\u0DFF]/ }).first();

/**
 * Helper: Validate Sinhala translation appears
 */
async function expectSinhalaOutput(page) {
  await page.waitForTimeout(2000);

  const outputText = await page.textContent('body');
  expect(outputText).toMatch(/[\u0D80-\u0DFF]/);
}

/* ===================== POSITIVE FUNCTIONAL TEST CASES (24) ===================== */

test('Pos_Fun_0001 – Greeting with time reference', async ({ page }) => {
  await getInputBox(page).fill('suba raathriyak');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0002 – Request for water', async ({ page }) => {
  await getInputBox(page).fill('Karunaakara vathura dhenna');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0003 – Simple daily expression', async ({ page }) => {
  await getInputBox(page).fill('mata badagini');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0004 – Future plan statement', async ({ page }) => {
  await getInputBox(page).fill('mama heta gaalu yanavaa');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0005 – Past experience sharing', async ({ page }) => {
  await getInputBox(page).fill('mama iiye chitharapatiyak balanna giya');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0006 – Question format', async ({ page }) => {
  await getInputBox(page).fill('oyaata kiri oonedha?');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0007 – Compound sentence', async ({ page }) => {
  await getInputBox(page).fill('mama office yanavaa, passe gym yanavaa, gedhara enavaa');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0008 – Conditional sentence', async ({ page }) => {
  await getInputBox(page).fill('vahinavaa nam mama ehee noyaa kelinma gedhara enavaa');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0009 – Shopping list', async ({ page }) => {
  await getInputBox(page).fill('mama alayi, karavilayi, luunuyi geenna kadee yannee');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0010 – Emphasized instruction', async ({ page }) => {
  await getInputBox(page).fill('hari hari hodhata karanna');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0011 – Ongoing action', async ({ page }) => {
  await getInputBox(page).fill('mama eeka kathaa karamin innee');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0012 – Sports activity plan', async ({ page }) => {
  await getInputBox(page).fill('api heta cricket match ekak sellam karamu');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0013 – Inability expression', async ({ page }) => {
  await getInputBox(page).fill('nimalta ooka karanna baee');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0014 – Library visit', async ({ page }) => {
  await getInputBox(page).fill('api pusthakalet yamu poth vagayak dhenna thiyenavaa');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0015 – Past tense action', async ({ page }) => {
  await getInputBox(page).fill('eyaa vathura biivaa');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0016 – Polite request form', async ({ page }) => {
  await getInputBox(page).fill('karuNaakara vathura dhenna puLuvandha? mata oonee');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0017 – Social media platforms', async ({ page }) => {
  await getInputBox(page).fill('Facebook, Instagram, Twitter, YouTube vagee social media thiyenavaa');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0018 – Place names', async ({ page }) => {
  await getInputBox(page).fill('Galle, Kandy, Jaffna vagee paLaath valata yanna aasai');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0019 – Electronic devices', async ({ page }) => {
  await getInputBox(page).fill('TV, AC, PC, LED wagee devices oyaata ganna puluvandha?');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0020 – Emotional expression', async ({ page }) => {
  await getInputBox(page).fill('ayyoo! ehema venavadha?');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0021 – Currency usage', async ({ page }) => {
  await getInputBox(page).fill('mama Rs. 350000k vagee gaaNakata laptop ekak ganna hithanavaa');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0022 – Extra spacing', async ({ page }) => {
  await getInputBox(page).fill('mama  kadee  yanavaa.');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0023 – Multi-sentence input', async ({ page }) => {
  await getInputBox(page).fill('mama heta kandy yanavaa. train eken yannee. kelinma enavaa.');
  await expectSinhalaOutput(page);
});

test('Pos_Fun_0024 – Email request', async ({ page }) => {
  await getInputBox(page).fill('karuNaakara mage resume eka email karala yavanavada?');
  await expectSinhalaOutput(page);
});

/* ===================== NEGATIVE FUNCTIONAL TEST CASES (10) ===================== */

test('Neg_Fun_0001 – Misspelled word', async ({ page }) => {
  await getInputBox(page).fill('mata bathh oonee.');
});

test('Neg_Fun_0002 – Joined words', async ({ page }) => {
  await getInputBox(page).fill('mamagedharayanavaabathkanna');
});

test('Neg_Fun_0003 – Special characters mixed', async ({ page }) => {
  await getInputBox(page).fill(',@#mama$%yanavaa&');
});

test('Neg_Fun_0004 – Numbers only', async ({ page }) => {
  await getInputBox(page).fill('1234567890');
});

test('Neg_Fun_0005 – Empty input', async ({ page }) => {
  await getInputBox(page).fill('');
});

test('Neg_Fun_0006 – Random string', async ({ page }) => {
  await getInputBox(page).fill('xyzpqrabcdef');
});

test('Neg_Fun_0007 – Mixed case letters', async ({ page }) => {
  await getInputBox(page).fill('MaMa YaNaVaA KaDe');
});

test('Neg_Fun_0008 – Incomplete sentence', async ({ page }) => {
  await getInputBox(page).fill('mama kade yana.');
});

test('Neg_Fun_0009 – Symbols only', async ({ page }) => {
  await getInputBox(page).fill('!!!???!!!');
});

test('Neg_Fun_0010 – Valid sentence repeated', async ({ page }) => {
  await getInputBox(page).fill('mama gedhara yanavaa.');
});

/* ===================== UI TEST CASE ===================== */

test('Pos_UI_0001 – Clear input button functionality', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama gedhara yanavaa');
  await page.locator('button:has-text("Clear")').click();
  await expect(input).toHaveValue('');
});
