import './App.css';
import { TasksProvider } from './contexts/TaskContext';
import TaskList from './pages/TaskList';

const App = () => {
	return (
		<TasksProvider>
			<div className='App'>
				<TaskList />
			</div>
		</TasksProvider>
	);
};

export default App;
