"use client";

import Link from "next/link";

export function TopNavbar() {
    return (
        <div className="bg-primary text-white text-sm">
            <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-6">
                <Link
                    href="/career"
                    className="hover:underline transition-colors"
                >
                    Career
                </Link>
                <Link
                    href="/contact"
                    className="hover:underline transition-colors"
                >
                    Contact
                </Link>
                <Link
                    href="/login"
                    className="bg-white text-primary font-medium px-3 py-1 rounded-md hover:bg-secondary transition-colors"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}
