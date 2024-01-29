import { tasks as mockTasks } from '../mocks/apiResponses';
import { Task, TaskForm, Status } from '../types/Task';

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
		// but we are simulating it here
		const newId = mockTasks[mockTasks.length - 1].id + 1;

		return {
			...task,
			id: newId,
			status: 'Not Started' as Status,
		};
	},
};

export default ApiService;
