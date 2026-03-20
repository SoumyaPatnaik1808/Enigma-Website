"use client";

import { useState } from "react";

const images = [
    "./Coordinators.png",
    "./Asst.Coordinators.png",
    "./Frontend.png",
    "./Backend.png",
    "./AIML.png",
    "./Cloud.png",
    "./Appdev.png",
    "./Cybersecurity.png",
    "./GameDev.png",
    "./Blender.png",
    "./CP.png",
    "./UI.png",
    "./PR.png",
    "./GD.png",

];

const TeamCard = () => {
    const [expandedImage, setExpandedImage] = useState(3);

    const getImageWidth = (index: number) =>
        index === expandedImage ? "24rem" : "5rem";

    return (
        <div className="w-full h-screen bg-[#0a0a0a]">
            <div className="relative grid min-h-screen grid-cols-1 items-center justify-center p-1 transition-all duration-300 ease-in-out lg:flex w-full">
                <div className="w-full h-full overflow-hidden rounded-3xl">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#0a0a0a]">
                        <div className="relative w-full max-w-6xl px-5">
                            <div className="flex w-full items-center justify-center gap-1">
                                {images.map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out"
                                        style={{
                                            width: getImageWidth(idx + 1),
                                            height: "24rem",
                                        }}
                                        onMouseEnter={() => setExpandedImage(idx + 1)}
                                    >
                                        <img
                                            className="w-full h-full object-cover"
                                            src={src}
                                            alt={`Image ${idx + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
