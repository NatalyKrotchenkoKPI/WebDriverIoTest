const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');

describe('Sorting', () => {
  it('Products', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    await InventoryPage.sortByVisibleText('Name (A to Z)');
    let productNames = await InventoryPage.getProductNames();
    let sortedProductNames = [...productNames].sort();
    expect(productNames).toEqual(sortedProductNames);

    await InventoryPage.sortByVisibleText('Name (Z to A)');
    productNames = await InventoryPage.getProductNames();
    sortedProductNames = [...productNames].sort().reverse();
    expect(productNames).toEqual(sortedProductNames);

    await InventoryPage.sortByVisibleText('Price (low to high)');
    let productPrices = await InventoryPage.getProductPrices();
    let sortedProductPrices = [...productPrices].sort((a, b) => a - b);
    expect(productPrices).toEqual(sortedProductPrices);

    await InventoryPage.sortByVisibleText('Price (high to low)');
    productPrices = await InventoryPage.getProductPrices();
    sortedProductPrices = [...productPrices].sort((a, b) => a - b).reverse();
    expect(productPrices).toEqual(sortedProductPrices);
  });
});
