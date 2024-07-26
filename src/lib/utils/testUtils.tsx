import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import theme from '@/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: ReactNode }) => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</QueryClientProvider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
