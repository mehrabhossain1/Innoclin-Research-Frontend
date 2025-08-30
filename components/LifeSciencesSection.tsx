"use client";

import { ArrowRight, Users, Target, Award, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const keyBenefits = [
    {
        icon: Users,
        title: "Expert Team",
        description: "Seasoned professionals with deep industry knowledge"
    },
    {
        icon: Target,
        title: "Proven Results",
        description: "Track record of successful clinical outcomes"
    },
    {
        icon: Award,
        title: "Quality Assurance",
        description: "Highest standards of scientific rigor and compliance"
    },
    {
        icon: Clock,
        title: "Timely Delivery",
        description: "Meet critical deadlines and milestones"
    }
];

const LifeSciencesSection: React.FC = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image with Enhanced Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-photo/asian-microbiologists-wrapped-up-discussion_1098-17101.jpg?t=st=1755272270~exp=1755275870~hmac=2e11a2a9639d27dcfde004ea7a1f3fc2c4516098e7aecacc8914ebdc539da493&w=1480')",
                }}
            />
            
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/20 px-3 py-1 rounded-full border border-[#0CB39A]/30 backdrop-blur-sm">
                            Life Sciences
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
                        Life Sciences Innovators Come to{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Innoclin Research
                        </span>{" "}
                        to Bring Life-Changing Medicine to Patients
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        How can we help you accelerate your research and bring innovative treatments to patients faster?
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
                    {keyBenefits.map((benefit, index) => {
                        const BenefitIcon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <BenefitIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-300">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                <span className="text-sm font-medium">500+ Successful Trials</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                <span className="text-sm font-medium">25+ Countries</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                <span className="text-sm font-medium">99% Client Satisfaction</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                <span>Contact Us</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            
                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-3 text-white hover:text-[#0CB39A] font-semibold transition-colors duration-300"
                            >
                                <span>Explore Our Services</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>

                        {/* Additional Info */}
                        <p className="text-slate-300 text-sm">
                            Ready to accelerate your life sciences innovation? Our expert team is waiting to discuss your project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifeSciencesSection;
