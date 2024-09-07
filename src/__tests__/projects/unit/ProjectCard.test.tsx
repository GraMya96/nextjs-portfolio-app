import { projectsList } from '@/__tests__/__mocks__/data/projectsList';
import { render, screen } from '../../utils/testUtils';
import ProjectCard from '@/components/projects/ProjectCard';
import { expect } from '@jest/globals';

jest.mock('next/navigation', () => ({
	usePathname: jest.fn(() => '/admin'),
}));

describe('ProjectCard', () => {
	it('renders ProjectCard and opens update/delete modals', () => {
		render(<ProjectCard project={projectsList[0]} />);

		const updateIcon = screen.getByTitle(/update project/i);
		const deleteIcon = screen.getByTitle(/delete project/i);

		expect(screen.getByText(/test project/i)).toBeInTheDocument();
		expect(updateIcon).toBeInTheDocument();
		expect(deleteIcon).toBeInTheDocument();
	});
});
