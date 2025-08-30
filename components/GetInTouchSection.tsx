"use client";

import React from "react";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get in touch via email",
        action: "info@innoclinresearch.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak with our experts",
        action: "+1 (555) 123-4567"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Find our locations",
        action: "Global Offices"
    }
];

const quickActions = [
    "Schedule a Consultation",
    "Request a Quote",
    "Download Brochure",
    "Join Our Newsletter"
];

export default function GetInTouchSection() {
    return (
        <section className="relative w-full py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/10 px-3 py-1 rounded-full border border-[#0CB39A]/20">
                            Contact Us
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                        Discover{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Innoclin Research&apos;s
                        </span>{" "}
                        Innovative Solutions
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Let&apos;s partner to accelerate clinical breakthroughs while ensuring safety, 
                        compliance, and world-class patient care. Our team is ready to support you every step of the way.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                                Ready to{" "}
                                <span className="text-[#0CB39A]">Transform</span>{" "}
                                Your Research?
                            </h3>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Connect with our expert team to explore how we can accelerate your clinical research 
                                objectives. Whether you need comprehensive CRO services, laboratory solutions, 
                                or strategic consulting, we&apos;re here to help you succeed.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch:</h4>
                            <div className="space-y-4">
                                {contactMethods.map((method, index) => {
                                    const MethodIcon = method.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <MethodIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-bold text-gray-900">{method.title}</h5>
                                                <p className="text-sm text-gray-600">{method.description}</p>
                                                <p className="text-sm font-medium text-[#0CB39A]">{method.action}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        className="text-left p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0CB39A]/10 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                            </div>
                                            <span className="font-medium text-gray-700 group-hover:text-[#0CB39A] transition-colors duration-300">
                                                {action}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <span>Partner With Us</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative flex items-start justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="https://img.freepik.com/free-photo/biotechnology-scientist-researching-laboratory-using-microscope-typing-pc-chemist-examining-virus-evolution-using-high-tech-scientific-research-vaccine-development-against-covid19_482257-12812.jpg?t=st=1756387874~exp=1756391474~hmac=cbae7af6918adc63ab813c4820b92b8eac4bfa00aed06a9d69f620a10b1eca7d&w=1480"
                                    alt="Get in touch"
                                    width={650}
                                    height={480}
                                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Floating Contact Card */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-[#0CB39A] flex items-center justify-center">
                                                <MessageCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">Ready to Connect?</p>
                                                <p className="text-xs text-gray-600">Our experts are waiting</p>
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
            </div>
        </section>
    );
}
