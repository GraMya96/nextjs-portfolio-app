import {
	getProjects,
	addProject,
	updateProject,
	deleteProject,
} from '@/controllers/project.controller';
import {
	GenericNextApiRequest,
	GenericNextApiResponse,
} from '@/types/api.types';

/* This file contains the API routes for the projects.
    - endpoint: api/projects

  Since this application is using the Next.js pages router,
  they need to be defined in the pages/api folder.
  According to the HTTP method (GET, POST, PUT, DELETE, etc.),
  a corresponding controller function is run.

  The controllers (for handling queries and mutations to the DB) are defined
  in the controllers folder.
*/

export default function handler(
	req: GenericNextApiRequest<any>,
	res: GenericNextApiResponse
) {
	switch (req.method) {
		case 'GET':
			getProjects(req, res);
			break;
		case 'POST':
			addProject(req, res);
			break;
		case 'PUT':
			updateProject(req, res);
			break;
		case 'DELETE':
			deleteProject(req, res);
			break;
		default:
			res.status(404).json({ success: false, data: null });
			break;
	}
}
