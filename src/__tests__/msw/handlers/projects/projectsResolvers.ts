import { projectsList } from '@/__tests__/__mocks__/data/projectsList';
import {
	ProjectType,
	AddProjectType,
	UpdateProjectType,
	DeleteProjectType,
} from './../../../../types/project.types';
import { HttpResponse, HttpResponseResolver } from 'msw';

export const getProjectsResolver: HttpResponseResolver<
	never,
	never,
	ProjectType[]
> = () => {
	return HttpResponse.json(projectsList);
};

export const addProjectResolver: HttpResponseResolver<
	never,
	AddProjectType,
	ProjectType | ErrorCallback
> = async ({ request }) => {
	const { name, description, url, image } = await request.json();
	if (!name || !description || !url) {
		return HttpResponse.error();
	}

	return HttpResponse.json(
		{
			id: '1',
			name,
			description,
			url,
			image,
		},
		{
			status: 200,
		}
	);
};

export const updateProjectResolver: HttpResponseResolver<
	never,
	UpdateProjectType,
	ProjectType
> = async ({ request }) => {
	const { name, description, url, image } = await request.json();
	if (!name || !description || !url) {
		return HttpResponse.error();
	}

	return HttpResponse.json(
		{
			id: '1',
			name,
			description,
			url,
			image,
		},
		{
			status: 200,
		}
	);
};

export const deleteProjectResolver: HttpResponseResolver<
	never,
	DeleteProjectType,
	ProjectType
> = () => {
	return HttpResponse.json(projectsList[0]);
};
