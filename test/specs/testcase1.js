const LoginPage = require('../pageobjects/login.page.js');

describe('Login', () => {
  it('Valid Login', async () => {
    await LoginPage.open();
    await browser.pause(2000);
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(browser).toHaveUrlContaining('inventory.html');
    await expect($('#shopping_cart_container')).toBeDisplayed();
    await expect($('#inventory_container')).toBeDisplayed();
    await browser.pause(2000);
  });
});
