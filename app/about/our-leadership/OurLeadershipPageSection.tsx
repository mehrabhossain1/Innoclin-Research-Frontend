"use client";

import {
    Users,
    Globe,
    Heart,
    Star,
    Lightbulb,
    ArrowRight,
    CheckCircle,
    UserCheck,
    Target,
    Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function OurLeadershipPageSection() {
    const diversityValues = [
        {
            icon: Globe,
            title: "Global Perspectives",
            description:
                "We welcome professionals from all cultures and regions, bringing diverse viewpoints to clinical research challenges.",
        },
        {
            icon: Users,
            title: "Inclusive Teams",
            description:
                "Our teams represent varied backgrounds, experiences, and expertise, creating a rich collaborative environment.",
        },
        {
            icon: Lightbulb,
            title: "Innovation Through Diversity",
            description:
                "The richness of our team's experience directly fuels our ability to solve complex challenges for our clients.",
        },
        {
            icon: Heart,
            title: "Equity & Belonging",
            description:
                "We foster an environment where every team member feels valued, respected, and empowered to contribute.",
        },
    ];

    const leadershipPrinciples = [
        "Embrace diverse perspectives and backgrounds",
        "Foster an inclusive and collaborative culture",
        "Champion equity in all aspects of our work",
        "Leverage collective experience for innovation",
        "Build teams that reflect global diversity",
        "Create opportunities for professional growth",
        "Encourage open dialogue and knowledge sharing",
        "Support work-life balance and well-being",
    ];

    const impactAreas = [
        {
            title: "Client Solutions",
            description:
                "Diverse teams bring varied perspectives that lead to more comprehensive and innovative solutions for our clients' complex research challenges.",
        },
        {
            title: "Global Research",
            description:
                "Our multicultural leadership understands the nuances of conducting research across different regions and patient populations.",
        },
        {
            title: "Talent Development",
            description:
                "We invest in developing leaders from all backgrounds, ensuring our organization continues to grow and evolve.",
        },
        {
            title: "Industry Innovation",
            description:
                "By embracing diversity, we drive innovation that advances the entire clinical research industry.",
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
                                <Users className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Our Leadership
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            Diversity, equity, and inclusion as our core
                            strengths
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Leadership Philosophy */}
                    <div className="text-center mb-16">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Leadership Philosophy
                            </h2>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    We embrace diversity, equity, and inclusion
                                    as core strengths. We welcome professionals
                                    from all backgrounds, cultures, and
                                    perspectives, knowing that the richness of
                                    our team&apos;s experience directly fuels our
                                    ability to solve complex challenges for our
                                    clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Diversity & Inclusion Values */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Diversity as Our Strength
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Our commitment to diversity, equity, and
                                inclusion creates a powerful foundation for
                                innovation and excellence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {diversityValues.map((value, index) => {
                                const ValueIcon = value.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full"
                                    >
                                        <CardContent className="p-6 text-center h-full flex flex-col">
                                            <div className="w-16 h-16 bg-[#0CB39A]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0CB39A]/20 transition-colors">
                                                <ValueIcon className="w-8 h-8 text-[#0CB39A]" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed flex-grow">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>

                    {/* Leadership Principles */}
                    <div className="mb-16">
                        <div className="bg-gradient-to-r from-[#0CB39A]/5 to-[#0A9B85]/5 rounded-3xl p-8 md:p-12">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Our Leadership Principles
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    These principles guide how we build teams,
                                    make decisions, and create an environment
                                    where everyone can thrive
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {leadershipPrinciples.map(
                                    (principle, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                                        >
                                            <CheckCircle className="w-5 h-5 text-[#0CB39A] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">
                                                {principle}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Impact Areas */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                The Impact of Diverse Leadership
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Our diverse leadership approach creates tangible
                                benefits across all areas of our business
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {impactAreas.map((area, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                                >
                                    <CardContent className="p-8">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#0CB39A]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0CB39A]/20 transition-colors">
                                                <Star className="w-6 h-6 text-[#0CB39A]" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                    {area.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {area.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Leadership in Action */}
                    <div className="mb-16">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <Target className="w-16 h-16 text-[#0CB39A] mx-auto mb-6" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Leadership in Action
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <UserCheck className="w-12 h-12 text-[#0CB39A] mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Inclusive Hiring
                                    </h3>
                                    <p className="text-gray-600">
                                        We actively seek talent from diverse
                                        backgrounds and create opportunities for
                                        underrepresented groups in clinical
                                        research.
                                    </p>
                                </div>
                                <div>
                                    <Award className="w-12 h-12 text-[#0CB39A] mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Mentorship Programs
                                    </h3>
                                    <p className="text-gray-600">
                                        Our leadership development programs
                                        ensure that diverse voices are heard and
                                        nurtured at every level of the
                                        organization.
                                    </p>
                                </div>
                                <div>
                                    <Globe className="w-12 h-12 text-[#0CB39A] mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Global Perspective
                                    </h3>
                                    <p className="text-gray-600">
                                        Our multicultural leadership brings
                                        insights from different healthcare
                                        systems and regulatory environments
                                        worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Join Our Diverse Team
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                            Be part of a leadership culture that values your
                            unique perspective and empowers you to make a
                            meaningful impact in clinical research.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#0CB39A] hover:bg-[#0A9B85] text-white"
                            >
                                <Link href="/careers">
                                    Explore Careers
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-[#0CB39A] text-[#0CB39A] hover:bg-[#0CB39A] hover:text-white"
                            >
                                <Link href="/about/who-we-are">
                                    Learn More About Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
