import { InferSchemaType } from 'mongoose';
import {
	addProjectValidationSchema,
	deleteProjectValidationSchema,
	projectValidationSchema,
	updateProjectValidationSchema,
} from '@/lib/utils/validation/project.validation';
import { z } from 'zod';
import { ProjectSchema } from '@/models/project.model';

export type ProjectType = z.infer<typeof projectValidationSchema>;
export type AddProjectType = z.infer<typeof addProjectValidationSchema>;
export type UpdateProjectType = z.infer<typeof updateProjectValidationSchema>;
export type DeleteProjectType = z.infer<typeof deleteProjectValidationSchema>;

export type ProjectModelType = InferSchemaType<typeof ProjectSchema>;
