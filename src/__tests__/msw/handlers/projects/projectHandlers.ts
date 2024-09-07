import { http } from 'msw';
import {
	getProjectsResolver,
	addProjectResolver,
	updateProjectResolver,
	deleteProjectResolver,
} from './projectsResolvers';

export const projectHandlers = [
	http.get('/api/projects', getProjectsResolver),
	http.post('/api/projects', addProjectResolver),
	http.put('/api/projects', updateProjectResolver),
	http.delete('/api/projects', deleteProjectResolver),
];
