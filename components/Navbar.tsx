"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Users, Target, FileText, Award, Brain, Heart, Eye, Wind, Activity, Baby, Users2, Microscope, Shield, Zap, Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/assets/Logo.png";

export default function Navbar() {
    const expertiseAreas = [
        { name: "Neuroscience", icon: Brain, description: "Advanced neurological research and clinical trials" },
        { name: "Oncology & Hematology", icon: Microscope, description: "Comprehensive cancer and blood disorder studies" },
        { name: "Cardiovascular", icon: Heart, description: "Heart and vascular system clinical research" },
        { name: "Rare Disease", icon: Shield, description: "Specialized rare disease treatment development" },
        { name: "Gastroenterology & Hepatology", icon: Activity, description: "Digestive and liver disease expertise" },
        { name: "Nephrology", icon: Activity, description: "Kidney disease and renal system research" },
        { name: "Dermatology", icon: Activity, description: "Skin condition and treatment studies" },
        { name: "Ophthalmology", icon: Eye, description: "Eye health and vision research" },
        { name: "Infectious Diseases", icon: Zap, description: "Infectious disease prevention and treatment" },
        { name: "Respiratory Diseases", icon: Wind, description: "Lung and respiratory system research" },
        { name: "Reproductive Health", icon: Users2, description: "Women's health and reproductive medicine" },
        { name: "Endocrinology", icon: Activity, description: "Hormone and metabolic disorder studies" },
        { name: "Pediatrics", icon: Baby, description: "Child-focused clinical research and care" },
    ];

    const services = [
        {
            category: "Clinical Development",
            items: [
                { name: "Early Phase Development", description: "Phase I and II clinical trials" },
                { name: "Phase II/III Studies", description: "Advanced clinical trial phases" },
                { name: "Clinical Development Expertise", description: "End-to-end clinical development" }
            ]
        },
        {
            category: "Clinical Operations & Delivery",
            items: [
                { name: "Study Start-up", description: "Rapid trial initiation and setup" },
                { name: "Patient Pathway & Feasibility", description: "Patient recruitment strategies" }
            ]
        },
        {
            category: "Regulatory Services & Surveillance",
            items: [
                { name: "Regulatory Services", description: "Compliance and approval support" },
                { name: "Pharmacovigilance", description: "Drug safety monitoring" },
                { name: "Medical Writing", description: "Clinical documentation and reports" }
            ]
        },
        {
            category: "Data & Technology",
            items: [
                { name: "Biometrics and Biostatistics", description: "Statistical analysis and data science" },
                { name: "Clinical Analytics", description: "Advanced data analytics" },
                { name: "Clinical Data Management", description: "Comprehensive data handling" },
                { name: "Clinical Technology", description: "Technology solutions and platforms" }
            ]
        }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src={Logo}
                            alt="Innoclin Research"
                            width={180}
                            height={60}
                            className="h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* About */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent">
                                    About
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[600px] p-6" align="start">
                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Who We Are</h3>
                                        <ul className="space-y-3">
                                            <li><Link href="/about/overview" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Overview</Link></li>
                                            <li><Link href="/about/mission-values" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Mission, Purpose & Values</Link></li>
                                            <li><Link href="/about/leadership" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Leadership & Expertise</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Global Reach</h3>
                                        <ul className="space-y-3">
                                            <li><Link href="/about/where-we-operate" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Where We Operate</Link></li>
                                            <li><Link href="/about/our-story" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Our Story</Link></li>
                                            <li><Link href="/about/partners" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Partners</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Corporate</h3>
                                        <ul className="space-y-3">
                                            <li><Link href="/about/dei" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">DEI</Link></li>
                                            <li><Link href="/about/esg" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">ESG</Link></li>
                                            <li><Link href="/about/code-of-conduct" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Code of Conduct</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Services */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent">
                                    Services
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[800px] p-6" align="start">
                                <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                                    {services.map((service, index) => (
                                        <div key={index}>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">{service.category}</h3>
                                            <ul className="space-y-3">
                                                {service.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <Link 
                                                            href={`/services/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="block text-gray-600 hover:text-[#0CB39A] transition-colors group"
                                                        >
                                                            <div className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                                                                {item.name}
                                                            </div>
                                                            <div className="text-sm text-gray-500 mt-1">
                                                                {item.description}
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Expertise */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent">
                                    Expertise
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[900px] p-6" align="start">
                                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {expertiseAreas.map((area, index) => {
                                        const AreaIcon = area.icon;
                                        return (
                                            <Link
                                                key={index}
                                                href={`/expertise/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-[#0CB39A]/10 flex items-center justify-center group-hover:bg-[#0CB39A]/20 transition-colors">
                                                        <AreaIcon className="w-4 h-4 text-[#0CB39A]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 group-hover:text-[#0CB39A] transition-colors text-sm">
                                                            {area.name}
                                                        </h4>
                                                        <p className="text-xs text-gray-600 mt-1">
                                                            {area.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Resources */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent">
                                    Resources
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[500px] p-6" align="start">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Resource Center</h3>
                                        <ul className="space-y-3">
                                            <li><Link href="/resources/whitepapers" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">White Papers</Link></li>
                                            <li><Link href="/resources/case-studies" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Case Studies</Link></li>
                                            <li><Link href="/resources/publications" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Publications</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Training</h3>
                                        <ul className="space-y-3">
                                            <li><Link href="/resources/training/e-learning" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">E-Learning</Link></li>
                                            <li><Link href="/resources/training/live-training" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Live Training</Link></li>
                                            <li><Link href="/resources/training/webinars" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Webinars</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Insights */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent">
                                    Insights
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[500px] p-6" align="start">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Updates</h3>
                                        <ul className="space-y-3">
                                            <li><Link href="/insights/news" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">News</Link></li>
                                            <li><Link href="/insights/events" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Events</Link></li>
                                            <li><Link href="/insights/blog" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Blog</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Industry Insights</h3>
                                        <ul className="space-y-3">
                                            <li><Link href="/insights/trends" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Industry Trends</Link></li>
                                            <li><Link href="/insights/research" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Research Highlights</Link></li>
                                            <li><Link href="/insights/thought-leadership" className="text-gray-600 hover:text-[#0CB39A] transition-colors block">Thought Leadership</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button asChild className="bg-[#0CB39A] hover:bg-[#0A9B85] text-white">
                            <Link href="/submit-rfp">
                                Submit RFP
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[300px] p-4" align="end">
                            <div className="space-y-4">
                                {/* About */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">About</h3>
                                    <ul className="space-y-1">
                                        <li><Link href="/about/overview" className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block">Overview</Link></li>
                                        <li><Link href="/about/mission-values" className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block">Mission & Values</Link></li>
                                        <li><Link href="/about/leadership" className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block">Leadership</Link></li>
                                    </ul>
                                </div>

                                <DropdownMenuSeparator />

                                {/* Services */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Services</h3>
                                    <ul className="space-y-1">
                                        {services.map((service, index) => (
                                            <li key={index}>
                                                <Link href={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block">
                                                    {service.category}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <DropdownMenuSeparator />

                                {/* Expertise */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h3>
                                    <div className="grid grid-cols-1 gap-1">
                                        {expertiseAreas.slice(0, 6).map((area, index) => {
                                            const AreaIcon = area.icon;
                                            return (
                                                <Link
                                                    key={index}
                                                    href={`/expertise/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="flex items-center gap-2 p-1 rounded hover:bg-gray-50 transition-colors"
                                                >
                                                    <AreaIcon className="w-3 h-3 text-[#0CB39A]" />
                                                    <span className="text-sm text-gray-600">{area.name}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                <DropdownMenuSeparator />

                                {/* CTA */}
                                <Button asChild className="w-full bg-[#0CB39A] hover:bg-[#0A9B85] text-white text-sm">
                                    <Link href="/submit-rfp">
                                        Submit RFP
                                    </Link>
                                </Button>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
