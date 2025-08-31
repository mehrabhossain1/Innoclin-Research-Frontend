"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronDown,
    Brain,
    Heart,
    Eye,
    Wind,
    Activity,
    Baby,
    Users2,
    Microscope,
    Shield,
    Zap,
    Menu,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo.png";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleMouseEnter = (dropdown: string) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };
    const expertiseAreas = [
        {
            name: "Neuroscience",
            icon: Brain,
            description: "Advanced neurological research and clinical trials",
        },
        {
            name: "Oncology & Hematology",
            icon: Microscope,
            description: "Comprehensive cancer and blood disorder studies",
        },
        {
            name: "Cardiovascular",
            icon: Heart,
            description: "Heart and vascular system clinical research",
        },
        {
            name: "Rare Disease",
            icon: Shield,
            description: "Specialized rare disease treatment development",
        },
        {
            name: "Gastroenterology & Hepatology",
            icon: Activity,
            description: "Digestive and liver disease expertise",
        },
        {
            name: "Nephrology",
            icon: Activity,
            description: "Kidney disease and renal system research",
        },
        {
            name: "Dermatology",
            icon: Activity,
            description: "Skin condition and treatment studies",
        },
        {
            name: "Ophthalmology",
            icon: Eye,
            description: "Eye health and vision research",
        },
        {
            name: "Infectious Diseases",
            icon: Zap,
            description: "Infectious disease prevention and treatment",
        },
        {
            name: "Respiratory Diseases",
            icon: Wind,
            description: "Lung and respiratory system research",
        },
        {
            name: "Reproductive Health",
            icon: Users2,
            description: "Women's health and reproductive medicine",
        },
        {
            name: "Endocrinology",
            icon: Activity,
            description: "Hormone and metabolic disorder studies",
        },
        {
            name: "Pediatrics",
            icon: Baby,
            description: "Child-focused clinical research and care",
        },
    ];

    const services = [
        {
            category: "Strategic Services",
            items: [
                {
                    name: "Consultancy",
                    description: "Expert guidance and strategic consulting",
                },
                {
                    name: "Strategical Support",
                    description: "Comprehensive strategic planning support",
                },
                {
                    name: "Study Planning & Monitoring",
                    description: "End-to-end study oversight and management",
                },
                {
                    name: "Market Research",
                    description: "In-depth market analysis and insights",
                },
            ],
        },
        {
            category: "Clinical Operations",
            items: [
                {
                    name: "Clinical Assessment, Training & Surveillance",
                    description:
                        "Comprehensive clinical oversight and training",
                },
                {
                    name: "Protocol Development & Study Conduction",
                    description: "Protocol design and study execution",
                },
                {
                    name: "Clinical Study Optimization",
                    description: "Optimizing clinical trial efficiency",
                },
                {
                    name: "Site Suitability & Feasibility",
                    description: "Site selection and feasibility assessment",
                },
            ],
        },
        {
            category: "Regulatory & Documentation",
            items: [
                {
                    name: "Medical Writing",
                    description: "Professional medical documentation",
                },
                {
                    name: "Post-Market Clinical Evidence",
                    description:
                        "Post-market surveillance and evidence generation",
                },
                {
                    name: "Grant Planning & Funding Strategy",
                    description: "Grant applications and funding strategies",
                },
            ],
        },
        {
            category: "Technology & Analytics",
            items: [
                {
                    name: "AI Principles in Clinical Research",
                    description: "AI-driven research methodologies",
                },
                {
                    name: "Clinical Data Analysis Solutions",
                    description: "Advanced data analytics and insights",
                },
            ],
        },
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
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("about")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent"
                            >
                                About
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            {openDropdown === "about" && (
                                <div className="absolute left-0 top-full mt-1 w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="space-y-6">
                                        <div>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link
                                                        href="/about/who-we-are"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Who We Are
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/about/our-vision"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Our Vision
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/about/our-leadership"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Our Leadership
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Services */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("services")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent"
                            >
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            {openDropdown === "services" && (
                                <div className="absolute left-0 top-full mt-1 w-[800px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                                        {services.map((service, index) => (
                                            <div key={index}>
                                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                    {service.category}
                                                </h3>
                                                <ul className="space-y-3">
                                                    {service.items.map(
                                                        (item, itemIndex) => (
                                                            <li key={itemIndex}>
                                                                <Link
                                                                    href={`/services/${item.name
                                                                        .toLowerCase()
                                                                        .replace(
                                                                            /\s+/g,
                                                                            "-"
                                                                        )}`}
                                                                    className="block text-gray-600 hover:text-[#0CB39A] transition-colors group"
                                                                    onClick={
                                                                        closeDropdown
                                                                    }
                                                                >
                                                                    <div className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </div>
                                                                    <div className="text-sm text-gray-500 mt-1">
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Expertise */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("expertise")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent"
                            >
                                Expertise
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            {openDropdown === "expertise" && (
                                <div className="absolute left-0 top-full mt-1 w-[900px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {expertiseAreas.map((area, index) => {
                                            const AreaIcon = area.icon;
                                            return (
                                                <Link
                                                    key={index}
                                                    href={`/expertise/${area.name
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                                    onClick={closeDropdown}
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
                                                                {
                                                                    area.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Resources */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("resources")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent"
                            >
                                Resources
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            {openDropdown === "resources" && (
                                <div className="absolute left-0 top-full mt-1 w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                Resource Center
                                            </h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link
                                                        href="/resources/whitepapers"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        White Papers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/resources/case-studies"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Case Studies
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/resources/publications"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Publications
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                Training
                                            </h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link
                                                        href="/resources/training/e-learning"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        E-Learning
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/resources/training/live-training"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Live Training
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/resources/training/webinars"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Webinars
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Insights */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("insights")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 h-auto p-2 text-gray-700 hover:text-[#0CB39A] hover:bg-transparent"
                            >
                                Insights
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                            {openDropdown === "insights" && (
                                <div className="absolute left-0 top-full mt-1 w-[500px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                Latest Updates
                                            </h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link
                                                        href="/insights/news"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        News
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/insights/events"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Events
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/insights/blog"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Blog
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                Industry Insights
                                            </h3>
                                            <ul className="space-y-3">
                                                <li>
                                                    <Link
                                                        href="/insights/trends"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Industry Trends
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/insights/research"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Research Highlights
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/insights/thought-leadership"
                                                        className="text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                        onClick={closeDropdown}
                                                    >
                                                        Thought Leadership
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            asChild
                            className="bg-[#0CB39A] hover:bg-[#0A9B85] text-white"
                        >
                            <Link href="/submit-rfp">Submit RFP</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[300px] p-4"
                            align="end"
                        >
                            <div className="space-y-4">
                                {/* About */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                        About
                                    </h3>
                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                href="/about/who-we-are"
                                                className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                            >
                                                Who We Are
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/about/our-vision"
                                                className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                            >
                                                Our Vision
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/about/our-leadership"
                                                className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                            >
                                                Our Leadership
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <DropdownMenuSeparator />

                                {/* Services */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                        Services
                                    </h3>
                                    <ul className="space-y-1">
                                        {services.map((service, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={`/services/${service.category
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className="text-sm text-gray-600 hover:text-[#0CB39A] transition-colors block"
                                                >
                                                    {service.category}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <DropdownMenuSeparator />

                                {/* Expertise */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                        Expertise
                                    </h3>
                                    <div className="grid grid-cols-1 gap-1">
                                        {expertiseAreas
                                            .slice(0, 6)
                                            .map((area, index) => {
                                                const AreaIcon = area.icon;
                                                return (
                                                    <Link
                                                        key={index}
                                                        href={`/expertise/${area.name
                                                            .toLowerCase()
                                                            .replace(
                                                                /\s+/g,
                                                                "-"
                                                            )}`}
                                                        className="flex items-center gap-2 p-1 rounded hover:bg-gray-50 transition-colors"
                                                    >
                                                        <AreaIcon className="w-3 h-3 text-[#0CB39A]" />
                                                        <span className="text-sm text-gray-600">
                                                            {area.name}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                    </div>
                                </div>

                                <DropdownMenuSeparator />

                                {/* CTA */}
                                <Button
                                    asChild
                                    className="w-full bg-[#0CB39A] hover:bg-[#0A9B85] text-white text-sm"
                                >
                                    <Link href="/submit-rfp">Submit RFP</Link>
                                </Button>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
