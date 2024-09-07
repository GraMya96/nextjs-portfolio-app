import UserProjects from '@/components/projects/UserProjects';
import { useGetProjects } from '@/hooks/projects/useGetProjects';
import { render, screen, waitFor } from '@/__tests__/utils/testUtils';
import { projectsList } from '@/__tests__/__mocks__/data/projectsList';

jest.mock('@/hooks/projects/useGetProjects');

describe('UserProjects', () => {
	it('renders UserProjects component and displays the correct projects', () => {
		(useGetProjects as jest.Mock).mockReturnValue({
			data: projectsList,
		});
		render(<UserProjects />);

		waitFor(async () => {
			expect(await screen.findByText(/your projects/i)).toBeInTheDocument();
			expect(await screen.findByText(projectsList[0].name)).toBeInTheDocument();
			expect(await screen.findByText(projectsList[1].name)).toBeInTheDocument();
		});
	});

	it('renders UserProjects with no projects', () => {
		(useGetProjects as jest.Mock).mockReturnValue({
			data: [],
		});

		render(<UserProjects />);
		waitFor(async () => {
			expect(await screen.findByText(/no projects found/i)).toBeInTheDocument();
		});
	});
});
