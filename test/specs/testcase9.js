describe('Checkout', () => {
    it('Checkout without products', async () => {
        await browser.url('https://www.saucedemo.com');
        await browser.pause(2000);


        const loginInput = await $('#user-name');
        await loginInput.setValue('standard_user');


        const passwordInput = await $('#password');
        await passwordInput.setValue('secret_sauce');
        await browser.pause(2000);

        const loginButton = await $('#login-button');
        await loginButton.click();

        const cartOpen = await $('#shopping_cart_container')
        await cartOpen.click();
        const cartList = await $('#cart_contents_container > div > div.cart_list');
        const cartListText = await cartList.getText();
        await expect(cartListText).toBe('QTYDescription');

        const checkoutButton = await $('#checkout')
        await checkoutButton.click();
        await expect(browser).toHaveUrlContaining('#cart.html');
        
        const errorMessage = await $('.error-message-container.error');
        expect(await errorMessage).toBeDisplayed();
        expect(await errorMessage.getText()).toContain('Cart is empty');
    });
});