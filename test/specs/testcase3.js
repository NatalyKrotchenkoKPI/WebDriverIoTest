const LoginPage = require('../pageobjects/login.page.js');

describe('Login', () => {
  it('Login with invalid login', async () => {
    await LoginPage.open();
    await browser.pause(2000);

    await LoginPage.login('standarD_user', 'secret_sauce');

    expect(await LoginPage.usernameInput).toHaveClass('error');
    expect(await LoginPage.loginErrorIcon.isDisplayed()).toBeTruthy();
    const loginBorderColor = await LoginPage.getLoginBorderColor();
    expect(loginBorderColor.value).toBe('rgba(226,35,26,1)');

    expect(await LoginPage.passwordInput).toHaveClass('error');
    expect(await LoginPage.passwordErrorIcon.isDisplayed()).toBeTruthy();
    const passwordBorderColor = await LoginPage.getPasswordBorderColor();
    expect(passwordBorderColor.value).toBe('rgba(226,35,26,1)');

    expect(await LoginPage.errorMessage).toBeDisplayed();
    expect(await LoginPage.errorMessage.getText()).toContain(
      'Epic sadface: Username and password do not match any user in this service'
    );
    await browser.pause(2000);
  });
});
