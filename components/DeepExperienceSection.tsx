"use client";

import React from "react";
import { ArrowRight, Brain, Heart, Eye, Wind, Baby, TestTube, Activity, Users, Activity as ActivityIcon } from "lucide-react";

const therapeuticAreas = [
    {
        name: "Neuroscience",
        icon: Brain,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Advancing treatments for neurological disorders"
    },
    {
        name: "Oncology & Hematology",
        icon: TestTube,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Innovative cancer and blood disorder therapies"
    },
    {
        name: "Cardiovascular",
        icon: Heart,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Heart and vascular disease solutions"
    },
    {
        name: "Rare Disease",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Specialized treatments for rare conditions"
    },
    {
        name: "GI & Hepatology",
        icon: TestTube,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Digestive and liver disease expertise"
    },
    {
        name: "Nephrology",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Kidney disease and renal care"
    },
    {
        name: "Dermatology",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Skin condition treatments and research"
    },
    {
        name: "Ophthalmology",
        icon: Eye,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Eye health and vision care solutions"
    },
    {
        name: "Respiratory",
        icon: Wind,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Lung disease and breathing disorders"
    },
    {
        name: "Reproductive Health",
        icon: Users,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fertility and reproductive medicine"
    },
    {
        name: "Endocrinology",
        icon: ActivityIcon,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hormone and metabolic disorder care"
    },
    {
        name: "Pediatrics",
        icon: Baby,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Child and adolescent healthcare"
    }
];

const DeepExperienceSection: React.FC = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/10 px-3 py-1 rounded-full border border-[#0CB39A]/20">
                            Therapeutic Areas
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                        Deep Experience with{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Debilitating Disease
                        </span>{" "}
                        and Unique Modalities
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Like you, we understand that there&apos;s a patient throughout the development pathway. 
                        Supporting our partners to bring innovative treatments to patients is our purpose. 
                        Leverage our experience in these therapeutic areas.
                    </p>
                </div>

                {/* Therapeutic Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {therapeuticAreas.map((area, index) => {
                        const AreaIcon = area.icon;
                        return (
                            <div
                                key={index}
                                className="group relative h-64 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                            >
                                {/* Background Image */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${area.image})`
                                    }}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />
                                
                                {/* Icon */}
                                <div className="absolute top-4 right-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-[#0CB39A]/30 group-hover:border-[#0CB39A]/50 transition-all duration-300">
                                        <AreaIcon className="w-6 h-6 text-white group-hover:text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-white leading-tight">
                                            {area.name}
                                        </h3>
                                        <p className="text-slate-200 text-sm leading-relaxed">
                                            {area.description}
                                        </p>
                                        
                                        {/* Explore Button */}
                                        <button className="group/btn inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-full hover:bg-[#0CB39A] hover:bg-opacity-90 transition-all duration-300 border border-white/30 hover:border-[#0CB39A]/50">
                                            <span>Explore</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0CB39A]/30 transition-colors duration-500"></div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                <span className="text-sm font-medium">12 Therapeutic Areas</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                <span className="text-sm font-medium">Expert Teams</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                <span className="text-sm font-medium">Proven Results</span>
                            </div>
                        </div>

                        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <span>View All Therapeutic Areas</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepExperienceSection;
