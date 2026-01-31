// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('SwiftTranslator – Singlish ➜ Sinhala', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  });

  /**
   * Singlish input box (LEFT textarea)
   */
  const getInputBox = (page) => page.locator('textarea').first();

  /**
   * Sinhala characters regex (U+0D80–U+0DFF)
   */
  const SINHALA_REGEX = /[\u0D80-\u0DFF]/g;

  /**
   * Utility: Count Sinhala chars in a selector's textContent.
   * Uses 'body' to be resilient to page structure. We then assert deltas.
   */
  async function countSinhalaIn(page, selector = 'body') {
    const text = (await page.textContent(selector)) || '';
    const matches = text.match(SINHALA_REGEX);
    return matches ? matches.length : 0;
  }

  /**
   * Perform input action and wait a tick for translation
   */
  async function performInputAndSettle(page, text) {
    const input = getInputBox(page);
    await input.click({ force: true });
    await input.fill(''); // clear just in case
    await input.type(text, { delay: 20 }); // small delay to simulate real typing
    // Nudge any on-change/on-input logic
    await input.press('Enter').catch(() => {});
    // Give the app time to render translated output
    await page.waitForTimeout(2000);
  }

  /**
   * Expect Sinhala to appear (delta-based)
   */
  async function expectSinhalaOutput(page, text) {
    const before = await countSinhalaIn(page, 'body');
    await performInputAndSettle(page, text);
    const after = await countSinhalaIn(page, 'body');
    expect(after, `Expected Sinhala characters to increase after input: "${text}"`).toBeGreaterThan(before);
  }

  /**
   * Expect NO new Sinhala to appear (delta-based)
   * This passes if the page does not add new Sinhala text for invalid inputs.
   */
  async function expectNoSinhalaIncrease(page, text) {
    const before = await countSinhalaIn(page, 'body');
    await performInputAndSettle(page, text);
    const after = await countSinhalaIn(page, 'body');
    expect(
      after,
      `Expected NO additional Sinhala characters for invalid input: "${text}"`
    ).toBeLessThanOrEqual(before);
  }

  /* ===================== POSITIVE FUNCTIONAL TEST CASES (24) ===================== */

  test('Pos_Fun_0001 – Greeting with time reference', async ({ page }) => {
    await expectSinhalaOutput(page, 'suba raathriyak');
  });

  test('Pos_Fun_0002 – Request for water', async ({ page }) => {
    await expectSinhalaOutput(page, 'Karunaakara vathura dhenna');
  });

  test('Pos_Fun_0003 – Simple daily expression', async ({ page }) => {
    await expectSinhalaOutput(page, 'mata badagini');
  });

  test('Pos_Fun_0004 – Future plan statement', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama heta gaalu yanavaa');
  });

  test('Pos_Fun_0005 – Past experience sharing', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama iiye chitharapatiyak balanna giya');
  });

  test('Pos_Fun_0006 – Question format', async ({ page }) => {
    await expectSinhalaOutput(page, 'oyaata kiri oonedha?');
  });

  test('Pos_Fun_0007 – Compound sentence', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama office yanavaa, passe gym yanavaa, gedhara enavaa');
  });

  test('Pos_Fun_0008 – Conditional sentence', async ({ page }) => {
    await expectSinhalaOutput(page, 'vahinavaa nam mama ehee noyaa kelinma gedhara enavaa');
  });

  test('Pos_Fun_0009 – Shopping list', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama alayi, karavilayi, luunuyi geenna kadee yannee');
  });

  test('Pos_Fun_0010 – Emphasized instruction', async ({ page }) => {
    await expectSinhalaOutput(page, 'hari hari hodhata karanna');
  });

  test('Pos_Fun_0011 – Ongoing action', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama eeka kathaa karamin innee');
  });

  test('Pos_Fun_0012 – Sports activity plan', async ({ page }) => {
    await expectSinhalaOutput(page, 'api heta cricket match ekak sellam karamu');
  });

  test('Pos_Fun_0013 – Inability expression', async ({ page }) => {
    await expectSinhalaOutput(page, 'nimalta ooka karanna baee');
  });

  test('Pos_Fun_0014 – Library visit', async ({ page }) => {
    await expectSinhalaOutput(page, 'api pusthakalet yamu poth vagayak dhenna thiyenavaa');
  });

  test('Pos_Fun_0015 – Past tense action', async ({ page }) => {
    await expectSinhalaOutput(page, 'eyaa vathura biivaa');
  });

  test('Pos_Fun_0016 – Polite request form', async ({ page }) => {
    await expectSinhalaOutput(page, 'karuNaakara vathura dhenna puLuvandha? mata oonee');
  });

  test('Pos_Fun_0017 – Social media platforms', async ({ page }) => {
    await expectSinhalaOutput(page, 'Facebook, Instagram, Twitter, YouTube vagee social media thiyenavaa');
  });

  test('Pos_Fun_0018 – Place names', async ({ page }) => {
    await expectSinhalaOutput(page, 'Galle, Kandy, Jaffna vagee paLaath valata yanna aasai');
  });

  test('Pos_Fun_0019 – Electronic devices', async ({ page }) => {
    await expectSinhalaOutput(page, 'TV, AC, PC, LED wagee devices oyaata ganna puluvandha?');
  });

  test('Pos_Fun_0020 – Emotional expression', async ({ page }) => {
    await expectSinhalaOutput(page, 'ayyoo! ehema venavadha?');
  });

  test('Pos_Fun_0021 – Currency usage', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama Rs. 350000k vagee gaaNakata laptop ekak ganna hithanavaa');
  });

  test('Pos_Fun_0022 – Extra spacing', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama  kadee  yanavaa.');
  });

  test('Pos_Fun_0023 – Multi-sentence input', async ({ page }) => {
    await expectSinhalaOutput(page, 'mama heta kandy yanavaa. train eken yannee. kelinma enavaa.');
  });

  test('Pos_Fun_0024 – Email request', async ({ page }) => {
    await expectSinhalaOutput(page, 'karuNaakara mage resume eka email karala yavanavada?');
  });

  /* ===================== NEGATIVE FUNCTIONAL TEST CASES (10) ===================== */
  // These now ASSERT that Sinhala output does NOT increase.
  // If the app incorrectly produces Sinhala for these, the tests will FAIL (as desired).

  test('Neg_Fun_0001 – Misspelled word', async ({ page }) => {
    await expectNoSinhalaIncrease(page, 'mata bathh oonee.');
  });

  test('Neg_Fun_0002 – Joined words', async ({ page }) => {
    await expectNoSinhalaIncrease(page, 'mamagedharayanavaabathkanna');
  });

  test('Neg_Fun_0003 – Special characters mixed', async ({ page }) => {
    await expectNoSinhalaIncrease(page, ',@#mama$%yanavaa&');
  });

  test('Neg_Fun_0004 – Numbers only', async ({ page }) => {
    await expectNoSinhalaIncrease(page, '1234567890');
  });

  test('Neg_Fun_0005 – Empty input', async ({ page }) => {
    await expectNoSinhalaIncrease(page, '');
  });

  test('Neg_Fun_0006 – Random string', async ({ page }) => {
    await expectNoSinhalaIncrease(page, 'xyzpqrabcdef');
  });

  test('Neg_Fun_0007 – Mixed case letters', async ({ page }) => {
    await expectNoSinhalaIncrease(page, 'MaMa YaNaVaA KaDe');
  });

  test('Neg_Fun_0008 – Incomplete sentence', async ({ page }) => {
    await expectNoSinhalaIncrease(page, 'mama kade yana.');
  });

  test('Neg_Fun_0009 – Symbols only', async ({ page }) => {
    await expectNoSinhalaIncrease(page, '!!!???!!!');
  });

  test('Neg_Fun_0010 – Valid sentence repeated', async ({ page }) => {
    // If the app translates this, the test will fail (negative scenario).
    // You can repeat the same text twice if your intention is "repeated".
    await expectNoSinhalaIncrease(page, 'mama gedhara yanavaa.');
  });

  /* ===================== UI TEST CASE ===================== */

  test('Pos_UI_0001 – Clear input button functionality', async ({ page }) => {
    const input = getInputBox(page);
    await input.fill('mama gedhara yanavaa');
    await page.locator('button:has-text("Clear")').first().click();
    await expect(input).toHaveValue('');
  });
});