const goToOrderAndReturnsForm = () => {
  cy.visit("/sales/guest/form/");
};

const typeOrderId = (id) => {
  cy.get("#oar-order-id").type(id);
};

const typebillingLastName = (billingLastName) => {
  cy.get("#oar-billing-lastname").type(billingLastName);
};

const typeEmail = (email) => {
  cy.get("#oar_email").type(email);
};

const typeZipcode = (zipcode) => {
  cy.get("#oar_zip").type(zipcode);
};

const clickBtnContinue = () => {
  cy.contains("Continue").click();
};

const findOrdeBy = (searchBy) => {
  cy.get("#quick-search-type-id").select(searchBy);
};

export {
  goToOrderAndReturnsForm,
  typebillingLastName,
  typeEmail,
  clickBtnContinue,
  typeOrderId,
  findOrdeBy,
  typeZipcode,
};
