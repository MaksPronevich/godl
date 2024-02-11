import { Intro } from "./screens/Intro/Intro";
import { Tokenomics } from "./screens/Tokenomics/Tokenomics";
import { Roadmap } from "./screens/Roadmap/Roadmap";
import { useState } from "react";

export const App = () => {
	const [pageNumber, setPageNumber] = useState<number>(1);

	const selectPage = (pageNumber: number) => {
		window.scrollTo({ top: 0 });
		setPageNumber(pageNumber);
	};

	const components: Record<number, JSX.Element> = {
		1: <Intro selectPage={selectPage} />,
		2: <Tokenomics selectPage={selectPage} />,
		3: <Roadmap selectPage={selectPage} />,
	};

	const componentToRender = components.hasOwnProperty(pageNumber) ? (
		components[pageNumber]
	) : (
		<Intro selectPage={selectPage} />
	);

	return (
		<>
			<div className="hidden lg:block">{componentToRender}</div>
			<div className="block lg:hidden">
				<Intro selectPage={selectPage} />
				<Tokenomics selectPage={selectPage} />
				<Roadmap selectPage={selectPage} />
			</div>
		</>
	);
};
