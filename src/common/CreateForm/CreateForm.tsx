import { useState, FormEvent } from 'react';
import { useTasksContext } from '../../contexts/TaskContext';
import { TaskForm } from '../../types/Task';
import { useFeedbackContext } from '../../contexts/FeedbackContext';
import Button from '../Button';
import styled from 'styled-components';

const emptyFormState = {
	name: '',
	description: '',
	due: '',
	assignee: '',
	priority: 'Low',
};

const CreateForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState(emptyFormState);

	const { addFeedback } = useFeedbackContext();

	const { createTask } = useTasksContext();

	const updateFormState = (key: string, value: string) => {
		setFormState({ ...formState, [key]: value });
	};

	const submitTask = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!formState.name ||
			!formState.due ||
			!formState.assignee ||
			!formState.priority
		) {
			addFeedback('Please complete all required fields', 'error');
			return;
		}

		try {
			await createTask(formState as TaskForm);
			closeForm();
			addFeedback('Task created successfully!', 'success');
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} catch (error) {
			addFeedback('Something went wrong. Could not create task', 'error');
		}
	};

	const clearFormState = () => {
		setFormState(emptyFormState);
	};

	const closeForm = () => {
		setIsOpen(false);
		clearFormState();
	};

	if (!isOpen) {
		return (
			<Button size='large' onClick={() => setIsOpen(true)}>
				Create Task
			</Button>
		);
	}

	return (
		<Form onSubmit={submitTask}>
			<Title>Create a new task</Title>
			<InputGroup>
				<Label htmlFor='name'>Name*</Label>
				<Input
					type='text'
					id='name'
					value={formState.name}
					onChange={(e) => updateFormState('name', e.target.value)}
					required
				/>
			</InputGroup>
			<InputGroup>
				<Label htmlFor='description'>Description</Label>
				<Input
					type='text'
					id='description'
					value={formState.description}
					onChange={(e) => updateFormState('description', e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<Label htmlFor='due'>Due Date*</Label>
				<Input
					type='datetime-local'
					id='due'
					value={formState.due}
					onChange={(e) => updateFormState('due', e.target.value)}
					required
				/>
			</InputGroup>
			<InputGroup>
				<Label htmlFor='assignee'>Assignee*</Label>
				<Input
					type='text'
					id='assignee'
					value={formState.assignee}
					onChange={(e) => updateFormState('assignee', e.target.value)}
					required
				/>
			</InputGroup>
			<InputGroup>
				<Label htmlFor='priority'>Priority*</Label>
				<Dropdown
					id='priority'
					value={formState.priority}
					onChange={(e) => updateFormState('priority', e.target.value)}
					required
				>
					<option value='Low'>Low</option>
					<option value='Medium'>Medium</option>
					<option value='High'>High</option>
				</Dropdown>
			</InputGroup>
			<ButtonRow>
				<Button size='medium' type='button' onClick={closeForm}>
					Cancel
				</Button>
				<Button size='medium' color='primary' type='submit'>
					Create
				</Button>
			</ButtonRow>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Title = styled.h2`
	margin: 0;
	margin-bottom: 0.5rem;

	font-family: 'Playfair Display', serif;
	font-size: 1.4rem;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

const Label = styled.label`
	font-size: 0.8rem;
`;

const Input = styled.input`
	padding: 0.3rem;
	border: 1px solid #ccc;
	border-radius: 3px;
`;

const Dropdown = styled.select`
	padding: 0.3rem;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 3px;
`;

const ButtonRow = styled.div`
	display: flex;
	gap: 0.5rem;

	margin-top: 0.8rem;
`;

export default CreateForm;
