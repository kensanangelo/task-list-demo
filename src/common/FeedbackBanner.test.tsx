import { render, screen } from '@testing-library/react';
import FeedbackBanner from './FeedbackBanner';
import { FeedbackContext, FeedbackType } from '../contexts/FeedbackContext';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('<FeedbackBanner />', () => {
	const mockAddFeedback = jest.fn();
	const mockFeedback = {
		message: 'Test Message',
		type: 'success' as FeedbackType,
	};

	const mockEmptyFeedback = {
		message: '',
		type: 'error' as FeedbackType,
	};

	const renderComponent = (feedbackToTest = mockFeedback) => {
		return render(
			<FeedbackContext.Provider
				value={{ feedback: feedbackToTest, addFeedback: mockAddFeedback }}
			>
				<FeedbackBanner />
			</FeedbackContext.Provider>
		);
	};

	const closeBanner = () => {
		const closeBtn = screen.getByRole('button');
		userEvent.click(closeBtn);
	};

	it('does not render if feedback is empty', () => {
		renderComponent(mockEmptyFeedback);

		expect(screen.queryByText(mockFeedback.message)).not.toBeInTheDocument();
	});

	it('renders if feedback is available', () => {
		renderComponent();

		expect(screen.getByText(mockFeedback.message)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('closes banner when X is clicked', async () => {
		renderComponent();
		expect(screen.getByText(mockFeedback.message)).toBeInTheDocument();

		act(() => {
			closeBanner();
		});

		expect(screen.queryByText(mockFeedback.message)).not.toBeInTheDocument();
	});
});
