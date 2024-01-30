import { Task } from '../types/Task';

export const tasks: Task[] = [
	{
		id: 1,
		name: 'Task 1',
		due: '2020-01-01T00:00:00.000Z',
		priority: 'High',
		description: 'This is a task',
		assignee: 'Bob',
		status: 'Not Started',
	},
	{
		id: 2,
		name: 'Task 2',
		due: '2020-01-01T00:00:00.000Z',
		priority: 'Medium',
		description: 'This is a task',
		assignee: 'Bob',
		status: 'In Progress',
	},
	{
		id: 3,
		name: 'Task 3',
		due: '2020-01-01T00:00:00.000Z',
		priority: 'Low',
		description: 'This is a task',
		assignee: 'Alice',
		status: 'Completed',
	},
	{
		id: 4,
		name: 'Task 4',
		due: '2020-01-01T00:00:00.000Z',
		priority: 'High',
		description: '',
		assignee: 'Bob',
		status: 'Not Started',
	},
	{
		id: 5,
		name: 'Task 5',
		due: '2020-01-01T00:00:00.000Z',
		priority: 'Medium',
		description: 'This is a task',
		assignee: 'Alice',
		status: 'In Progress',
	},
];
