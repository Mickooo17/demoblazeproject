class cartPage{

    randomNumericString = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join('');
    currentMonth = new Date().getMonth() + 1;
    currentYear = new Date().getFullYear();


    cartPageHeading = "h2:contains('Products')";
    placeOrderButton = "button:contains('Place Order')";
    placeOrderModalPopUp = ".modal-title#orderModalLabel";
    nameField = "#name";
    countryField = "#country";
    cityField = "#city";
    creditCardField = "#card";
    monthField = "#month";
    yearField = "#year";
    purchaseButton = "button:contains('Purchase')";
    confirmationPopup = ".sa-icon";


validateCartPageIsDisplayed(){
    cy.get(this.cartPageHeading).should("be.visible");
}

validateGridIsNotEmpty(){
    cy.get('table.table-bordered tbody#tbodyid').should('not.be.empty');
}

clickOnPlaceOrderButton(){
    cy.get(this.placeOrderButton).click();
}

validatePlaceOrderPopupIsDisplayed(){
    cy.get(this.placeOrderModalPopUp).should('be.visible');
}

validateElementsInPlaceOrderModal(){
    cy.get(this.nameField).should('be.visible');
    cy.get(this.countryField).should('be.visible');
    cy.get(this.cityField).should('be.visible');
    cy.get(this.creditCardField).should('be.visible');
    cy.get(this.monthField).should('be.visible');
    cy.get(this.yearField).should('be.visible');
}

populateAllFieldsInPlaceOrderPopup(){
    cy.fixture('userData').then((data) => {
        cy.get(this.nameField).type(data.userName);
        cy.get(this.countryField).type(data.country);
        cy.get(this.cityField).type(data.city);
        cy.get(this.creditCardField).type(this.randomNumericString);
        cy.get(this.monthField).type(this.currentMonth);
        cy.get(this.yearField).type(this.currentYear);
    });
}

clickOnPurchaseButton(){
    cy.get(this.purchaseButton).click();
}

verifyConfirmationPopupIsDisplayed(){
    cy.get(this.confirmationPopup).should('be.visible');
}

}
export default cartPage;