import { AddUserInfoValidationType } from '@/lib/utils/validation/user.validation';
import { UserModelType } from '@/models/user.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { NextApiResponse } from 'next';

export const useAddUserInfo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (userInfo: AddUserInfoValidationType) => {
			const response: AxiosResponse<NextApiResponse<UserModelType>> =
				await axios.post('/api/user', userInfo);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};
