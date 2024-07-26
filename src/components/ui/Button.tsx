import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
}): React.ReactElement => {
	return (
		<StyledButton onClick={onClick}>
			<span>{children}</span>
		</StyledButton>
	);
};

const StyledButton = styled.button`
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.secondary};
	padding: 0.75rem 1.5rem;
	display: flex;
	border: none;
	font-weight: bold;
	font-size: 0.95rem;
	position: relative;
	box-shadow: ${({ theme }) => theme.shadows.secondary};
	justify-content: space-between;
	align-items: center;
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	cursor: pointer;
	overflow: hidden;
	transition: ${({ theme }) => theme.transition.primary};

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		pointer-events: none;
		width: 0;
		z-index: 1;
		border-radius: ${({ theme }) => theme.borderRadius.secondary};
		background-color: ${({ theme }) => theme.colors.primary};
		transition: ${({ theme }) => theme.transition.primary};
	}

	&:hover {
		color: #ffffff;
		border-radius: ${({ theme }) => theme.borderRadius.secondary};

		&:before {
			width: 100%;
			color: ${({ theme }) => theme.colors.secondary};
		}
	}

	span {
		z-index: 2;
	}

	${mq.tablet} {
		font-size: 1rem;
	}
`;

export default Button;
