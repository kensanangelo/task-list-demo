import { tasks as mockTasks } from '../mocks/apiResponses';
import { Task, TaskForm, Status } from '../types/Task';

// This is to simulate API calls, while actually using mock data
// Would be replaced in real app
const ApiService = {
	async getTasks(): Promise<Task[]> {
		const result = await Promise.resolve({
			status: 'success',
			data: { tasks: mockTasks },
		});

		if (result.status !== 'success') {
			throw new Error('Error fetching tasks');
		}

		return result.data.tasks;
	},

	async postTask(task: TaskForm): Promise<Task> {
		const result = await Promise.resolve({
			status: 'success',
			data: null,
		});

		if (result.status !== 'success') {
			throw new Error('Error posting task');
		}

		// NOTE: In real life, we'd get the ID from the server
		// Here we're just generating a random number to replicate that
		// In rare circumstances, this may cause a duplicate key warning
		// but that would not occur in the real app
		const newId = Math.floor(Math.random() * (9999 - 6)) + 6;

		return {
			...task,
			id: newId,
			status: 'Not Started' as Status,
		};
	},
};

export default ApiService;
