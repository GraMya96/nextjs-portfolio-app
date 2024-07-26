import UserProjects from '@/components/projects/UserProjects';
import { useGetProjects } from '@/hooks/projects/useGetProjects';
import { render, screen } from '@/lib/utils/testUtils';

jest.mock('@/hooks/projects/useGetProjects');

const mockProjects = [
	{
		_id: '1',
		name: 'Test Project 1',
		description: 'Test Description 1',
		url: 'http://test1.com',
		image: '/test1.png',
	},
	{
		_id: '2',
		name: 'Test Project 2',
		description: 'Test Description 2',
		url: 'http://test2.com',
		image: '/test2.png',
	},
];

describe('UserProjects', () => {
	it('renders UserProjects with projects', () => {
		(useGetProjects as jest.Mock).mockReturnValue({
			data: mockProjects,
			isLoading: false,
		});

		render(<UserProjects />);

		expect(screen.getByText(/your projects/i)).toBeInTheDocument();
		expect(screen.getByText(/test project 1/i)).toBeInTheDocument();
		expect(screen.getByText(/test project 2/i)).toBeInTheDocument();
	});

	it('renders UserProjects with no projects', () => {
		(useGetProjects as jest.Mock).mockReturnValue({
			data: [],
			isLoading: false,
		});

		render(<UserProjects />);
		expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
	});
});
