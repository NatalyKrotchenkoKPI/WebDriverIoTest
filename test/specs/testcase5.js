const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');

describe('Cart', () => {
  it('Saving the cart after logout', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    const productSelector = '#add-to-cart-sauce-labs-backpack';
    await InventoryPage.addToCart(productSelector);

    let badgeText = await InventoryPage.getCartItemCount();
    expect(badgeText).toBe('1');

    await InventoryPage.burgerButton.click();
    await InventoryPage.logoutButton.click();
    await browser.pause(2000);

    const expectedUrl = 'https://www.saucedemo.com/';
    await browser.url(expectedUrl);
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe(expectedUrl);

    await LoginPage.login('standard_user', 'secret_sauce');
    badgeText = await InventoryPage.getCartItemCount();
    expect(badgeText).toBe('1');

    await InventoryPage.openCart();
    const cartItem = await InventoryPage.cartItem;
    expect(cartItem).toBeDisplayed();

    const cartItemName = await InventoryPage.cartItemName.getText();
    const productItemText = 'Sauce Labs Backpack';
    expect(cartItemName).toBe(productItemText);
  });
});
