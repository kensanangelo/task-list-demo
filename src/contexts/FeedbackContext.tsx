import React, { useState, useContext } from 'react';

export type FeedbackType = 'success' | 'error';

interface Message {
	message: string;
	type: FeedbackType;
}

interface ProviderProps {
	children: React.ReactNode;
}

interface ContextProps {
	feedback: Message;
	addFeedback: (message: string, type: FeedbackType) => void;
}

const defaultState = {
	feedback: {
		message: '',
		type: 'error' as FeedbackType,
	},
	addFeedback: () => {},
};

export const FeedbackContext = React.createContext<ContextProps>(defaultState);

export const FeedbackProvider = ({ children }: ProviderProps) => {
	const [feedback, setFeedback] = useState<Message>({
		message: '',
		type: 'error',
	});

	const addFeedback = async (message: string, type: FeedbackType) => {
		setFeedback({ message, type });
	};

	const value = {
		feedback,
		addFeedback,
	};

	return (
		<FeedbackContext.Provider value={value}>
			{children}
		</FeedbackContext.Provider>
	);
};

export const useFeedbackContext = () => useContext(FeedbackContext);
