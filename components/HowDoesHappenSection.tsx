"use client";

import React from "react";
import { ArrowRight, CheckCircle, Clock, Target, Users, Phone, FileText, Rocket } from "lucide-react";

const steps = [
    {
        id: 1,
        icon: Phone,
        title: "Contact Us",
        description: "Schedule a call with our expert team",
        detail: "Get in touch to discuss your project requirements and timeline"
    },
    {
        id: 2,
        icon: FileText,
        title: "Submit RFP",
        description: "Share your project specifications",
        detail: "We'll review your requirements and provide a comprehensive proposal"
    },
    {
        id: 3,
        icon: Rocket,
        title: "Launch Study",
        description: "Begin your clinical trial on time",
        detail: "Execute your study with precision and meet all milestones"
    },
];

const keyMetrics = [
    { number: "99%", label: "On-Time Delivery", icon: Clock },
    { number: "500+", label: "Successful Studies", icon: Target },
    { number: "50+", label: "Expert Team", icon: Users },
];

const HowDoesHappenSection: React.FC = () => {
    return (
        <section className="relative w-full py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/20 px-3 py-1 rounded-full border border-[#0CB39A]/30 backdrop-blur-sm">
                            Our Process
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                        How Does It{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Happen?
                        </span>
                    </h2>
                    
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        We meet deadlines and enrollment milestones, time and time again. 
                        Our obsession with timelines is our unfair advantage.
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Description Section */}
                    <div className="text-center mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 text-left">
                                <p className="text-lg text-slate-200 leading-relaxed">
                                    We&apos;ve built a name by coming to the rescue when studies fall behind and 
                                    sponsors have to start from scratch.{" "}
                                    <span className="font-bold text-[#0CB39A]">&ldquo;We Can Do Hard Things&rdquo;</span>{" "}
                                    is one of our rallying cries, and it&apos;s true.
                                </p>
                                
                                <p className="text-lg text-slate-200 leading-relaxed">
                                    On-time delivery goes hand in hand with world class service. 
                                    In an industry where being behind schedule is considered par for the course, 
                                    we dare to buck the trend. It&apos;s time to choose the CRO you can trust.
                                </p>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {keyMetrics.map((metric, index) => {
                                    const MetricIcon = metric.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-center mb-3">
                                                <MetricIcon className="w-6 h-6 text-[#0CB39A] mr-2" />
                                                <span className="text-3xl font-bold text-white">
                                                    {metric.number}
                                                </span>
                                            </div>
                                            <p className="text-slate-300 text-sm font-medium">
                                                {metric.label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Subheading */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0CB39A] mb-4">
                            Ready to push your study ahead?
                        </h3>
                        <p className="text-lg text-slate-300">
                            Here are 3 simple first steps on the way to a successful study:
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {steps.map((step, index) => {
                            const StepIcon = step.icon;
                            return (
                                <div
                                    key={step.id}
                                    className="relative group"
                                >
                                    {/* Step Card */}
                                    <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:shadow-2xl">
                                        {/* Step Number */}
                                        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{step.id}</span>
                                        </div>

                                        {/* Icon */}
                                        <div className="flex justify-center mb-6">
                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                    <StepIcon className="w-12 h-12 text-white" />
                                                </div>
                                                <div className="absolute inset-0 rounded-full bg-[#0CB39A]/20 group-hover:bg-[#0CB39A]/30 transition-all duration-300 blur-xl"></div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="text-center space-y-3">
                                            <h4 className="text-xl font-bold text-white">{step.title}</h4>
                                            <p className="text-[#0CB39A] font-semibold">{step.description}</p>
                                            <p className="text-slate-300 text-sm leading-relaxed">{step.detail}</p>
                                        </div>

                                        {/* Arrow for connection */}
                                        {index < steps.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                                <div className="w-8 h-8 rounded-full bg-[#0CB39A] flex items-center justify-center">
                                                    <ArrowRight className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#0CB39A]" />
                                    <span className="text-sm font-medium">Proven Track Record</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#0CB39A]" />
                                    <span className="text-sm font-medium">Expert Team</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#0CB39A]" />
                                    <span className="text-sm font-medium">On-Time Delivery</span>
                                </div>
                            </div>

                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <span>Start Your Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowDoesHappenSection;
