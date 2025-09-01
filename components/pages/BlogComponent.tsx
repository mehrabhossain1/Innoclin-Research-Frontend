"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Clock, Users } from "lucide-react";

type BlogType = "News" | "Events";

interface Blog {
    id: number;
    type: BlogType;
    title: string;
    date?: string;
    location?: string;
    description?: string;
    link: string;
    imageSrc?: string;
    readTime?: string;
    author?: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        type: "Events",
        title: "China CDISC Day 2025",
        date: "29th August 2025",
        location: "Beijing, China",
        link: "#",
        imageSrc: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "2 days",
        author: "CDISC Committee"
    },
    {
        id: 2,
        type: "News",
        title: "Caidya's John Wang Named Chair of China CDISC Coordinating Committee; Medidata Accreditation Underscores Data Management Excellence",
        date: "07/21/2025",
        description: "RALEIGH, N.C.; July 22, 2025 – Caidya a global, technology-enabled clinical research organization (CRO), today announced that John Wang, Vice President of Data Management, has been named Chair of the China CDISC Coordinating Committee.",
        link: "#",
        imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "5 min read",
        author: "Caidya Team"
    },
    {
        id: 3,
        type: "News",
        title: "Caidya Strengthens Therapeutic Leadership: Names Adam Callahan Head of Oncology and Hematology",
        date: "03/13/2025",
        description: "RALEIGH, N.C.; Mar. 13, 2025 – Caidya, a leading global clinical research organization (CRO), today announced the appointment of Adam Callahan as Head of Oncology and Hematology.",
        link: "#",
        imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        readTime: "4 min read",
        author: "Caidya Team"
    },
];

export default function BlogsComponent() {
    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* Decorative SVG Lines */}
            <div className="absolute inset-0">
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="none"
                        stroke="url(#blogGradient1)"
                        strokeWidth="2"
                        strokeOpacity="0.1"
                        d="M0,200 C360,100 720,300 1440,200"
                        className="animate-pulse"
                    />
                    <path
                        fill="none"
                        stroke="url(#blogGradient2)"
                        strokeWidth="1.5"
                        strokeOpacity="0.08"
                        d="M0,600 C480,500 960,700 1440,600"
                        className="animate-pulse"
                        style={{ animationDelay: '1s' }}
                    />
                    
                    <defs>
                        <linearGradient id="blogGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0CB39A" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#0A9B85" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#089B7A" stopOpacity="0.8" />
                        </linearGradient>
                        <linearGradient id="blogGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0A9B85" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#089B7A" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#0CB39A" stopOpacity="0.6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/10 px-3 py-1 rounded-full border border-[#0CB39A]/20">
                            Latest Updates
                        </span>
                        <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                        The Latest from{" "}
                        <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                            Innoclin
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore our news and updates as we deliver a superior customer experience 
                        and lead innovation in clinical research.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Card
                            key={blog.id}
                            className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div 
                                    className="w-full h-full bg-gradient-to-br from-[#0CB39A] to-[#0A9B85]"
                                    style={{
                                        backgroundImage: blog.imageSrc ? `url(${blog.imageSrc})` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    {!blog.imageSrc && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Users className="w-16 h-16 text-white/50" />
                                        </div>
                                    )}
                                </div>
                                
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Tag */}
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${
                                            blog.type === "News"
                                                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                                : "bg-gradient-to-r from-purple-500 to-purple-600"
                                        }`}
                                    >
                                        {blog.type}
                                    </span>
                                </div>

                                {/* Read Time */}
                                {blog.readTime && (
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
                                            <Clock className="w-3 h-3" />
                                            {blog.readTime}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <CardContent className="p-6">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0CB39A] transition-colors duration-300">
                                    {blog.title}
                                </h3>

                                {/* Meta Information */}
                                <div className="space-y-2 mb-4">
                                    {blog.date && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{blog.date}</span>
                                        </div>
                                    )}
                                    {blog.location && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="w-4 h-4" />
                                            <span>{blog.location}</span>
                                        </div>
                                    )}
                                    {blog.author && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Users className="w-4 h-4" />
                                            <span>{blog.author}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                {blog.description && (
                                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                        {blog.description}
                                    </p>
                                )}

                                {/* Button */}
                                <div className="pt-2">
                                    <Link href={blog.link}>
                                        <Button
                                            variant="outline"
                                            className="group/btn w-full rounded-full text-[#0CB39A] border-[#0CB39A] hover:bg-[#0CB39A] hover:text-white hover:border-[#0CB39A] transition-all duration-300 font-semibold"
                                        >
                                            <span>{blog.type === "Events" ? "View Event" : "Read More"}</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0CB39A]/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                        </Card>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/blog">
                        <Button className="group bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] hover:from-[#0A9B85] hover:to-[#089B7A] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <span>View All Articles</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
