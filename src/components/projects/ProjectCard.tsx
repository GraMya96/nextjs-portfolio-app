import { ProjectModelType } from '@/models/project.model';
import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';
import { XCircleIcon, DocumentIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import UpdateProjectForm from './update/UpdateProjectForm';
import DeleteProjectForm from './delete/DeleteProjectForm';
import Modal from '../ui/Modal';

/* Even in the front-end, the ProjectModelType (directly inferred from the Mongoose schema)
    is being used, in order to maintain type safety and predictability throughout the whole data-flow
    from the server to the client.
*/

interface ProjectCardProps {
	project: ProjectModelType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
}): React.ReactElement => {
	const pathname = usePathname();

	const [isUpdateProjectModalOpen, setIsUpdateProjectModalOpen] =
		useState(false);
	const [isDeleteProjectModalOpen, setIsDeleteProjectModalOpen] =
		useState(false);

	return (
		<>
			<Modal
				isOpen={isUpdateProjectModalOpen}
				onClose={() => setIsUpdateProjectModalOpen(false)}
			>
				<UpdateProjectForm
					project={project}
					onClose={() => setIsUpdateProjectModalOpen(false)}
				/>
			</Modal>
			<Modal
				isOpen={isDeleteProjectModalOpen}
				onClose={() => setIsDeleteProjectModalOpen(false)}
			>
				<DeleteProjectForm
					project={project}
					onClose={() => setIsDeleteProjectModalOpen(false)}
				/>
			</Modal>

			<StyledProjectCard>
				{/* Update/Delete buttons: only visible in the admin page */}
				{pathname === '/admin' && (
					<StyledProjectCardActions>
						<DocumentIcon
							width={24}
							height={24}
							cursor="pointer"
							title="Update Project"
							onClick={() => setIsUpdateProjectModalOpen(true)}
						/>
						<XCircleIcon
							width={24}
							height={24}
							cursor="pointer"
							title="Delete Project"
							onClick={() => setIsDeleteProjectModalOpen(true)}
						/>
					</StyledProjectCardActions>
				)}

				<Image
					src={project?.image || '/next.svg'}
					alt="The Project's Image"
					width={250}
					height={100}
				/>
				<StyledProjectCardContent>
					<h2>{project?.name}</h2>
					<p>{project?.description}</p>
				</StyledProjectCardContent>
				<a href={project?.url || '#'} target="_blank">
					<span>View Project</span>
				</a>
			</StyledProjectCard>
		</>
	);
};

const StyledProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	gap: 0.25rem;
	border-radius: ${({ theme }) => theme.borderRadius.secondary};
	background-color: #fff;
	box-shadow: ${({ theme }) => theme.shadows.primary};

	& img {
		object-fit: cover;
		width: 100%;
		max-height: 250px;
	}

	& a {
		color: #ffffff;
		background-color: ${({ theme }) => theme.colors.primary};
		padding: 0.75rem 1.5rem;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: auto;
		border: none;
		font-weight: bold;
		font-size: 1rem;
		position: relative;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
		cursor: pointer;
		overflow: hidden;
		transition: ${({ theme }) => theme.transition.primary};

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 0;
			z-index: 1;
			background-color: ${({ theme }) => theme.colors.secondary};
			transition: ${({ theme }) => theme.transition.primary};
		}

		&:hover {
			color: #000000;

			&:before {
				width: 100%;
				color: ${({ theme }) => theme.colors.secondary};
			}
		}

		span {
			z-index: 2;
			text-align: center;
		}
	}
`;

const StyledProjectCardActions = styled.div`
	display: flex;
	position: absolute;
	gap: 0.25rem;
	padding: 0.25rem;
	top: 3%;
	right: 2%;
	background-color: lightgray;
	border: 1px solid rgba(0, 0, 0, 0.35);
	border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

const StyledProjectCardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	text-align: center;
	padding: 1.25rem;

	& p {
		padding: 0.5rem;
		max-height: 5rem;
		line-height: 1.4;
		overflow-y: auto;
	}
`;

export default ProjectCard;
