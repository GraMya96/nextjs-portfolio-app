import { expect } from '@jest/globals';
import { addNewProject, render, screen, waitFor } from '../../utils/testUtils';
import { openModal } from '../../utils/testUtils';
import AddProject from '@/components/projects/add/AddProject';
import { newProjectData } from '../../__mocks__/data/newProject';
import AddProjectForm from '@/components/projects/add/AddProjectForm';
import { useAddProject } from '@/hooks/projects/useAddProject';
import BaseProjectForm from '@/components/projects/BaseProjectForm';
import { addProjectValidationSchema } from '@/lib/utils/validation/project.validation';

jest.mock('@/hooks/projects/useAddProject', () => ({
	useAddProject: jest.fn(() => ({
		mutateAsync: jest.fn(() => Promise.resolve()),
	})),
}));

describe('Tests for AddProject component', () => {
	it('opens up the modal when clicking on AddProjectButton', async () => {
		render(<AddProject />);
		await openModal(
			await screen.findByRole('button', { name: /add a new project/i })
		);

		expect(screen.getByRole('dialog', { hidden: true })).toHaveTextContent(
			/add project/i
		);
	});

	// --------------------------------------------------------------------------------

	// it.only('calls the addProject mutation with correct data when creating a new project', async () => {
	// 	// The mutateAsync function is returned by React Query's useMutation hook
	// 	// annd it's used to perform mutations on the server-side.
	// 	// In this case, we are mocking the mutateAsync function to simulate a successful mutation.

	// 	const addProjectMutation = jest.fn(() => Promise.resolve());
	// 	(useAddProject as jest.Mock).mockReturnValue({
	// 		mutateAsync: addProjectMutation,
	// 	});

	// 	await addNewProject(newProjectData, <AddProjectForm />);

	// 	await waitFor(() => {
	// 		expect(addProjectMutation).toHaveBeenCalledTimes(1);
	// 		expect(addProjectMutation).toHaveBeenCalledWith(newProjectData);
	// 	});
	// });

	// it.only('calls the addProject mutation with correct data when creating a new project', async () => {
	// 	const handleSubmit = jest.fn();

	// 	await addNewProject(
	// 		newProjectData,
	// 		<BaseProjectForm
	// 			onSubmit={handleSubmit}
	// 			title="Add Project"
	// 			validationSchema={addProjectValidationSchema}
	// 		/>
	// 	);

	// 	await waitFor(() => {
	// 		expect(handleSubmit).toHaveBeenCalledTimes(1);
	// 		expect(handleSubmit).toHaveBeenCalledWith(newProjectData);
	// 	});
	// });
});
