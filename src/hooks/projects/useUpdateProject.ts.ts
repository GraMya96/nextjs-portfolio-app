import { UpdateProjectType } from '@/types/project.types';
import { GenericAxiosResponse } from '@/types/api.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ProjectType } from '@/types/project.types';

export const useUpdateProject = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({
			id,
			updatedProject,
		}: {
			id: ProjectType['id'];
			updatedProject: UpdateProjectType;
		}) => {
			const response: GenericAxiosResponse<ProjectType> = await axios.put(
				`/api/projects?id=${id}`,
				updatedProject
			);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] });
		},
	});
};
