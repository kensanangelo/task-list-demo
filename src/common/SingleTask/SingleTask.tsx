import { useState } from 'react';
import { Task } from '../../types/Task';
import MoreSection from './MoreSection';
import styled from 'styled-components';

interface Props {
	task: Task;
}

const SingleTask = ({ task }: Props) => {
	const [showMore, setShowMore] = useState<boolean>(false);

	return (
		<MainContainer onClick={() => setShowMore(!showMore)}>
			<h3>{task.name}</h3>
			<p>{new Date(task.due).toLocaleString('en-us')}</p>
			<p>{task.priority}</p>
			{showMore && (
				<MoreSection
					description={task.description}
					assignee={task.assignee}
					status={task.status}
				/>
			)}
		</MainContainer>
	);
};

const MainContainer = styled.button`
	display: flex;
`;

export default SingleTask;
