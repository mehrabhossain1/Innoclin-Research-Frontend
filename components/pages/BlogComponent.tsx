"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type BlogType = "News" | "Events";

interface Blog {
    id: number;
    type: BlogType;
    title: string;
    date?: string;
    location?: string;
    description?: string;
    link: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        type: "Events",
        title: "China CDISC Day 2025",
        date: "29th August 2025 to 29th August 2025",
        location: "Beijing, China",
        link: "#",
    },
    {
        id: 2,
        type: "News",
        title: "Caidya’s John Wang Named Chair of China CDISC Coordinating Committee; Medidata Accreditation Underscores Data Management Excellence",
        date: "07/21/2025",
        description:
            "RALEIGH, N.C.; July 22, 2025 – Caidya a global, technology-enabled clinical...",
        link: "#",
    },
    {
        id: 3,
        type: "News",
        title: "Caidya Strengthens Therapeutic Leadership: Names Adam Callahan Head of Oncology and Hematology",
        date: "03/13/2025",
        description:
            "RALEIGH, N.C.; Mar. 13, 2025 – Caidya, a leading global,...",
        link: "#",
    },
];

export default function BlogsComponent() {
    return (
        <section className="w-full">
            {/* Header Section */}
            <div className="bg-primary text-white text-center py-16 px-6">
                <p className="text-sm font-semibold">Leading a new way</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    The latest from Innoclin
                </h2>
                <p className="text-base md:text-lg">
                    Explore our news and updates as we deliver a superior
                    customer experience.
                </p>
            </div>

            {/* Blog Cards */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 -mt-20 relative z-10">
                {blogs.map((blog) => (
                    <Card
                        key={blog.id}
                        className="shadow-lg rounded-xl overflow-hidden border border-gray-100"
                    >
                        <CardContent className="p-6">
                            {/* Tag */}
                            <span
                                className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-t-md ${
                                    blog.type === "News"
                                        ? "bg-blue-600"
                                        : "bg-purple-600"
                                }`}
                            >
                                {blog.type}
                            </span>

                            {/* Title */}
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                {blog.title}
                            </h3>

                            {/* Date & Location */}
                            {blog.date && (
                                <p className="text-sm text-gray-500 mt-2">
                                    {blog.date}
                                </p>
                            )}
                            {blog.location && (
                                <p className="text-sm text-gray-500">
                                    {blog.location}
                                </p>
                            )}

                            {/* Description */}
                            {blog.description && (
                                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                    {blog.description}
                                </p>
                            )}

                            {/* Button */}
                            <div className="mt-6">
                                <Link href={blog.link}>
                                    <Button
                                        variant="outline"
                                        className="rounded-full text-primary border-primary hover:bg-primary hover:text-white"
                                    >
                                        {blog.type === "Events"
                                            ? "View Event"
                                            : "Read more"}
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
