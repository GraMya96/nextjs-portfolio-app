import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

export const handleClientError = (error: unknown): void => {
	if (error instanceof Error) {
		if (isAxiosError(error)) {
			toast.error('An error occurred. Try again!');
		} else {
			toast.error(error.message);
		}
	}
};
