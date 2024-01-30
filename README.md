# Task List Demo Project

## How to Run Locally

-  If using `nvm`, run `nvm i` then `nvm use` to install and use the correct version of node (`v20.11.0`)
-  `npm i` to install node modules
-  `npm start` to start development server
-  Go to the url shown to access the site (usually `http://localhost:3000`)
-  Tests can be run with `npm test`

## Assumptions

-  The task details are light enough to include in the initial fetch. If we are anticipating more data that may end up being too much for this request in the future, we can discuss adding a separate /details api call to fetch that on opening the task.

## Design Decisions

-  I chose React because my familiarity with it would enable a quick development time. Additionally, I used `Create React App` because it is very quick to setup with all of the added functionality (RTL, Typescript, etc).
-  I am using the `styled-components` library for two reasons. The first is that it makes styling much faster and easier to read through in React, and second because it allows me to quickly change the DOM elements' names to describe their function (for example: instead of `div`, an element can be called `ButtonRow`).
-  Typescript was implemented so that there would be less chance of errors caused by typing issues, and so development would be quicker and easier.
-  Testing is implemented using `React Testing Library` so that the testing process would replicate the user experience as closely as possible, and focus less on implementation details.

## Work Breakdown

-  To see the work breakdown, go the the file [`work-breakdown.md`](work-breakdown.md).

## Backend Design

-  To see backend design, go to the file [`backend-design.md`](backend-design.md).
