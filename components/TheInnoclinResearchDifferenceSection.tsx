import React from "react";
import {
    Lightbulb,
    BarChart3,
    UserCheck,
    Rocket,
    Users,
    DollarSign,
} from "lucide-react";

const cardData = [
    {
        title: "Expert Guidance",
        icon: Lightbulb,
    },
    {
        title: "Quantified Expertise",
        icon: BarChart3,
    },
    {
        title: "Dedicated Project Manager",
        icon: UserCheck,
    },
    {
        title: "Rapid Start Up",
        icon: Rocket,
    },
    {
        title: "Flexible Resourcing",
        icon: Users,
    },
    {
        title: "Cost Certainty & Change Orders",
        icon: DollarSign,
    },
];

export default function TheInnoclinResearchDifferenceSection() {
    return (
        <section className="relative py-28 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        The Innoclin Research Difference
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        What sets us apart is our commitment to precision,
                        transparency, and dedicated partnership throughout every
                        project.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cardData.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-primary/30 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Icon */}
                                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {card.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
