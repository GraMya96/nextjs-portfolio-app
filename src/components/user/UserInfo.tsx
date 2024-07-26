import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import SkillsList from './SkillsList';
import Link from 'next/link';
import { useGetUserInfo } from '@/hooks/user/useGetUserInfo';
import UserInfoLoader from '../ui/UserInfoLoader';

const UserInfo: React.FC = (): React.ReactElement => {
	const pathname = usePathname();
	const { data: userInfo, isLoading } = useGetUserInfo();

	return isLoading ? (
		<UserInfoLoader />
	) : (
		<StyledUserInfo>
			{/* If the information about the user still need to be added by thy him,
                the page will shoe an alternative/welcome text.
                From the moment the user is created and his information provided,
                the proper content will be displayed.
            */}
			{!userInfo || !userInfo?.length ? (
				pathname !== '/about' ? (
					<h3>
						You can start by adding your information and past projects in the{' '}
						<Link href="/admin">Admin</Link> page.
					</h3>
				) : (
					<>
						<h1>Welcome to the About page!</h1>
						<p>
							Your full name, profile description and skills will be displayed
							here once you add them the first time from the{' '}
							<Link href="/admin">Admin</Link> page.
						</p>
					</>
				)
			) : (
				<>
					<h1>
						{pathname === '/about' && 'Hello! My name is '}
						{userInfo[0]?.name}
					</h1>
					<p>{userInfo[0]?.description}</p>
					<SkillsList skills={userInfo[0]?.skills} />
				</>
			)}
		</StyledUserInfo>
	);
};

const StyledUserInfo = styled.div`
	display: flex;
	text-align: center;
	flex-direction: column;
	gap: 1rem;
	align-items: center;

	a {
		text-decoration: underline;
		font-weight: 600;
	}

	${mq.tablet} {
		align-items: flex-start;
		text-align: left;
	}

	p {
		${mq.tablet} {
			max-width: 70%;
		}

		${mq.laptop} {
			max-width: 60%;
		}
	}
`;

export default UserInfo;
