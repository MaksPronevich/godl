import { ReactNode } from "react";

export interface NavigationButtonProps {
	children: ReactNode;
	reverse?: boolean;
	className?: string;
	onClick: () => void;
}
