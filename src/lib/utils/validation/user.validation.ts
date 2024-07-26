import { z } from 'zod';

/* zod ensures that the data is valid and throws an error if it is not.
 We can use the same schemas and derived types both in the server and
 in the client of the application, in order to have a type-safe and predictable
 bi-directional data-flow */

// export enum SkillLevel {
// 	Beginner = 'Beginner',
// 	Intermediate = 'Intermediate',
// 	Advanced = 'Advanced',
// }

export const addUserInfoValidationSchema = z.object({
	name: z
		.string()
		.min(1, 'Please enter a name')
		.max(40, 'Please enter a shorter name'),
	description: z
		.string()
		.min(1, 'Please add a brief description of yourself')
		.max(2000, 'The description should be shorter than 2000 characters'),
	// skills: z.array(
	// 	z
	// 		.object({
	// 			skill: z.string().optional(),
	// 			level: z.nativeEnum(SkillLevel).optional(),
	// 		})
	// 		.optional()
	// ),
	skills: z.array(z.string().max(15, 'Please enter a valid skill')).optional(),
});

export const updateUserInfoValidationSchema = z.object({
	name: z
		.string()
		.min(1, 'Please enter a name')
		.max(40, 'Please enter a shorter name'),
	description: z
		.string()
		.min(1, 'Please add a brief description of yourself')
		.max(2000, 'The description should be shorter than 2000 characters'),
	// skills: z
	// 	.array(
	// 		z.object({
	// 			skill: z
	// 				.string()
	// 				.min(1, 'Please enter a skill (e.g. Next.js)')
	// 				.max(15, 'Please enter a valid skill'),
	// 			level: z.nativeEnum(SkillLevel),
	// 		})
	// 	)
	// 	.min(1, 'The User should have at least one skill'),
	skills: z.array(z.string().max(15, 'Please enter a valid skill')).optional(),
});

export type AddUserInfoValidationType = z.infer<
	typeof addUserInfoValidationSchema
>;

export type UpdateUserInfoValidationType = z.infer<
	typeof updateUserInfoValidationSchema
>;
