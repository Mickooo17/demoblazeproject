import contactForm from "../../PageObjects/contactForm.js";
import homePage from "../../PageObjects/homePage.js";
import SignUp from "../../PageObjects/landingPage.js"

describe('Register new account + Login', () => {

    let hp;
    let cf;
    let ln;

    beforeEach(function () {
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

    it('The user is able to send Contact form', () => {
        hp = new homePage();
        cf = new contactForm();
        hp.clickOnContactButton();
        cf.verifyNewMessagePopupIsDisplayed();
        cf.verifyAllElementsAreDisplayed();
        cf.populateAllFieldsInContactForm();
        cf.clickOnSendMessageButton();
        cf.verifyPopupIsNotVisible();
    })
});
