import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { ArrowRight, Mail, Phone, MapPin, Globe } from "lucide-react";
import Logo from "@/assets/Logo.png";

const Footer: React.FC = () => {
    const footerLinks = {
        about: [
            {
                name: "Mission, Purpose & Values",
                href: "/about/mission-values",
            },
            { name: "Leadership & Expertise", href: "/about/leadership" },
            { name: "Where We Operate", href: "/about/where-we-operate" },
            { name: "Our Story", href: "/about/our-story" },
            { name: "DEI", href: "/about/dei" },
            { name: "ESG", href: "/about/esg" },
            { name: "Code of Conduct", href: "/about/code-of-conduct" },
            { name: "Vendor Partners", href: "/about/vendor-partners" },
        ],
        services: [
            {
                name: "Early Phase Development",
                href: "/services/early-phase-development",
            },
            {
                name: "Phase II/III Studies",
                href: "/services/phase-ii-iii-studies",
            },
            {
                name: "Clinical Development Expertise",
                href: "/services/clinical-development-expertise",
            },
            { name: "Study Start-up", href: "/services/study-start-up" },
            {
                name: "Patient Pathway & Feasibility",
                href: "/services/patient-pathway-feasibility",
            },
            {
                name: "Regulatory Services",
                href: "/services/regulatory-services",
            },
            { name: "Pharmacovigilance", href: "/services/pharmacovigilance" },
            { name: "Medical Writing", href: "/services/medical-writing" },
            {
                name: "Biometrics & Biostatistics",
                href: "/services/biometrics-biostatistics",
            },
            {
                name: "Clinical Analytics",
                href: "/services/clinical-analytics",
            },
            {
                name: "Clinical Data Management",
                href: "/services/clinical-data-management",
            },
            {
                name: "Clinical Technology",
                href: "/services/clinical-technology",
            },
            { name: "RBQM", href: "/services/rbqm" },
            { name: "AI Principles", href: "/services/ai-principles" },
        ],
        expertise: [
            { name: "Neuroscience", href: "/expertise/neuroscience" },
            {
                name: "Oncology & Hematology",
                href: "/expertise/oncology-&-hematology",
            },
            { name: "Cardiovascular", href: "/expertise/cardiovascular" },
            { name: "Rare Disease", href: "/expertise/rare-disease" },
            {
                name: "Gastroenterology & Hepatology",
                href: "/expertise/gastroenterology-&-hepatology",
            },
            { name: "Nephrology", href: "/expertise/nephrology" },
            { name: "Dermatology", href: "/expertise/dermatology" },
            { name: "Ophthalmology", href: "/expertise/ophthalmology" },
            {
                name: "Infectious Diseases",
                href: "/expertise/infectious-diseases",
            },
            {
                name: "Respiratory Diseases",
                href: "/expertise/respiratory-diseases",
            },
            {
                name: "Reproductive Health",
                href: "/expertise/reproductive-health",
            },
            { name: "Endocrinology", href: "/expertise/endocrinology" },
            { name: "Pediatrics", href: "/expertise/pediatrics" },
        ],
        journey: [
            { name: "Become Part of a Trial", href: "/trial-participation" },
            { name: "Partner With Us", href: "/partner-with-us" },
            { name: "Submit RFP", href: "/submit-rfp" },
            { name: "Contact Us", href: "/contact" },
        ],
        careers: [
            { name: "View Open Positions", href: "/careers" },
            { name: "Being Part of Our Team", href: "/careers/our-team" },
            { name: "Life at Innoclin", href: "/careers/life-at-innoclin" },
            { name: "Benefits & Culture", href: "/careers/benefits-culture" },
        ],
    };

    const socialLinks = [
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaFacebook, href: "#", label: "Facebook" },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
                        {/* Company Info & Contact */}
                        <div className="lg:col-span-2">
                            <div className="mb-8">
                                <Image
                                    src={Logo}
                                    alt="Innoclin Research"
                                    className="mb-6 h-12 w-auto"
                                    width={200}
                                    height={60}
                                />
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Accelerating clinical breakthroughs with
                                    precision, innovation, and patient-centric
                                    solutions. Partner with us to bring
                                    life-changing treatments to patients faster.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-300 hover:text-[#0CB39A] transition-colors">
                                    <Mail className="w-5 h-5 text-[#0CB39A]" />
                                    <span>info@innoclinresearch.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 hover:text-[#0CB39A] transition-colors">
                                    <Phone className="w-5 h-5 text-[#0CB39A]" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 hover:text-[#0CB39A] transition-colors">
                                    <MapPin className="w-5 h-5 text-[#0CB39A]" />
                                    <span>Global Offices</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 hover:text-[#0CB39A] transition-colors">
                                    <Globe className="w-5 h-5 text-[#0CB39A]" />
                                    <span>www.innoclinresearch.com</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mb-8">
                                <h4 className="text-lg font-semibold text-white mb-4">
                                    Follow Us
                                </h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => {
                                        const SocialIcon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                aria-label={social.label}
                                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0CB39A] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                            >
                                                <SocialIcon className="w-5 h-5 text-white" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    Stay Updated
                                </h4>
                                <p className="text-sm text-slate-300 mb-4">
                                    Get the latest insights in clinical research
                                    and industry updates.
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#0CB39A] transition-colors"
                                    />
                                    <button className="px-4 py-2 bg-[#0CB39A] hover:bg-[#0A9B85] text-white rounded-lg transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* About Us */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-[#0CB39A] rounded-full"></div>
                                About Us
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.about.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-300 hover:text-[#0CB39A] transition-colors text-sm block hover:translate-x-1 duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-[#0CB39A] rounded-full"></div>
                                Our Services
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-300 hover:text-[#0CB39A] transition-colors text-sm block hover:translate-x-1 duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise Areas */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-[#0CB39A] rounded-full"></div>
                                Expertise Areas
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.expertise.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-300 hover:text-[#0CB39A] transition-colors text-sm block hover:translate-x-1 duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Journey & Careers */}
                        <div>
                            <div className="mb-8">
                                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-[#0CB39A] rounded-full"></div>
                                    Your Journey
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.journey.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="text-slate-300 hover:text-[#0CB39A] transition-colors text-sm block hover:translate-x-1 duration-300"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-[#0CB39A] rounded-full"></div>
                                    Careers
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.careers.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="text-slate-300 hover:text-[#0CB39A] transition-colors text-sm block hover:translate-x-1 duration-300"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-6 text-sm text-slate-400">
                            <p>
                                © 2025 Innoclin Research®. All Rights Reserved.
                            </p>
                            <div className="hidden md:flex items-center gap-2">
                                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                                <span>Accelerating Clinical Breakthroughs</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                            <Link
                                href="/privacy-policy"
                                className="text-slate-400 hover:text-[#0CB39A] transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/transparency"
                                className="text-slate-400 hover:text-[#0CB39A] transition-colors"
                            >
                                Transparency in Coverage
                            </Link>
                            <Link
                                href="/cfius-disclosure"
                                className="text-slate-400 hover:text-[#0CB39A] transition-colors"
                            >
                                CFIUS Disclosure
                            </Link>
                            <Link
                                href="/terms"
                                className="text-slate-400 hover:text-[#0CB39A] transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
