import styled from '@emotion/styled';
import React from 'react';

const Footer: React.FC = (): React.ReactElement => {
	return (
		<StyledFooter>
			<div>
				<p>Portfolio full-stack application made with Next.js</p>
				<p>
					Realized in 2024 by{' '}
					<a href="https://github.com/GraMya96">Matteo Gramegnatota</a>
				</p>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	width: 100%;
	padding: 1.5rem ${({ theme }) => theme.padding.primary.mobile};
	background-color: #000000;
	margin-top: auto;
	color: #ffffff;
	text-align: right;
	font-size: 0.85rem;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	line-height: 1.5;
	z-index: 1;

	& div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	& p > a {
		transition: ${({ theme }) => theme.transition.primary};
		text-decoration: underline;
		font-weight: bold;
	}
`;

export default Footer;
