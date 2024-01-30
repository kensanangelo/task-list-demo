import React, { useState, useContext, useEffect } from 'react';
import { Task, TaskForm } from '../types/Task';
import ApiService from '../services/api';
import { useFeedbackContext } from './FeedbackContext';

interface ProviderProps {
	children: React.ReactNode;
}

interface ContextProps {
	tasks: Task[];
	isLoadingTasks: boolean;
	fetchTasks: () => void;
	createTask: (task: TaskForm) => void;
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

	const { addFeedback } = useFeedbackContext();

	const fetchTasks = async () => {
		await setIsLoadingTasks(true);

		try {
			const newTasks = await ApiService.getTasks();
			setTasks(newTasks);
		} catch (error) {
			addFeedback('There was a problem fetching your tasks', 'error');
			setTasks([]);
		}

		setIsLoadingTasks(false);
	};

	const createTask = async (task: TaskForm) => {
		const newTask = await ApiService.postTask(task);
		setTasks([...tasks, newTask]);
	};

	// Fetches tasks initially when the site is started up
	useEffect(() => {
		fetchTasks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
