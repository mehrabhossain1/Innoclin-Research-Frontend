// components/SpecializedCapabilitiesSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
    imageUrl: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
}

const CapabilityCard = ({
    imageUrl,
    icon,
    title,
    description,
}: CapabilityCardProps) => {
    return (
        <div
            className="relative rounded-2xl overflow-hidden group shadow-lg"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-80 text-white">
                {icon && <div className="mb-3">{icon}</div>}
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm opacity-90 mb-4">{description}</p>
                <button
                    className={cn(
                        "flex items-center gap-2 text-sm font-medium",
                        "transition-transform hover:translate-x-1"
                    )}
                >
                    Explore
                    <span className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full">
                        <ArrowRight className="w-4 h-4" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default function SpecializedCapabilitiesSection() {
    return (
        <section className="py-40 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Top Left Headline + Description */}
                <div className="max-w-2xl mb-10">
                    <h2 className="text-4xl font-normal mb-8">
                        Specialized Capabilities Headline
                    </h2>
                    <p className="text-gray-600">
                        This is where your section description goes. You can
                        talk about expertise, approach, and other things here.
                    </p>
                </div>

                {/* Bottom 2 Cards */}
                <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-10">
                    <CapabilityCard
                        imageUrl="https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84786.jpg?t=st=1755202418~exp=1755206018~hmac=5933536e936cdc963f75a6a65923af3583d38ec58dc114f232b4755fa19ff6cd&w=1480"
                        title="Clinical Trial Management"
                        description="Efficient and flexible trial solutions designed to adapt to your needs."
                    />
                    <CapabilityCard
                        imageUrl="https://img.freepik.com/free-photo/biochemist-working-microscope-cell-illustration-computer-screen-chemical-laboratory-scientist-woman-analyzing-virus-dna-cell-tissue-diagram-plasma-hemoglobin-nucleus_482257-16248.jpg?t=st=1755202471~exp=1755206071~hmac=9e57b3c533eb74f943575d7a07f170f19a4b510890ab0528020b07e58165b1f5&w=1480"
                        title="Advanced Laboratory Research"
                        description="High-quality, reliable data through advanced scientific methods."
                    />
                </div>
            </div>
        </section>
    );
}
