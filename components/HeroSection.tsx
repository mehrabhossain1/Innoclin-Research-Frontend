"use client";
import {
    ArrowRight,
    Award,
    Globe,
    Play,
    Users
} from "lucide-react";
import { useEffect, useState } from "react";

const statsData = [
    { number: "500+", label: "Clinical Trials", icon: Award },
    { number: "50+", label: "Research Partners", icon: Users },
    { number: "25+", label: "Countries", icon: Globe },
];

type FloatingParticleProps = {
    delay: number;
    duration: number;
    size: number;
};

const FloatingParticle = ({ delay, duration, size }: FloatingParticleProps) => (
    <div
        className={`absolute bg-white/20 rounded-full animate-float`}
        style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        }}
    />
);

export default function HeroSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleVideo = () => {
        setIsVideoPlaying(!isVideoPlaying);
    };

    

    if (!mounted) return null;

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    isVideoPlaying ? "scale-100" : "scale-110 blur-sm"
                }`}
            >
                <source
                    src="/hero_section_vdo.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dynamic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Floating Particles */}
            {Array.from({ length: 8 }).map((_, i) => (
                <FloatingParticle
                    key={i}
                    delay={i * 0.8}
                    duration={4 + (i % 3)}
                    size={4 + (i % 3) * 2}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
                <div className="max-w-4xl text-left text-white space-y-8">
                    {/* Enhanced Subtitle with Animation */}
                    <div className="flex items-center gap-3 opacity-0 animate-slide-in-left">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/20 px-3 py-1 rounded-full backdrop-blur-sm border border-[#0CB39A]/30">
                            Clinical Research Partner
                        </span>
                    </div>

                    {/* Enhanced Title */}
                    <h1 className="text-5xl md:text-7xl font-black leading-[0.9] opacity-0 animate-slide-in-left-delayed">
                        <span className="block">Innovative</span>
                        <span className="block bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Healthcare Research
                        </span>
                        <span className="block text-4xl md:text-5xl font-semibold mt-2 text-slate-200">
                            at Every Step
                        </span>
                    </h1>

                    {/* Enhanced Description */}
                    <div className="space-y-4 opacity-0 animate-slide-in-left-delayed-2">
                        <p className="text-xl md:text-2xl leading-relaxed text-slate-100 max-w-3xl">
                            Innoclin Research is committed to solving the most
                            complex{" "}
                            <span className="font-bold text-white bg-gradient-to-r from-[#0CB39A]/30 to-[#0A9B85]/30 px-2 py-1 rounded">
                                clinical development challenges
                            </span>{" "}
                            and accelerating potential healthcare solutions.
                        </p>
                        <p className="text-lg text-slate-300">
                            Delivering precision, reliability, and measurable
                            impact for patients worldwide.
                        </p>
                    </div>

                    {/* Enhanced CTA Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 animate-slide-in-left-delayed-3">
                        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                            <span>Start Your Project</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        <button
                            onClick={toggleVideo}
                            className="group inline-flex items-center gap-3 text-white hover:text-[#0CB39A] font-semibold transition-colors duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#0CB39A]/30 transition-all duration-300 border border-white/30 group-hover:border-[#0CB39A]/50">
                                <Play className="w-5 h-5 ml-0.5" />
                            </div>
                            <span>Watch Our Story</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="absolute bottom-8 left-0 right-0 z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
                        {statsData.map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 opacity-0 animate-slide-in-up hover:bg-white/15 transition-all duration-300"
                                    style={{
                                        animationDelay: `${
                                            1000 + index * 200
                                        }ms`,
                                        animationFillMode: "forwards",
                                    }}
                                >
                                    <div className="flex items-center justify-center mb-2">
                                        <StatIcon className="w-6 h-6 text-[#0CB39A] mr-2" />
                                        <span className="text-3xl font-bold text-white">
                                            {stat.number}
                                        </span>
                                    </div>
                                    <p className="text-slate-300 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

    

            <style jsx>{`
                @keyframes slide-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slide-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(180deg);
                    }
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out forwards;
                }

                .animate-slide-in-left-delayed {
                    animation: slide-in-left 0.8s ease-out 0.3s forwards;
                }

                .animate-slide-in-left-delayed-2 {
                    animation: slide-in-left 0.8s ease-out 0.6s forwards;
                }

                .animate-slide-in-left-delayed-3 {
                    animation: slide-in-left 0.8s ease-out 0.9s forwards;
                }

                .animate-slide-in-up {
                    animation: slide-in-up 0.8s ease-out;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
