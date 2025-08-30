"use client";
import React, { useState } from "react";
import {
    ArrowRight,
    Microscope,
    Clipboard,
    Users,
    Award,
    Clock,
    Target,
} from "lucide-react";

const capabilityData = [
    {
        id: "cro",
        title: "Clinical Research Organization (CRO)",
        subtitle: "End-to-End Clinical Trial Management",
        imageUrl:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: [
            { icon: Clipboard, text: "Protocol Development & Design" },
            { icon: Users, text: "Patient Recruitment & Retention" },
            { icon: Award, text: "Regulatory Compliance & Submissions" },
        ],
        stats: "500+ Successful Trials",
        description:
            "Comprehensive clinical research services from protocol design to regulatory submission, ensuring your studies meet the highest standards of scientific rigor and regulatory compliance.",
    },
    {
        id: "laboratory",
        title: "Advanced Laboratory Research",
        subtitle: "Cutting-Edge Analytical Solutions",
        imageUrl:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: [
            { icon: Microscope, text: "Biomarker Analysis & Discovery" },
            { icon: Target, text: "Precision Medicine Solutions" },
            { icon: Clock, text: "Rapid Turnaround Times" },
        ],
        stats: "99.5% Accuracy Rate",
        description:
            "State-of-the-art laboratory facilities delivering precise analytical services, biomarker research, and innovative testing solutions for pharmaceutical and biotechnology partners.",
    },
];

export default function SpecializedCapabilitiesSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <section className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced Section Title */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        Our Core Expertise
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
                        <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                            Specialized
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
                            Capabilities
                            {/* Enhanced wave line */}
                            <svg
                                className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-48 h-8 text-yellow-400"
                                viewBox="0 0 200 24"
                                fill="none"
                            >
                                <path
                                    d="M4 12 C24 22, 48 2, 72 12 S120 22, 144 12 S192 2, 196 12"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    className="animate-pulse"
                                />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed">
                        Explore our proven expertise across clinical trial
                        management and advanced laboratory research — driving
                        reliable data and accelerating breakthroughs.
                    </p>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {capabilityData.map((capability) => {
                        return (
                            <div
                                key={capability.id}
                                className="group relative"
                                onMouseEnter={() =>
                                    setHoveredCard(capability.id)
                                }
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Main Card */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${capability.imageUrl})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />

                                    {/* Content Container */}
                                    <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                                        {/* Stats Badge */}
                                        <div className="absolute top-6 right-6 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                            <span className="text-sm font-semibold">
                                                {capability.stats}
                                            </span>
                                        </div>

                                        {/* Main Content */}
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <p className="text-blue-300 text-sm font-medium tracking-wide uppercase">
                                                    {capability.subtitle}
                                                </p>
                                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                                    {capability.title}
                                                </h3>
                                            </div>

                                            <p className="text-slate-200 leading-relaxed text-lg">
                                                {capability.description}
                                            </p>

                                            {/* Features List */}
                                            <div className="space-y-3 pt-4">
                                                {capability.features.map(
                                                    (feature, featureIndex) => {
                                                        const FeatureIcon =
                                                            feature.icon;
                                                        return (
                                                            <div
                                                                key={
                                                                    featureIndex
                                                                }
                                                                className="flex items-center space-x-3 text-slate-100 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                                                                style={{
                                                                    transitionDelay: `${
                                                                        featureIndex *
                                                                            100 +
                                                                        200
                                                                    }ms`,
                                                                }}
                                                            >
                                                                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                                                    <FeatureIcon className="w-4 h-4" />
                                                                </div>
                                                                <span className="font-medium">
                                                                    {
                                                                        feature.text
                                                                    }
                                                                </span>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>

                                            {/* CTA Button */}
                                            <div className="pt-6">
                                                <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white">
                                                    <span>
                                                        Explore Capabilities
                                                    </span>
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover border effect */}
                                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-500"></div>
                                </div>

                                {/* Floating accent */}
                                <div
                                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                                        hoveredCard === capability.id
                                            ? "animate-bounce"
                                            : ""
                                    }`}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-20 p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        Ready to Partner With Us?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                        Let&apos;s discuss how our specialized capabilities can
                        accelerate your research objectives and bring your
                        innovations to market faster.
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
