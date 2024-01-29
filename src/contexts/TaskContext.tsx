import React, { useState, useContext } from 'react';
import { Task } from '../types/Task';
import ApiService from '../services/api';

interface ProviderProps {
	children: React.ReactNode;
}

interface ContextProps {
	tasks: Task[];
	fetchTasks: () => void;
}

const defaultState = {
	tasks: [],
	fetchTasks: () => {},
};

export const TasksContext = React.createContext<ContextProps>(defaultState);

export const TasksProvider = ({ children }: ProviderProps) => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const fetchTasks = async () => {
		try {
			const newTasks = await ApiService.getTasks();
			setTasks(newTasks);
		} catch (error) {
			console.error(error);
			setTasks([]);
		}
	};

	const value = {
		tasks,
		fetchTasks,
	};

	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);
