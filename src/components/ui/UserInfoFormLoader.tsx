import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

const UserInfoFormLoader: React.FC = (): React.ReactElement => {
	return <StyledUserInfoFormLoader></StyledUserInfoFormLoader>;
};

const StyledUserInfoFormLoader = styled.div`
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

	animation: loadingBackground 1s infinite;
	width: 100%;
	height: 500px;
	margin: 0 auto;
	border-radius: ${({ theme }) => theme.borderRadius.primary};

	${mq.tablet} {
		margin-left: 0;
		width: 55%;
	}
	${mq.laptop} {
		width: 80%;
	}
	${mq.desktop} {
		width: 52%;
	}
`;

export default UserInfoFormLoader;
