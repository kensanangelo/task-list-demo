import styled from 'styled-components';
import { Status } from '../../types/Task';

interface MoreSectionProps {
	description: string;
	assignee: string;
	status: Status;
}

const MoreSection = ({ description, assignee, status }: MoreSectionProps) => {
	return (
		<Container>
			{description ? <Description>{description}</Description> : null}
			<Col>
				<Item>Assignee: {assignee}</Item>
				<Item>{status}</Item>
			</Col>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	gap: 1rem;

	margin-top: 0.5rem;
`;

const Col = styled.div`
	margin-left: auto;
`;

const Item = styled.p`
	margin: 0;
	padding: 0;
	text-align: right;

	font-size: 0.8rem;
`;

const Description = styled.p`
	margin: 0;
	padding: 0;
`;

export default MoreSection;
