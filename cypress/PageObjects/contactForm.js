class contactForm {

    randomString = [...Array(20)].map(() => (Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : String.fromCharCode(97 + Math.floor(Math.random() * 26)))).join('');


    contactEmailField = "#recipient-email";
    contactNameField = "#recipient-name";
    messageField = "#message-text";
    closeButton = "button:contains('Close')";
    sendMessageButton = "button:contains('Send message')";
    newMessagePopupHeading = "#exampleModalLabel";


    verifyNewMessagePopupIsDisplayed() {
        cy.get(this.newMessagePopupHeading).should('be.visible');
    }

    verifyAllElementsAreDisplayed() {
        cy.get(this.contactEmailField).should('be.visible');
        cy.get(this.contactNameField).should('be.visible');
        cy.get(this.messageField).should('be.visible');
        cy.get(this.closeButton).should('be.visible');
        cy.get(this.sendMessageButton).should('be.visible');
    }

    clickOnSendMessageButton() {
        cy.get(this.sendMessageButton).click();
    }

    populateAllFieldsInContactForm() {
        cy.fixture('userData').then((data) => {
            cy.get(this.contactEmailField).type(data.email);
            cy.get(this.contactNameField).type(data.userName);
            cy.get(this.messageField).type(this.randomString);
        });
    }

    verifyPopupIsNotVisible() {
        cy.get(this.newMessagePopup).should('not.exist');
    }
}
export default contactForm;