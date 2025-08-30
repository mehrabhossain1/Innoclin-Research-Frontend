"use client";

import Image from "next/image";
import { ArrowRight, Award, Users, Clock } from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Excellence",
        description: "Premier clinical research services with proven track record"
    },
    {
        icon: Users,
        title: "Expertise",
        description: "Deep domain knowledge across therapeutic areas"
    },
    {
        icon: Clock,
        title: "Efficiency",
        description: "Streamlined processes that accelerate timelines"
    }
];

export default function AboutUsSection() {
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
                            About Us
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                        Welcome to{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Innoclin Research
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A premier clinical research services and strategic resourcing organization, 
                        dedicated to delivering exceptional clinical experiences.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At{" "}
                                <span className="font-bold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we specialize in providing end-to-end Clinical Research
                                Organization (CRO) solutions, Functional Service
                                Provider (FSP) support, and Strategic Resourcing
                                services that drive efficiency, accuracy, and value for
                                both patients and sponsors throughout the clinical
                                research journey.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                With deep expertise, we are committed to advancing the
                                impact of clinical research — improving lives,
                                accelerating breakthroughs, and ensuring every project
                                reaches its full potential. Through transparent
                                communication, forward-thinking strategies, and
                                innovative solutions, we partner with our clients to
                                achieve better outcomes and long-lasting success.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                            {features.map((feature, index) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 hover:shadow-lg group"
                                    >
                                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <FeatureIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <span>Learn More About Us</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative flex items-start justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="https://img.freepik.com/free-photo/microbiologist-doctor-taking-blood-sample-tube-from-rack-with-machines-analysis-lab-background_482257-527.jpg?t=st=1755199313~exp=1755202913~hmac=162a0ecc42826d6715b46d7fc24f692a62d19fbd05910d498de9d0d925d5c227&w=1480"
                                alt="Innoclin Research Laboratory"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Floating Stats */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-[#0CB39A]">500+</div>
                                            <div className="text-xs text-gray-600 font-medium">Trials Completed</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-[#0CB39A]">50+</div>
                                            <div className="text-xs text-gray-600 font-medium">Partners</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-[#0CB39A]">25+</div>
                                            <div className="text-xs text-gray-600 font-medium">Countries</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#0CB39A]/20 to-[#0A9B85]/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#0A9B85]/20 to-[#089B7A]/20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
