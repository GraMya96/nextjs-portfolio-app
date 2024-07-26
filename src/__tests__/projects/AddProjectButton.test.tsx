import AddProjectButton from '@/components/projects/add/AddProjectButton';
import { fireEvent } from '@testing-library/react';
import { jest, test, expect } from '@jest/globals';
import { render, screen } from '../../lib/utils/testUtils';

test('renders AddProjectButton and handles click on it', () => {
	const handleClick = jest.fn();
	render(<AddProjectButton onOpenAddProjectModal={handleClick} />);
	const button = screen.getByRole('button', { name: /add a new project/i });
	expect(button).toBeInTheDocument();
	fireEvent.click(button);
	expect(handleClick).toHaveBeenCalledTimes(1);
});
