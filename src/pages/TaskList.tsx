import { useEffect } from 'react';
import { useTasksContext } from '../contexts/TaskContext';

const TaskList = () => {
	const { tasks, isLoadingTasks } = useTasksContext();

	return (
		<main>
			<h1>Task List</h1>
			<ul>
				{isLoadingTasks ? (
					<p>Loading tasks...</p>
				) : (
					tasks.map((task) => <li key={task.id}>{task.name}</li>)
				)}
			</ul>
		</main>
	);
};

export default TaskList;
