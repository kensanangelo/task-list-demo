import styled from 'styled-components';

const HeaderComponent = () => {
	return (
		<Header>
			<Title>Task List</Title>
		</Header>
	);
};

const Header = styled.header`
	display: flex;
	justify-content: flex-start;

	padding: 0.6rem 1.4rem;
`;

const Title = styled.h1`
	margin: 0;
	padding: 0;

	font-family: 'Playfair Display', serif;
	font-size: 1.6rem;
`;

export default HeaderComponent;
