import { DeleteProjectValidationType } from '@/lib/utils/validation/project.validation';
import { GenericNextApiResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { ProjectModelType } from '@/models/project.model';

export const useDeleteProject = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: DeleteProjectValidationType) => {
			const response: AxiosResponse<GenericNextApiResponse<ProjectModelType>> =
				await axios.delete('/api/projects', { data: id });
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] });
		},
	});
};
