import React from "react";

const WantACROPartnerSection: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center text-white py-30 px-6"
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/free-photo/close-up-scientist-writing-tablet-while-team-biologists-doing-biological-researches-microscope-backgorund-late-night_482257-514.jpg?t=st=1755265744~exp=1755269344~hmac=d2bf02ca4f79143357d88556895e787e6e8d54d0211e417eb513afb1de87d303&w=1480')",
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-3xl mx-auto ">
                <h2 className="text-3xl md:text-5xl font-normal mb-6">
                    Want a CRO partner who gives you their full attention?
                </h2>
                <p className="text-lg md:text-3xl">
                    You&apos;re in the right place.
                </p>
            </div>
        </section>
    );
};

export default WantACROPartnerSection;
