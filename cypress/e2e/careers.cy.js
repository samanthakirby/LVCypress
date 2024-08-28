import Career from "../pages/career_pom";

describe("Careers page contains expected elements", () => {
  const careerPage = new Career();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigation bar is displayed as expected", () => {
    cy.url().should("include", "/careers");
    careerPage.NavigationBarIsDisplayed();
    careerPage.LogoIsDisplayed();
  });

  it("Main Careers header has expected elements", () => {
    cy.url().should("include", "/careers");
    careerPage.VideoIsDisplayedOnPage();
    careerPage.CareersHeaderDisplaysExpectedText();
    careerPage.WhoIsLawVuElementsShouldBeDisplayed();
  });
});
