describe('Login', () => {
    it('Login with invalid login', async () => {
        
        await browser.url('https://www.saucedemo.com');
        await browser.pause(2000);
 
        const loginInput = await $('#user-name');
        await loginInput.setValue('standarD_user');

        const passwordInput = await $('#password');
        const passwordFieldType = await passwordInput.getAttribute('type');
        expect(passwordFieldType).toBe('password');
        await passwordInput.setValue('secret_sauce');

        const loginButton = await $('#login-button');
        await loginButton.click();


        expect(await loginInput).toHaveClass('error');
        const loginFieldContainer = await $('#user-name').parentElement();
        const loginErrorIcon = await loginFieldContainer.$('.error_icon');
        expect(await loginErrorIcon.isDisplayed()).toBeTruthy();
        const loginBorderColor = await loginInput.getCSSProperty('border-bottom-color');
        expect(loginBorderColor.value).toBe('rgba(226,35,26,1)');
        await browser.pause(2000);
        expect(await passwordInput).toHaveClass('error');
        const passwordFieldContainer = await $('#password').parentElement();
        const passwordErrorIcon = await passwordFieldContainer.$('.error_icon');
        expect(await passwordErrorIcon.isDisplayed()).toBeTruthy();
        const passwordBorderColor = await passwordInput.getCSSProperty('border-bottom-color');
        expect(passwordBorderColor.value).toBe('rgba(226,35,26,1)');
        const errorMessage = await $('.error-message-container.error');
        expect(await errorMessage).toBeDisplayed();
        expect(await errorMessage.getText()).toContain('Epic sadface: Username and password do not match any user in this service');

    });
});