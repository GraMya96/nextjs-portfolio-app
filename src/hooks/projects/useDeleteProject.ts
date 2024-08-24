import { ProjectType, DeleteProjectType } from './../../types/project.types';
import { GenericAxiosResponse } from '@/types/api.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteProject = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: DeleteProjectType) => {
			const response: GenericAxiosResponse<ProjectType> = await axios.delete(
				'/api/projects',
				{ data: id }
			);
			return response?.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] });
		},
	});
};
