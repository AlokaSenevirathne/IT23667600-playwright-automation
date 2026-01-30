const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

const getInputBox = (page) => page.locator('textarea');

/* ===================== POSITIVE FUNCTIONAL TEST CASES (24) ===================== */

test('Pos_Fun_0001 – Greeting with time reference', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('suba raathriyak');
  await expect(input).toHaveValue('suba raathriyak');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0002 – Request for water', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('Karunaakara vathura dhenna');
  await expect(input).toHaveValue('Karunaakara vathura dhenna');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0003 – Simple daily expression', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mata badagini');
  await expect(input).toHaveValue('mata badagini');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0004 – Future plan statement', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama heta gaalu yanavaa');
  await expect(input).toHaveValue('mama heta gaalu yanavaa');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0005 – Past experience sharing', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama iiye chitharapatiyak balanna giya');
  await expect(input).toHaveValue('mama iiye chitharapatiyak balanna giya');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0006 – Question format', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('oyaata kiri oonedha?');
  await expect(input).toHaveValue('oyaata kiri oonedha?');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0007 – Compound sentence', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama office yanavaa, passe gym yanavaa, gedhara enavaa');
  await expect(input).toHaveValue('mama office yanavaa, passe gym yanavaa, gedhara enavaa');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0008 – Conditional sentence', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('vahinavaa nam mama ehee noyaa kelinma gedhara enavaa');
  await expect(input).toHaveValue('vahinavaa nam mama ehee noyaa kelinma gedhara enavaa');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0009 – Shopping list', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama alayi, karavilayi, luunuyi geenna kadee yannee');
  await expect(input).toHaveValue('mama alayi, karavilayi, luunuyi geenna kadee yannee');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0010 – Emphasized instruction', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('hari hari hodhata karanna');
  await expect(input).toHaveValue('hari hari hodhata karanna');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0011 – Ongoing action', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama eeka kathaa karamin innee');
  await expect(input).toHaveValue('mama eeka kathaa karamin innee');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0012 – Sports activity plan', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('api heta cricket match ekak sellam karamu');
  await expect(input).toHaveValue('api heta cricket match ekak sellam karamu');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0013 – Inability expression', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('nimalta ooka karanna baee');
  await expect(input).toHaveValue('nimalta ooka karanna baee');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0014 – Library visit', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('api pusthakalet yamu poth vagayak dhenna thiyenavaa');
  await expect(input).toHaveValue('api pusthakalet yamu poth vagayak dhenna thiyenavaa');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0015 – Past tense action', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('eyaa vathura biivaa');
  await expect(input).toHaveValue('eyaa vathura biivaa');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0016 – Polite request form', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('karuNaakara vathura dhenna puLuvandha? mata oonee');
  await expect(input).toHaveValue('karuNaakara vathura dhenna puLuvandha? mata oonee');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0017 – Social media platforms', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('Facebook, Instagram, Twitter, YouTube vagee social media thiyenavaa');
  await expect(input).toHaveValue('Facebook, Instagram, Twitter, YouTube vagee social media thiyenavaa');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0018 – Place names', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('Galle, Kandy, Jaffna vagee paLaath valata yanna aasai');
  await expect(input).toHaveValue('Galle, Kandy, Jaffna vagee paLaath valata yanna aasai');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0019 – Electronic devices', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('TV, AC, PC, LED wagee devices oyaata ganna puluvandha?');
  await expect(input).toHaveValue('TV, AC, PC, LED wagee devices oyaata ganna puluvandha?');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0020 – Emotional expression', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('ayyoo! ehema venavadha?');
  await expect(input).toHaveValue('ayyoo! ehema venavadha?');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0021 – Currency usage', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama Rs. 350000k vagee gaaNakata laptop ekak ganna hithanavaa');
  await expect(input).toHaveValue('mama Rs. 350000k vagee gaaNakata laptop ekak ganna hithanavaa');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0022 – Extra spacing', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama  kadee  yanavaa.');
  await expect(input).toHaveValue('mama  kadee  yanavaa.');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0023 – Multi-sentence input', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama heta kandy yanavaa. train eken yannee. kelinma enavaa.');
  await expect(input).toHaveValue('mama heta kandy yanavaa. train eken yannee. kelinma enavaa.');
  await page.waitForTimeout(1000);
});

test('Pos_Fun_0024 – Email request', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('karuNaakara mage resume eka email karala yavanavada?');
  await expect(input).toHaveValue('karuNaakara mage resume eka email karala yavanavada?');
  await page.waitForTimeout(1000);
});

/* ===================== NEGATIVE FUNCTIONAL TEST CASES (10) ===================== */

test('Neg_Fun_0001 – Misspelled word', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mata bathh oonee.');
  await expect(input).toHaveValue('mata bathh oonee.');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0002 – Joined words', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mamagedharayanavaabathkanna');
  await expect(input).toHaveValue('mamagedharayanavaabathkanna');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0003 – Special characters mixed', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill(',@#mama$%yanavaa&');
  await expect(input).toHaveValue(',@#mama$%yanavaa&');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0004 – Numbers only', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('1234567890');
  await expect(input).toHaveValue('1234567890');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0005 – Empty input', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('');
  await expect(input).toHaveValue('');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0006 – Random string', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('xyzpqrabcdef');
  await expect(input).toHaveValue('xyzpqrabcdef');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0007 – Mixed case letters', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('MaMa YaNaVaA KaDe');
  await expect(input).toHaveValue('MaMa YaNaVaA KaDe');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0008 – Incomplete sentence', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama kade yana.');
  await expect(input).toHaveValue('mama kade yana.');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0009 – Symbols only', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('!!!???!!!');
  await expect(input).toHaveValue('!!!???!!!');
  await page.waitForTimeout(1000);
});

test('Neg_Fun_0010 – Valid sentence repeated', async ({ page }) => {
  const input = getInputBox(page);
  await input.fill('mama gedhara yanavaa.');
  await expect(input).toHaveValue('mama gedhara yanavaa.');
  await page.waitForTimeout(1000);
});

/* ===================== UI TEST CASE ===================== */

test('Pos_UI_0001 – Clear input button functionality', async ({ page }) => {
  const input = getInputBox(page);

  // Enter text
  await input.fill('mama gedhara yanavaa');
  await expect(input).toHaveValue('mama gedhara yanavaa');

  // Click clear button
  const clearButton = page.locator('button:has-text("Clear")');
  await clearButton.click();

  // Verify input is cleared
  await expect(input).toHaveValue('');
});

