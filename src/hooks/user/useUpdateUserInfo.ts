import { UpdateUserInfoValidationType } from '@/lib/utils/validation/user.validation';
import { UserModelType } from '@/models/user.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { NextApiResponse } from 'next';

export const useUpdateUserInfo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (updatedUserInfo: UpdateUserInfoValidationType) => {
			const response: AxiosResponse<NextApiResponse<UserModelType>> =
				await axios.put('/api/user', updatedUserInfo);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};
