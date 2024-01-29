import './App.css';
import { TasksProvider } from './contexts/TaskContext';
import Header from './common/Header/Header';
import TaskList from './pages/TaskList';
import FeedbackBanner from './common/FeedbackBanner';
import { FeedbackProvider } from './contexts/FeedbackContext';

const App = () => {
	return (
		<TasksProvider>
			<FeedbackProvider>
				<div className='App'>
					<FeedbackBanner />
					<Header />
					<TaskList />
				</div>
			</FeedbackProvider>
		</TasksProvider>
	);
};

export default App;
