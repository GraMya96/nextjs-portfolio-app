import { ProjectType } from '@/types/project.types';
import { GenericAxiosResponse } from '../../types/api.types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetProjects = () => {
	return useQuery({
		queryKey: ['projects'],
		queryFn: async () => {
			const response: GenericAxiosResponse<ProjectType[]> = await axios.get(
				'/api/projects'
			);

			return response?.data;
		},
	});
};
