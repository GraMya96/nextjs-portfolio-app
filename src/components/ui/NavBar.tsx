import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarProps extends React.HTMLAttributes<HTMLMenuElement> {}

const NavBar: React.FC<NavBarProps> = (): React.ReactElement => {
	const path = usePathname();

	return (
		<StyledNavBar>
			<ul>
				<Link href="/" className={path === '/' ? 'active' : ''}>
					Home
				</Link>
				<Link href="/about" className={path === '/about' ? 'active' : ''}>
					About
				</Link>
				<Link href="/admin" className={path === '/admin' ? 'active' : ''}>
					Admin
				</Link>
			</ul>
		</StyledNavBar>
	);
};

const StyledNavBar = styled.nav`
	width: 100%;
	padding: 1rem ${({ theme }) => theme.padding.primary.mobile};
	background-color: ${({ theme }) => theme.colors.primary};

	${mq.tablet} {
		padding: 1rem ${({ theme }) => theme.padding.primary.tablet};
	}
	${mq.laptop} {
		padding: 1rem ${({ theme }) => theme.padding.primary.laptop};
	}

	& ul {
		color: #ffffff;
		display: flex;
		gap: 1rem;

		a {
			color: #ffffff;
			transition: ${({ theme }) => theme.transition.primary};

			&.active {
				border-bottom: 1.5px solid #ffffff;
				cursor: default;
				font-weight: bold;

				&:hover {
					transform: none;
				}
			}

			&:last-of-type {
				margin-left: auto;
			}

			&:hover {
				transform: scale(1.075);
			}
		}
	}
`;

export default NavBar;
