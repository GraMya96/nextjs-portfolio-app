import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

interface PageIntroProps {
	title: string;
	description: string;
	otherDescription?: string;
}

const PageIntro: React.FC<PageIntroProps> = ({
	title,
	description,
	otherDescription,
}): React.ReactElement => {
	return (
		<StyledPageIntro>
			<h1>{title}</h1>
			<p>{description}</p>
			{otherDescription && <p>{otherDescription}</p>}
		</StyledPageIntro>
	);
};

const StyledPageIntro = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 0.75rem;

	${mq.tablet} {
		align-items: flex-start;
		text-align: left;
	}
	${mq.laptop} {
		gap: 1rem;
	}
`;

export default PageIntro;
