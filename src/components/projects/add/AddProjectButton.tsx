import Button from '../../ui/Button';

interface AddProjectButtonProps {
	onOpenAddProjectModal: () => void;
}

const AddProjectButton: React.FC<AddProjectButtonProps> = ({
	onOpenAddProjectModal,
}): React.ReactElement => {
	return <Button onClick={onOpenAddProjectModal}>Add a new Project</Button>;
};

export default AddProjectButton;
