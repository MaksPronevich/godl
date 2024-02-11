import dogImg from "../../assets/img/tokenomics-dog.png";
import pawImg from "../../assets/img/paw.svg";
import { NavigationButton } from "../../components/NavigationButton/NavigationButton";

import { Socials } from "../../components/Socials/Socials";
import { TokenomicsProps } from "./Tokenomics.props";

export const Tokenomics = ({ selectPage }: TokenomicsProps): JSX.Element => {
	return (
		<section className="bg-sky overflow-hidden">
			<div className="relative mx-auto min-h-screen max-w-[1246px] px-4 pb-[40px] pt-[12%] lg:pt-[8%]">
				<div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-end">
					<div className="max-w-[690px] text-center lg:flex-[0_1_690px] lg:text-left">
						<h1 className="font-comic mb-6 text-5xl font-bold uppercase md:text-[64px]/[70px]">
							Tokenomics
						</h1>
						<p className="text-xl md:text-2xl">
							GODL has a limited supply of golden tokens and a deflationary mechanism. GODL is
							designed to reward the faithful.
						</p>
						<div className="relative z-30 my-6 rounded-3xl border-[3px] bg-white p-3 lg:max-w-[660px]">
							<div className="relative flex flex-wrap items-center gap-2 rounded-xl px-4 py-3 [background:linear-gradient(270deg,#FDE7BB_0%,#9E6D38_20%,#E9B86E_50.31%,#9D6933_66%,#FEE9BF_83%,#683E23_100%)] sm:gap-5 sm:px-6">
								<img
									src="/img/godl.svg"
									className="h-[50px] w-[50px] sm:h-[90px] sm:w-[90px]"
									alt="Dogl"
								/>
								<div className="font-comic flex flex-col items-start">
									<span className="text-2xl text-white">Token Supply:</span>
									<span className="text-[25px] uppercase sm:text-[38px]">1 Billion GODLs</span>
								</div>
								<img
									src={pawImg}
									className="absolute bottom-[38px] right-0 hidden h-[84px] w-[84px] rotate-[70deg] sm:block"
									alt="Paw"
								/>
							</div>
						</div>
						<p className="text-xl md:text-2xl">
							A GODLEN number for a golden coin - 1 Billion GODLs, because every GODLer deserves
							their piece of the pie.
						</p>
					</div>
					<div>
						<img src={dogImg} alt="Dog" />
					</div>
				</div>
				<Socials className="mx-auto mt-[123px] flex lg:hidden" />
				<div className="mt-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-3 lg:mt-[210px]">
					<NavigationButton reverse onClick={() => selectPage(1)}>
						introduction
					</NavigationButton>
					<Socials className="hidden lg:flex" />
					<NavigationButton onClick={() => selectPage(3)}>Roadmap</NavigationButton>
				</div>
				<img src={pawImg} className="absolute left-1/2 top-[50px] z-10 hidden lg:block" alt="Paw" />
				<img
					src={pawImg}
					className="absolute -left-[100px] bottom-[150px] z-10 hidden lg:block"
					alt="Paw"
				/>
				<img
					src={pawImg}
					className="absolute -right-[70px] bottom-[250px] z-10 hidden rotate-[70deg] lg:block"
					alt="Paw"
				/>
			</div>
		</section>
	);
};
