"use client";

import React from "react";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get in touch via email",
        action: "info@innoclinresearch.com",
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak with our experts",
        action: "+1 (555) 123-4567",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Find our locations",
        action: "Global Offices",
    },
];

const quickActions = [
    "Schedule a Consultation",
    "Request a Quote",
    "Download Brochure",
    "Join Our Newsletter",
];

export default function GetInTouchSection() {
    return (
        <section className="relative w-full py-32 bg-gradient-to-br from-[#0CB39A] via-[#0A9B85] to-[#089B7A] overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

                {/* Subtle geometric pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-40 left-40 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-60 right-60 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute bottom-40 left-60 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute bottom-60 right-40 w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-[2px] w-16 bg-white/30 rounded-full"></div>
                        <span className="uppercase tracking-[0.2em] text-sm font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            Get In Touch
                        </span>
                        <div className="h-[2px] w-16 bg-white/30 rounded-full"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-white">
                        Let&apos;s{" "}
                        <span className="relative">
                            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                                Transform
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/50 via-white/30 to-transparent rounded-full"></div>
                        </span>{" "}
                        Clinical Research
                    </h2>

                    <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
                        Partner with us to accelerate clinical breakthroughs
                        while ensuring safety, compliance, and world-class
                        patient care. Our expert team is ready to support your
                        vision.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side - Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-4xl font-bold text-white leading-tight">
                                Ready to{" "}
                                <span className="relative">
                                    <span className="text-white/90">
                                        Innovate
                                    </span>
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50 rounded-full"></div>
                                </span>{" "}
                                Together?
                            </h3>

                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Connect with our expert team to explore how we
                                can accelerate your clinical research objectives
                                with cutting-edge solutions and strategic
                                insights.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold text-white mb-6">
                                Connect With Us:
                            </h4>
                            <div className="space-y-4">
                                {contactMethods.map((method, index) => {
                                    const MethodIcon = method.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                                                <MethodIcon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-bold text-white text-lg">
                                                    {method.title}
                                                </h5>
                                                <p className="text-white/60 mb-1">
                                                    {method.description}
                                                </p>
                                                <p className="text-white/90 font-medium">
                                                    {method.action}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold text-white mb-6">
                                Quick Actions:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        className="group text-left p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                                <div className="w-3 h-3 bg-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                            </div>
                                            <span className="font-medium text-white group-hover:text-white/90 transition-colors duration-300 text-lg">
                                                {action}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced CTA Button */}
                        <div className="pt-8">
                            <button className="group relative inline-flex items-center gap-4 bg-white text-[#0CB39A] font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 text-lg">
                                <span>Start Your Journey</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Enhanced Image */}
                    <div className="relative flex items-start justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            {/* Main Image Container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-all duration-700">
                                <Image
                                    src="https://img.freepik.com/free-photo/biotechnology-scientist-researching-laboratory-using-microscope-typing-pc-chemist-examining-virus-evolution-using-high-tech-scientific-research-vaccine-development-against-covid19_482257-12812.jpg?t=st=1756387874~exp=1756391474~hmac=cbae7af6918adc63ab813c4820b92b8eac4bfa00aed06a9d69f620a10b1eca7d&w=1480"
                                    alt="Clinical Research Innovation"
                                    width={650}
                                    height={500}
                                    className="w-full h-[520px] object-cover group-hover:scale-110 transition-transform duration-1000"
                                />

                                {/* Enhanced Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0CB39A]/20 via-transparent to-[#089B7A]/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

                                {/* Floating Contact Card */}
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center">
                                                <MessageCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-gray-900">
                                                    Ready to Connect?
                                                </p>
                                                <p className="text-gray-600">
                                                    Our experts are standing by
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/15 rounded-full blur-3xl"></div>

                            {/* Floating Elements */}
                            <div className="absolute top-10 right-10 w-4 h-4 bg-white/40 rounded-full animate-bounce delay-1000"></div>
                            <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-2000"></div>
                            <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
