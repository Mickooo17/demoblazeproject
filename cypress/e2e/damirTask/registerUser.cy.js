import RegistrationModal from "../../PageObjects/registrationModal";

describe('Register user', () => {
    let registrationModal;

    beforeEach(function () {
        cy.visit('http://automationexercise.com/');
        registrationModal = new RegistrationModal();
    });

    it('Verify user is able to register to the page', () => {
        registrationModal.clickOnSignupLoginButton();
        registrationModal.validateFieldsAreDisplayed();
        registrationModal.populateRegistrationFieldsWithRandomData();
        registrationModal.clickOnSignupButton();
        registrationModal.validateRegistrationTitleIsDisplayed();
        registrationModal.chooseAnyTitleOption();
        registrationModal.populateNameFormField();
    });
});
