import { useState, useEffect } from 'react';
import { useFeedbackContext } from '../contexts/FeedbackContext';

const FeedbackBanner = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { feedback } = useFeedbackContext();

	useEffect(() => {
		if (!feedback.message) return;

		setIsOpen(true);
	}, [feedback.message]);

	return isOpen ? (
		<div
			className={`feedback-banner ${
				feedback.type === 'success'
					? `feedback-banner--success`
					: `feedback-banner--error`
			}`}
		>
			<p>{feedback.message}</p>
			<button onClick={() => setIsOpen(false)} aria-label='Close'>
				X
			</button>
		</div>
	) : null;
};

export default FeedbackBanner;
