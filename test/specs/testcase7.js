const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');

describe('Footer', () => {
  it('Footer links', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await browser.scroll(0, 1500);

    await InventoryPage.openTwitter();
    await browser.pause(2000);
    await expect(browser).toHaveUrlContaining('x.com/saucelabs');
    await browser.closeWindow();
    await browser.switchWindow('saucedemo.com');

    await InventoryPage.openFacebook();
    await browser.pause(2000);
    await expect(browser).toHaveUrlContaining('facebook.com/saucelabs');
    await browser.closeWindow();
    await browser.switchWindow('saucedemo.com');

    await InventoryPage.openLinkedIn();
    await browser.pause(2000);
    await expect(browser).toHaveUrlContaining(
      'linkedin.com/company/sauce-labs/'
    );
  });
});
