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
		// NOTE: In real life, we'd get the ID from the server
		// Here we're just generating a random number to replicate that
		// In rare circumstances, this may cause a duplicate key warning
		// but that would not occur in the real app
		const newId = Math.floor(Math.random() * (9999 - 6)) + 6;

		const result = await Promise.resolve({
			status: 'success',
			data: {
				task: {
					...task,
					id: newId,
					status: 'Not Started' as Status,
				},
			},
		});

		if (result.status !== 'success') {
			throw new Error('Error posting task');
		}

		return result.data.task;
	},
};

export default ApiService;
