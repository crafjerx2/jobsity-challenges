const orderIDExists = (orderId) => {
  cy.get("h1.page-title > span").should("have.text", "Order # " + orderId);
};

export { orderIDExists };
