const LoginPage = require('../pageobjects/login.page.js');

describe('Login', () => {
  it('Login with invalid password', async () => {
    await LoginPage.open();
    await browser.pause(2000);

    await LoginPage.login('standard_user', 'randomPassword');

    expect(await LoginPage.loginErrorIcon.isDisplayed()).toBeTruthy();
    const loginBorderColor = await LoginPage.getLoginBorderColor();
    expect(loginBorderColor.value).toBe('rgba(226,35,26,1)');

    expect(await LoginPage.passwordErrorIcon.isDisplayed()).toBeTruthy();
    const passwordBorderColor = await LoginPage.getPasswordBorderColor();
    expect(passwordBorderColor.value).toBe('rgba(226,35,26,1)');

    expect(await LoginPage.errorMessage).toBeDisplayed();
    expect(await LoginPage.errorMessage.getText()).toContain(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});
