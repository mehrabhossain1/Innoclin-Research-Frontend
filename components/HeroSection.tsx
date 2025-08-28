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
                    src="https://videocdn.cdnpk.net/videos/6a566c0a-73bb-442d-ab8f-0b840df50060/horizontal/previews/clear/large.mp4?token=exp=1756384421~hmac=e63cfe4a7124d0bfd28d8f9430fb258181a1aba76b3551eaea062916e1d0f67b"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                <div className="max-w-2xl text-left text-white space-y-6">
                    {/* Subtitle */}
                    <div className="flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-primary" />
                        <span className="uppercase tracking-wider text-sm font-medium text-primary">
                            Clinical Research Partner
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Innovative Healthcare Research <br /> at Every Step
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                        Innoclin Research is committed to solving the most
                        complex{" "}
                        <span className="font-semibold text-white">
                            clinical development challenges
                        </span>{" "}
                        and accelerating potential healthcare solutions —
                        delivering precision, reliability, and impact for
                        patients worldwide.
                    </p>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
