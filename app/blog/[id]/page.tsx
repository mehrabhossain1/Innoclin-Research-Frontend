"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Tag, ArrowLeft, Share2, Eye, MessageCircle } from "lucide-react";

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
    metaTitle?: string;
    metaDescription?: string;
}

export default function BlogPostPage() {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const router = useRouter();
    const blogId = params.id as string;

    useEffect(() => {
        fetchBlog();
    }, [blogId]);

    const fetchBlog = async () => {
        try {
            const response = await fetch(`/api/blogs/${blogId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    setError('Blog post not found');
                } else {
                    setError('Failed to load blog post');
                }
                return;
            }
            
            const data = await response.json();
            setBlog(data);
        } catch (error) {
            console.error('Error fetching blog:', error);
            setError('Failed to load blog post');
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const shareBlog = () => {
        if (navigator.share) {
            navigator.share({
                title: blog?.title,
                text: blog?.excerpt,
                url: window.location.href,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="h-12 bg-gray-200 rounded mb-6"></div>
                        <div className="h-64 bg-gray-200 rounded mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog Post Not Found</h1>
                        <p className="text-gray-600 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
                        <Link href="/blogs">
                            <Button className="bg-[#0CB39A] hover:bg-[#0A9B85] text-white">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Blog
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href="/blogs">
                        <Button variant="ghost" className="mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Featured Image */}
                    {blog.featuredImage && (
                        <div className="relative h-64 md:h-96 overflow-hidden">
                            <img
                                src={blog.featuredImage}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                    )}

                    <div className="p-8">
                        {/* Category */}
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-sm font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                                {blog.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-gray-900">
                            {blog.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600 border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(blog.createdAt)}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{blog.readTime} min read</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                <span>{blog.viewCount} views</span>
                            </div>
                            
                            {blog.author?.name && (
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span>By {blog.author.name}</span>
                                </div>
                            )}
                        </div>

                        {/* Excerpt */}
                        <div className="mb-8">
                            <p className="text-lg text-gray-600 leading-relaxed italic">
                                {blog.excerpt}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <div 
                                className="text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
                            />
                        </div>

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mb-8 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                                        >
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Share and Actions */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                            <Button
                                onClick={shareBlog}
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <Share2 className="w-4 h-4" />
                                Share Article
                            </Button>

                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{blog.viewCount} views</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>0 comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Articles Section */}
                <div className="mt-12">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Related Articles</h2>
                        <p className="text-gray-600">Explore more insights from our blog</p>
                    </div>
                    
                    <div className="text-center">
                        <Link href="/blogs">
                            <Button className="bg-[#0CB39A] hover:bg-[#0A9B85] text-white px-8 py-3">
                                View All Articles
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
