"use client";

import { useRef, useState } from "react";
import { Pause, Play, ArrowRight, Handshake, Target, Users } from "lucide-react";

const partnerFeatures = [
    {
        icon: Handshake,
        title: "Collaborative Partnership",
        description: "Working side-by-side as an extension of your team"
    },
    {
        icon: Target,
        title: "Patient-Centric Focus",
        description: "Delivering life-changing therapies to patients"
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Proven expertise in complex clinical trials"
    }
];

export default function OurPartnerSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/20 px-3 py-1 rounded-full border border-[#0CB39A]/30 backdrop-blur-sm">
                            Our Partners
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                        Partnering for{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Breakthroughs
                        </span>
                    </h2>
                    
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        We collaborate closely with biopharma innovators, providing flexible, 
                        patient-centric trial solutions that adapt to your needs.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Video */}
                    <div className="relative flex items-start justify-center lg:justify-start">
                        <div className="relative w-full max-w-lg h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            >
                                <source
                                    src="/ourpartnersection.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* Video Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md text-[#0CB39A] p-4 rounded-full shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 border border-white/50"
                            >
                                {isPlaying ? (
                                    <Pause className="w-6 h-6" />
                                ) : (
                                    <Play className="w-6 h-6 ml-0.5" />
                                )}
                            </button>

                            {/* Video Stats Overlay */}
                            <div className="absolute top-6 left-6">
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#0CB39A]">100+</div>
                                        <div className="text-xs text-gray-600 font-medium">Partnerships</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-[#0CB39A]/20 to-[#0A9B85]/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-[#0A9B85]/20 to-[#089B7A]/20 rounded-full blur-xl"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p className="text-lg text-slate-200 leading-relaxed">
                                At{" "}
                                <span className="font-bold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we put your goals first because delivering
                                life-changing therapies to patients is our shared
                                mission. We collaborate closely with biopharma
                                innovators, providing flexible, patient-centric
                                trial solutions that adapt to your needs and drive
                                meaningful results.
                            </p>

                            <p className="text-lg text-slate-200 leading-relaxed">
                                As an extension of your team, we work side-by-side to solve 
                                challenges, mitigate risks, and deliver high-quality, reliable 
                                data that accelerates your path to success. Our proven expertise 
                                in executing complex trials and our deep knowledge in key 
                                therapeutic areas provide the valuable insights needed to power 
                                your next breakthrough.
                            </p>
                        </div>

                        {/* Partner Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                            {partnerFeatures.map((feature, index) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg group"
                                    >
                                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <FeatureIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-300 leading-relaxed">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <span>Become Our Partner</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
