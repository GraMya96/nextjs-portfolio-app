import {
	Schema,
	model,
	InferSchemaType,
	Document,
	models,
	SchemaTimestampsConfig,
} from 'mongoose';

const ProjectSchema = new Schema(
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

export type ProjectModelType = InferSchemaType<typeof ProjectSchema> &
	Document &
	SchemaTimestampsConfig;

const ProjectModel =
	models.Project || model<ProjectModelType>('Project', ProjectSchema);
export { ProjectModel };
