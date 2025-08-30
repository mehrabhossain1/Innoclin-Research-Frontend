// components/OurCareersSection.tsx
"use client";

import Image from "next/image";
import { ArrowRight, Users, Heart, Award, Globe } from "lucide-react";

const teamStats = [
    { number: "150+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "95%", label: "Satisfaction", icon: Heart },
];

const careerBenefits = [
    "Professional Growth Opportunities",
    "Competitive Benefits Package",
    "Work-Life Balance",
    "Innovative Work Environment"
];

export default function OurCareersSection() {
    return (
        <section className="relative w-full py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
                {/* Moving Gradient Orbs */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl animate-pulse opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#0CB39A]/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-[#0A9B85]/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
                <div className="absolute top-2/3 right-1/3 w-12 h-12 bg-[#089B7A]/25 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.5s' }}></div>
                
                {/* Moving Gradient Lines */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0CB39A]/20 to-transparent animate-slide-right"></div>
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0A9B85]/20 to-transparent animate-slide-left"></div>
                    <div className="absolute top-1/2 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#089B7A]/20 to-transparent animate-slide-down"></div>
                    <div className="absolute top-0 right-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#0CB39A]/15 to-transparent animate-slide-up"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/20 px-3 py-1 rounded-full border border-[#0CB39A]/30 backdrop-blur-sm">
                            Join Our Team
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                        Our commitment to{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            patient health
                        </span>{" "}
                        and safety is matched by our dedication to fostering a
                        thriving, supportive environment for our team.
                    </h2>
                    
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Join a team of passionate professionals dedicated to advancing healthcare research 
                        and making a difference in patients' lives worldwide.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Enhanced Team Images */}
                    <div className="relative">
                        <div className="relative w-full h-[500px] flex items-center justify-center">
                            {/* Main Center Image */}
                            <div className="relative z-20">
                                <Image
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Team member 1"
                                    width={220}
                                    height={220}
                                    className="rounded-full border-4 border-[#0CB39A] shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0CB39A] rounded-full flex items-center justify-center">
                                    <Award className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Top Right Image */}
                            <div className="absolute top-8 right-8 z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Team member 2"
                                    width={160}
                                    height={160}
                                    className="rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Bottom Left Image */}
                            <div className="absolute bottom-8 left-8 z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1594824475545-9d0c7c4951c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Team member 3"
                                    width={140}
                                    height={140}
                                    className="rounded-full border-4 border-[#0A9B85] shadow-xl object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Top Left Image */}
                            <div className="absolute top-16 left-16 z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Team member 4"
                                    width={120}
                                    height={120}
                                    className="rounded-full border-4 border-white/80 shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div className="absolute bottom-16 right-16 z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Team member 5"
                                    width={100}
                                    height={100}
                                    className="rounded-full border-4 border-[#089B7A] shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0CB39A" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#0A9B85" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                <path d="M 50% 50% L 80% 20%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                                <path d="M 50% 50% L 20% 80%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                                <path d="M 50% 50% L 80% 80%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                                <path d="M 50% 50% L 20% 20%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                            </svg>
                        </div>

                        {/* Team Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {teamStats.map((stat, index) => {
                                const StatIcon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-center mb-2">
                                            <StatIcon className="w-5 h-5 text-[#0CB39A] mr-2" />
                                            <span className="text-2xl font-bold text-white">
                                                {stat.number}
                                            </span>
                                        </div>
                                        <p className="text-slate-300 text-sm font-medium">
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white leading-tight">
                                Why Join{" "}
                                <span className="text-[#0CB39A]">Innoclin Research</span>?
                            </h3>
                            
                            <p className="text-lg text-slate-200 leading-relaxed">
                                Be part of a dynamic team that's shaping the future of healthcare research. 
                                We offer an inclusive environment where innovation thrives and every team member 
                                contributes to meaningful breakthroughs that improve patient lives.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white mb-4">What We Offer:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {careerBenefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 text-slate-200"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-[#0CB39A]/20 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                        </div>
                                        <span className="font-medium text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <span>Explore Our Careers</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            
                            <button className="group inline-flex items-center gap-3 text-white hover:text-[#0CB39A] font-semibold transition-colors duration-300">
                                <span>View Open Positions</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-right {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }

                @keyframes slide-left {
                    0% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                }

                @keyframes slide-down {
                    0% {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                }

                @keyframes slide-up {
                    0% {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                }

                .animate-slide-right {
                    animation: slide-right 8s linear infinite;
                }

                .animate-slide-left {
                    animation: slide-left 8s linear infinite;
                    animation-delay: 2s;
                }

                .animate-slide-down {
                    animation: slide-down 10s linear infinite;
                    animation-delay: 1s;
                }

                .animate-slide-up {
                    animation: slide-up 10s linear infinite;
                    animation-delay: 3s;
                }
            `}</style>
        </section>
    );
}
