class SignUp {

    //Global functions
    randomNumericString = Math.floor(Math.random() * 900000) + 100000;

    //Locators
    signUpButton = "#signin2";
    userNameField = "#sign-username";
    passwordField = "#sign-password";
    signUpButtonPopup = 'button:contains("Sign up")';
    signInModal = '#signInModalLabel';
    loginButton = '#login2';
    loginPopupModal = "#logInModalLabel";
    loginUserNameField = "#loginusername";
    loginPasswordField = "#loginpassword";
    loginButtonPopup = 'button:contains("Log in")';

    constructor() {
        // Initialize class properties with default values
        this.password = "Test123!";
    }

    //Methods

    clickOnSignUpButton() {
        cy.get(this.signUpButton).click();
    }


    enterUserName(userName) {
        this.userName = userName;
        cy.get(this.userNameField).slowType(this.userName, { typingSpeed: 10 });
        cy.get(this.userNameField).should("have.value", this.userName);
        cy.log("The Username is populated successfully");
    }
    

    enterPassword() {
            cy.get(this.passwordField).type(this.password);
            cy.get(this.passwordField).should(($input) => {
                expect($input.val()).to.not.be.empty;
            });
    }

    clickOnSignUpButtonPopup() {
        cy.get(this.signUpButtonPopup).click();
    }

    verifyUserIsSignedUpSuccessfully() {
        cy.get(this.signInModal).should('exist').should('not.be.visible');
    }

    verifyLoginButtonIsDisplayed() {
        cy.get(this.loginButton).should('be.visible');
    }

    clickOnLoginButton() {
        cy.get(this.loginButton).click();
    }

    validateLoginPopupWindowIsDisplayed(){
        cy.get(this.loginPopupModal).should('be.visible');
    }

    populateLoginData(userName) {
        cy.get(this.loginUserNameField).slowType(userName, { typingSpeed: 10 });
        cy.get(this.loginPasswordField).type(this.password);
    }

    clickOnLoginPopupButton(){
        cy.get(this.loginButtonPopup).click();
    }
}

export default SignUp;