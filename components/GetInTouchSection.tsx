import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GetInTouchSection() {
    return (
        <section
            className={cn(
                "w-full py-30 px-4 md:px-8 lg:px-30",
                "bg-gradient-to-r from-primary/10 via-white to-secondary/10"
            )}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side */}
                <div>
                    <h2 className="text-xl md:text-xl text-primary mb-4">
                        GET IN TOUCH
                    </h2>
                    <p className="text-4xl  text-gray-700 mb-6">
                        Discover Advanced Clinical&apos;s Solutions.
                    </p>
                    <Button
                        variant="default"
                        className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary/90 transition"
                    >
                        Partner With Us
                    </Button>
                </div>

                {/* Right Side - Image */}
                <div className="w-full h-full flex justify-center">
                    <Image
                        src="https://img.freepik.com/free-photo/doctor-wearing-face-mask-hospital_23-2148728373.jpg?t=st=1755265429~exp=1755269029~hmac=97d7ba403df6c8d3236267511c7a96e5da25567832772023bef30bc6564feba4&w=1480"
                        alt="Get in touch"
                        className="rounded-2xl shadow-lg object-cover w-full max-w-md"
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
}
