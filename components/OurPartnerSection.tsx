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
        <section className="py-30 bg-primary/30">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-normal text-center mb-30">
                    Partnering for{" "}
                    {/* <span className="text-primary">Breakthroughs</span> */}
                    <span className="">Breakthroughs</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Right Video */}
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src="https://videocdn.cdnpk.net/videos/8d2d1ac4-654b-4334-aae5-4a9fd0a5904b/horizontal/previews/clear/large.mp4?token=exp=1755278121~hmac=c5247e388e044f25f0b0f76a1f28955ce606e58369f1754fa70186aa9d43696f"
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
                    <div>
                        <p className="text-gray-700 leading-relaxed">
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
                        <p className="text-gray-700 leading-relaxed mt-4">
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
