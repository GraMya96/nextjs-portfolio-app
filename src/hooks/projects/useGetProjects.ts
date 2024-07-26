import { ProjectModelType } from '@/models/project.model';
import { GenericNextApiResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

export const useGetProjects = () => {
	return useQuery({
		queryKey: ['projects'],
		queryFn: async () => {
			const response: any = await axios.get('/api/projects');

			return response?.data?.data;
		},
	});
};
