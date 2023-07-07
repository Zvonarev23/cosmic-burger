describe("test burger-constructor", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients",
    }).as("getIngredients");
    cy.viewport(1440, 1080);
    cy.visit("http://localhost:3000/");
  });

  it("should drag & drop an ingredients", () => {
    cy.wait("@getIngredients");
    cy.get("[data-testid='Флюоресцентная булка R2-D3']").trigger("dragstart");
    cy.get("[data-testid=constructor_container]").trigger("drop");

    cy.get("[data-testid='Соус Spicy-X']").trigger("dragstart");
    cy.get("[data-testid=constructor_container]").trigger("drop");

    cy.get("[data-testid=ingredients_container]").should("have.length", 1);
  });

  it("delete ingredient", () => {
    cy.wait("@getIngredients");
    cy.get("[data-testid='Филе Люминесцентного тетраодонтимформа']").trigger(
      "dragstart"
    );
    cy.get("[data-testid=constructor_container]").trigger("drop");

    cy.get("[data-testid='Соус Spicy-X']").trigger("dragstart");
    cy.get("[data-testid=constructor_container]").trigger("drop");

    cy.get("[data-testid=ingredients_container]>li")
      .eq(0)
      .find("svg")
      .eq(2)
      .click();

    cy.get("[data-testid=ingredients_container]").should("have.length", 1);
  });

  it("should open modal with ingredient details", () => {
    cy.wait("@getIngredients");
    cy.get("[data-testid='Флюоресцентная булка R2-D3']").click();
    cy.get("[data-testid=modal]").contains("Детали ингредиента");
  });

  it("should close modal with ingredient details", () => {
    cy.wait("@getIngredients");
    cy.get("[data-testid='Флюоресцентная булка R2-D3']").click();
    cy.get("[data-testid=modal]").contains("Детали ингредиента");
    cy.get("[data-testid=modal_close]").click();
    cy.get("[data-testid=modal]").should("not.exist");
  });

  it("should make order", () => {
    cy.intercept("GET", "https://norma.nomoreparties.space/api/auth/user", {
      fixture: "user",
    }).as("getUser");
    window.localStorage.setItem(
      "accessToken",
      JSON.stringify("test-accessToken")
    );
    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    cy.wait("@getIngredients");
    cy.wait("@getUser");

    cy.get("[data-testid='Флюоресцентная булка R2-D3']").trigger("dragstart");
    cy.get("[data-testid=constructor_container]").trigger("drop");

    cy.get("[data-testid='Соус Spicy-X']").trigger("dragstart");
    cy.get("[data-testid=constructor_container]").trigger("drop");

    cy.get("[data-testid='create_order']").click();

    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", {
      fixture: "order",
    });

    cy.get("[data-testid=modal]").contains("идентификатор заказа");
    cy.get("[data-testid=modal_close]").click();
    cy.get("[data-testid=modal]").should("not.exist");
  });
});
