import { Task } from '../../types/Task';

interface Props {
	task: Task;
}

const SingleTask = ({ task }: Props) => {
	return (
		<div>
			<h3>{task.name}</h3>
			<p>{new Date(task.due).toLocaleString('en-us')}</p>
			<p>{task.priority}</p>
		</div>
	);
};

export default SingleTask;
