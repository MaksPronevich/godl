import { projectConfig } from "../../projectConfig";
import { SocialsProps } from "./Socials.props";

export const Socials = ({ className }: SocialsProps): JSX.Element => {
	const { socials } = projectConfig;
	return (
		<div className={`flex w-full max-w-[200px] justify-between gap-2 ${className}`}>
			{socials.map(({ social, logoUrl, linkUrl }) => (
				<a
					key={social}
					href={linkUrl}
					className="flex h-10 w-10 items-center justify-center rounded-xl border-2 transition hover:scale-[0.8]"
					target="_blank"
				>
					<img src={logoUrl} width={24} height={24} alt={social} />
				</a>
			))}
		</div>
	);
};
