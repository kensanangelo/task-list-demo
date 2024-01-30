import { TasksProvider } from './contexts/TaskContext';
import Header from './common/Header/Header';
import TaskList from './pages/TaskList';
import FeedbackBanner from './common/FeedbackBanner';
import { FeedbackProvider } from './contexts/FeedbackContext';

const App = () => {
	return (
		<FeedbackProvider>
			<TasksProvider>
				<div className='App'>
					<FeedbackBanner />
					<Header />
					<TaskList />
				</div>
			</TasksProvider>
		</FeedbackProvider>
	);
};

export default App;
