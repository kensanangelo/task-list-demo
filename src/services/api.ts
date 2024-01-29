import { tasks as mockTasks } from '../mocks/apiResponses';
import { Task } from '../types/Task';

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

	async postTask(task: Partial<Task>) {
		const result = await Promise.resolve({
			status: 'success',
			data: null,
		});

		if (result.status !== 'success') {
			throw new Error('Error posting task');
		}
	},
};

export default ApiService;
