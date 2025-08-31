"use client";

import {
    Eye,
    Star,
    Users,
    Award,
    Lightbulb,
    Heart,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function OurVisionPageSection() {
    const visionPillars = [
        {
            icon: Award,
            title: "Experienced Leadership",
            description:
                "Our leadership team brings decades of clinical research expertise to guide every project with wisdom and strategic insight.",
        },
        {
            icon: Heart,
            title: "Passionate Teams",
            description:
                "Every team member is driven by a shared passion for advancing healthcare through innovative clinical research solutions.",
        },
        {
            icon: Star,
            title: "Commitment to Excellence",
            description:
                "We maintain unwavering standards of quality, precision, and reliability in every aspect of our clinical research services.",
        },
    ];

    const capabilities = [
        "End-to-end clinical research solutions",
        "Phase I through Phase IV studies",
        "Regulatory compliance expertise",
        "Advanced data analytics and biostatistics",
        "Global clinical trial management",
        "Patient recruitment and retention strategies",
        "Medical writing and regulatory submissions",
        "Post-market surveillance and pharmacovigilance",
    ];

    const values = [
        {
            title: "Innovation",
            description:
                "Continuously advancing clinical research methodologies and technologies",
        },
        {
            title: "Quality",
            description:
                "Maintaining the highest standards in every aspect of our work",
        },
        {
            title: "Speed",
            description:
                "Delivering results faster without compromising quality or safety",
        },
        {
            title: "Partnership",
            description:
                "Building lasting relationships based on trust, transparency, and mutual success",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] text-white">
                <div className="container mx-auto px-6 py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                                <Eye className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Our Vision
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            To be the premier provider of end-to-end clinical
                            research solutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision Statement */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Vision Statement
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            To be the premier provider of end-to-end clinical
                            research solutions, powered by experienced
                            leadership, passionate teams, and an unwavering
                            commitment to excellence.
                        </p>
                    </div>
                </div>

                {/* Vision Pillars */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The Foundation of Our Vision
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our vision is built on three fundamental pillars
                            that drive everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {visionPillars.map((pillar, index) => {
                            const PillarIcon = pillar.icon;
                            return (
                                <Card
                                    key={index}
                                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full"
                                >
                                    <CardContent className="p-8 text-center h-full flex flex-col">
                                        <div className="w-20 h-20 bg-[#0CB39A]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0CB39A]/20 transition-colors">
                                            <PillarIcon className="w-10 h-10 text-[#0CB39A]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed flex-grow">
                                            {pillar.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Comprehensive Solutions */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-gradient-to-r from-[#0CB39A]/5 to-[#0A9B85]/5 rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                End-to-End Solutions
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Our comprehensive approach covers every aspect
                                of clinical research, ensuring seamless
                                execution from concept to completion
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {capabilities.map((capability, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#0CB39A] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">
                                        {capability}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            These values guide our actions and decisions as we
                            work toward our vision
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Focus */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
                        <Lightbulb className="w-16 h-16 text-[#0CB39A] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Looking Forward
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            As we work toward our vision, we remain committed to
                            pushing the boundaries of what's possible in
                            clinical research. Our goal is not just to meet
                            industry standards, but to set new ones that benefit
                            patients, sponsors, and the broader healthcare
                            community.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Every project we undertake, every partnership we
                            form, and every innovation we develop brings us
                            closer to realizing our vision of being the premier
                            provider of clinical research solutions worldwide.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Join Us in Our Vision
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Partner with Innoclin Research and be part of our
                        mission to transform clinical research and improve
                        global health outcomes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#0CB39A] hover:bg-[#0A9B85] text-white"
                        >
                            <Link href="/submit-rfp">
                                Start Your Project
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-[#0CB39A] text-[#0CB39A] hover:bg-[#0CB39A] hover:text-white"
                        >
                            <Link href="/about/our-leadership">
                                Meet Our Leadership
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
