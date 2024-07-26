import {
	updateProjectValidationSchema,
	UpdateProjectValidationType,
} from '@/lib/utils/validation/project.validation';
import BaseProjectForm from '../BaseProjectForm';
import { useUpdateProject } from '@/hooks/projects/useUpdateProject.ts';
import { toast } from 'react-toastify';
import { handleClientError } from '@/lib/utils/handleClientError';
import { ProjectModelType } from '@/models/project.model';

interface UpdateProjectFormProps {
	project: ProjectModelType;
	onClose?: () => void;
}

const UpdateProjectForm: React.FC<UpdateProjectFormProps> = ({
	project,
	onClose,
}): React.ReactElement => {
	const { mutateAsync } = useUpdateProject();

	const updateProject = async (data: UpdateProjectValidationType) => {
		try {
			const response: any = await mutateAsync({
				id: project._id,
				updatedProject: data,
			});
			if (!response?.success) {
				throw new Error(response?.error);
			}
			toast.success('Project updated successfully!');
			onClose && onClose();
		} catch (error: unknown) {
			handleClientError(error);
		}
	};

	return (
		<BaseProjectForm
			title="Update Project"
			defaultValues={project}
			onSubmit={(data: UpdateProjectValidationType) => updateProject(data)}
			validationSchema={updateProjectValidationSchema}
		/>
	);
};

export default UpdateProjectForm;
