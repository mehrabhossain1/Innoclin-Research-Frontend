"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="https://videocdn.cdnpk.net/videos/b640ef36-6633-4aac-88a0-c121e6ba21fc/horizontal/previews/clear/large.mp4?token=exp=1755278051~hmac=fdd1183fda3d83948a21a3dedd6e77fb3dd940c554ccdc381f4e57b0bc4ac35d"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl md:text-6xl font-normal mb-6">
                    Innovative Healthcare Research at Every Step
                </h1>
                <p className="max-w-3xl text-lg md:text-xl mb-8">
                    Innoclin Research promised to solve the most complex
                    Clinical development Challenges to bring potential
                    healthcare to patients.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex rounded-full items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3  transition-colors"
                >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
