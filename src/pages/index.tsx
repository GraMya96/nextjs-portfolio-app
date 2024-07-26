import UserProjects from '@/components/projects/UserProjects';
import PageIntro from '@/components/ui/PageIntro';
import UserInfo from '@/components/user/UserInfo';
import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

const HomePage: React.FC = (): React.ReactElement => {
	return (
		<StyledHomePage>
			<PageIntro
				title="Welcome to your personal portfolio"
				description="Here you can see a list of all the projects you have worked on, including the name and a brief description of each one."
			/>

			<UserInfo />

			<UserProjects />
		</StyledHomePage>
	);
};

const StyledHomePage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.5rem;
	text-align: center;

	${mq.tablet} {
		align-items: flex-start;
		text-align: left;
	}
`;

export default HomePage;
