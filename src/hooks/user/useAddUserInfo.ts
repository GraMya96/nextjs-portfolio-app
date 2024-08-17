import { AddUserInfoValidationType } from '@/lib/utils/validation/user.validation';
import { UserModelType } from '@/models/user.model';
import { GenericAxiosResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddUserInfo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (userInfo: AddUserInfoValidationType) => {
			const response: GenericAxiosResponse<UserModelType> = await axios.post(
				'/api/user',
				userInfo
			);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};
