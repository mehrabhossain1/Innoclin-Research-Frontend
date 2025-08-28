"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function OurPartnerSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="py-32 bg-gradient-to-r from-primary/50 via-white to-primary/10">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-16 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
                        Partnering for{" "}
                        <span className="text-primary">Breakthroughs</span>
                        {/* Wave Line */}
                        <svg
                            className="absolute left-0 right-0 mx-auto -bottom-3 w-40 h-6 text-yellow-500"
                            viewBox="0 0 180 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 10 C20 20, 40 0, 60 10 S100 20, 120 10 S160 0, 178 10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="transparent"
                            />
                        </svg>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* Right Video */}
                    <div className="relative w-full h-[310px] md:h-[310px] rounded-2xl overflow-hidden shadow-xl">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="https://videocdn.cdnpk.net/videos/e4249499-66d4-44aa-abe0-4bc58f1a0174/horizontal/previews/clear/large.mp4?token=exp=1756385381~hmac=28e60e80fc231ebfe52bb10fe5b5b1d5f3978bea13eba75709a56f2a2cac267f"
                                type="video/mp4"
                            />
                        </video>

                        {/* Play/Pause Button */}
                        <button
                            onClick={togglePlay}
                            className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                        >
                            {isPlaying ? (
                                <Pause className="w-5 h-5" />
                            ) : (
                                <Play className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-700 leading-relaxed text-lg mb-5">
                            At{" "}
                            <span className="text-primary font-semibold">
                                Innoclin Research
                            </span>
                            , we put your goals first because delivering
                            life-changing therapies to patients is our shared
                            mission. We collaborate closely with biopharma
                            innovators, providing flexible, patient-centric
                            trial solutions that adapt to your needs and drive
                            meaningful results. As an extension of your team, we
                            work side-by-side to solve challenges, mitigate
                            risks, and deliver high-quality, reliable data that
                            accelerates your path to success.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Our proven expertise in executing complex trials and
                            our deep knowledge in key therapeutic areas provide
                            the valuable insights needed to power your next
                            breakthrough. With{" "}
                            <span className="text-primary font-semibold">
                                Innoclin Research
                            </span>
                            , you gain a trusted partner committed to
                            transforming vision into reality together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
