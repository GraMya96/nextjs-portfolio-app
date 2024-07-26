import { capitalizeFirstLetter } from '@/lib/utils/formatting/capitalizeFirstLetter';
import { UserModelType } from '@/models/user.model';
import mq from '@/styles/utils/mediaQueries';
import styled from '@emotion/styled';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SkillsListProps {
	skills: [] | UserModelType['skills'];
}

const SkillsList: React.FC<SkillsListProps> = ({
	skills,
}): React.ReactElement => {
	const pathname = usePathname();

	return (
		<StyledSkillsList>
			{!skills?.length ? (
				<p>No skills found. Add some!</p>
			) : (
				<>
					<h3>Your skills</h3>

					<ul>
						{skills?.map((skill) => (
							<li key={skill}>
								<StyledSkillsListIcon>
									<p>{capitalizeFirstLetter(String(skill))}</p>
									<CheckCircleIcon width={20} height={20} />
								</StyledSkillsListIcon>
							</li>
						))}
					</ul>

					{pathname !== '/admin' && (
						<p>
							You can add more on the <Link href="/admin">Admin</Link> page.
						</p>
					)}
				</>
			)}
		</StyledSkillsList>
	);
};

const StyledSkillsList = styled.ul`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	& ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		${mq.tablet} {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			justify-content: space-between;
			justify-items: space-between;
		}
	}

	& li {
		padding: 0.5rem 0.85rem;
		border-radius: ${({ theme }) => theme.borderRadius.primary};
		background-color: lightgray;
		border: 1px solid rgba(0, 0, 0, 0.35);
		display: flex;
		flex-direction: column;
		font-weight: 600;
		gap: 0.1rem;

		& > span {
			font-size: 0.8rem;
			font-style: italic;
			color: rgba(0, 0, 0, 0.9);
			font-weight: 400;
		}
	}
`;

const StyledSkillsListIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	${mq.tablet} {
		justify-content: flex-start;
	}
`;

export default SkillsList;
