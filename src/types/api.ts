import { NextApiRequest, NextApiResponse } from 'next';

/* These custom interfaces (which extend the classic NextApiRequest and NextApiResponse)
    leverage the TypeScript generics to define the type of the request and response body.
    This ensures a better type-safety, autocompletion and predictability when dealing with
    Next.js API routes and HTTP requests.
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
