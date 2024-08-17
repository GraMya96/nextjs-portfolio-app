import { ProjectModelType } from './../../models/project.model';
import { AddProjectValidationType } from '@/lib/utils/validation/project.validation';
import { GenericAxiosResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddProject = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newProject: AddProjectValidationType) => {
			const response: GenericAxiosResponse<ProjectModelType> = await axios.post(
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
