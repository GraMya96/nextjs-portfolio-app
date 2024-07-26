import { UpdateProjectValidationType } from '@/lib/utils/validation/project.validation';
import { ProjectModelType } from '@/models/project.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { NextApiResponse } from 'next';

export const useUpdateProject = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({
			id,
			updatedProject,
		}: {
			id: ProjectModelType['_id'];
			updatedProject: UpdateProjectValidationType;
		}) => {
			const response: AxiosResponse<NextApiResponse<ProjectModelType>> =
				await axios.put(`/api/projects?id=${id}`, updatedProject);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] });
		},
	});
};
