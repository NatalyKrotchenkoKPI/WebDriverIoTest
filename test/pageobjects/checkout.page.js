class CheckoutPage {
    get firstNameInput() { return $('#first-name'); }
    get lastNameInput() { return $('#last-name'); }
    get zipCodeInput() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get thankYouMessage() { return $('#checkout_complete_container > h2'); }
    get backButton() { return $('#back-to-products'); }
    get overviewProductTitle() { return $('#item_4_title_link > div'); }
    get overviewPrice() { return $('#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div'); }
    get errorMessage() { return $('.error-message-container.error'); }

    async fillCheckoutInfo(firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipCodeInput.setValue(zipCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}

module.exports = new CheckoutPage();
