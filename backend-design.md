# Backend Design

> Note: All responses will be in [JSend format](https://github.com/omniti-labs/jsend)

API Calls:

-  [GET `/tasks`](#get-tasks)
-  [POST `/tasks`](#post-tasks)
-  [API calls that may be implemented in the future](#future)

---

<a id="get-tasks"></a>

-  GET `/tasks`

   -  Response:

   ```
   	{
   		status: "success",
   		data: {
   			tasks: [
   				{
   					id: number,
   					name: string,
   					due: string (ISO date string),
   					priority: "High" | "Medium" | "Low",
   					description: string,
   					assignee: string (name of user)
   					status: string ("Not Started"|"In Progress"|"Completed")
   				}
   			]
   		}
   	}
   ```

<a id="post-tasks"></a>

-  POST `/tasks`

   -  Request

   ```
   	{
   		name: string,
   		description: string,
   		due: string (ISO date string),
   		assignee: string (name of assignee)
   		priority: string ("High" | "Medium" | "Low")
   	}
   ```

   -  Response:

   ```
   	{
   		status: "success",
   		data: {
   			task: {
   					id: number,
   					name: string,
   					due: string (ISO date string),
   					priority: "High" | "Medium" | "Low",
   					description: string,
   					assignee: string (name of user)
   					status: string ("Not Started"|"In Progress"|"Completed")
   				}
   		}
   	}
   ```

   --

<a id="future"></a>

## API calls that _may_ be implemented in the future (depending on required functionality)

-  GET `/tasks/:id`: Get an individual task
-  PATCH `/tasks/:id`: Update a task with things like status update, or name change
-  GET `/tasks/:id/details`: Get more details about the task (if there is too much data for one request)
