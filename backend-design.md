# Backend Design

> Note: All responses will be in [JSend format](https://github.com/omniti-labs/jsend)

API Calls:

-  [GET `/tasks`](#get-tasks)
-  [POST `/tasks`](#post-tasks)
-  [GET `/tasks/:id`](#get-tasks-id) (not implemented)
-  [GET `/tasks/:id/details`](#get-tasks-id-details)

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
   					priority: "High" | "Medium" | "Low"
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
   		dueDate: string (ISO date string),
   		assignee: number (id of assignee)
   		priority: string ("High" | "Medium" | "Low")
   	}
   ```

   -  Response:

   ```
   	{
   		status: "success",
   		data: null
   	}
   ```

<a id="get-tasks-id"></a>

-  GET `/tasks/:id` (not implemented)

   -  Response:

   ```
   	{
   		status: "success",
   		data: {
   			task: {
   				id: number,
   				name: string,
   				due: string (ISO date string),
   				priority: string ("High" | "Medium" | "Low")
   			}
   		}
   	}
   ```

<a id="get-tasks-id-details"></a>

-  GET `/tasks/:id/details`
   -  Response:
   ```
   	{
   		status: "success",
   		data: {
   			task: {
   				description: string
   				assignee: number (id of assignee)
   				status: string ("Not Started", "In Progress", "Completed")
   			}
   		}
   	}
   ```
