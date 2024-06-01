describe('Cart', () => {
    it('Saving the card after logout', async () => {

        await browser.url('https://www.saucedemo.com');
        await browser.pause(2000);

        const loginInput = await $('#user-name');
        await loginInput.setValue('standard_user');


        const passwordInput = await $('#password');
        await passwordInput.setValue('secret_sauce');

        const loginButton = await $('#login-button');
        await loginButton.click();

        const addButton = await $('#add-to-cart-sauce-labs-backpack');
        const productItem = await $('#item_4_title_link > div')
        const productItemText = await productItem.getText();
        await addButton.click();

        const cartBadge = await $('span.shopping_cart_badge');
        const badgeText = await cartBadge.getText();
        await expect(badgeText).toBe('1');
        const burgerButton = await $('#react-burger-menu-btn');
        await burgerButton.click();

        const burgerItems = await $$('.bm-item.menu-item');
        const burgerItemsCount = burgerItems.length;
        expect(burgerItemsCount).toBe(4);  

        const logoutButton = await $('#logout_sidebar_link');
        await logoutButton.click();
        await browser.pause(2000);

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

        await loginInput.setValue('standard_user');
        await passwordInput.setValue('secret_sauce');
        await loginButton.click();
        await expect(badgeText).toBe('1');
        const cartOpen = await $('#shopping_cart_container')
        await cartOpen.click();
        const cartItem = await $('.cart_item');
        await expect(cartItem).toBeDisplayed();
        const cartItemName = await $('.inventory_item_name');
        const itemNameText = await cartItemName.getText();
        await expect(itemNameText).toBe(productItemText);
    });
});