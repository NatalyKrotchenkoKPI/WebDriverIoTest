class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get loginErrorIcon() { return $('#user-name').parentElement().$('.error_icon'); }
    get passwordErrorIcon() { return $('#password').parentElement().$('.error_icon'); }
    get errorMessage() { return $('.error-message-container.error'); }

    async open() {
        await browser.url('https://www.saucedemo.com');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getPasswordFieldType() {
        return this.passwordInput.getAttribute('type');
    }

    async getLoginBorderColor() {
        return this.usernameInput.getCSSProperty('border-bottom-color');
    }

    async getPasswordBorderColor() {
        return this.passwordInput.getCSSProperty('border-bottom-color');
    }
}

module.exports = new LoginPage();
