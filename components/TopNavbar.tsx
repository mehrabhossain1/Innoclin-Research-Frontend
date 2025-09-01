"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function TopNavbar() {
    return (
        <div className="bg-gray-900 text-white text-sm border-b border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    {/* Contact Info - Hidden on Mobile */}
                    <div className="hidden sm:flex sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-6 text-gray-300">
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#0CB39A] flex-shrink-0" />
                            <span className="truncate">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#0CB39A] flex-shrink-0" />
                            <span className="truncate">info@innoclinresearch.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#0CB39A] flex-shrink-0" />
                            <span className="truncate">Global Offices</span>
                        </div>
                    </div>

                    {/* Right Side Links - Centered on Mobile */}
                    <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-6 w-full sm:w-auto">
                        <div className="flex items-center gap-3 sm:gap-6">
                            <Link
                                href="/careers"
                                className="text-xs sm:text-sm hover:text-[#0CB39A] transition-colors duration-200 whitespace-nowrap"
                            >
                                Careers
                            </Link>
                            <Link
                                href="/contact"
                                className="text-xs sm:text-sm hover:text-[#0CB39A] transition-colors duration-200 whitespace-nowrap"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
                        <Link
                            href="/login"
                            className="bg-[#0CB39A] text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-[#0A9B85] transition-colors duration-200 text-xs sm:text-sm whitespace-nowrap"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
