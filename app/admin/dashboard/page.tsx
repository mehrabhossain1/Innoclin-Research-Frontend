"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    Plus,
    FileText,
    Eye,
    Edit,
    Trash2,
    LogOut,
    Calendar,
    Tag,
    BarChart3,
} from "lucide-react";

interface Blog {
    _id: string;
    title: string;
    status: "draft" | "published" | "archived";
    category: string;
    viewCount: number;
    createdAt: string;
    publishedAt?: string;
}

export default function AdminDashboard() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [stats, setStats] = useState({
        total: 0,
        published: 0,
        draft: 0,
        archived: 0,
    });
    const router = useRouter();

    const fetchBlogs = useCallback(async () => {
        try {
            const response = await fetch("/api/admin/blogs");
            if (response.ok) {
                const data = await response.json();
                setBlogs(data.blogs);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const fetchStats = useCallback(async () => {
        try {
            const response = await fetch("/api/admin/stats");
            if (response.ok) {
                const data = await response.json();
                setStats(data);
            }
        } catch (error) {
            console.error("Error fetching stats:", error);
        }
    }, []);

    const checkAuth = useCallback(async () => {
        try {
            const response = await fetch("/api/debug/token");
            const data = await response.json();

            if (data.error || !data.decoded) {
                console.log("Not authenticated, redirecting to login");
                router.push("/login");
                return;
            }

            if (data.decoded.role !== "admin") {
                console.log("Not admin, redirecting to login");
                router.push("/login");
                return;
            }

            setIsAuthenticated(true);
            fetchBlogs();
            fetchStats();
        } catch (error) {
            console.error("Auth check failed:", error);
            router.push("/login");
        }
    }, [router, fetchBlogs, fetchStats]);

    useEffect(() => {
        // Check authentication first
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchBlogs();
            fetchStats();
        }
    }, [isAuthenticated, fetchBlogs, fetchStats]);

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "published":
                return "bg-green-100 text-green-800";
            case "draft":
                return "bg-yellow-100 text-yellow-800";
            case "archived":
                return "bg-gray-100 text-gray-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0CB39A] mx-auto mb-4"></div>
                    <p className="text-gray-600">Checking authentication...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Admin Dashboard
                        </h1>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Total Blogs
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stats.total}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Eye className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Published
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stats.published}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <Edit className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Drafts
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stats.draft}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <BarChart3 className="w-6 h-6 text-gray-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Archived
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stats.archived}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Blog Posts
                    </h2>
                    <Link
                        href="/admin/blogs/new"
                        className="flex items-center gap-2 bg-[#0CB39A] text-white px-4 py-2 rounded-lg hover:bg-[#0A9B85] transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        New Blog Post
                    </Link>
                </div>

                {/* Blogs Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {isLoading ? (
                        <div className="p-8 text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0CB39A] mx-auto"></div>
                            <p className="mt-2 text-gray-600">
                                Loading blogs...
                            </p>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="p-8 text-center">
                            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                No blogs yet
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Get started by creating your first blog post.
                            </p>
                            <Link
                                href="/admin/blogs/new"
                                className="inline-flex items-center gap-2 bg-[#0CB39A] text-white px-4 py-2 rounded-lg hover:bg-[#0A9B85] transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Create First Blog
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Views
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Created
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((blog) => (
                                        <tr
                                            key={blog._id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {blog.title}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                                                        blog.status
                                                    )}`}
                                                >
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <Tag className="w-4 h-4 text-gray-400 mr-1" />
                                                    <span className="text-sm text-gray-900">
                                                        {blog.category}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {blog.viewCount}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                                                    <span className="text-sm text-gray-900">
                                                        {formatDate(
                                                            blog.createdAt
                                                        )}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={`/admin/blogs/${blog._id}/edit`}
                                                        className="text-[#0CB39A] hover:text-[#0A9B85] transition-colors"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteBlog(
                                                                blog._id
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-800 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    async function handleDeleteBlog(blogId: string) {
        if (confirm("Are you sure you want to delete this blog post?")) {
            try {
                const response = await fetch(`/api/admin/blogs/${blogId}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    fetchBlogs();
                    fetchStats();
                } else {
                    alert("Failed to delete blog post");
                }
            } catch (error) {
                console.error("Error deleting blog:", error);
                alert("Error deleting blog post");
            }
        }
    }
}
