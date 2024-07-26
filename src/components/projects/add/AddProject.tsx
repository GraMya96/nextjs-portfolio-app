import { useState } from 'react';
import AddProjectButton from './AddProjectButton';
import AddProjectForm from './AddProjectForm';
import Modal from '@/components/ui/Modal';

const AddProject: React.FC = ({}): React.ReactElement => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<AddProjectForm onClose={() => setIsModalOpen(false)} />
			</Modal>

			<AddProjectButton onOpenAddProjectModal={() => setIsModalOpen(true)} />
		</>
	);
};

export default AddProject;
