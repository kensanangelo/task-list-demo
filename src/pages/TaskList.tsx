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
	gap: 1rem;

	padding: 1rem;
	padding-top: 0;

	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const List = styled.ul`
	list-style: none;
	padding: 0;

	margin: 0 auto;
	flex: 2;
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const ListItem = styled.li``;

const FormCol = styled.div`
	flex: 1;
	max-width: 400px;
`;
