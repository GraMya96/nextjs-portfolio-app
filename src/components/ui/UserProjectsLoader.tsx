import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

const UserProjectsLoader: React.FC = (): React.ReactElement => {
	return (
		<StyledUserProjectsLoader>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</StyledUserProjectsLoader>
	);
};

const StyledUserProjectsLoader = styled.div`
	@keyframes loadingBackground {
		0% {
			background-color: grey;
		}
		50% {
			background-color: lightgrey;
		}
		100% {
			background-color: grey;
		}
	}

	gap: 3rem;
	justify-content: center;
	grid-template-columns: 1fr;
	padding: 2rem;
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	background-color: rgba(0, 0, 0, 0.1);
	display: grid;

	${mq.big_mobile} {
		grid-template-columns: repeat(2, 1fr);
	}

	${mq.laptop} {
		grid-template-columns: repeat(3, 1fr);
	}
	${mq.desktop} {
		grid-template-columns: repeat(4, 1fr);
	}

	& div {
		animation: loadingBackground 1s infinite;
		width: 300px;
		height: 300px;
		border-radius: ${({ theme }) => theme.borderRadius.secondary};

		${mq.tablet} {
			width: 250px;
		}

		${mq.laptop} {
			width: 350px;
			height: 250px;
		}

		${mq.desktop} {
			width: 400px;
			height: 300px;
		}
	}
`;

export default UserProjectsLoader;
