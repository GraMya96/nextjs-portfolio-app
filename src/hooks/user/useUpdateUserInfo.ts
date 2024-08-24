import { UpdateUserInfoValidationType } from '@/lib/utils/validation/user.validation';
import { UserModelType } from '@/models/user.model';
import { GenericAxiosResponse } from '@/types/api.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateUserInfo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (updatedUserInfo: UpdateUserInfoValidationType) => {
			const response: GenericAxiosResponse<UserModelType> = await axios.put(
				'/api/user',
				updatedUserInfo
			);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};
