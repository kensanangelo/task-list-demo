import { useTasksContext } from '../contexts/TaskContext';
import SingleTask from '../common/SingleTask/SingleTask';
import CreateForm from '../common/CreateForm/CreateForm';
const TaskList = () => {
	const { tasks, isLoadingTasks } = useTasksContext();

	return (
		<main>
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
