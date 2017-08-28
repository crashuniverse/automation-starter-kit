this.automation = (browser) => {
  const searchText = process.env.TEXT
    || 'browser automation using nightwatch.js';
  const ci = process.env.CI;

  const SHORT_INTERVAL = 5000;
  const LONG_INTERVAL = 10000;
  const REALLY_LONG_INTERVAL = 20000;

  browser.url('https://www.google.co.in');
  browser.deleteCookies();
  browser.maximizeWindow();

  browser.waitForElementVisible('input[title="Search"]', SHORT_INTERVAL);
  browser.setValue('input[title="Search"]', searchText);
  browser.waitForElementVisible('input[value="Google Search"]', LONG_INTERVAL);
  browser.pause(SHORT_INTERVAL);
  browser.click('input[value="Google Search"]');

  if (!ci) {
    // observe: for humans
    browser.pause(REALLY_LONG_INTERVAL);
  }

  // end the session
  browser.end();
};
