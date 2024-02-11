import { useState } from "react";
import { projectConfig } from "../../projectConfig";

import dogImg from "../../assets/img/intro-dog.png";
import pawImg from "../../assets/img/paw.svg";
import { NavigationButton } from "../../components/NavigationButton/NavigationButton";
import { IntroProps } from "./Intro.props";
import { Socials } from "../../components/Socials/Socials";
import { Button } from "../../components/Button/Button";

export const Intro = ({ selectPage }: IntroProps): JSX.Element => {
	const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);
	const { tokenAddress } = projectConfig;

	const copyHandler = (copiedText: string): void => {
		navigator.clipboard.writeText(copiedText);
		setIsNotificationVisible(true);
		setTimeout(() => {
			setIsNotificationVisible(false);
		}, 500);
	};
	return (
		<section className="bg-orange overflow-hidden">
			<div className="relative mx-auto min-h-screen max-w-[1132px] px-4 pb-[40px] pt-[8%]">
				<div className="flex flex-col items-start justify-between gap-4 lg:flex-row">
					<div className="relative z-30 mx-auto mb-6 lg:mb-0">
						<img
							src="/img/godl.svg"
							className="mx-auto h-[250px] w-[250px] md:h-[317px] md:w-[317px]"
							alt="GODL"
						/>
						<Button className="-mt-[25px] hidden lg:flex" />
					</div>
					<div className="mx-auto max-w-[660px] text-center lg:text-left">
						<h1 className="font-comic mb-6 text-5xl font-bold uppercase text-white md:text-[64px]/[70px]">
							Welcome to the GODLEN Age
						</h1>
						<div className="text-base text-white md:text-xl/6">
							<p>
								GODL is the pioneer meme coin on Base, where the golden rays of prosperity shine
								upon the loyal. 
							</p>
							<br className="hidden md:block" />
							<p>
								Forget HODL. It's time to GODL with the Golden Retriever, leading your portfolio to
								the promised land of gains.
							</p>
							<div className="relative mx-auto my-6 max-w-[400px] rounded-2xl p-[4px] [background:linear-gradient(90deg,#FF0401_0%,#EE00FF_15%,#0000FF_33%,#00EBFF_49.5%,#00FF23_67%,#FFFF00_82.5%,#FF0400_100%)] sm:max-w-full">
								<div className="bg-orange flex items-center justify-between gap-2 rounded-xl px-5 py-3 text-black">
									<div className="hidden truncate sm:block">
										<span className="text-[19px] md:text-[19px]">{tokenAddress}</span>
									</div>
									<div className="sm:hidden">
										<span>{tokenAddress.slice(0, 22)}</span>
										<span>...</span>
										<span>{tokenAddress.slice(-4)}</span>
									</div>
									<button
										className="font-black uppercase transition hover:text-white sm:text-2xl"
										onClick={() => copyHandler(tokenAddress)}
									>
										Copy
									</button>
								</div>
								{isNotificationVisible && (
									<div className="absolute -top-[35px] right-0 rounded-lg bg-white px-2 py-1 text-base text-black">
										Copied
									</div>
								)}
							</div>
							<p>
								Born from the desire for a coin that rewards the faithful, GODL Doge is the golden
								ticket to the moon.
							</p>
							<br className="hidden md:block" />
							<p>
								Learn the sacred commandments of GODLing, and join the GODL Nation. Only the true
								believers are rewarded.
							</p>
						</div>
						<Button className="mx-auto mt-6 flex lg:hidden" />
						<div className="mt-[140px] flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-3">
							<Socials />
							<NavigationButton onClick={() => selectPage(2)}>Tokenomics</NavigationButton>
						</div>
					</div>
				</div>
				<img src={dogImg} className="absolute bottom-0 left-0 z-20 hidden lg:block" alt="Dog" />
				<img
					src={pawImg}
					className="absolute -left-[30px] top-[40px] z-10 hidden lg:block"
					alt="Paw"
				/>
				<img
					src={pawImg}
					className="absolute -right-[80px] bottom-[210px] z-10 hidden rotate-[70deg] lg:block"
					alt="Paw"
				/>
			</div>
		</section>
	);
};
