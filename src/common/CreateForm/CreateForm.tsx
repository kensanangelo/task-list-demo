import { useState, FormEvent } from 'react';
import { useTasksContext } from '../../contexts/TaskContext';
import { Task } from '../../types/Task';
import { useFeedbackContext } from '../../contexts/FeedbackContext';

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
			await createTask(formState as Partial<Task>);
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
		return <button onClick={() => setIsOpen(true)}>Create Task</button>;
	}

	return (
		<form onSubmit={submitTask}>
			<button type='button' onClick={closeForm}>
				Cancel
			</button>
			<h2>CreateForm</h2>
			<ul>
				<li>
					<label htmlFor='name'>Name*</label>
					<input
						type='text'
						id='name'
						value={formState.name}
						onChange={(e) => updateFormState('name', e.target.value)}
						required
					/>
				</li>
				<li>
					<label htmlFor='description'>Description</label>
					<input
						type='text'
						id='description'
						value={formState.description}
						onChange={(e) =>
							updateFormState('description', e.target.value)
						}
					/>
				</li>
				<li>
					<label htmlFor='due'>Due Date*</label>
					<input
						type='datetime-local'
						id='due'
						value={formState.due}
						onChange={(e) => updateFormState('due', e.target.value)}
						required
					/>
				</li>
				<li>
					<label htmlFor='assignee'>Assignee*</label>
					<input
						type='text'
						id='assignee'
						value={formState.assignee}
						onChange={(e) => updateFormState('assignee', e.target.value)}
						required
					/>
				</li>
				<li>
					<label htmlFor='priority'>Priority*</label>
					<select
						id='priority'
						value={formState.priority}
						onChange={(e) => updateFormState('priority', e.target.value)}
						required
					>
						<option value='Low'>Low</option>
						<option value='Medium'>Medium</option>
						<option value='High'>High</option>
					</select>
				</li>
			</ul>
			<button type='submit'>Create</button>
		</form>
	);
};

export default CreateForm;
