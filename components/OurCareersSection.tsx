// components/OurCareersSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurCareersSection() {
    return (
        <section className="relative w-full py-28 bg-[#380387] overflow-hidden">
            {/* Decorative Gradient Blob */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

            <div className="container mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
                {/* Left Side - Overlapping Circular Images */}
                <div className="relative w-full md:w-1/2 h-[420px] flex items-center justify-center">
                    <div className="absolute top-0 left-12">
                        <Image
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Team member 1"
                            width={180}
                            height={180}
                            className="rounded-full border-4 border-blue-500 shadow-xl object-cover"
                        />
                    </div>
                    <div className="absolute top-28 left-52">
                        <Image
                            src="https://randomuser.me/api/portraits/men/36.jpg"
                            alt="Team member 2"
                            width={200}
                            height={200}
                            className="rounded-full border-4 border-white shadow-2xl object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <Image
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="Team member 3"
                            width={180}
                            height={180}
                            className="rounded-full border-4 border-gray-200 shadow-lg object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Headline + Button */}
                <div className="md:w-1/2 space-y-8 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Our commitment to{" "}
                        <span className="text-blue-300">patient health</span>{" "}
                        and safety is matched by our dedication to fostering a
                        thriving, supportive environment for our team.
                    </h2>
                    <Button
                        variant="default"
                        className="bg-white text-[#380387] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
                    >
                        Explore Our Careers
                    </Button>
                </div>
            </div>
        </section>
    );
}
