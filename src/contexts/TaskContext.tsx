import React, { useState, useContext, useEffect } from 'react';
import { Task } from '../types/Task';
import ApiService from '../services/api';

interface ProviderProps {
	children: React.ReactNode;
}

interface ContextProps {
	tasks: Task[];
	isLoadingTasks: boolean;
	fetchTasks: () => void;
	createTask: (task: Partial<Task>) => void;
}

const defaultState = {
	tasks: [],
	isLoadingTasks: true,
	fetchTasks: () => {},
	createTask: () => {},
};

export const TasksContext = React.createContext<ContextProps>(defaultState);

export const TasksProvider = ({ children }: ProviderProps) => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isLoadingTasks, setIsLoadingTasks] = useState<boolean>(false);

	const fetchTasks = async () => {
		await setIsLoadingTasks(true);

		try {
			const newTasks = await ApiService.getTasks();
			setTasks(newTasks);
		} catch (error) {
			console.error(error);
			setTasks([]);
		}

		setIsLoadingTasks(false);
	};

	const createTask = async (task: Partial<Task>) => {
		await ApiService.postTask(task);
		fetchTasks();
	};

	// Fetches tasks initially when the site is started up
	useEffect(() => {
		fetchTasks();
	}, []);

	const value = {
		tasks,
		isLoadingTasks,
		fetchTasks,
		createTask,
	};

	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);
