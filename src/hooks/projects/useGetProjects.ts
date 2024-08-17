import { GenericAxiosResponse } from './../../types/api';
import { ProjectModelType } from '@/models/project.model';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProjects = () => {
	return useQuery({
		queryKey: ['projects'],
		queryFn: async () => {
			const response: GenericAxiosResponse<ProjectModelType[]> =
				await axios.get('/api/projects');

			return response?.data;
		},
	});
};
