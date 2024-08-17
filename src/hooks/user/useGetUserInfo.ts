import { UserModelType } from '@/models/user.model';
import { GenericAxiosResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetUserInfo = () => {
	return useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const response: GenericAxiosResponse<UserModelType[]> = await axios.get(
				'/api/user'
			);
			if (response?.status === 400 || !response?.data) {
				return null;
			}
			return response?.data;
		},
	});
};
