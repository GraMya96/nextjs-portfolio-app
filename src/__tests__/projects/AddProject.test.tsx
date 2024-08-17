import { expect } from '@jest/globals';
import { render, screen } from '../../lib/utils/testUtils';
import userEvent from '@testing-library/user-event';
import AddProject from '@/components/projects/add/AddProject';
import BaseProjectForm from '@/components/projects/BaseProjectForm';
import { addProjectValidationSchema } from '@/lib/utils/validation/project.validation';
import { newProjectData } from '../__mocks__/data/newProject';

describe('Add a new project', () => {
	it('opens up the modal when clicking on AddProjectButton', async () => {
		// Arrange
		render(<AddProject />);
		const button = screen.getByRole('button', { name: /add a new project/i });

		// Act
		await userEvent.click(button);
		screen.logTestingPlaygroundURL();

		// Assert
		expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument();
		expect(screen.getByRole('dialog', { hidden: true })).toHaveTextContent(
			/add project/i
		);
	});

	// --------------------------------------------------------------------------------

	it('renders AddProjectForm and handles data submission with no image', async () => {
		// Arrange
		const handleSubmit = jest.fn();
		render(
			<BaseProjectForm
				title="Add Project"
				validationSchema={addProjectValidationSchema}
				onSubmit={handleSubmit}
			/>
		);
		const nameInput = screen.getByRole('textbox', { name: /name/i });
		const descriptionInput = screen.getByRole('textbox', {
			name: /description/i,
		});
		const urlInput = screen.getByRole('textbox', { name: /url/i });
		const submitButton = screen.getByRole('button');

		// Act
		await userEvent.type(nameInput, newProjectData.name);
		await userEvent.type(descriptionInput, newProjectData.description);
		await userEvent.type(urlInput, newProjectData.url);
		await userEvent.click(submitButton);

		// Assert
		expect(handleSubmit).toHaveBeenCalledTimes(1);
		expect(handleSubmit).toHaveBeenCalledWith(newProjectData);
	});
});
