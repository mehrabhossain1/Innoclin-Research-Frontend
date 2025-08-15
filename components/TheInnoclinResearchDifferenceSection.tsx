import React from "react";
import Image from "next/image";
import logo1 from "@/assets/dif1.png";
import logo2 from "@/assets/dif2.png";
import logo3 from "@/assets/dif3.png";

const cardData = [
    {
        title: "Expert Guidance",
        img: logo1,
    },
    {
        title: "Quantified Expertise",
        img: logo2,
    },
    {
        title: "Dedicated Project Manager",
        img: logo3,
    },
    {
        title: "Rapid Start Up",
        img: logo1,
    },
    {
        title: "Flexible Resourcing",
        img: logo2,
    },
    {
        title: "Cost Certainty & Change Orders",
        img: logo3,
    },
];

export default function TheInnoclinResearchDifferenceSection() {
    return (
        <section className="py-30 bg-primary/20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-normal text-center mb-20">
                    The Innoclin Research Difference
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start p-6"
                        >
                            {/* Circle Image */}
                            <div className="mb-4 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center ">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-normal text-gray-800">
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
