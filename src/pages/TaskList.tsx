import { useTasksContext } from '../contexts/TaskContext';
import SingleTask from '../common/SingleTask/SingleTask';
import CreateForm from '../common/CreateForm/CreateForm';
import styled from 'styled-components';
const TaskList = () => {
	const { tasks, isLoadingTasks } = useTasksContext();

	return (
		<Main>
			<List>
				{isLoadingTasks ? (
					<p>Loading tasks...</p>
				) : (
					tasks.map((task) => (
						<ListItem key={task.id}>
							<SingleTask task={task} />
						</ListItem>
					))
				)}
			</List>
			<FormCol>
				<CreateForm />
			</FormCol>
		</Main>
	);
};

export default TaskList;

const Main = styled.main`
	display: flex;

	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const List = styled.ul`
	list-style: none;
	padding: 0;

	margin: 0 auto;
	flex: 2;
`;

const ListItem = styled.li`
	margin-bottom: 1rem;
	border-top: 1px solid #ccc;

	&:last-child {
		border-bottom: 1px solid #ccc;
	}
`;

const FormCol = styled.div`
	flex: 1;
	max-width: 400px;
`;
