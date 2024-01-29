import { useTasksContext } from '../contexts/TaskContext';
import SingleTask from '../common/SingleTask/SingleTask';
const TaskList = () => {
	const { tasks, isLoadingTasks } = useTasksContext();

	return (
		<main>
			<h1>Task List</h1>
			<ul>
				{isLoadingTasks ? (
					<p>Loading tasks...</p>
				) : (
					tasks.map((task) => (
						<li key={task.id}>
							<SingleTask task={task} />
						</li>
					))
				)}
			</ul>
		</main>
	);
};

export default TaskList;
