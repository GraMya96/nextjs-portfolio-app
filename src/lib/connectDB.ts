import mongoose, { MongooseError } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local'
	);
}

export const connectDB = async () => {
	try {
		if (process.env.NODE_ENV !== 'production') {
			mongoose.set('debug', true);
		}

		const mongooseOptions = { bufferCommands: false };
		const mongooseInstance = await mongoose.connect(
			MONGODB_URI,
			mongooseOptions
		);
		return mongooseInstance;
	} catch (error: unknown) {
		if (error instanceof MongooseError) {
			console.log('Error connecting to MongoDB: ', error.message);
			throw error;
		} else {
			console.log('Unknown error connecting to MongoDB: ', error);
			throw error;
		}
	}
};
