import { z } from 'zod';

/* zod ensures that the data is valid and throws an error if it is not.
 We can use the same schemas and derived types both in the server and
 in the client of the application, in order to have a type-safe and predictable
 bi-directional data-flow */

export const addProjectValidationSchema = z.object({
	name: z
		.string()
		.min(1, 'The Project should have a name')
		.max(20, 'The name should be shorter than 20 characters'),
	description: z
		.string()
		.min(1, 'The Project should have a description')
		.max(200, 'The description should be shorter than 200 characters'),
	url: z.string().url('The url should be a valid URL'),
	image: z.string().optional().nullish(),
});

export const updateProjectValidationSchema = addProjectValidationSchema;

export const deleteProjectValidationSchema = z.object({
	id: z
		.string()
		.min(1, 'Insert a valid id')
		.max(30, 'The id should be shorter than 30 characters'),
});

export type AddProjectValidationType = z.infer<
	typeof addProjectValidationSchema
>;
export type UpdateProjectValidationType = z.infer<
	typeof updateProjectValidationSchema
>;
export type DeleteProjectValidationType = z.infer<
	typeof deleteProjectValidationSchema
>;
