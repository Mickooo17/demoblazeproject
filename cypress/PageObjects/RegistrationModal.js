class RegistrationModal{

    nameField = "[data-qa='signup-name']";
    emailField = "[data-qa='signup-email']";
    signupLoginButton = "a:contains('Signup')";
    signupButton = "[data-qa='signup-button']";
    registrationTitle = "b:contains('Enter Account Information')";
    titleSelect = ".top";
    nameFormField = "#name";
    emailFormField = "#email";
    passwordFormField = "#password";
    dobDayFormSelect = "#days";
    dobMonthFormSelect = "#months";
    dobYearFormSelect = "#years";


    generateRandomString = (length) => Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join('');
    generatedString = this.generateRandomString(8);
    emailString = this.generateRandomString(5) + '@' + this.generateRandomString(5) + '.com';

    validateFieldsAreDisplayed(){
        cy.get(this.nameField).should("be.visible");
        cy.get(this.emailField).should("be.visible");
    }

    populateRegistrationFieldsWithRandomData(){
        cy.get(this.nameField).type(this.generatedString);
        cy.get(this.nameField).should("have.value", this.generatedString);
        cy.get(this.emailField).type(this.emailString);
        cy.get(this.emailField).should("have.value", this.emailString);
    }

    clickOnSignupLoginButton(){
        cy.get(this.signupLoginButton).should('be.visible');
        cy.get(this.signupLoginButton).click();
    }

    clickOnSignupButton(){
        cy.get(this.signupButton).should('be.visible');
        cy.get(this.signupButton).click();
    }

    validateRegistrationTitleIsDisplayed(){
        cy.get(this.registrationTitle).should("be.visible");
    }

    chooseAnyTitleOption() {
        cy.get(this.titleSelect).clickOnRandomVisibleElement();
    }

    populateNameFormField(){
        cy.get(this.nameFormField).click();
        cy.get(this.nameFormField).should('be.visible').type(this.generatedString);
    }

    populateEmailFormFieldWithRandomEmail(){
        
    }
}
export default RegistrationModal;