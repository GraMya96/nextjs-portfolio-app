import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

const NotFoundPage: React.FC = (): React.ReactElement => {
	return (
		<StyledNotFoundPage>
			<h1>Error 404</h1>
			<p>Page not found!</p>
		</StyledNotFoundPage>
	);
};

const StyledNotFoundPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 1rem;

	${mq.tablet} {
		align-items: flex-start;
	}
`;

export default NotFoundPage;
