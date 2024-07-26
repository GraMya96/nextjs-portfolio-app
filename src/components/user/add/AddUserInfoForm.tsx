import { useAddUserInfo } from '@/hooks/user/useAddUserInfo';
import { handleClientError } from '@/lib/utils/handleClientError';
import {
	addUserInfoValidationSchema,
	AddUserInfoValidationType,
} from '@/lib/utils/validation/user.validation';
import { toast } from 'react-toastify';
import BaseUserInfoForm from '../BaseUserInfoForm';

const AddUserInfoForm: React.FC<{ onClose?: () => void }> = ({
	onClose,
}): React.ReactElement => {
	const { mutateAsync } = useAddUserInfo();

	const addUserInfo = async (userInfo: AddUserInfoValidationType) => {
		try {
			const validatedUserInfo = addUserInfoValidationSchema.safeParse(userInfo);
			if (!validatedUserInfo.success) {
				toast.error(validatedUserInfo.error.message);
				return;
			}
			const response: any = await mutateAsync(userInfo);
			if (!response?.success) {
				throw new Error(response?.error);
			}
			toast.success('Your User info has been added successfully!');
			onClose && onClose();
		} catch (error: unknown) {
			handleClientError(error);
		}
	};

	return (
		<BaseUserInfoForm
			title="Add"
			validationSchema={addUserInfoValidationSchema}
			onSubmit={addUserInfo}
		/>
	);
};

export default AddUserInfoForm;
