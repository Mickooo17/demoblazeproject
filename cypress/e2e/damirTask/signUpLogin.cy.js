import SignUp from "../../PageObjects/landingPage.js"

describe('Register new account + Login', () => {
    let randomNumber = Math.floor(Math.random() * 900000) + 100000;
    let ln;
    let userName;

    // Before all tests in this file, visit the website
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
        ln = new SignUp();
    });

    it('The user is able to Sign up to the page', () => {
        userName = `TestUser${randomNumber}`;
        ln.clickOnSignUpButton();
        ln.enterUserName(userName);
        ln.enterPassword();
        ln.clickOnSignUpButtonPopup();
        ln.verifyUserIsSignedUpSuccessfully();
    });

    it('The user is able to Login to the page with SignUp data', () => {
        ln.verifyLoginButtonIsDisplayed();
        ln.clickOnLoginButton();
        ln.validateLoginPopupWindowIsDisplayed();
        ln.populateLoginData(userName);
        ln.clickOnLoginPopupButton();
    });
});
