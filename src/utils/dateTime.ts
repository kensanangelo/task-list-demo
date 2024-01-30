export const formatIsoDateString = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US');
};
