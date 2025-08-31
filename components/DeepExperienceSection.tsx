"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Users,
    Brain,
    FileText,
    BarChart3,
    Microscope,
    Shield,
    TrendingUp,
    Building,
    Zap,
    Database,
    Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
    {
        title: "Consultancy",
        icon: Users,
        description:
            "Expert guidance and strategic consulting for your clinical research initiatives with industry-leading professionals.",
        slug: "consultancy",
        gradient: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        bgImage:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Strategical Support",
        icon: Brain,
        description:
            "Comprehensive strategic planning support to optimize your research roadmap and maximize success.",
        slug: "strategical-support",
        gradient: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
        bgImage:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Study Planning & Monitoring",
        icon: FileText,
        description:
            "End-to-end study oversight and management ensuring compliance and quality throughout.",
        slug: "study-planning-&-monitoring",
        gradient: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
        bgImage:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Market Research",
        icon: TrendingUp,
        description:
            "In-depth market analysis and insights to inform strategic decision-making processes.",
        slug: "market-research",
        gradient: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
        bgImage:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Clinical Assessment, Training & Surveillance",
        icon: Microscope,
        description:
            "Comprehensive clinical oversight and training programs with continuous surveillance protocols.",
        slug: "clinical-assessment-training-&-surveillance",
        gradient: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        iconColor: "text-teal-600",
        bgImage:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Medical Writing",
        icon: FileText,
        description:
            "Professional medical documentation services ensuring regulatory compliance and clarity.",
        slug: "medical-writing",
        gradient: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        iconColor: "text-indigo-600",
        bgImage:
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Post-Market Clinical Evidence",
        icon: BarChart3,
        description:
            "Post-market surveillance and evidence generation to support ongoing product lifecycle.",
        slug: "post-market-clinical-evidence",
        gradient: "from-pink-500 to-pink-600",
        bgColor: "bg-pink-50",
        iconColor: "text-pink-600",
        bgImage:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "AI Principles in Clinical Research",
        icon: Zap,
        description:
            "AI-driven research methodologies and innovative technologies for enhanced outcomes.",
        slug: "ai-principles",
        gradient: "from-yellow-500 to-yellow-600",
        bgColor: "bg-yellow-50",
        iconColor: "text-yellow-600",
        bgImage:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Protocol Development & Study Conduction",
        icon: Shield,
        description:
            "Comprehensive protocol design and study execution with rigorous quality standards.",
        slug: "protocol-development-&-study-conduction",
        gradient: "from-red-500 to-red-600",
        bgColor: "bg-red-50",
        iconColor: "text-red-600",
        bgImage:
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Clinical Study Optimization",
        icon: TrendingUp,
        description:
            "Optimizing clinical trial efficiency through innovative methodologies and best practices.",
        slug: "clinical-trial-optimization",
        gradient: "from-cyan-500 to-cyan-600",
        bgColor: "bg-cyan-50",
        iconColor: "text-cyan-600",
        bgImage:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Grant Planning & Funding Strategy",
        icon: Award,
        description:
            "Strategic grant applications and funding strategies to support research initiatives.",
        slug: "grant-plan",
        gradient: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-600",
        bgImage:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Clinical Data Analysis Solutions",
        icon: Database,
        description:
            "Advanced data analytics and insights to drive informed clinical decisions.",
        slug: "clinical-data-analysis-solution",
        gradient: "from-violet-500 to-violet-600",
        bgColor: "bg-violet-50",
        iconColor: "text-violet-600",
        bgImage:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Site Suitability & Feasibility",
        icon: Building,
        description:
            "Comprehensive site selection and feasibility assessment for optimal trial execution.",
        slug: "site-suit",
        gradient: "from-slate-500 to-slate-600",
        bgColor: "bg-slate-50",
        iconColor: "text-slate-600",
        bgImage:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

const DeepExperienceSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const cardsPerView = 3;
    const maxIndex = Math.max(0, services.length - cardsPerView);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000); // 3 seconds
            return () => clearInterval(interval);
        }
    }, [currentIndex, isHovered, maxIndex, nextSlide]);

    return (
        <section className="relative py-32 bg-gradient-to-br from-[#0CB39A] via-[#0A9B85] to-[#089B7A] overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-[2px] w-16 bg-white/30 rounded-full"></div>
                        <span className="uppercase tracking-[0.2em] text-sm font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            Our Services
                        </span>
                        <div className="h-[2px] w-16 bg-white/30 rounded-full"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-white">
                        Comprehensive{" "}
                        <span className="relative">
                            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Clinical Research
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/50 via-white/30 to-transparent rounded-full"></div>
                        </span>{" "}
                        Solutions
                    </h2>

                    <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
                        From strategic consulting to advanced data analytics, we
                        deliver end-to-end clinical research services that
                        accelerate your path to market and ensure regulatory
                        compliance.
                    </p>
                </div>

                {/* Services Carousel */}
                <div
                    className="relative max-w-7xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Carousel Container */}
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-6"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / cardsPerView)
                                }%)`,
                            }}
                        >
                            {services.map((service, index) => {
                                const ServiceIcon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex-none"
                                        style={{
                                            width: `calc(${
                                                100 / cardsPerView
                                            }% - ${
                                                (cardsPerView - 1) * 1.5
                                            }rem / ${cardsPerView})`,
                                        }}
                                    >
                                        <Card className="group relative h-96 bg-white/95 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{
                                                    backgroundImage: `url(${service.bgImage})`,
                                                }}
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-500" />

                                            <CardContent className="relative h-full p-8 flex flex-col justify-between z-10">
                                                {/* Icon Container */}
                                                <div className="flex justify-between items-start">
                                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/30">
                                                        <ServiceIcon className="w-8 h-8 text-white" />
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="space-y-4">
                                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-white/90 leading-relaxed text-base">
                                                        {service.description}
                                                    </p>

                                                    {/* Explore Button */}
                                                    <Button
                                                        asChild
                                                        className="group/btn w-full bg-white/20 backdrop-blur-md hover:bg-[#0CB39A] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-[#0CB39A]/50"
                                                    >
                                                        <a
                                                            href={`/services/${service.slug}`}
                                                            className="flex items-center justify-center gap-2"
                                                        >
                                                            <span>
                                                                Explore Service
                                                            </span>
                                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                        </a>
                                                    </Button>
                                                </div>

                                                {/* Bottom accent line */}
                                                <div
                                                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-full group-hover:w-24 transition-all duration-500`}
                                                ></div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                        onClick={prevSlide}
                        variant="outline"
                        size="icon"
                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20 shadow-xl"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </Button>

                    <Button
                        onClick={nextSlide}
                        variant="outline"
                        size="icon"
                        className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20 shadow-xl"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </Button>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map(
                            (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentIndex === index
                                            ? "bg-white scale-125"
                                            : "bg-white/40 hover:bg-white/60"
                                    }`}
                                />
                            )
                        )}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                <span className="text-lg font-medium">
                                    {services.length} Specialized Services
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-200"></div>
                                <span className="text-lg font-medium">
                                    Expert Teams
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-500"></div>
                                <span className="text-lg font-medium">
                                    Proven Results
                                </span>
                            </div>
                        </div>

                        <Button
                            asChild
                            className="group bg-white text-[#0CB39A] font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 text-lg"
                        >
                            <a
                                href="/services"
                                className="flex items-center gap-3"
                            >
                                <span>Explore All Services</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepExperienceSection;
