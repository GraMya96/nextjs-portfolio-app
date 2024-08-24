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
	return HttpResponse.json([
		{
			id: '1',
			name: 'Project 1',
			description: 'This is a project description',
			url: 'https://project-1.com',
		},
		{
			id: '2',
			name: 'Project 2',
			description: 'This is a project description 2',
			url: 'https://project-2.com',
		},
		{
			id: '3',
			name: 'Project 3',
			description: 'This is a project description 3',
			url: 'https://project-3.com',
		},
	]);
};

export const addProjectResolver: HttpResponseResolver<
	never,
	AddProjectType,
	ProjectType
> = () => {
	return HttpResponse.json({
		id: '1',
		name: 'Project 1',
		description: 'This is a project description',
		url: 'https://project-1.com',
	});
};

export const updateProjectResolver: HttpResponseResolver<
	never,
	UpdateProjectType,
	ProjectType
> = () => {
	return HttpResponse.json({
		id: '1',
		name: 'Updated Project 1',
		description: 'This is an updated project description',
		url: 'https://project-1.com',
	});
};

export const deleteProjectResolver: HttpResponseResolver<
	never,
	DeleteProjectType,
	ProjectType
> = () => {
	return HttpResponse.json({
		id: '1',
		name: 'Deleted Project 1',
		description: 'This is a deleted project description',
		url: 'https://project-1.com',
	});
};
