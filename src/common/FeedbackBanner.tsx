import { useState, useEffect } from 'react';
import { FeedbackType, useFeedbackContext } from '../contexts/FeedbackContext';
import styled from 'styled-components';

const FeedbackBanner = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { feedback } = useFeedbackContext();

	useEffect(() => {
		// If we get a new message, open the banner
		if (!feedback.message) return;

		setIsOpen(true);
	}, [feedback]);

	return isOpen ? (
		<Banner type={feedback.type}>
			<Message>{feedback.message}</Message>
			<CloseBtn onClick={() => setIsOpen(false)} aria-label='Close'>
				X
			</CloseBtn>
		</Banner>
	) : null;
};

const Banner = styled.div<{ type: FeedbackType }>`
	display: flex;
	justify-content: space-between;

	border-radius: 5px;

	margin: 0.5rem 0.5rem;
	padding: 0.5rem 0.5rem;

	${(props) =>
		props.type === 'success'
			? `background-color: #e6f0d3;
			border: 1px solid #bdde7f;`
			: `background-color: #f5c9b3;
			border: 1px solid #ff9966`}
`;

const Message = styled.p`
	margin: 0;
	padding: 0;
`;

const CloseBtn = styled.button`
	margin: 0;
	padding: 0;

	font-size: 1rem;
	opacity: 0.2;
	transition: opacity 0.2s ease-in-out;

	&:hover {
		opacity: 0.6;
	}
`;

export default FeedbackBanner;
