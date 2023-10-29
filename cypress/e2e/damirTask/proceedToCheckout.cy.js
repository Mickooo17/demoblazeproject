import SignUp from "../../PageObjects/landingPage";
import homePage from "../../PageObjects/homePage";
import cartPage from "../../PageObjects/cartPage";

describe('Add several items to cart and proceed to checkout', () => {
    let ln;
    let hp;
    let cart;

    beforeEach(function () {
        // Access fixture data using this.userData
        cy.visit('https://www.demoblaze.com/');
        ln = new SignUp();
        cy.fixture('userData').then((data) => {
            ln.verifyLoginButtonIsDisplayed();
            ln.clickOnLoginButton();
            ln.validateLoginPopupWindowIsDisplayed();
            ln.populateLoginData(data.userName);
            ln.clickOnLoginPopupButton();
        })
    });

    it('The user is able to add some items to the cart', () => {
        hp = new homePage();
        hp.navigateToHomePage();
        hp.clickOnPhonesOption();
        hp.addFirstOptionToCart();
        hp.navigateToHomePage();
        hp.addSecondOptionToCart();
        hp.navigateToHomePage();
        hp.clickOnLaptopsOption();
        hp.addThirdOptionToCart();
    });

    it('The user is able to proceed to checkout', () => {
        hp = new homePage();
        cart = new cartPage();
        hp.clickOnCartButton();
        cart.validateCartPageIsDisplayed();
        cart.validateGridIsNotEmpty();
        cart.clickOnPlaceOrderButton();
        cart.validatePlaceOrderPopupIsDisplayed();
        cart.validateElementsInPlaceOrderModal();
        cart.populateAllFieldsInPlaceOrderPopup();
        cart.clickOnPurchaseButton();
        cart.verifyConfirmationPopupIsDisplayed();
    })
});
