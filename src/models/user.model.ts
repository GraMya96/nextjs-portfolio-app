import { InferSchemaType, Schema, model, models, Document } from 'mongoose';

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		skills: {
			type: [String],
			default: [],
		},
	},
	{ timestamps: true }
);

const UserModel = models.User || model<UserModelType>('User', UserSchema);

export { UserModel };

export type UserModelType = InferSchemaType<typeof UserSchema> & Document;
