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

	switch (pageNumber) {
		case 1:
			return <Intro selectPage={selectPage} />;
		case 2:
			return <Tokenomics selectPage={selectPage} />;
		case 3:
			return <Roadmap selectPage={selectPage} />;
		default:
			return <Intro selectPage={selectPage} />;
	}
};
