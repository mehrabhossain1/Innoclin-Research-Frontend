import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import contactusImage from "@/assets/contactus.png";

const ContactUsSection: React.FC = () => {
    return (
        <section className="relative bg-[#42138a] text-white py-30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left Side Text */}
                <div className="md:w-1/2 z-10">
                    <h2 className="text-2xl md:text-4xl font-normal mb-6">
                        Speak to one of our experts
                    </h2>
                    <p className="text-sm md:text-base mb-10 max-w-md">
                        Access the right people when and where you need them
                        with personalized clinical services tailored to you and
                        your trial.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex rounded-full items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3  transition-colors"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Right Side Image */}
                <div className="md:w-3/4 mt-10 md:mt-0 relative z-10 flex justify-center">
                    <Image
                        src={contactusImage}
                        alt="Expert talking on phone"
                        width={1500}
                        height={1000}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Decorative Curved Lines */}
            <div className="absolute inset-0">
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    {/* <path
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="14"
                        d="M0,160 C480,260 960,60 1440,160"
                    /> */}
                    <path
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="14"
                        d="M0,240 C480,340 960,140 1440,240"
                    />
                </svg>
            </div>
        </section>
    );
};

export default ContactUsSection;
