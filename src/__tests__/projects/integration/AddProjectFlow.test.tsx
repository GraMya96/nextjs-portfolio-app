import { expect } from '@jest/globals';
import {
	addNewProject,
	screen,
	waitFor,
	createServer,
} from '../../utils/testUtils';
import { newProjectData } from '../../__mocks__/data/newProject';
import AddProjectForm from '@/components/projects/add/AddProjectForm';

/* This integration test suite is meant to test the "Add Project flow":
 * - how the components BaseProjectForm and UserProjects interact with each other
 * - how the UI reacts to the POST api call to /api/projects according to the response
 */

describe('Integration Tests for AddProject creation:', () => {
	createServer();

	it('shows the new project in the list of projects when API call succeeds', async () => {
		await addNewProject(newProjectData, <AddProjectForm />);

		waitFor(async () =>
			expect(
				await screen.findByRole('heading', { name: newProjectData.name })
			).toBeInTheDocument()
		);
	});

	it('returns an error when API call fails', async () => {
		await addNewProject(
			{
				name: '',
				description: 'Test Description',
				url: 'error url',
				image: '',
			},
			<AddProjectForm />
		);

		waitFor(async () =>
			expect(await screen.findByText(/error/i)).toBeInTheDocument()
		);
	});
});
