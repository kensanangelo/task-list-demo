import { fireEvent, render, screen } from '@testing-library/react';
import SingleTask from './SingleTask';
import { Task } from '../../types/Task';
import { formatIsoDateString } from '../../utils/dateTime';

describe('<SingleTask />', () => {
	const mockTask: Task = {
		id: 1,
		name: 'Test Task',
		description: 'Test Description',
		due: new Date().toISOString(),
		assignee: 'Test Assignee',
		priority: 'Low',
		status: 'In Progress',
	};

	const renderComponent = (taskToTest = mockTask) => {
		render(<SingleTask task={taskToTest} />);
	};

	const openMoreSection = () => {
		const taskEl = screen.getByRole('button');
		fireEvent.click(taskEl);
	};

	it('renders the task with correct items', () => {
		renderComponent();

		expect(screen.getByText(mockTask.name)).toBeInTheDocument();

		const dueString = `Due: ${formatIsoDateString(mockTask.due)}`;
		expect(screen.getByText(dueString)).toBeInTheDocument();

		expect(screen.getByText(mockTask.priority)).toBeInTheDocument();
	});

	it('opens the more section on click', async () => {
		renderComponent();
		openMoreSection();

		expect(await screen.findByText(mockTask.description)).toBeInTheDocument();

		const assigneeString = `Assignee: ${mockTask.assignee}`;
		expect(screen.getByText(assigneeString)).toBeInTheDocument();

		expect(screen.getByText(mockTask.status)).toBeInTheDocument();
	});
});
