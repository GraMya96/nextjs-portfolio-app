import { css } from '@emotion/react';

/* This will be the global styles for the whole app, using
  the Emotion css function amd importing the Emotion Global component in
*/
const GlobalStyles = css`
	html,
	body,
	ul,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	button {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	body {
		position: relative;
		background-color: #bccfd8;
		height: 100vh;
	}

	h1 {
		font-size: 2.5rem;
		letter-spacing: 0.1rem;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	p {
		line-height: 1.5;
	}

	* {
		box-sizing: border-box;
	}
`;

export default GlobalStyles;
