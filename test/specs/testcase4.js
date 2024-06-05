const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');

describe('Login', () => {
  it('Logout', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.burgerButton.click();
    await browser.pause(2000);
    await InventoryPage.logoutButton.click();
    const expectedUrl = 'https://www.saucedemo.com/';
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe(expectedUrl);
    const loginValue = await LoginPage.usernameInput.getValue();
    expect(loginValue).toBe('');
    const passwordValue = await LoginPage.passwordInput.getValue();
    expect(passwordValue).toBe('');
  });
});
