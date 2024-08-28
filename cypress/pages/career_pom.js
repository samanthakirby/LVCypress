class Career {
  // Selectors
  logo = ".breakdance-image-link > .breakdance-image-object";
  video = ".ee-vimeo > .ee-video";
  careersHeader = ".bde-text-5315-178";
  byLine = ".dual-heading--secondary";
  tag = ".dual-heading--primary";
  coolerTag = ".bde-rich-text-5315-180 > p";
  seeCareersButton = ".bde-button-5315-181 > .breakdance-link";
  topNavigation = ".bde-div-17356-325";
  diversityAward =
    ".bde-image-5315-189 > .breakdance-image > .breakdance-image-container > .breakdance-image-clip > .breakdance-image-object";
  whoIsLawVu = ".bde-rich-text-5315-187 > h3";
  paragraphOneText = ".bde-rich-text-5315-187 > :nth-child(2)";
  paragraphTwoText = ".bde-rich-text-5315-187 > :nth-child(3)";
  paragraphThreeText = ".bde-rich-text-5315-187 > :nth-child(4)";

  // Functions
  LogoIsDisplayed() {
    cy.get(this.logo).should("be.visible");
  }

  VideoIsDisplayedOnPage() {
    cy.get(this.video).should("be.visible");
  }

  CareersHeaderDisplaysExpectedText() {
    cy.get(this.careersHeader).should("contain.text", "Careers");
    cy.get(this.byLine).should("contain.text", "Play a major role");
    cy.get(this.tag).should(
      "contain.text",
      "in one of the fastest growing start-ups in legal tech"
    );
    cy.get(this.coolerTag).should(
      "contain.text",
      "It's way cooler than it sounds."
    );
    cy.get(this.seeCareersButton).should("be.visible");
  }

  NavigationBarIsDisplayed() {
    cy.get(this.topNavigation).should("be.visible");
  }

  WhoIsLawVuElementsShouldBeDisplayed() {
    cy.get(this.diversityAward).should("be.visible");
    cy.get(this.whoIsLawVu).should("contain.text", "Who is LawVu?");
    cy.get(this.paragraphOneText).should(
      "contain.text",
      "LawVu was built to empower corporate in-house legal teams and bring legal ops to the heart of the business. Because that’s where it belongs."
    );
    cy.get(this.paragraphTwoText).should(
      "contain.text",
      "We are beyond excited to use what we are learning everyday to create an eco-system that will reshape the way companies view their legal function, and forge new ways of working that will ultimately influence the way legal services are delivered around the world."
    );
    cy.get(this.paragraphThreeText).should(
      "contain.text",
      "We are on an exciting growth journey and are looking for talented individuals who can contribute and help us make our mark in the world."
    );
  }
}
export default Career;