class InventoryPage {
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get logoutButton() { return $('#logout_sidebar_link'); }
    get cartBadge() { return $('span.shopping_cart_badge'); }
    get cartItem() { return $('.cart_item'); }
    get cartItemName() { return $('.inventory_item_name'); }
    get cartItemPrice() { return $('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div'); }
    get checkoutButton() { return $('#checkout'); }
    get sortingDropdown() { return $('.product_sort_container'); }
    get twitterButton() { return $('#page_wrapper > footer > ul > li.social_twitter > a'); }
    get facebookButton() { return $('#page_wrapper > footer > ul > li.social_facebook > a'); }
    get linkedinButton() { return $('#page_wrapper > footer > ul > li.social_linkedin > a'); }


    async logout() {
        await this.burgerButton.click();
        await this.logoutButton.click();
    }

    async addToCart(productSelector) {
        const addButton = await $(productSelector);
        await addButton.click();
    }

    async getCartItemCount() {
        const badgeText = await this.cartBadge.getText();
        return badgeText;
    }

    async openCart() {
        await $('#shopping_cart_container').click();
    }

    async sortByVisibleText(visibleText) {
        await this.sortingDropdown.selectByVisibleText(visibleText);
    }

    async getProductNames() {
        const productElements = await $$('.inventory_item_name');
        const productNames = [];
        for (const product of productElements) {
            productNames.push(await product.getText());
        }
        return productNames;
    }

    async getProductPrices() {
        const priceElements = await $$('.inventory_item_price');
        const productPrices = [];
        for (const priceElement of priceElements) {
            const priceText = await priceElement.getText();
            const priceValue = parseFloat(priceText.replace('$', ''));
            productPrices.push(priceValue);
        }
        return productPrices;
    }

    async openTwitter() {
        await this.twitterButton.click();
        await browser.switchWindow('x.com');
    }

    async openFacebook() {
        await this.facebookButton.click();
        await browser.switchWindow('facebook.com');
    }

    async openLinkedIn() {
        await this.linkedinButton.click();
        await browser.switchWindow('linkedin.com');
    }
}

module.exports = new InventoryPage();
