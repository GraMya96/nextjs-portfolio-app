import { useGetProjects } from '@/hooks/projects/useGetProjects';
import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';
import UserProjectsLoader from '../ui/UserProjectsLoader';
import ProjectCard from './ProjectCard';

const UserProjects: React.FC = (): React.ReactElement => {
	const { data, isLoading } = useGetProjects();

	const projects = data?.data;

	return isLoading ? (
		<UserProjectsLoader />
	) : (
		<StyledUserProjects>
			{!projects?.length ? (
				<p>No projects found</p>
			) : (
				<>
					<h2>Your Projects</h2>
					<StyledProjectList>
						{projects?.map((project) => (
							<ProjectCard project={project} key={String(project?.id)} />
						))}
					</StyledProjectList>
				</>
			)}
		</StyledUserProjects>
	);
};

const StyledUserProjects = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledProjectList = styled.div`
	background-color: ${({ theme }) => theme.colors.tertiary};
	padding: 2rem;
	display: grid;
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	gap: 3rem;
	justify-content: center;
	grid-template-columns: 1fr;

	${mq.big_mobile} {
		grid-template-columns: repeat(2, 1fr);
	}

	${mq.laptop} {
		grid-template-columns: repeat(3, 1fr);
	}
	${mq.desktop} {
		grid-template-columns: repeat(4, 1fr);
	}

	& p {
		line-height: 1;
	}
`;

export default UserProjects;
