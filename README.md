## Welcome
This is just a small demo project for the LawVu careers page on the website. I only used minimal testing to avoid taxing the production site without authorisation.

## Included
Cypress using Page Object Model

## How to run
1. Download project
2. Command line: npm install
3. Command line: npx cypress open or npx cypress run

## Packages in project
1. Cypress latest version at time of creation: 12
2. Github for version control and Github Actions

## Github Action
Upon merge to the main branch, the automation tests will run

## What I would do with more time
1. Like with the Playwright project, I would add specific test attributes to all the elements on your site to reduce test flakiness and increase the speed that automation tests can be created to increase coverage of the website.
2. Create more generic Page Objects for navigation, buttons etc to make them easily adoptable into each test therefore speeding up development.
3. Add some examples of handling forms (I didn't want to create tests that would spam your production site), reports, iFrames etc.
