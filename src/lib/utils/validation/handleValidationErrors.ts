import { FieldErrors } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ZodError, ZodIssue } from 'zod';

export const handleValidationErrors = (errors: ZodError | FieldErrors) => {
	if (errors instanceof ZodError) {
		errors.issues.forEach((issue: ZodIssue) => {
			toast.error(issue.message);
		});
	} else {
		Object.values(errors).forEach((error) => {
			if (error && error?.message) {
				toast.error(String(error?.message));
			}
		});
	}
};
