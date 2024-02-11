import { ButtonProps } from "./Button.props";
import btnDecor1Img from "../../assets/img/button-decor-01.svg";
import btnDecor2Img from "../../assets/img/button-decor-02.svg";
import { projectConfig } from "../../projectConfig";

export const Button = ({ className }: ButtonProps): JSX.Element => {
	const { buyLink } = projectConfig;
	return (
		<div
			className={`relative h-[156px] w-[340px] items-center justify-center sm:h-[161px] sm:w-[396px] ${className}`}
		>
			<img src={btnDecor1Img} className="absolute left-0 top-0" alt="Decor" />
			<img src={btnDecor2Img} className="absolute right-0 top-0" alt="Decor" />
			<img src={btnDecor1Img} className="absolute bottom-0 right-0 rotate-180" alt="Decor" />
			<img src={btnDecor2Img} className="absolute bottom-0 left-0 rotate-180" alt="Decor" />
			<a
				href={buyLink}
				className="inline-flex w-[290px] -skew-x-6 justify-center rounded-2xl border-4 py-2 text-[34px] uppercase transition [background:linear-gradient(270deg,#FDE7BB_0%,#9E6D38_20%,#E9B86E_50.31%,#9D6933_66%,#FEE9BF_83%,#683E23_100%)] [box-shadow:0px_12px_12px_rgba(0,0,0)] [text-shadow:_0_3px_0_rgb(255_255_255)] hover:scale-[0.95] sm:w-[318px] sm:py-3"
				target="_blank"
			>
				Buy GODL
			</a>
		</div>
	);
};
