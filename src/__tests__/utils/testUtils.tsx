// RISOLVERE:
// test:unit e test:integration commands on package.json
// per ora non funzionano, sembra non riescere a trovare i test nei
// path specificati (./src/__tests__/projects/unit e ./src/__tests__/projects/integration)

import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import theme from '@/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import { AddProjectType, UpdateProjectType } from '@/types/project.types';
import { server } from '../msw/server';

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</QueryClientProvider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
	render(ui, { wrapper: AllTheProviders, ...options });

interface FormInputs {
	[label: string]: string | null;
}

const fillFormInputs = async (
	inputs: FormInputs,
	component?: React.ReactElement
) => {
	if (component) customRender(component);
	const user = userEvent.setup();
	for (let [label, value] of Object.entries(inputs)) {
		const inputElement = (await screen.findByLabelText(
			new RegExp(label, 'i')
		)) as HTMLInputElement;
		// if input element is not of type file, we can use the userEvent.type method
		if (inputElement.type === 'text' && value !== '') {
			await user.clear(inputElement);
			await user.type(inputElement, value as string);
		}
	}
};

const submitForm = async (
	submitButtonLabel: RegExp = /submit/i
): Promise<void> => {
	const user = userEvent.setup();
	const submitButton = await screen.findByRole('button', {
		name: submitButtonLabel,
	});
	await user.click(submitButton);
};

const addNewProject = async (
	inputs: AddProjectType,
	component?: React.ReactElement
): Promise<void> => {
	if (component) customRender(component);
	await fillFormInputs(inputs);
	await submitForm(/add project/i);
};

const updateProject = async (
	inputs: UpdateProjectType,
	component?: React.ReactElement
): Promise<void> => {
	if (component) customRender(component);
	await fillFormInputs(inputs);
	await submitForm(/update project/i);
};

const openModal = async (
	elementToClick: HTMLElement,
	component?: React.ReactElement
): Promise<void> => {
	if (component) customRender(component);
	const user = userEvent.setup();
	await user.click(elementToClick);
};

// To use only in integration tests where there is a need to mock API calls
const createServer = () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());
};

export * from '@testing-library/react';
export {
	customRender as render,
	fillFormInputs,
	openModal,
	submitForm,
	addNewProject,
	updateProject,
	createServer,
};
