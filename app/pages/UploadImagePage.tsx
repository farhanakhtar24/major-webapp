"use client";
import React, { useRef, useState } from "react";
import { storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Spinner from "../components/Spinner";
import axios from "axios";
import { set } from "firebase/database";
import Image from "next/image";

type Props = {};

const UploadImagePage = (props: Props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [imageUrl, setImageUrl] = useState<string>("");
	const [derainedImageUrl, setDerainedImageUrl] = useState<string>("");
	const uploadImageFunction = async (fileList: FileList) => {
		const file = fileList[0];
		console.log("file: ", file);
		const fileName = file.name;
		const storageRef = ref(storage, "images/" + fileName);
		setLoading(true);
		try {
			await uploadBytes(storageRef, file);
			const downloadUrl = await getDownloadURL(storageRef);
			setImageUrl(downloadUrl);
		} catch (error) {
			console.log("error: ", error);
		} finally {
			setLoading(false);
		}
	};

	const derainImage = async () => {
		setLoading(true);
		const response = await axios.post("http://127.0.0.1:5000/derain", {
			url: imageUrl,
		});
		const base64String = response.data.image;
		setDerainedImageUrl(`data:image/png;base64,${base64String}`);
		// const binaryData = atob(base64String);
		// const blob = new Blob([binaryData], { type: "image/png" });
		// const blobUrl = URL.createObjectURL(blob);
		// console.log("blobUrl: ", blobUrl);
		setLoading(false);
	};

	return (
		<div className="bg-gradient-to-r from-white to-[#bcd5e3] w-screen h-[90vh]">
			<div className="flex flex-col items-center justify-center h-full w-full">
				{loading && <Spinner />}
				{
					// If there is an image, show it
					!loading && imageUrl && !derainedImageUrl && (
						<div className="flex flex-col items-center justify-center w-[50%] max-h-96 h-full">
							<Image
								className="w-auto h-full"
								src={imageUrl}
								alt="Uploaded image"
								width={999}
								height={999}
							/>
							<div className="flex flex-col items-center justify-center w-full mt-4">
								{/* // style the label button */}
								<label
									htmlFor="file_input"
									className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
									Change Image
								</label>
								<button
									onClick={derainImage}
									className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700 mt-5">
									Generate Upscaled Image
								</button>
								<input
									className="hidden"
									id="file_input"
									type="file"
									onChange={(e) => {
										if (!e.target.files) return;
										uploadImageFunction(e.target.files);
										setDerainedImageUrl("");
									}}
								/>
							</div>
						</div>
					)
				}
				{
					// If there is an upscaled image, show it
					!loading && derainedImageUrl && imageUrl && (
						<div className="flex flex-col items-center justify-center w-[50%]">
							<div className="flex gap-3">
								{/*<img
									className="w-1/2 h-auto"
									src={imageUrl}
									alt="Uploaded image"
					/>*/}
								<img
									className="w-full h-auto"
									src={derainedImageUrl}
									alt="Uploaded image"
								/>
							</div>
							<div className="flex flex-col items-center justify-center w-full mt-4">
								{/* // style the label button */}
								<label
									htmlFor="file_input"
									className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
									Change Image
								</label>
								<input
									className="hidden"
									id="file_input"
									type="file"
									onChange={(e) => {
										if (!e.target.files) return;
										uploadImageFunction(e.target.files);
										setDerainedImageUrl("");
									}}
								/>
							</div>
						</div>
					)
				}
				{!loading && !imageUrl && (
					<div className="flex items-center justify-center w-[50%]">
						<label
							htmlFor="dropzone-file"
							className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
							<div className="flex flex-col items-center justify-center pt-5 pb-6">
								<svg
									className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
									/>
								</svg>
								<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span className="font-semibold">
										Click to upload
									</span>{" "}
									or drag and drop
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									SVG, PNG, JPG or GIF (MAX. 800x400px)
								</p>
							</div>
							<input
								id="dropzone-file"
								type="file"
								className="hidden"
								onChange={(e) => {
									if (!e.target.files) return;
									uploadImageFunction(e.target.files);
								}}
							/>
						</label>
					</div>
				)}
			</div>
		</div>
	);
};

export default UploadImagePage;
