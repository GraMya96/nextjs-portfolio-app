import {
	addProjectValidationSchema,
	AddProjectValidationType,
} from '@/lib/utils/validation/project.validation';
import BaseProjectForm from '../BaseProjectForm';
import { useAddProject } from '@/hooks/projects/useAddProject';
import { toast } from 'react-toastify';
import { handleClientError } from '@/lib/utils/handleClientError';

interface AddProjectFormProps {
	onClose?: () => void;
}

const AddProjectForm: React.FC<AddProjectFormProps> = ({
	onClose,
}): React.ReactElement => {
	const { mutateAsync } = useAddProject();

	const addProject = async (project: AddProjectValidationType) => {
		try {
			const validatedProject = addProjectValidationSchema.safeParse(project);
			if (!validatedProject.success) {
				toast.error(validatedProject.error.message);
				return;
			}
			const response = await mutateAsync(project);
			if (!response?.success) {
				throw new Error(response?.error);
			}
			toast.success('New project added successfully!');
			onClose && onClose();
		} catch (error: unknown) {
			handleClientError(error);
		}
	};

	return (
		<BaseProjectForm
			title="Add Project"
			validationSchema={addProjectValidationSchema}
			onSubmit={(data: AddProjectValidationType) => addProject(data)}
		/>
	);
};

export default AddProjectForm;
