describe('Footer', () => {
    it('Footer links', async () => {

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

        await browser.scroll(0, 1500)

        const twitterButton = await $('#page_wrapper > footer > ul > li.social_twitter > a');
        await twitterButton.click();
        await browser.switchWindow('x.com')
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('x.com/saucelabs');
        await browser.closeWindow()
        await browser.switchWindow('saucedemo.com')
        await browser.pause(2000);

        const facebookButton = await $('#page_wrapper > footer > ul > li.social_facebook > a');
        await facebookButton.click();
        await browser.switchWindow('facebook.com')
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('facebook.com/saucelabs');
        await browser.closeWindow()
        await browser.switchWindow('saucedemo.com')
        await browser.pause(2000);

        const linkedinButton = await $('#page_wrapper > footer > ul > li.social_linkedin > a');
        await linkedinButton.click();
        await browser.switchWindow('linkedin.com')
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('linkedin.com/company/sauce-labs/');
    });
});
