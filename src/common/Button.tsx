import styled from 'styled-components';

interface ButtonProps {
	size?: 'small' | 'medium' | 'large';
	color?: 'primary' | 'hollow';
}

const Button = styled.button<ButtonProps>`
	${(props) => `
	border: 1px solid #ccc;
	border-radius: 5px;
	transition: background-color 0.2s ease-in-out;

	${
		props.size === 'large'
			? 'font-size: 1rem; padding: 0.5rem 1rem;'
			: props.size === 'medium'
			? 'font-size: 0.8rem; padding: 0.3rem 0.6rem;'
			: 'font-size: 0.7rem; padding: 0.2rem 0.3rem;'
	}

	${
		props.color === 'primary'
			? `
				background-color: #48c2f2;
				color: #fff;
			`
			: 'background-color: #fff;'
	}

	&:hover {
		${
			props.color === 'primary'
				? `
				background-color: #40a6ce;
			`
				: 'background-color: #eee;'
		}
	}
`}
`;

export default Button;
