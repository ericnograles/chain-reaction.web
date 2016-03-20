# chain-reaction.web

## Overview

This is the web project of the [Chain Reaction](https://github.com/ericnograles/chain-reaction) multi-platform sample project.

The goal of this project was to create as minimal of a web baseline as possible nothing but [React](https://facebook.github.io/react/), [Webpack](https://webpack.github.io/), and [Babel](https://babeljs.io/)

## Installation

See the [Chain Reaction](https://github.com/ericnograles/chain-reaction) repo.  The entire solution relies on a specific folder structure which is managed by the main `chain-reaction` repo.

## Running the Web App

1. After completing the Installation Instructions above, simply run `./start.sh` whilst in the chain-reaction.web root.
2. Browse to `http://localhost:8080` for the web app.
3. Browse to `http://localhost:8081` for the mocha unit tests.

Note that any changes/additions to either the web app or unit tests will be automatically detected and reloaded in your browser.

All web application related code will be dropped into the `/dist` folder of the root.  All unit test related code will be dropped into the `/unit-tests` folder of the root.  Note that both of these folders are in the `.gitignore`.

## Folder Structure
* **/config**: Environment-specific variables.  See the `webpack.DefinePlugin` configuration in `webpack.config.js` to see how this is orchestrated.
* **/src**
    * **/components**: Write your React components here
    * **/containers**: Write your React containers here
    * **/assets**
        * **/images**: Any images you need for your website
        * **/styles**: Any CSS files you need for your website
* **/tests**: Supporting code for Mocha unit tests

## Unit Tests

This project has a `webpack.tests.config.js` file which launches a Mocha test runner on `http://localhost:8081`.  As you will see in the configuration, simply adding a file with a extension of `.test.js` will include it in the test suite.

A personal recommendation would be to sit these `.test.js` files alongside their constituent components or containers for ease of navigation.  However, this is simply a recommendation and not a hard and fast rule, so use what works best for you!

## Images and CSS

### New Assets

If you need to bring in any new images or CSS, first add it to the appropriate /assets folder above.  Then modify `/src/app.js` and `require` in the new file.  In this baseline, for example, we require in `main.css` and `react-favicon.ico`.

## What's Under the Hood?
* [Webpack](https://webpack.github.io/)
* [react-router](https://github.com/reactjs/react-router)
* [Material Design Lite](https://github.com/google/material-design-lite)
* [Babel](https://babeljs.io/)
* [Mocha](https://mochajs.org/)