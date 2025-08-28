import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GetInTouchSection() {
    return (
        <section
            className={cn(
                "w-full py-28 px-6 md:px-12 lg:px-20",
                "bg-gradient-to-r from-yellow-50 via-white to-primary/50"
            )}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* Left Side */}
                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-lg font-semibold text-primary tracking-widest uppercase">
                        Get In Touch
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Discover{" "}
                        <span className="text-primary">
                            Advanced Clinical’s
                        </span>{" "}
                        Innovative Solutions
                    </p>
                    <p className="text-lg text-gray-600 max-w-lg">
                        Let’s partner to accelerate clinical breakthroughs while
                        ensuring safety, compliance, and world-class patient
                        care. Our team is ready to support you every step of the
                        way.
                    </p>
                    <Button
                        size="lg"
                        className="bg-primary text-white px-8 py-4 rounded-full shadow-lg hover:bg-primary/90 transition"
                    >
                        Partner With Us
                    </Button>
                </div>

                {/* Right Side - Image */}
                <div className="w-full h-full flex justify-center md:justify-end">
                    <Image
                        src="https://img.freepik.com/free-photo/biotechnology-scientist-researching-laboratory-using-microscope-typing-pc-chemist-examining-virus-evolution-using-high-tech-scientific-research-vaccine-development-against-covid19_482257-12812.jpg?t=st=1756387874~exp=1756391474~hmac=cbae7af6918adc63ab813c4820b92b8eac4bfa00aed06a9d69f620a10b1eca7d&w=1480"
                        alt="Get in touch"
                        className="rounded-3xl shadow-2xl object-cover w-full max-w-2xl h-[420px]"
                        width={650}
                        height={480}
                    />
                </div>
            </div>
        </section>
    );
}
