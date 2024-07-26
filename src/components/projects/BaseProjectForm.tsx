import {
	AddProjectValidationType,
	UpdateProjectValidationType,
} from '@/lib/utils/validation/project.validation';
import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodSchema } from 'zod';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { font } from '@/pages/_app';
import Textarea from '../ui/Textarea';
import { handleValidationErrors } from '@/lib/utils/validation/handleValidationErrors';
import { useState } from 'react';
import axios from 'axios';
import { handleClientError } from '@/lib/utils/handleClientError';

/* This UI Base Project Form can be extended through props by other
    more specific form components that, when submitted, fire different actions
    related to projects.
    For example, this component is currently used in:
    - CreateProjectForm
    - UpdateProjectForm

    It is possible to use a different title, a different Zod validation schema
    and a different onSubmit handler for each of these components.
*/

interface BaseProjectFormProps extends React.HTMLAttributes<HTMLFormElement> {
	title: string;
	validationSchema: ZodSchema;
	onSubmit: SubmitHandler<any>;
	defaultValues?: AddProjectValidationType | UpdateProjectValidationType;
}

const BaseProjectForm: React.FC<BaseProjectFormProps> = ({
	title,
	validationSchema,
	onSubmit,
	defaultValues,
	...props
}): React.ReactElement => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm({
		resolver: zodResolver(validationSchema),
		defaultValues: defaultValues || {
			name: '',
			description: '',
			url: '',
			image: '',
		},
	});

	const [uploadedImage, setUploadedImage] = useState<File | null>(null);

	/* Thanks to react-hook-form and its zodResolver hook, we can validate the form
        fields and display the correct errors messages to the user
        simply "connecting" the form to its corresponding Zod validation schema
        (e.g. addProjectValidationSchema, updateProjectValidationSchema etc.).
    */
	const handleFormSubmit = async (
		data: AddProjectValidationType | UpdateProjectValidationType
	) => {
		if (uploadedImage) {
			const formData = new FormData();
			formData.append('file', uploadedImage);

			const response = await axios.post('/api/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			data.image = '/uploads/' + response?.data?.imageUrl?.filename;
		}
		try {
			await onSubmit(data);
		} catch (error: unknown) {
			handleClientError(error);
		}
	};

	const handleUploadFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUploadedImage(event?.target?.files?.[0] as File);
	};

	return (
		<StyledBaseProjectForm
			onSubmit={handleSubmit(handleFormSubmit)}
			className={font.className}
			{...props}
		>
			<h3>{title}</h3>
			{/* Name */}
			<div>
				<label htmlFor="name">Name*</label>
				<Input
					id="name"
					type="text"
					{...register('name')}
					disabled={isSubmitting}
				/>
			</div>

			{/* Description */}
			<div>
				<label htmlFor="description">Description*</label>
				<Textarea
					id="description"
					{...register('description')}
					disabled={isSubmitting}
				/>
			</div>

			{/* Url */}
			<div>
				<label htmlFor="url">Url*</label>
				<Input
					id="url"
					type="text"
					{...register('url')}
					disabled={isSubmitting}
				/>
			</div>

			{/* Images */}
			<div>
				<label htmlFor="image">Image</label>
				<Input
					id="image"
					name="image"
					type="file"
					accept="image/*"
					onChange={handleUploadFileChange}
					disabled={isSubmitting}
				/>
			</div>

			{/* Submit */}
			<Button
				onClick={() => handleValidationErrors(errors)}
				type="submit"
				disabled={isSubmitting}
			>
				{title}
			</Button>
		</StyledBaseProjectForm>
	);
};

const StyledBaseProjectForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	padding: 1.5rem;
	border-radius: ${({ theme }) => theme.borderRadius.secondary};
	background-color: #fff;
	box-shadow: ${({ theme }) => theme.shadows.primary};

	& div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export default BaseProjectForm;
