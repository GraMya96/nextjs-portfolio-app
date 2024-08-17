import { connectDB } from '@/lib/connectDB';
import { handleApiError } from '@/lib/utils/handleApiError';
import {
	addUserInfoValidationSchema,
	AddUserInfoValidationType,
	updateUserInfoValidationSchema,
	UpdateUserInfoValidationType,
} from '@/lib/utils/validation/user.validation';
import { UserModel, UserModelType } from '@/models/user.model';
import { GenericNextApiRequest, GenericNextApiResponse } from '@/types/api';

/* These are the controllers to handle queries and mutations to the
 MongoDB databse using Mongoose. These functions run when
 HTTP request are made to the server through the API routes def
 in the pages/api/user folder (e.g.:
 - getUserInfo runs when there is a GET request to /api/user
 - updateUserInfo runs when there is a POST request to /api/user
)
*/

export const getUserInfo = async (
	req: GenericNextApiRequest<null>,
	res: GenericNextApiResponse<UserModelType[]>
) => {
	try {
		await connectDB();
		const userInfo: UserModelType[] | null = await UserModel.find();
		if (!userInfo) {
			return res.status(404).json({ success: false, data: null });
		}
		return res.status(200).json({ success: true, data: userInfo });
	} catch (error) {
		handleApiError(error, res);
	}
};

export const addUserInfo = async (
	req: GenericNextApiRequest<AddUserInfoValidationType>,
	res: GenericNextApiResponse<UserModelType>
) => {
	try {
		await connectDB();
		addUserInfoValidationSchema.parse(req.body);
		const newUserInfo: UserModelType = await UserModel.create(req.body);
		if (!newUserInfo) {
			return res.status(404).json({ success: false, data: null });
		}
		return res.status(200).json({ success: true, data: newUserInfo });
	} catch (error) {
		handleApiError(error, res);
	}
};

export const updateUserInfo = async (
	req: GenericNextApiRequest<UpdateUserInfoValidationType>,
	res: GenericNextApiResponse<UserModelType>
) => {
	try {
		await connectDB();
		updateUserInfoValidationSchema.parse(req.body);
		const updatedUserInfo: UserModelType | null =
			await UserModel.findOneAndUpdate({}, req.body);
		if (!updatedUserInfo) {
			return res.status(404).json({ success: false, data: null });
		}
		return res.status(200).json({ success: true, data: updatedUserInfo });
	} catch (error) {
		handleApiError(error, res);
	}
};
