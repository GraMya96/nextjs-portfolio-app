import { render, screen } from '../../lib/utils/testUtils';
import ProjectCard from '@/components/projects/ProjectCard';
import { ProjectModelType } from '@/models/project.model';
import { expect } from '@jest/globals';

jest.mock('next/navigation', () => ({
	usePathname: jest.fn(() => '/admin'),
}));

const project = {
	_id: '1',
	name: 'Test Project',
	description: 'Test Description',
	url: 'http://test.com',
	image: '/test.png',
};

describe('ProjectCard', () => {
	it('renders ProjectCard and opens update/delete modals', () => {
		render(<ProjectCard project={project as ProjectModelType} />);

		const updateIcon = screen.getByTitle(/update project/i);
		const deleteIcon = screen.getByTitle(/delete project/i);

		expect(screen.getByText(/test project/i)).toBeInTheDocument();
		expect(updateIcon).toBeInTheDocument();
		expect(deleteIcon).toBeInTheDocument();
	});
});
