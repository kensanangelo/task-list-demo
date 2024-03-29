# Work Breakdown

-  Setup project
   -  Set up a React project using create-react-app, and install necessary npm libraries:
      -  `styled-components`
-  Make mock data
   -  Create a mock data file and fill with data for api responses.
-  Set up API functions
   -  Create file to handle all api calls, as listed in `backend-design.md`
   -  Also set up types for task
-  Create task fetching context
   -  We need a standalone context and hook to handle task list fetching.
   -  Set up so that we have functionality to fetch task details and submit new task.
-  Create Task List component
   -  Create the task list component that takes task list data and displays it in a list of SingleTask components
-  Create Single Task component
   -  Create a dumb component that just displays a single task in the task list
-  Add MoreSection to SingleTask
   -  When the Single Task component is clicked, open the 'More' section and display that data
-  Create toast message system
   -  We need a toast system. Set up the global component, and the context/hook so that other components can call it
-  Task Creation Form component
   -  Add the form to the page with all it's fields. Do not add submit functionality as that will be handled in another ticket.
   -  Handle form validation:
      -  description is not required (leave as empty string if so)
      -  priority is an enum
   -  Display toast message if there is an input validation failure
-  Form submission
   -  When the form is submitted, send that info to the api, then have the task list refresh to display updated info
   -  Display toast message stating whether or not submission succeeded
