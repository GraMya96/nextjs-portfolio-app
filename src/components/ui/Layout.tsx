import styled from '@emotion/styled';
import NavBar from './NavBar';
import mq from '@/styles/utils/mediaQueries';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from './Footer';

/* Mobile first approach when using the custom mq utility
   to avoid using media queries directly (and duplicating code) in
   the styled components.

   After the default mobile properties, tablet, laptop and desktop
   breakpoints can be used easily in the styled component.
*/

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
	children,
	...props
}): React.ReactElement => {
	return (
		<div {...props} className={props.className}>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				closeOnClick
				rtl={false}
				pauseOnHover
				theme="dark"
				transition={Bounce}
			/>
			<NavBar />
			<StyledMain>{children}</StyledMain>
			<Footer />
		</div>
	);
};

const StyledMain = styled.main`
	padding: 1rem ${({ theme }) => theme.padding.primary.mobile};

	${mq.big_mobile} {
		padding: 2rem ${({ theme }) => theme.padding.primary.mobile};
	}

	${mq.laptop} {
		padding: 3rem ${({ theme }) => theme.padding.primary.laptop};
	}
`;

export default Layout;
