import { http } from 'msw';
import {
	getProjectsResolver,
	addProjectResolver,
	updateProjectResolver,
	deleteProjectResolver,
} from './projectsResolvers';

export const projectHandlers = [
	http.get('http://127.0.0.1:3000/api/projects', getProjectsResolver),
	http.post('http://127.0.0.1:3000/api/projects', addProjectResolver),
	http.put('http://127.0.0.1:3000/api/projects', updateProjectResolver),
	http.delete('http://127.0.0.1:3000/api/projects', deleteProjectResolver),
];
