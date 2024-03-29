import { NavigationButton } from "../../components/NavigationButton/NavigationButton";
import { Socials } from "../../components/Socials/Socials";
import { RoadmapProps } from "./Roadmap.props";
import goldImg from "../../assets/img/roadmap-img.png";
import pawImg from "../../assets/img/paw.svg";

export const Roadmap = ({ selectPage }: RoadmapProps): JSX.Element => {
	return (
		<section className="overflow-hidden">
			<div className="relative mx-auto min-h-screen max-w-[1310px] px-4 pb-[40px] pt-[15%] lg:pt-[8%]">
				<div className="flex flex-col-reverse items-start justify-between gap-4 lg:flex-row">
					<div className="relative mx-auto w-full max-w-[600px] pb-[70%] lg:pb-[46%]">
						<img src={goldImg} className="absolute h-full w-full object-contain" alt="Gold" />
					</div>
					<div className="mx-auto w-full max-w-[660px] text-center lg:text-left">
						<h1 className="mb-6 font-comic text-5xl font-bold uppercase md:text-[64px]/[70px]">
							Roadmap to Riches
						</h1>
						<div className="text-xl md:text-2xl">
							<p>We have but one goal in our roadmap.</p>
							<br className="hidden md:block" />
							<p>1. Take over the Base Chain as the pioneer meme coin.</p>
							<br className="hidden md:block" />
							<p>GODL has chosen Coinbase’s L2 as its home.</p>
							<br className="hidden md:block" />
							<p>Why Base?</p>
							<br className="hidden md:block" />
							<p>
								GODL Doge sees the untapped potential of Base—a haven for speed, efficiency, and low
								transaction fees, yet untouched by the tidal wave of meme coin mania.
							</p>
							<p>
								GODL Doge vows to be the first, the trailblazer, the golden standard that paves the
								way for a meme run on Base.
							</p>
						</div>
					</div>
				</div>
				<div className="mt-[100px] flex flex-col-reverse items-center justify-between gap-6 sm:flex-row sm:gap-3 lg:mt-[60px] lg:max-w-[660px]">
					<NavigationButton reverse onClick={() => selectPage(2)} className="hidden lg:flex">
						Tokenomics
					</NavigationButton>
					<Socials className="mx-auto" />
				</div>
				<img
					src={pawImg}
					className="absolute bottom-[40px] right-[100px] z-10 hidden rotate-[70deg] lg:block"
					alt="Paw"
				/>
				<img
					src={pawImg}
					className="absolute -right-[70px] top-[120px] z-10 hidden rotate-[50deg] lg:block"
					alt="Paw"
				/>
			</div>
		</section>
	);
};
