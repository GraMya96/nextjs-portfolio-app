import { UserModelType } from '@/models/user.model';
import { GenericNextApiResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

export const useGetUserInfo = () => {
	return useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const response: any = await axios.get('/api/user');
			if (response?.status === 400 || !response?.data) {
				return null;
			}
			return response?.data?.data as UserModelType[];
		},
	});
};
