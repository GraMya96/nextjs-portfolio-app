import '@emotion/react';
import { DefaultTheme } from './styled.d';
import theme from '../styles/theme';

/* Using this global declaration file, we can extend the default Emotion theme type
   	 	with the one defined in /styles/theme.ts, ensuring a better type-safety and autocompletion
    	when dealing with styled components that use the global theme properties
		(such as colors, borders, animations, etc.).
*/

type CustomTheme = typeof theme;

declare module '@emotion/react' {
	export interface Theme extends CustomTheme {}
}
