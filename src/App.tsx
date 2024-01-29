import './App.css';
import { TasksProvider } from './contexts/TaskContext';
import Header from './common/Header/Header';
import TaskList from './pages/TaskList';

const App = () => {
	return (
		<TasksProvider>
			<div className='App'>
				<Header />
				<TaskList />
			</div>
		</TasksProvider>
	);
};

export default App;
