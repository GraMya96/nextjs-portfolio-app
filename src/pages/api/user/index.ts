import {
	getUserInfo,
	addUserInfo,
	updateUserInfo,
} from '@/controllers/user.controller';
import { GenericNextApiRequest, GenericNextApiResponse } from '@/types/api';

/* This file contains the API routes for the user.
    - endpoint: api/user

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
			getUserInfo(req, res);
			break;
		case 'POST':
			addUserInfo(req, res);
			break;
		case 'PUT':
			updateUserInfo(req, res);
			break;
		default:
			return res.status(404).json({ success: false, data: null });
	}
}
