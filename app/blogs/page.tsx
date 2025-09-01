"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, Users, Tag, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";

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

interface Pagination {
    currentPage: number;
    totalPages: number;
    total: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const categories = [
        'General',
        'Clinical Research',
        'Pediatrics',
        'Oncology',
        'Cardiovascular',
        'Neurology',
        'Technology',
        'Industry News'
    ];

    useEffect(() => {
        fetchBlogs();
    }, [currentPage, selectedCategory, selectedTag, searchTerm]);

    const fetchBlogs = async () => {
        setIsLoading(true);
        try {
            const params = new URLSearchParams({
                page: currentPage.toString(),
                limit: '9',
                status: 'published'
            });

            if (selectedCategory) params.append('category', selectedCategory);
            if (selectedTag) params.append('tag', selectedTag);
            if (searchTerm) params.append('search', searchTerm);

            const response = await fetch(`/api/blogs?${params}`);
            if (response.ok) {
                const data = await response.json();
                setBlogs(data.blogs || []);
                setPagination(data.pagination);
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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
        setSelectedTag('');
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                            Our{" "}
                            <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                                Blog
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Explore our latest insights, research updates, and industry news from the world of clinical research.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                    <form onSubmit={handleSearch} className="space-y-4">
                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                            />
                        </div>

                        {/* Filters */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                                <input
                                    type="text"
                                    placeholder="Filter by tag..."
                                    value={selectedTag}
                                    onChange={(e) => setSelectedTag(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                                />
                            </div>

                            <div className="flex items-end">
                                <Button
                                    type="button"
                                    onClick={clearFilters}
                                    variant="outline"
                                    className="w-full"
                                >
                                    <Filter className="w-4 h-4 mr-2" />
                                    Clear Filters
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Results Info */}
                {pagination && (
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-600">
                            Showing {((pagination.currentPage - 1) * pagination.limit) + 1} to{' '}
                            {Math.min(pagination.currentPage * pagination.limit, pagination.total)} of{' '}
                            {pagination.total} articles
                        </p>
                    </div>
                )}

                {/* Blog Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <Card key={index} className="animate-pulse">
                                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                                <CardContent className="p-6">
                                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-6"></div>
                                    <div className="h-10 bg-gray-200 rounded"></div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-12">
                        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                        <p className="text-gray-600 mb-4">Try adjusting your search or filters.</p>
                        <Button onClick={clearFilters} variant="outline">
                            Clear Filters
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
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
                            ))}
                        </div>

                        {/* Pagination */}
                        {pagination && pagination.totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-12">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={!pagination.hasPrevPage}
                                    className="flex items-center gap-2"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Previous
                                </Button>

                                <div className="flex items-center gap-1">
                                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                                        <Button
                                            key={page}
                                            variant={page === pagination.currentPage ? "default" : "outline"}
                                            onClick={() => setCurrentPage(page)}
                                            className="w-10 h-10 p-0"
                                        >
                                            {page}
                                        </Button>
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={!pagination.hasNextPage}
                                    className="flex items-center gap-2"
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
