import styled from '@emotion/styled';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = React.forwardRef<
	HTMLInputElement,
	InputProps
>((props, ref): React.ReactElement => {
	return <StyledInput {...props} ref={ref} />;
});

const StyledInput = styled.input`
	&:not([type='file']) {
		color: ${({ theme }) => theme.colors.primary};
		border: 1.5px solid rgba(0, 0, 0, 0.35);
		padding: 0.5rem 1.5rem;
		display: flex;
		font-size: 1rem;
		font-family: var(--font-primary);
		justify-content: space-between;
		align-items: center;
		border-radius: ${({ theme }) => theme.borderRadius.primary};
		transition: ${({ theme }) => theme.transition.primary};

		&:hover,
		&:focus {
			outline: 1.5px solid ${({ theme }) => theme.colors.primary};
		}
	}
`;

// Set the display name for better debugging experience
Input.displayName = 'Input';

export default Input;
