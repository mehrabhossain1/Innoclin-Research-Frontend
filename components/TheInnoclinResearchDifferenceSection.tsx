"use client";
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
        description:
            "Access to seasoned professionals with deep industry knowledge and proven track records.",
        gradient: "from-amber-400 to-orange-500",
        bgGlow: "bg-amber-100",
    },
    {
        title: "Quantified Expertise",
        icon: BarChart3,
        description:
            "Data-driven insights and measurable outcomes that demonstrate real value and progress.",
        gradient: "from-blue-400 to-cyan-500",
        bgGlow: "bg-blue-100",
    },
    {
        title: "Dedicated Project Manager",
        icon: UserCheck,
        description:
            "Your single point of contact ensuring seamless communication and project success.",
        gradient: "from-green-400 to-emerald-500",
        bgGlow: "bg-green-100",
    },
    {
        title: "Rapid Start Up",
        icon: Rocket,
        description:
            "Fast-track your project timeline with our streamlined onboarding process.",
        gradient: "from-purple-400 to-pink-500",
        bgGlow: "bg-purple-100",
    },
    {
        title: "Flexible Resourcing",
        icon: Users,
        description:
            "Scale your team up or down based on project needs and changing requirements.",
        gradient: "from-indigo-400 to-purple-500",
        bgGlow: "bg-indigo-100",
    },
    {
        title: "Cost Certainty & Change Orders",
        icon: DollarSign,
        description:
            "Transparent pricing with clear change management processes and no hidden surprises.",
        gradient: "from-emerald-400 to-teal-500",
        bgGlow: "bg-emerald-100",
    },
];

export default function TheInnoclinResearchDifferenceSection() {
    return (
        <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Enhanced Heading */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-[2px] w-16 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#0CB39A] bg-[#0CB39A]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0CB39A]/20">
                            Why Choose Us
                        </span>
                        <div className="h-[2px] w-16 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
                        The{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Innoclin Research
                        </span>{" "}
                        Difference
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        What sets us apart is our commitment to precision,
                        transparency, and dedicated partnership throughout every
                        project milestone.
                    </p>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {cardData.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className="group relative opacity-0 transform translate-y-8 animate-fade-in-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: "forwards",
                                }}
                            >
                                {/* Card */}
                                <div className="relative h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-slate-300/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    {/* Gradient glow on hover */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    ></div>

                                    {/* Icon Container */}
                                    <div className="relative flex flex-col items-center mb-6">
                                        <div
                                            className={`w-20 h-20 flex items-center justify-center rounded-2xl ${card.bgGlow} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                                        >
                                            <div
                                                className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${card.gradient} shadow-inner`}
                                            >
                                                <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                                            </div>
                                        </div>

                                        {/* Floating particles effect */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative text-center">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-sm">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${card.gradient} rounded-t-full group-hover:w-24 transition-all duration-500`}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="group inline-flex items-center gap-3 bg-[#0CB39A] hover:bg-[#0A9B85] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                        <span>Experience the Difference</span>
                        <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }
            `}</style>
        </section>
    );
}
