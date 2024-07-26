import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/styles/globalStyle';
import type { AppProps } from 'next/app';
import theme from '@/styles/theme';
import Layout from '@/components/ui/Layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import localFont from 'next/font/local';

export const font = localFont({
	src: './fonts/font-regular.otf',
	variable: '--font-primary',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={GlobalStyles} />
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Layout className={font.className}>
						{' '}
						<Component {...pageProps} />
					</Layout>{' '}
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
}
