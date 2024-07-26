import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';
import React from 'react';

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = React.forwardRef<
	HTMLTextAreaElement,
	TextareaProps
>((props, ref): React.ReactElement => {
	return <StyledTextarea {...props} ref={ref} />;
});

const StyledTextarea = styled.textarea`
	color: ${({ theme }) => theme.colors.primary};
	border: 1.5px solid rgba(0, 0, 0, 0.35);
	padding: 0.5rem 1.5rem;
	font-size: 1rem;
	resize: vertical;
	min-height: 15vh;
	max-height: 20vh;
	max-width: 300px;
	font-family: var(--font-primary);
	justify-content: space-between;
	align-items: center;
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	transition: ${({ theme }) => theme.transition.primary};

	&:hover,
	&:focus {
		outline: 1.5px solid ${({ theme }) => theme.colors.primary};
	}

	${mq.desktop} {
		max-width: 400px;
		min-height: 20vh;
	}
`;

// Set the display name for better debugging experience
Textarea.displayName = 'Textarea';

export default Textarea;
