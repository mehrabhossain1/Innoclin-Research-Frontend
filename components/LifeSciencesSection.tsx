import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const LifeSciencesSection: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-40 px-6 text-white"
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/free-photo/asian-microbiologists-wrapped-up-discussion_1098-17101.jpg?t=st=1755272270~exp=1755275870~hmac=2e11a2a9639d27dcfde004ea7a1f3fc2c4516098e7aecacc8914ebdc539da493&w=1480')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-normal leading-snug mb-6">
                    Life sciences innovator come to Innoclin Research to bring
                    life-changing medicine to patients. How can we help you?
                </h2>
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
};

export default LifeSciencesSection;
