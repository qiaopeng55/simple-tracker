# Simple issues tracker

## Overview

A React.js Redux based simple issues tracker that both non-technical and technical people would want to use.
The app features Drag and Drop interface to allow easily transfer tasks from one status to another.

The project was developed to demonstrate best practice in Test Driven React development.

### [Demo](https://simple-tracker.herokuapp.com)

## Getting started

You can view a live demo at https://simple-tracker.herokuapp.com

To get the frontend running locally:

- clone the repository
- `yarn install` to install all dependencies
- `yarn start` to start the local server (this project uses create-react-app)

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Runs the test watcher in an interactive mode.

### `yarn coverage`

Generate test coverage report

### `yarn lint`

Run linting rules

## What’s Included?

* React, Redux and react-router
* styled-components
* react-dnd
* custom eslint & prettier rules
* testing using [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest)

Note: browser data persistence and backend server are not included with this code base. They will be implemented as next iterationon of the project.

### Featured Technologies

- react, redux & redux-router. These tools work great together to help structure unidirectional data flow
- enzyme & jest. I always believe testing is as important as production code and I have tried my best to achieve high test coverage in my code (currently at 88.62% for the Simple Issue Tracker code base)
- create react app, good default configuration to help bootstrap the react app
- eslint & prettier, when used with editor integration and precommit hook, these tools will offer great assistance in enforcing coding standard and catch potential errors
- react-dnd, this is a test-friendly drag & drop library. I like how the library author is using high order component to enhancing existing react component with drag & drop features without the need to introduce data mutation and class inheritance.


## Feedback

If you have ideas or suggestions, [Please let me know] (qiaopeng55@gmail.com)
