import { useUpdateUserInfo } from '@/hooks/user/useUpdateUserInfo';
import { handleClientError } from '@/lib/utils/handleClientError';
import {
	updateUserInfoValidationSchema,
	UpdateUserInfoValidationType,
} from '@/lib/utils/validation/user.validation';
import { toast } from 'react-toastify';
import BaseUserInfoForm from '../BaseUserInfoForm';
import { UserModelType } from '@/models/user.model';

interface UpdateUserInfoFormProps {
	userInfo: any;
}

const UpdateUserInfoForm: React.FC<UpdateUserInfoFormProps> = ({
	userInfo,
}): React.ReactElement => {
	/* Thanks to react-hook-form and its zodResolver hook, we can validate the form
        fields and display the correct errors messages to the user
        simply "connecting" the form to its corresponding Zod validation schema
        (e.g. createProjectValidationSchema, UpdateProjectValidationSchema etc.).
    */

	const { mutateAsync } = useUpdateUserInfo();

	const updateUserInfo = async (data: UpdateUserInfoValidationType) => {
		try {
			const response: any = await mutateAsync(data);
			if (!response?.success) {
				throw new Error(response?.error);
			}
			toast.success('User information updated successfully!');
		} catch (error: unknown) {
			handleClientError(error);
		}
	};

	return (
		<BaseUserInfoForm
			title="Update"
			defaultValues={userInfo}
			onSubmit={(data: UpdateUserInfoValidationType) => updateUserInfo(data)}
			validationSchema={updateUserInfoValidationSchema}
		/>
	);
};

export default UpdateUserInfoForm;
