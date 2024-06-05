const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const CheckoutPage = require('../pageobjects/checkout.page.js');

describe('Checkout', () => {
  it('Checkout without products', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    await InventoryPage.openCart();
    const cartListText = await $(
      '#cart_contents_container > div > div.cart_list'
    ).getText();
    await expect(cartListText).toBe('QTYDescription');

    await InventoryPage.checkoutButton.click();
    await expect(browser).toHaveUrlContaining('#cart.html');

    await expect(CheckoutPage.errorMessage).toBeDisplayed();
    await expect(CheckoutPage.errorMessage.getText()).toContain(
      'Cart is empty'
    );
  });
});
