"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceFeature {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

interface ServiceSection {
    title: string;
    content: string[];
    background?: "white" | "gradient";
    image?: string;
}

interface ServicePageProps {
    serviceName: string;
    serviceIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    heroTitle: string;
    heroSubtitle: string;
    sections: ServiceSection[];
    features: ServiceFeature[];
    benefits: string[];
    backgroundImage?: string;
}

export default function ServiceTemplate({
    serviceName,
    serviceIcon: ServiceIcon,
    heroTitle,
    heroSubtitle,
    sections,
    features,
    benefits,
}: ServicePageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-8">
                            <ServiceIcon className="w-5 h-5" />
                            <span className="text-sm font-semibold">
                                {serviceName}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                            {heroTitle}
                        </h1>

                        <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                            {heroSubtitle}
                        </p>

                        <Button
                            asChild
                            className="group bg-white text-[#0CB39A] font-bold px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                        >
                            <a
                                href="/contact"
                                className="flex items-center gap-3"
                            >
                                <span>Get Started Today</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {features.map((feature, index) => {
                            const FeatureIcon = feature.icon;
                            return (
                                <Card
                                    key={index}
                                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                                >
                                    <CardContent className="p-8 text-center">
                                        <div className="w-16 h-16 bg-[#0CB39A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0CB39A]/20 transition-colors duration-300">
                                            <FeatureIcon className="w-8 h-8 text-[#0CB39A]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
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
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            {sections.map((section, index) => (
                                <div
                                    key={index}
                                    className={`rounded-3xl p-10 shadow-xl ${
                                        section.background === "gradient"
                                            ? "bg-gradient-to-br from-[#0CB39A]/5 to-[#0A9B85]/5"
                                            : "bg-white"
                                    }`}
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-2 h-12 bg-gradient-to-b from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                                        <h2 className="text-3xl font-bold text-gray-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    {section.content.map(
                                        (paragraph, pIndex) => (
                                            <p
                                                key={pIndex}
                                                className="text-lg leading-relaxed text-gray-700 mb-6"
                                            >
                                                {paragraph.includes(
                                                    "Innoclin Research"
                                                )
                                                    ? paragraph
                                                          .split(
                                                              "Innoclin Research"
                                                          )
                                                          .map((part, i) =>
                                                              i === 0 ? (
                                                                  part
                                                              ) : (
                                                                  <span key={i}>
                                                                      <span className="font-semibold text-[#0CB39A]">
                                                                          Innoclin
                                                                          Research
                                                                      </span>
                                                                      {part}
                                                                  </span>
                                                              )
                                                          )
                                                    : paragraph}
                                            </p>
                                        )
                                    )}

                                    {section.image && (
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 group">
                                            <Image
                                                src={section.image}
                                                alt={`${serviceName} - ${section.title}`}
                                                width={800}
                                                height={400}
                                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Benefits & CTA */}
                        <div className="space-y-8">
                            {/* Benefits Card */}
                            <Card className="sticky top-8 shadow-xl border-0">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Key Benefits
                                    </h3>
                                    <div className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle className="w-5 h-5 text-[#0CB39A] mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    {benefit}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <Button
                                            asChild
                                            className="w-full bg-[#0CB39A] hover:bg-[#0A9B85] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <a
                                                href="/contact"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <span>Get Expert Support</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Card */}
                            <Card className="bg-gradient-to-br from-[#0CB39A] to-[#0A9B85] text-white border-0 shadow-xl">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-4">
                                        Ready to Transform Your Research?
                                    </h3>
                                    <p className="text-white/90 mb-6">
                                        Let our experts guide your clinical
                                        development journey to success.
                                    </p>
                                    <Button
                                        asChild
                                        className="bg-white text-[#0CB39A] hover:bg-white/90 font-semibold px-6 py-3 rounded-xl"
                                    >
                                        <a href="/contact">
                                            Schedule Consultation
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
