describe('Login', () => {
    it('Valid Login', async () => {

        await browser.url('https://www.saucedemo.com');
        await browser.pause(2000);
        
        const loginInput = await $('#user-name');
        await loginInput.setValue('standard_user');

        const passwordInput = await $('#password');
        const passwordFieldType = await passwordInput.getAttribute('type');
        expect(passwordFieldType).toBe('password');
        await passwordInput.setValue('secret_sauce');

        const loginButton = await $('#login-button');
        await loginButton.click();
 
        await expect(browser).toHaveUrlContaining('inventory.html');
        await expect($('#shopping_cart_container')).toBeDisplayed();
        await expect($('#inventory_container')).toBeDisplayed();
        await browser.pause(2000);
    });
});
