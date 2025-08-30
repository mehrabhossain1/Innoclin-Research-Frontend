"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function TopNavbar() {
    return (
        <div className="bg-gray-900 text-white text-sm border-b border-gray-800">
            <div className="container mx-auto px-6 py-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-300">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#0CB39A]" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#0CB39A]" />
                            <span>info@innoclinresearch.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#0CB39A]" />
                            <span>Global Offices</span>
                        </div>
                    </div>

                    {/* Right Side Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/careers"
                            className="hover:text-[#0CB39A] transition-colors duration-200"
                        >
                            Careers
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-[#0CB39A] transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                        <div className="h-4 w-px bg-gray-700"></div>
                        <Link
                            href="/login"
                            className="bg-[#0CB39A] text-white font-medium px-4 py-2 rounded-md hover:bg-[#0A9B85] transition-colors duration-200"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
