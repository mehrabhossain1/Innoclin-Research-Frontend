"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Clock, Users, Tag } from "lucide-react";

interface Blog {
    _id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    status: 'draft' | 'published' | 'archived';
    featuredImage?: string;
    viewCount: number;
    readTime: number;
    createdAt: string;
    publishedAt?: string;
    author?: {
        name: string;
    };
}

export default function BlogsComponent() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs?limit=3&status=published');
            if (response.ok) {
                const data = await response.json();
                setBlogs(data.blogs || []);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

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
                    {isLoading ? (
                        // Loading skeleton
                        Array.from({ length: 3 }).map((_, index) => (
                            <Card key={index} className="group relative overflow-hidden border-0 shadow-xl bg-white rounded-2xl animate-pulse">
                                <div className="relative h-48 bg-gray-200"></div>
                                <CardContent className="p-6">
                                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-6"></div>
                                    <div className="h-10 bg-gray-200 rounded"></div>
                                </CardContent>
                            </Card>
                        ))
                    ) : blogs.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs available</h3>
                            <p className="text-gray-600">Check back soon for new articles!</p>
                        </div>
                    ) : (
                        blogs.map((blog) => (
                            <Card
                                key={blog._id}
                                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl"
                            >
                                {/* Card Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div 
                                        className="w-full h-full bg-gradient-to-br from-[#0CB39A] to-[#0A9B85]"
                                        style={{
                                            backgroundImage: blog.featuredImage ? `url(${blog.featuredImage})` : 'none',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        {!blog.featuredImage && (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Users className="w-16 h-16 text-white/50" />
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Category Tag */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-blue-600">
                                            {blog.category}
                                        </span>
                                    </div>

                                    {/* Read Time */}
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full">
                                            <Clock className="w-3 h-3" />
                                            {blog.readTime} min read
                                        </span>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0CB39A] transition-colors duration-300">
                                        {blog.title}
                                    </h3>

                                    {/* Meta Information */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatDate(blog.createdAt)}</span>
                                        </div>
                                        {blog.author?.name && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Users className="w-4 h-4" />
                                                <span>{blog.author.name}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Excerpt */}
                                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                        {blog.excerpt}
                                    </p>

                                    {/* Tags */}
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {blog.tags.slice(0, 3).map((tag, index) => (
                                                <span key={index} className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                                                    <Tag className="w-3 h-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Button */}
                                    <div className="pt-2">
                                        <Link href={`/blog/${blog._id}`}>
                                            <Button
                                                variant="outline"
                                                className="group/btn w-full rounded-full text-[#0CB39A] border-[#0CB39A] hover:bg-[#0CB39A] hover:text-white hover:border-[#0CB39A] transition-all duration-300 font-semibold"
                                            >
                                                <span>Read More</span>
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0CB39A]/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                            </Card>
                        ))
                    )}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/blogs">
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
