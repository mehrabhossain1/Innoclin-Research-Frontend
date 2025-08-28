import React from "react";
import { Button } from "@/components/ui/button";

const WantACROPartnerSection: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center text-white py-36 px-6"
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/free-photo/close-up-scientist-writing-tablet-while-team-biologists-doing-biological-researches-microscope-backgorund-late-night_482257-514.jpg?t=st=1755265744~exp=1755269344~hmac=d2bf02ca4f79143357d88556895e787e6e8d54d0211e417eb513afb1de87d303&w=1480')",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                    Want a CRO Partner Who Gives You{" "}
                    <span className="text-primary">Their Full Attention?</span>
                </h2>
                <p className="text-lg md:text-2xl text-gray-200">
                    You&apos;re in the right place — we combine expertise,
                    precision, and dedicated focus to drive breakthrough
                    clinical outcomes.
                </p>

                <Button
                    size="lg"
                    className="mt-6 bg-primary text-white px-8 py-4 rounded-full shadow-lg hover:bg-primary/90 transition"
                >
                    Let’s Partner
                </Button>
            </div>
        </section>
    );
};

export default WantACROPartnerSection;
