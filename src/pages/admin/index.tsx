import AddProject from '@/components/projects/add/AddProject';
import UserProjects from '@/components/projects/UserProjects';
import PageIntro from '@/components/ui/PageIntro';
import UserInfoFormLoader from '@/components/ui/UserInfoFormLoader';
import AddUserInfoForm from '@/components/user/add/AddUserInfoForm';
import UpdateUserInfoForm from '@/components/user/update/UpdateUserInfoForm';
import { useGetUserInfo } from '@/hooks/user/useGetUserInfo';
import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';

const AdminPage: React.FC = (): React.ReactElement => {
	const { data: userInfo, isLoading } = useGetUserInfo();

	return (
		<StyledAdminPage>
			<PageIntro
				title="Your admin panel"
				description="Here you can update your user information and manage all your past projects."
				otherDescription='If you want to add a new project, you can do it clicking on the "Add a new Project" button at the bottom of the page.'
			/>

			{isLoading ? (
				<UserInfoFormLoader />
			) : userInfo && userInfo[0]?.name ? (
				<UpdateUserInfoForm userInfo={userInfo[0]} />
			) : (
				<AddUserInfoForm />
			)}

			<UserProjects />

			<AddProject />
		</StyledAdminPage>
	);
};

const StyledAdminPage = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	align-items: center;

	${mq.tablet} {
		align-items: flex-start;
	}
`;

export default AdminPage;
