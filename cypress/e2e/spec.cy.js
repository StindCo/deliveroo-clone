describe("Test from MukeApp test", () => {
  it("test background", () => {
    cy.visit("http://localhost:19006/");
    cy.get(".firstPage")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 0, 255)");
    cy.get("div").contains("Deliver Now!");
  });

  it("test presence of Deliver", () => {
    cy.visit("http://localhost:19006/");
    cy.get("div").contains("Deliver Now!");
  });
});
