const {
  typeOrderId,
  typebillingLastName,
  typeEmail,
  clickBtnContinue,
  goToOrderAndReturnsForm,
  findOrdeBy,
  typeZipcode,
} = require("../pages/OrderAndReturns");
const { orderIDExists } = require("../pages/OrderInformation");

describe("Orders and Returns test cases", () => {
  it("Find an order By orderID and Email ", () => {
    goToOrderAndReturnsForm();
    typeOrderId("000009225");
    typebillingLastName("doe");
    typeEmail("johndoe@test.com");
    clickBtnContinue();
    orderIDExists("000009225");
  });
  it("Find an order By orderID and Zipcode ", () => {
    goToOrderAndReturnsForm();
    typeOrderId("000009225");
    typebillingLastName("doe");
    findOrdeBy("zip");
    typeZipcode("98109");
    clickBtnContinue();
  });
});
