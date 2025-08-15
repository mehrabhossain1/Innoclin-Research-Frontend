// components/OurCareersSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurCareersSection() {
    return (
        <section className="relative w-full py-20 bg-[#380387]">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Overlapping Circular Images */}
                <div className="relative w-full md:w-1/2 h-72">
                    <div className="absolute top-0 left-10">
                        <Image
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Team member 1"
                            width={140}
                            height={140}
                            className="rounded-full border-4 border-blue-500 object-cover"
                        />
                    </div>
                    <div className="absolute top-20 left-40">
                        <Image
                            src="https://randomuser.me/api/portraits/men/36.jpg"
                            alt="Team member 2"
                            width={140}
                            height={140}
                            className="rounded-full border-4 border-white shadow-lg object-cover"
                        />
                    </div>
                    <div className="absolute top-40 left-0">
                        <Image
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="Team member 3"
                            width={140}
                            height={140}
                            className="rounded-full border-4 border-gray-200 object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Headline + Button */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-2xl md:text-4xl text-white">
                        Our commitment to patient health and safety is matched
                        by our dedication to fostering a thriving, supportive
                        environment for our team.
                    </h2>
                    <Button
                        variant="default"
                        className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary/90 transition"
                    >
                        Explore Our Careers
                    </Button>
                </div>
            </div>
        </section>
    );
}
