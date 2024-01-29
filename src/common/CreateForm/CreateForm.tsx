import { useState } from 'react';
import { useTasksContext } from '../../contexts/TaskContext';
import { Task } from '../../types/Task';

const emptyFormState = {
	name: '',
	description: '',
	due: '',
	assignee: '',
	priority: '',
};

const CreateForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState(emptyFormState);

	const { createTask } = useTasksContext();

	const updateFormState = (key: string, value: string) => {
		setFormState({ ...formState, [key]: value });
	};

	const submitTask = () => {
		if (
			!formState.name ||
			!formState.due ||
			!formState.assignee ||
			!formState.priority
		) {
			// TODO: Show error message
			return;
		}

		createTask(formState as Partial<Task>);
	};

	const cancel = () => {
		setIsOpen(false);
		setFormState(emptyFormState);
	};

	if (!isOpen) {
		return <button onClick={() => setIsOpen(true)}>Create Task</button>;
	}

	return (
		<form onSubmit={submitTask}>
			<button type='button' onClick={cancel}>
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
					/>
				</li>
				<li>
					<label htmlFor='assignee'>Assignee*</label>
					<input
						type='text'
						id='assignee'
						value={formState.assignee}
						onChange={(e) => updateFormState('assignee', e.target.value)}
					/>
				</li>
				<li>
					<label htmlFor='priority'>Priority*</label>
					<select
						id='priority'
						value={formState.priority}
						onChange={(e) => updateFormState('priority', e.target.value)}
					>
						<option value='' disabled selected>
							Select priority
						</option>
						<option value='low'>Low</option>
						<option value='medium'>Medium</option>
						<option value='high'>High</option>
					</select>
				</li>
			</ul>
			<button type='submit'>Create</button>
		</form>
	);
};

export default CreateForm;
