# JEST

## ASSERTION;

just global start the assertion.
. expect the argument
. subject of the assertion

###### more Assertion examples

. expect(element.textContent).toBe('hello');
. expect(elementsArray).toHaveLength(7);
. Dom based

###### jest-dom

. comes with react-app
. src/setupTest.js import it before each test make matchers available
Example
toBeVisible() or toBeChecked();

###### React Testing Library help with

. rendering components with virtual dom
. search virtual dom
. Interacting with virtual dom

###### NEED TEST RUNNER

.Find tests ,run them,make assertion

###### Jest

.is recommended By testing Library
.comes with create-react-app runs just in watch mode.
.npm test runs and npm script that runs in watch mode.

###### How does just Work?

global test has two arguments:
.string description
.test function
.Test fail if error is thrown from running function.
. assertion throw errors when exception is fail
No error ---> Test pass

## TDD (Test-Driven-Development)

writing test before writing code.
.then write the code according to "spec" test by tests.
"reading green" testing
red ----> Failed
Green ---> passed

## Why TEST Driven Development

Make a huge difference in how it feels to write tests
.port of the coding process , not "chore" to do at the end
.MORE EFFICIENT
Re-run tests "for free" after changes

React testing library philosophy.

## what does Testing Library Do.

. Create Virtual Dom for testing
and utilities for interacting with DOM.
. Allows testing without browser.

# Types of Test

###### Unit test

.Test one unit of code in isolation.

###### Integration tests

. How multiple units work together

###### Functional Test.

.Test a particular function of software.

###### Acceptance / End-to-end (E2E) Tests.

.Use actual browser and server (Cypress,selenium)

###### Functional Testing

different mindset from testing.
.........................................................................
Unit Testing ! Functional Testing !
........................................................................."
Isolated:mock dependencies,test internals
Very easy to pinpoint failures  
 Further from how users interact with
software
More likely to refactoring
.........................................................................
Functional Testing !
........................................................................."
! include all relevant units,test
behavior

! close to how users interact with software
! Robust test
! More difficult to debug failing tests.

## TDD VS BDD

Quick detour for BDD: Behavior -Driven Development.
Testing library encourages testing behavior over implementation.
So shouldn't we be calling this BDD instead of TDD. actually No.?
<u>BDD is very explicitly defined<u/>
involves collaboration between lots of roles
.development ,QA,business partners etc.
.define process for different groups to interact.
In this course , only developers ,So TDD.

# Accessibility and Finding Element.

. Test Library recommended finding elements by accessibility handles.

- create-react-app example use test case getByText.
- [TestingLibraryDocs](https://testing-library.com/docs/queries/about/#priority)
- better :getByRole
- [Accessibility](https://testing-library.com/docs/queries/about/#priority)
- [codeGit](https://github.com/bonnie/udemy-TESTING-LIBRARY/tree/main/lecture-code)

# .Unit TEST

Unit Test function ;
Function separate from components;
. Used By several components
. Complex Logic
.Unit test if
. Complex logic difficult to test via functional tests
. Too many edge cases

# When to Unit Test

. replaceCamelWithSpaces is pretty simple
. could be converted by functional test on button
. For more complicated functions,unit test help with:
. Covering all possible edge case
. determining what caused functional test to fail

Issues with functional tests:
high level makes them difficult to diagnose

# uses events

## fire Event

## jest dom assertion

## toBeEnabled()

## toBeDisabled()

## toBeChecked()

## getByRole options

## jest describe to group test

## Unit testing functions

# Eslint and Prettier

yarn add eslint-plugin-testing-library eslint-plugin-jest-dom

remove from the json and create a new .eslintrc.json
and config as like in code

// you can also fallow that link

# [eslint config](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

<!--
  // "eslintConfig": {
  //   "extends": [
  //     "react-app",
  //     "react-app/jest"
  //   ]
  // }, -->
<!-- .................................................. -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
