class homePage{

    phonesOption = '[onclick="byCat(\'phone\')"]';
    phoneOptionOne = 'a:contains("Nexus 6")';
    phoneOptionTwo = 'a:contains("Samsung galaxy s7")';
    laptopsOption = '[onclick="byCat(\'notebook\')"]';
    laptopOptionOne = 'a:contains("MacBook air")';
    addToCart = 'a:contains("Add to cart")';
    homePageLink = 'a:contains("Home")';
    cartButton = '#cartur';
    contactButton = "a:contains('Contact')";

    clickOnPhonesOption(){
        cy.get(this.phonesOption).click();
        cy.log('The phone option is clicked!');
    }

    clickOnLaptopsOption(){
        cy.get(this.laptopsOption).click();
    }

    navigateToHomePage(){
        cy.get(this.homePageLink).click();
    }

    addFirstOptionToCart(){
        cy.get(this.phoneOptionOne).click();
        cy.get(this.addToCart).click();
    }

    addSecondOptionToCart(){
        cy.get(this.phoneOptionTwo).click();
        cy.get(this.addToCart).click();
    }

    addThirdOptionToCart(){
        cy.get(this.laptopOptionOne).click();
        cy.get(this.addToCart).click();
    }

    clickOnCartButton(){
        cy.get(this.cartButton).click();
    }

    clickOnContactButton(){
        cy.get(this.contactButton).click();
    }

}

export default homePage;