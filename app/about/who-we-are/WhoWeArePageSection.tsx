"use client";

import {
    Target,
    Globe,
    Users,
    Award,
    CheckCircle,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function WhoWeArePageSection() {
    const features = [
        {
            icon: Target,
            title: "Speed & Precision",
            description:
                "We move faster than the competition, helping you access critical data sooner for confident go/no-go decisions.",
        },
        {
            icon: Globe,
            title: "Global Reach",
            description:
                "Our worldwide presence ensures comprehensive research capabilities across diverse populations.",
        },
        {
            icon: Users,
            title: "Expert Teams",
            description:
                "Deep expertise in both early-phase and late-phase research from experienced professionals.",
        },
        {
            icon: Award,
            title: "Quality Excellence",
            description:
                "Delivering fast, accurate, and high-quality research vital to every product's success.",
        },
    ];

    const benefits = [
        "Save time with accelerated research timelines",
        "Reduce costs through efficient processes",
        "Make confident, earlier go/no-go decisions",
        "Access critical data sooner than competitors",
        "Accelerate your product's journey to market",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] text-white">
                <div className="container mx-auto px-6 py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Who We Are
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            Innovation in clinical research delivering speed,
                            precision, and reliability
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                                At Innoclin Research, our innovative strategies,
                                global reach, and deep expertise in early-phase
                                and late-phase research allow us to move faster
                                than the competition—helping you access critical
                                data sooner. This means you can make confident,
                                earlier go/no-go decisions that save time,
                                reduce costs, and accelerate your product's
                                journey to market also your potential study.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Our name reflects our purpose: Innoclin stands
                                for innovation in clinical research delivering
                                speed, precision, and reliability. We believe
                                that fast, accurate, and high-quality research
                                is vital to every product's success, and we are
                                dedicated to being your trusted partner from
                                first idea to final approval.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {features.map((feature, index) => {
                            const FeatureIcon = feature.icon;
                            return (
                                <Card
                                    key={index}
                                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
                                >
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 bg-[#0CB39A]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0CB39A]/20 transition-colors">
                                            <FeatureIcon className="w-8 h-8 text-[#0CB39A]" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Choose Innoclin Research?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Our commitment to excellence delivers tangible
                                benefits for your research
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="w-6 h-6 text-[#0CB39A] flex-shrink-0 mt-1" />
                                    <p className="text-lg text-gray-700">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="bg-gradient-to-r from-[#0CB39A]/5 to-[#0A9B85]/5 rounded-3xl p-8 md:p-12 text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            Every day, we focus on helping our clients bring
                            life-changing therapies to the people who need them
                            most improving the health and well-being of
                            families, friends, and communities across the globe.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Accelerate Your Research?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Partner with Innoclin Research and experience the
                            difference our innovative approach makes to your
                            clinical development timeline.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#0CB39A] hover:bg-[#0A9B85] text-white"
                            >
                                <Link href="/submit-rfp">
                                    Submit RFP
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-[#0CB39A] text-[#0CB39A] hover:bg-[#0CB39A] hover:text-white"
                            >
                                <Link href="/about/our-vision">
                                    Learn About Our Vision
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
