import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

/* These custom interfaces (which extend the classic NextApiRequest and NextApiResponse)
    leverage the TypeScript generics to define the type of the request and response body.
    This ensures a better type-safety, autocompletion and predictability when dealing with
    Next.js API routes and HTTP requests.

    These are interfaces used on the SERVER SIDE (e.g. in pages/api/projects/index.ts)
*/
export interface GenericNextApiRequest<T> extends NextApiRequest {
	body: T;
}

export interface GenericNextApiResponse<T = any>
	extends NextApiResponse<{
		success: boolean;
		data?: T | null;
		error?: string;
	}> {}

/* -------------------------------------------------------------------------------- */

/* This interface is used on the CLIENT SIDE (e.g. in pages/projects/index.tsx)
    to type the response of every API request made using React Query to our
    server-side API routes.
*/
export interface GenericAxiosResponse<T = any>
	extends AxiosResponse<{
		success: boolean;
		data?: T | null;
		error?: string;
	}> {}
