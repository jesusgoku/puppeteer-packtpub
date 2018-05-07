const puppeteer = require('puppeteer');

(async () => {
  const USERNAME = process.env.USERNAME;
  const PASSWORD = process.env.PASSWORD;

  const browser = await puppeteer.launch({ headless: false });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://www.packtpub.com/packt/offers/free-learning');

    // const result = await page.evaluate(() => {
    //   return window.navigator.userAgent;
    // });
    // console.log(result);

    await page.click('.login-popup');
    await page.waitFor(1000);
    await page.type('.account-bar-form-left #email', USERNAME);
    await page.waitFor(1000);
    await page.type('.account-bar-form-left #password', PASSWORD);
    await page.waitFor(1000);
    await page.click('.account-bar-form-left #edit-submit-1');
    await page.waitFor(10000);
    await page.click('#free-learning-claim');
    await page.waitFor(10000);

    await page.screenshot({ path: 'example.png' });
    await browser.close();
  } catch (e) {
    await browser.close();
    console.error(e);
  }
})();
