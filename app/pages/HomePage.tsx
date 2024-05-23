import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import LinkButton from "../components/LinkButton";
import Image from "next/image";
import OriginalImage from "@/public/Originalmage.png";
import UpscaledImage from "@/public/UpscaledImage.png";

type Props = {};

const HomePage = (props: Props) => {
	return (
		<div className="w-full h-[90vh] flex items-center justify-center bg-gradient-to-r gap-5 from-white to-[#bcd5e3]">
			<div className="flex-1 flex flex-col items-start justify-center pl-40 gap-4">
				<h1 className="text-black font-bold text-5xl">
					Upscale images using Super-resolution.
				</h1>
				<p className="text-[#a6a6a6] text-lg mb-2">
					AI trained to upscale any image with ESRGAN.
				</p>
				<LinkButton />
			</div>
			<div className="flex-1 group relative">
				<Image
					className="rounded-lg absolute -top-40 z-0 w-[350px] h-auto group-hover:z-20"
					src={OriginalImage}
					alt="rain"
					width={500}
					height={500}
				/>
				<Image
					className="rounded-lg absolute -top-20 left-20 w-[350px] h-auto z-10"
					src={UpscaledImage}
					alt="rain"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default HomePage;
