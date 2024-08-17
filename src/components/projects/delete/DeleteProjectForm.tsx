import { DeleteProjectValidationType } from '@/lib/utils/validation/project.validation';
import { useDeleteProject } from '@/hooks/projects/useDeleteProject';
import { toast } from 'react-toastify';
import { handleClientError } from '@/lib/utils/handleClientError';
import Button from '@/components/ui/Button';
import styled from '@emotion/styled';
import { ProjectModelType } from '@/models/project.model';
import { font } from '@/pages/_app';

interface DeleteProjectFormProps {
	project: ProjectModelType;
	onClose?: () => void;
}

const DeleteProjectForm: React.FC<DeleteProjectFormProps> = ({
	project,
	onClose,
}): React.ReactElement => {
	const { mutateAsync } = useDeleteProject();

	const deleteProject = async (data: DeleteProjectValidationType) => {
		try {
			const response = await mutateAsync(data);
			if (!response?.success) {
				throw new Error(response?.error);
			}
			toast.success('Project deleted successfully!');
			onClose && onClose();
		} catch (error: unknown) {
			handleClientError(error);
		}
	};

	return (
		<StyledDeleteProjectForm className={font.className}>
			<h3>Are you sure you want to delete this project?</h3>
			<Button
				onClick={() =>
					deleteProject({
						id: project?._id as string,
					})
				}
			>
				Yes
			</Button>
		</StyledDeleteProjectForm>
	);
};

const StyledDeleteProjectForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.25rem;
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	background-color: #fff;
	box-shadow: ${({ theme }) => theme.shadows.primary};
	padding: 1.5rem;
`;

export default DeleteProjectForm;
