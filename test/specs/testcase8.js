const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const CheckoutPage = require('../pageobjects/checkout.page.js');

describe('Checkout', () => {
  it('Valid Checkout', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    const productSelector = '#add-to-cart-sauce-labs-backpack';
    await InventoryPage.addToCart(productSelector);

    await InventoryPage.openCart();
    const cartItem = await InventoryPage.cartItem;
    await expect(cartItem).toBeDisplayed();
    await browser.pause(2000);
    const cartItemName = await InventoryPage.cartItemName.getText();
    const priceItemText = await InventoryPage.cartItemPrice.getText();

    await InventoryPage.checkoutButton.click();
    await CheckoutPage.fillCheckoutInfo('Kit', 'Stepan', '84307');
    await CheckoutPage.continueCheckout();

    await expect(browser).toHaveUrlContaining('checkout-step-two');

    const overviewProductText =
      await CheckoutPage.overviewProductTitle.getText();
    const overviewPriceText = await CheckoutPage.overviewPrice.getText();
    await expect(overviewProductText).toBe(cartItemName);
    await expect(priceItemText).toBe(overviewPriceText);

    await CheckoutPage.finishCheckout();
    const thankYouMessageText = await CheckoutPage.thankYouMessage.getText();
    await expect(thankYouMessageText).toBe('Thank you for your order!');
    await CheckoutPage.backButton.click();
    await expect(browser).toHaveUrlContaining('inventory.html');
    await expect($('#inventory_container')).toBeDisplayed();
    const cartBadge = await $('#shopping_cart_container > a').getText();
    await expect(cartBadge).toBe('');
  });
});
