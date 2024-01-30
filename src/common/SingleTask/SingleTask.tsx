import { useState } from 'react';
import { Priority, Task } from '../../types/Task';
import MoreSection from './MoreSection';
import styled from 'styled-components';
import { formatIsoDateString } from '../../utils/dateTime';

interface Props {
	task: Task;
}

const SingleTask = ({ task }: Props) => {
	const [showMore, setShowMore] = useState<boolean>(false);

	return (
		<MainContainer onClick={() => setShowMore(!showMore)}>
			<Row>
				<Name>{task.name}</Name>
				<InfoCol>
					<DueDate>Due: {formatIsoDateString(task.due)}</DueDate>
					<PriorityComponent level={task.priority}>
						{task.priority}
					</PriorityComponent>
				</InfoCol>
			</Row>
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
	width: 100%;

	padding: 0.6rem 1rem;

	border: 1px solid #ccc;
	border-radius: 10px;

	box-shadow: rgba(50, 50, 93, 0.05) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;

	transition: box-shadow 0.3s ease-in-out;

	&:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
			rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
`;

const InfoCol = styled.div`
	display: flex;
	flex-direction: column;
`;

const Name = styled.h3`
	margin: 0;
	padding: 0;
`;

const DueDate = styled.p`
	margin: 0;
	padding: 0;

	opacity: 0.7;
	font-size: 0.7rem;
`;

const PriorityComponent = styled.p<{ level: Priority }>`
	margin: 0;
	padding: 0;

	font-size: 0.8rem;
	border: 1px solid #ccc;
	border-radius: 3px;

	${(props) =>
		props.level === 'High'
			? `
	background-color: #cc3300;
	color: #fff;
	`
			: props.level === 'Medium'
			? `background-color: #ffcc00;`
			: 'background-color: #99cc33'}
`;

export default SingleTask;
