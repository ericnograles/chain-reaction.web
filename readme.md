# chain-reaction.web

## Overview

This is the web project of the [Chain Reaction](https://github.com/ericnograles/chain-reaction) multi-platform sample project.

The goal of this project was to create as minimal of a web baseline as possible, using nothing but [React](https://facebook.github.io/react/), [Webpack](https://webpack.github.io/), and [Babel](https://babeljs.io/)

## Installation

See the [Chain Reaction](https://github.com/ericnograles/chain-reaction) repo.  The entire solution relies on a specific folder structure which is managed by the main `chain-reaction` repo.

## Running the Web App

1. After completing the Installation Instructions above, simply run `./start.sh` whilst in the chain-reaction.web root.
2. Browse to `http://localhost:8080` for the web app.
3. Browse to `http://localhost:8082` for the mocha unit tests.

Note that any changes/additions to either the web app or unit tests will be automatically detected and reloaded in your browser.

All web application related code will be dropped into the `/dist` folder of the root.  All unit test related code will be dropped into the `/unit-tests` folder of the root.  Note that both of these folders are in the `.gitignore`.

## Folder Structure
* **/config**: Environment-specific variables.  See the `webpack.DefinePlugin` configuration in `webpack.config.js` to see how this is orchestrated.
* **/src**
    * **/components**: Write your React components here
    * **/containers**: Write your React containers here.
    * **/assets**
        * **/images**: Any images you need for your website
        * **/styles**: Any CSS files you need for your website
* **/tests**: Supporting code for Mocha unit tests
    * **index.html**: The hosting web page for the Mocha tests, hosted on `http://localhost:8082`
    * **index.js**: A supporting file run by the [Webpack Mocha Loader](https://github.com/webpack/mocha-loader) of `webpack.tests.config.js` that dynamically brings in all `.test.js` files
    * **setup.js**: A supporting file used by `npm test` to bring in [jsdom](https://github.com/tmpvar/jsdom) so that unit tests can run from the command line for CI purposes
* **webpack.node.js**: If you prefer your Webpack run through Node itself, use this file

## Components vs. Containers

In practice, Components and Containers are fundamentally similar.  Both are extensions of a React Component.  However, there is a key distinction between the two architecturally.

### Containers

The primary role of a Container is twofold: to group Components together and to be stateful. Typical use cases of a Container can be:

* The entry point of a `react-router` route, as defined in `/src/containers/App.js`
* The root of a complex hierarchy of Components within another Container

There generally is no hard and fast rule about how you should decompose Containers into sub-Containers.  A litmus test could be if you're finding that a Container is growing in size in terms of state and action management, that could be a good time to consider decomposing Components into sub-Containers.

### Components

The primary role of a Component is simply visual.  A Component remains stateless and gets its data passed down via `props` from their parent Containers.

## Unit Tests

This project has a `webpack.tests.config.js` file which launches a Mocha test runner on `http://localhost:8082`.  As you will see in the configuration, simply adding a file with a extension of `.test.js` will include it in the test suite.

A personal recommendation would be to sit these `.test.js` files alongside their constituent components or containers for ease of navigation.  However, this is simply a recommendation and not a hard and fast rule, so use what works best for you!

Additionally, we can run our unit tests in a headless fashion for CI purposes.  Simply run `npm test` to see the results.

## Images and CSS

### New Assets

If you need to bring in any new images or CSS, first add it to the appropriate /assets folder above.  Then modify `/src/app.js` and `require` in the new file.  In this baseline, for example, we require in `main.css` and `react-favicon.ico`.

## What's Under the Hood?
* [Webpack](https://webpack.github.io/)
* [react-router](https://github.com/reactjs/react-router)
* [Material Design Lite](https://github.com/google/material-design-lite)
* [Babel](https://babeljs.io/)
* [Mocha](https://mochajs.org/)