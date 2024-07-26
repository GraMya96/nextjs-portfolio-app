import {
	addProjectValidationSchema,
	updateProjectValidationSchema,
	deleteProjectValidationSchema,
	AddProjectValidationType,
	UpdateProjectValidationType,
	DeleteProjectValidationType,
} from './../lib/utils/validation/project.validation';
import { ProjectModel, ProjectModelType } from '@/models/project.model';
import { connectDB } from '@/lib/connectDB';
import { handleApiError } from '@/lib/utils/handleApiError';
import { GenericNextApiRequest, GenericNextApiResponse } from '@/types/api';

/* These are the controllers to handle queries and mutations to the
 MongoDB databse using Mongoose. These functions run when
 HTTP request are made to the server through the API routes def
 in the pages/api/projects folder (e.g.:
 - getProjectsByUser runs when there is a GET request to /api/projects
 - createProject runs when there is a POST request to /api/projects
 - updateProject runs when there is a PUT request to /api/projects
 - deleteProject runs when there is a DELETE request to /api/projects
)
*/

export const getProjects = async (
	req: GenericNextApiRequest<null>,
	res: GenericNextApiResponse
) => {
	try {
		await connectDB();
		const projects: ProjectModelType[] = await ProjectModel.find({});
		if (!projects) {
			return res.status(404).json({ success: false, data: null });
		}
		return res.status(200).json({ success: true, data: projects });
	} catch (error) {
		handleApiError(error, res);
	}
};

export const addProject = async (
	req: GenericNextApiRequest<AddProjectValidationType>,
	res: GenericNextApiResponse
) => {
	try {
		await connectDB();
		addProjectValidationSchema.parse(req.body);
		const newProject: ProjectModelType = await ProjectModel.create(req.body);
		if (!newProject) {
			return res.status(404).json({ success: false, data: null });
		}
		return res.status(200).json({ success: true, data: newProject });
	} catch (error) {
		handleApiError(error, res);
	}
};

export const updateProject = async (
	req: GenericNextApiRequest<UpdateProjectValidationType>,
	res: GenericNextApiResponse
) => {
	try {
		await connectDB();
		const { id } = req.query;
		updateProjectValidationSchema.parse(req.body);
		const updatedProject: ProjectModelType | null =
			await ProjectModel.findOneAndUpdate(
				{ _id: id },
				{ $set: req.body },
				{ new: true }
			);

		if (!updatedProject) {
			return res.status(404).json({ success: false, data: null });
		}
		return res.status(200).json({
			success: true,
			data: updatedProject,
		});
	} catch (error) {
		handleApiError(error, res);
	}
};

export const deleteProject = async (
	req: GenericNextApiRequest<DeleteProjectValidationType>,
	res: GenericNextApiResponse
) => {
	try {
		await connectDB();
		const { id } = req.body;
		deleteProjectValidationSchema.parse(req.body);
		const deletedProject: ProjectModelType | null =
			await ProjectModel.findOneAndDelete({ _id: id });

		if (!deletedProject) {
			return res.status(404).json({ success: false, data: null });
		}
		return res.status(200).json({
			success: true,
			data: deletedProject,
		});
	} catch (error) {
		handleApiError(error, res);
	}
};
