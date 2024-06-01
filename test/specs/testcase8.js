describe('Checkout', () => {
    it('Valid Checkout', async () => {

        await browser.url('https://www.saucedemo.com');
        await browser.pause(2000);


        const loginInput = await $('#user-name');
        await loginInput.setValue('standard_user');


        const passwordInput = await $('#password');
        await passwordInput.setValue('secret_sauce');


        const loginButton = await $('#login-button');
        await loginButton.click();

        const addButton = await $('#add-to-cart-sauce-labs-backpack');
        await addButton.click();

        const cartOpen = await $('#shopping_cart_container')
        await cartOpen.click();
        const cartBadge = await $('span.shopping_cart_badge');
        const badgeText = await cartBadge.getText();
        await expect(badgeText).toBe('1');
        const cartItem = await $('.cart_item');
        await expect(cartItem).toBeDisplayed();
        const cartItemName = await $('.inventory_item_name');
        const itemNameText = await cartItemName.getText();
        await expect(itemNameText).toBe('Sauce Labs Backpack');
        const priceItem = await $('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div')
        const priceItemText = await priceItem.getText();
  
        const checkoutButton = await $('#checkout')
        await checkoutButton.click();
        await expect($('#checkout_info_container > div > form > div.checkout_info')).toBeDisplayed();
        
        const firstNameInput = await $('#first-name');
        await firstNameInput.setValue('Kit');
        
        const lastNameInput = await $('#last-name');
        await lastNameInput.setValue('Stepan');

        const zipCodeInput = await $('#postal-code');
        await zipCodeInput.setValue('84307');
        const continueButton = await $('#continue')
        await continueButton.click();

        await expect(browser).toHaveUrlContaining('checkout-step-two');

        const overviewProductTitle = await $('#item_4_title_link > div')
        const overviewProductText = await overviewProductTitle.getText();
        const overviewPrice = await $('#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div')
        const overviewPriceText = await overviewPrice.getText();
        await expect(overviewProductText).toBe(itemNameText);
        await expect(priceItemText).toBe(overviewPriceText);

        const finishButton = await $('#finish');
        await finishButton.click();
        const thankYouPage = await $('#checkout_complete_container > h2');
        const thankYouPageText = await thankYouPage.getText();
        await expect(thankYouPageText).toBe('Thank you for your order!') 
        const backButton = await $('#back-to-products');
        await backButton.click(); 
        await expect (browser).toHaveUrlContaining('inventory.html');
        await expect($('#inventory_container')).toBeDisplayed();
        const cartBadge2 = await $('#shopping_cart_container > a');
        const badgeText2 = await cartBadge2.getText();
        await expect(badgeText2).toBe('');
    });
});