import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

const UserInfoLoader: React.FC = (): React.ReactElement => {
	return (
		<StyledUserInfoLoader>
			<div></div>
			<div></div>
			<div></div>
		</StyledUserInfoLoader>
	);
};

const StyledUserInfoLoader = styled.div`
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

	display: flex;
	text-align: center;
	flex-direction: column;
	gap: 1.5rem;
	align-items: center;

	& div {
		animation: loadingBackground 1s infinite;
		width: 100%;
		height: 40px;
		border-radius: ${({ theme }) => theme.borderRadius.primary};

		&:nth-of-type(2) {
			margin-top: 0.5rem;
			height: 100px;
		}
		&:nth-of-type(3) {
			margin-top: 1.5rem;
			height: 100px;
		}

		${mq.tablet} {
			max-width: 70%;
		}
		${mq.laptop} {
			max-width: 60%;
		}
		${mq.desktop} {
			max-width: 50%;
		}
	}

	${mq.tablet} {
		align-items: flex-start;
		text-align: left;
	}
`;

export default UserInfoLoader;
