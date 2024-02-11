import { NavigationButtonProps } from "./NavigationButton.props";
import arrowImg from "../../assets/img/arrow.svg";

export const NavigationButton = ({
	children,
	reverse,
	onClick,
	className,
}: NavigationButtonProps): JSX.Element => {
	return (
		<button
			onClick={onClick}
			className={`flex items-center gap-6 transition lg:items-start ${reverse ? "flex-row-reverse hover:-translate-x-[10px]" : "flex-row hover:translate-x-[10px]"} ${className}`}
		>
			<div className="text-3xl uppercase sm:text-4xl lg:mt-[8px]">{children}</div>
			<img
				src={arrowImg}
				className={`h-[45px] w-[65px] md:h-[55px] md:w-[75px] ${reverse ? "rotate-180" : "rotate-0"}`}
				alt="Arrow"
			/>
		</button>
	);
};
