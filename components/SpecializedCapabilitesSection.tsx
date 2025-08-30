"use client";
import {
    ArrowRight,
    Award,
    Clipboard,
    Clock,
    Microscope,
    Target,
    Users
} from "lucide-react";
import { useState } from "react";

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
    const [activeCard, setActiveCard] = useState<string | null>(null);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/10 px-3 py-1 rounded-full border border-[#0CB39A]/20">
                            Our Expertise
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                        Specialized{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Capabilities
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore our proven expertise across clinical trial management and advanced laboratory research — 
                        driving reliable data and accelerating breakthroughs.
                    </p>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {capabilityData.map((capability) => (
                        <div
                            key={capability.id}
                            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                            onMouseEnter={() => setActiveCard(capability.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${capability.imageUrl})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                
                                {/* Stats Badge */}
                                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/50">
                                    <span className="text-sm font-bold text-[#0CB39A]">
                                        {capability.stats}
                                    </span>
                                </div>

                                {/* Subtitle */}
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-white text-sm font-medium tracking-wide uppercase">
                                        {capability.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {capability.title}
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {capability.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-3 mb-6">
                                    {capability.features.map((feature, featureIndex) => {
                                        const FeatureIcon = feature.icon;
                                        return (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center space-x-3 text-gray-700"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-[#0CB39A]/10 flex items-center justify-center">
                                                    <FeatureIcon className="w-4 h-4 text-[#0CB39A]" />
                                                </div>
                                                <span className="font-medium text-sm">
                                                    {feature.text}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* CTA Button */}
                                <button className="w-full group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <span>Explore Capabilities</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Hover Effect Border */}
                            <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 ${
                                activeCard === capability.id ? 'border-[#0CB39A]/30' : ''
                            }`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-[#0CB39A]/10 to-[#0A9B85]/10 border border-[#0CB39A]/20 backdrop-blur-sm">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Partner With Us?
                        </h3>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Let&apos;s discuss how our specialized capabilities can accelerate your research objectives 
                            and bring your innovations to market faster.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <span>Start Your Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            
                            <button className="group inline-flex items-center gap-3 text-[#0CB39A] hover:text-[#0A9B85] font-semibold transition-colors duration-300">
                                <span>Schedule a Consultation</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
