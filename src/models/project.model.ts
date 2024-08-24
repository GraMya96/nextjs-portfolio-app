import { ProjectModelType } from '@/types/project.types';
import { Schema, model, models } from 'mongoose';

export const ProjectSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		url: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const ProjectModel =
	models.Project || model<ProjectModelType>('Project', ProjectSchema);
export { ProjectModel };
