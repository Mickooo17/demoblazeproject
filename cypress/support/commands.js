// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// In your support file (e.g., support/commands.js)
Cypress.Commands.add('slowType', { prevSubject: true }, (subject, text, options = {}) => {
    // Set the typing speed (adjust as needed)
    const typingSpeed = options.typingSpeed || 100; // milliseconds per character
  
    // Clear the input field (if needed)
    if (options.clearInput) {
      cy.wrap(subject).clear();
    }
  
    // Split the text into individual characters and type them with a delay
    const typeChars = (text, index) => {
      if (index < text.length) {
        const char = text.charAt(index);
        cy.wrap(subject).type(char);
        cy.wait(typingSpeed); // Wait for the specified typing speed
        typeChars(text, index + 1);
      }
    };
  
    typeChars(text, 0);
  
    // Return the subject for further chaining
    return cy.wrap(subject);
  });

  Cypress.Commands.add('clickOnRandomVisibleElement', { prevSubject: 'element' }, ($list) => {
    cy.wrap($list).find(':visible').then(($elements) => {
      if ($elements.length === 0) {
        // Log a message or perform an action
        cy.log('No visible elements found');
      } else {
        // Generate a random index within the range of visible elements
        const randomIndex = Cypress._.random(0, $elements.length - 1);
  
        // Click on the element with the random index
        cy.wrap($elements[randomIndex]).click();
      }
    });
  });
  
  


  