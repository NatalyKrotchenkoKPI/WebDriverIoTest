describe('Login', () => {
    it('Logout', async () => {

        await browser.url('https://www.saucedemo.com');

        const loginInput = await $('#user-name');
        await loginInput.setValue('standard_user');


        const passwordInput = await $('#password');
        await passwordInput.setValue('secret_sauce');


        const loginButton = await $('#login-button');
        await loginButton.click();
        const burgerButton = await $('#react-burger-menu-btn');
        await burgerButton.click();

        const burgerItems = await $$('.bm-item.menu-item');
        const burgerItemsCount = burgerItems.length;
        expect(burgerItemsCount).toBe(4);  



        const logoutButton = await $('#logout_sidebar_link');
        await logoutButton.click();

        const expectedUrl = 'https://www.saucedemo.com/';
        
        await browser.url(expectedUrl);
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe(expectedUrl);

        const loginValue = await $('#user-name');
        const loginValueText = await loginValue.getValue();
        expect(loginValueText).toBe('');
        const passwordValue = await $('#password');
        const passwordValueText = await passwordValue.getValue();
        expect(passwordValueText).toBe('');
    });
});