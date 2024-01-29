import { tasks as mockTasks } from '../mocks/apiResponses';

const ApiService = {
	async listTasks() {
		try {
			const result = await Promise.resolve({
				status: 'success',
				data: { tasks: [mockTasks] },
			});

			if (result.status !== 'success') {
				throw new Error('Error fetching tasks');
			}

			return result.data.tasks;
		} catch (error) {
			console.log(error);
			return [];
		}
	},

	async postTask() {
		const result = await Promise.resolve({
			status: 'success',
			data: null,
		});

		if (result.status !== 'success') {
			throw new Error('Error posting task');
		}
	},
};
