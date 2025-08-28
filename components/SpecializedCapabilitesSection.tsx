// components/SpecializedCapabilitiesSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CapabilityCardProps {
    imageUrl: string;
    title: string;
}

const CapabilityCard = ({ imageUrl, title }: CapabilityCardProps) => {
    return (
        <div
            className="relative rounded-3xl overflow-hidden group shadow-xl h-[380px] md:h-[450px]"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    {title}
                </h3>
                <Button
                    className={cn(
                        "flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full",
                        "bg-white text-black hover:bg-gray-100 transition-colors"
                    )}
                >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

export default function SpecializedCapabilitiesSection() {
    return (
        <section className="py-28 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title Centered */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
                        Specialized Capabilities
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
                    <p className="text-gray-600 text-lg mt-6">
                        Explore our proven expertise across clinical trial
                        management and advanced laboratory research — driving
                        reliable data and accelerating breakthroughs.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    <CapabilityCard
                        imageUrl="https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84786.jpg?t=st=1755202418~exp=1755206018~hmac=5933536e936cdc963f75a6a65923af3583d38ec58dc114f232b4755fa19ff6cd&w=1480"
                        title="CRO"
                    />
                    <CapabilityCard
                        imageUrl="https://img.freepik.com/free-photo/biochemist-working-microscope-cell-illustration-computer-screen-chemical-laboratory-scientist-woman-analyzing-virus-dna-cell-tissue-diagram-plasma-hemoglobin-nucleus_482257-16248.jpg?t=st=1755202471~exp=1755206071~hmac=9e57b3c533eb74f943575d7a07f170f19a4b510890ab0528020b07e58165b1f5&w=1480"
                        title="CRO"
                    />
                </div>
            </div>
        </section>
    );
}
