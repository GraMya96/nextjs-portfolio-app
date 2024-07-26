import { GenericNextApiResponse } from '@/types/api';
import { ZodError } from 'zod';

/* A custom util function that handles different errors in the API responses.
  Can be used to re-use error handling logic in different controllers.
  There is a specific case for ZodError, which is used to handle validation errors
  when using Zod schemas.
*/
export const handleApiError = (error: unknown, res: GenericNextApiResponse) => {
	console.error('Error in API route: ', error);
	if (error instanceof Error) {
		if (error instanceof ZodError) {
			return res.status(500).json({
				success: false,
				error: error.issues[0].message,
			});
		}
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	} else {
		return res.status(500).json({
			success: false,
			error: 'Unknown Internal Server Error',
		});
	}
};
