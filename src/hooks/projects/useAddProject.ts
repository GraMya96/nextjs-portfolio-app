import { AddProjectType } from '@/types/project.types';
import { GenericAxiosResponse } from '@/types/api.types';
import { ProjectType } from '@/types/project.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddProject = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newProject: AddProjectType) => {
			const response: GenericAxiosResponse<ProjectType> = await axios.post(
				'/api/projects',
				newProject
			);
			return response?.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] });
		},
	});
};
