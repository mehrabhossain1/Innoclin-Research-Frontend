"use client";

import Image from "next/image";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // shadcn dropdown

import Logo from "@/assets/Logo.png";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Innoclin Research"
                        width={150}
                        height={50}
                    />
                </Link>

                {/* Nav Links */}
                <ul className="flex items-center gap-8">
                    {/* About */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer font-medium hover:text-primary">
                                About
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href="/about/who-we-are">
                                        Who we are
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/about/our-vision">
                                        Our vision
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/about/our-leadership">
                                        Our leadership
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>

                    {/* Expertise */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer font-medium hover:text-primary">
                                Expertise
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="max-h-80 overflow-y-auto">
                                {[
                                    "Neuroscience",
                                    "Oncology & Hematology",
                                    "Cardiovascular",
                                    "Rare Disease",
                                    "GI & Hepatology",
                                    "Nephrology",
                                    "Dermatology",
                                    "Ophthalmology",
                                    "Infectious Diseases",
                                    "Respiratory Diseases",
                                    "Reproductive Health",
                                    "Endocrinology",
                                    "Pediatrics",
                                ].map((item) => (
                                    <DropdownMenuItem key={item}>
                                        <Link
                                            href={`/expertise/${item
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        >
                                            {item}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>

                    {/* Services */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer font-medium hover:text-primary">
                                Services
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="max-h-96 overflow-y-auto">
                                <DropdownMenuItem>
                                    <Link href="/services/consultancy">
                                        Consultancy
                                    </Link>
                                    <ul className="pl-4 mt-1 text-sm">
                                        {[
                                            "Strategical Support",
                                            "Study planning & Monitoring",
                                            "Market Research",
                                        ].map((sub) => (
                                            <li key={sub}>
                                                <Link
                                                    href={`/services/consultancy/${sub
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className="block py-1"
                                                >
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </DropdownMenuItem>
                                {[
                                    "Clinical Assessment Training & Surveillance",
                                    "Medical Writing",
                                    "Post market Clinical evidence",
                                    "Ai Principles",
                                    "Protocol Development & Study conduction",
                                    "Health Equity & Inclusivity",
                                    "Clinical Trial optimization",
                                    "Grant plan",
                                    "Clinical Data Analysis Solution",
                                    "Site Suit",
                                ].map((service) => (
                                    <DropdownMenuItem key={service}>
                                        <Link
                                            href={`/services/${service
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        >
                                            {service}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>

                    {/* Insights */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer font-medium hover:text-primary">
                                Insights
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {["News", "Blog"].map((item) => (
                                    <DropdownMenuItem key={item}>
                                        <Link
                                            href={`/insights/${item.toLowerCase()}`}
                                        >
                                            {item}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>

                    {/* Resources */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer font-medium hover:text-primary">
                                Resources
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Training
                                    <ul className="pl-4 mt-1 text-sm">
                                        {[
                                            "E-learning",
                                            "Live Training",
                                            "Recorded Webinar",
                                            "Upcoming Webinar",
                                        ].map((sub) => (
                                            <li key={sub}>
                                                <Link
                                                    href={`/resources/training/${sub
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className="block py-1"
                                                >
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
