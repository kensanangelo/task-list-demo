import { Status } from '../../types/Task';

interface MoreSectionProps {
	description: string;
	assignee: string;
	status: Status;
}

const MoreSection = ({ description, assignee, status }: MoreSectionProps) => {
	return (
		<div>
			{description ? <p>{description}</p> : null}
			<p>Assignee: {assignee}</p>
			<p>{status}</p>
		</div>
	);
};

export default MoreSection;
