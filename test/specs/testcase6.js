describe('Sorting', () => {
    it('Products', async () => {
    
        await browser.url('https://www.saucedemo.com');
        await browser.pause(2000);


        const loginInput = await $('#user-name');
        await loginInput.setValue('standard_user');


        const passwordInput = await $('#password');
        await passwordInput.setValue('secret_sauce');


        const loginButton = await $('#login-button');
        await loginButton.click();

        const sortingDropdown = await $('.product_sort_container');

//________________________________________________Sorting Name (A to Z)_______________________________

        await sortingDropdown.selectByVisibleText('Name (A to Z)');
        await browser.pause(2000);
        const productNamesSort1 = await $$('.inventory_item_name');
        const productTextsSort1 = [];
        for (const product of productNamesSort1) {
            productTextsSort1.push(await product.getText());
        }
        const sortedProductTextsSort1 = [...productTextsSort1].sort();
        expect(productTextsSort1).toEqual(sortedProductTextsSort1);

//________________________________________________Sorting Name (Z to A)_______________________________

        await sortingDropdown.selectByVisibleText('Name (Z to A)');
        await browser.pause(2000);
        const productNamesSort2 = await $$('.inventory_item_name');
        const productTextsSort2 = [];
        for (const product of productNamesSort2) {
            productTextsSort2.push(await product.getText());
        }
        
        const sortedProductTextsSort2 = [...productTextsSort2].sort().reverse();
        expect(productTextsSort2).toEqual(sortedProductTextsSort2);

//________________________________________________Sorting Price (low to high)_______________________________

        await sortingDropdown.selectByVisibleText('Price (low to high)');
        await browser.pause(2000);
        const productPricesSort1 = await $$('.inventory_item_price');
        const priceTextsSort1 = [];
        for (const priceElement of productPricesSort1) {
            const priceTextSort1 = await priceElement.getText();
            const priceValueSort1 = parseFloat(priceTextSort1.replace('$', ''));
            priceTextsSort1.push(priceValueSort1);
        }
        const sortedPriceTextsSort1 = [...priceTextsSort1].sort((a, b) => a - b);
        expect(priceTextsSort1).toEqual(sortedPriceTextsSort1);

//________________________________________________Sorting Price (high to low)_______________________________

await sortingDropdown.selectByVisibleText('Price (high to low)');
await browser.pause(2000);
const productPricesSort2 = await $$('.inventory_item_price');
const priceTextsSort2 = [];
for (const priceElement of productPricesSort2) {
    const priceTextSort2 = await priceElement.getText();
    const priceValueSort2 = parseFloat(priceTextSort2.replace('$', ''));
    priceTextsSort2.push(priceValueSort2);
}
const sortedPriceTextsSort2 = [...priceTextsSort2].sort((a, b) => a - b).reverse();
expect(priceTextsSort2).toEqual(sortedPriceTextsSort2);

    });
});