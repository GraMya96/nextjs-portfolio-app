import { AddProjectValidationType } from '@/lib/utils/validation/project.validation';
import { GenericNextApiResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

export const useAddProject = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newProject: AddProjectValidationType) => {
			const response: AxiosResponse<GenericNextApiResponse> = await axios.post(
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
