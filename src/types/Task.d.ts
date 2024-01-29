export type Priority = 'High' | 'Medium' | 'Low';
export type Status = 'Not Started' | 'In Progress' | 'Completed';

export interface Task {
	id: number;
	name: string;
	due: string; // ISO datestring
	priority: Priority;
	description: string;
	assignee: string; // User name
	status: Status;
}

export interface TaskForm {
	name: string;
	due: string; // ISO datestring
	priority: Priority;
	description: string;
	assignee: string; // User name
}
