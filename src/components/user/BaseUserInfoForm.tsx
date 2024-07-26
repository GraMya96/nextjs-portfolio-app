import { ZodError, ZodSchema } from 'zod';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import { handleValidationErrors } from '@/lib/utils/validation/handleValidationErrors';
import {
	AddUserInfoValidationType,
	UpdateUserInfoValidationType,
} from '@/lib/utils/validation/user.validation';
import mq from '@/styles/utils/mediaQueries';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import SkillsList from './SkillsList';
import { useState } from 'react';
import { handleClientError } from '@/lib/utils/handleClientError';

interface BaseUserInfoFormProps extends React.HTMLAttributes<HTMLFormElement> {
	title: string;
	validationSchema: ZodSchema;
	onSubmit: SubmitHandler<any>;
	defaultValues?: AddUserInfoValidationType | UpdateUserInfoValidationType;
}

const BaseUserInfoForm: React.FC<BaseUserInfoFormProps> = ({
	title,
	validationSchema,
	onSubmit,
	defaultValues,
	...props
}): React.ReactElement => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm({
		resolver: zodResolver(validationSchema),
		defaultValues: {
			name: defaultValues?.name || '',
			description: defaultValues?.description || '',
			skills: [],
		},
	});

	/* Watch the form fields to get the current values and update UI accordingly */
	const name = watch('name', '');
	const description = watch('description', '');

	const [skillText, setSkillText] = useState<string>('');
	const [addedSkills, setAddedSkills] = useState<any>(
		defaultValues?.skills || []
	);

	/* Thanks to react-hook-form and its zodResolver hook, we can validate the form
        fields and display the correct errors messages to the user
        simply "connecting" the form to its corresponding Zod validation schema
        (e.g. addUserInfoValidationSchema, updateUserInfoValidationSchema etc.).
    */
	const handleFormSubmit = async (
		data: AddUserInfoValidationType | UpdateUserInfoValidationType
	) => {
		try {
			data.skills = addedSkills;
			await onSubmit(data);
		} catch (error: unknown) {
			handleClientError(error);
		}
	};

	return (
		<StyledBaseUserInfoForm
			onSubmit={handleSubmit(handleFormSubmit)}
			{...props}
		>
			<StyledBaseUserInfoContainer>
				<StyledBaseInfo>
					<h3>{title} your personal information</h3>
					<Input
						type="text"
						{...register('name')}
						id="user_name"
						placeholder="Full name and Last name"
						disabled={isSubmitting}
					/>
					<Textarea
						{...register('description')}
						disabled={isSubmitting}
						placeholder="Talk a bit about yourself: where do you live, what is your expertise, what do you like to do..."
					/>
				</StyledBaseInfo>
				<StyledBaseSkills>
					<h3>Add a new skill and press the + button</h3>
					<StyledBaseUserSkills>
						<Input
							type="text"
							placeholder="Enter a new skill (e.g. 'Next.js')"
							name="skills"
							value={skillText}
							onChange={(e) => setSkillText(e.target.value)}
							id="skills"
							disabled={isSubmitting}
						/>
						<PlusCircleIcon
							width={24}
							height={24}
							onClick={() => {
								setAddedSkills([...addedSkills, skillText]);
								setSkillText('');
							}}
							cursor={!skillText?.length ? 'not-allowed' : 'pointer'}
							color={!skillText?.length ? 'grey' : '#000000'}
							aria-disabled={!skillText?.length}
						/>
					</StyledBaseUserSkills>
					{/* <select
						defaultValue="Beginner"
						{...register('skills.0.level')}
						disabled={isSubmitting}
					>
						<option hidden>Select a level</option>
						<option value={SkillLevel.Beginner}>{SkillLevel.Beginner}</option>
						<option value={SkillLevel.Intermediate}>
							{SkillLevel.Intermediate}
						</option>
						<option value={SkillLevel.Advanced}>{SkillLevel.Advanced}</option>
					</select> */}
					<SkillsList skills={addedSkills} />
				</StyledBaseSkills>
			</StyledBaseUserInfoContainer>

			<Button
				onClick={() => handleValidationErrors(errors)}
				type="submit"
				disabled={
					isSubmitting ||
					!name.length ||
					!description.length ||
					!skillText?.length
				}
			>
				{title} Info
			</Button>
		</StyledBaseUserInfoForm>
	);
};

const StyledBaseUserInfoForm = styled.form`
	display: flex;
	padding-bottom: 1.5rem;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	background-color: #fff;
	box-shadow: ${({ theme }) => theme.shadows.primary};
`;

const StyledBaseUserInfoContainer = styled.div`
	display: flex;
	flex-direction: column;

	${mq.laptop} {
		flex-direction: row;
	}
`;

const StyledBaseInfo = styled.div`
	display: flex;
	padding: 1.5rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.25rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.35);

	${mq.laptop} {
		border-right: 1px solid rgba(0, 0, 0, 0.35);
	}
`;

const StyledBaseSkills = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1.5rem;
	gap: 1.25rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.35);

	select {
		cursor: pointer;
		margin-top: -0.65rem;
		color: ${({ theme }) => theme.colors.primary};
		border: 1px solid rgba(0, 0, 0, 0.35);
		padding: 0.5rem 1rem;
		font-size: 0.85rem;
		font-family: var(--font-primary);
		justify-content: space-between;
		align-items: center;
		border-radius: ${({ theme }) => theme.borderRadius.secondary};
		transition: ${({ theme }) => theme.transition.primary};
	}
`;

const StyledBaseUserSkills = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export default BaseUserInfoForm;
