"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  EyeOff,
  Upload,
  Tag,
  Calendar,
  FileText
} from 'lucide-react';
import { Editor } from '@/components/blocks/editor-00/editor';
import { SerializedEditorState } from 'lexical';

export default function EditBlogPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    status: 'draft',
    featuredImage: '',
    metaTitle: '',
    metaDescription: '',
  });

  const [editorState, setEditorState] = useState<SerializedEditorState>({
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "",
              type: "text",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/debug/token');
      const data = await response.json();
      
      if (data.error || !data.decoded || data.decoded.role !== 'admin') {
        router.push('/login');
        return;
      }
      
      setIsAuthenticated(true);
      fetchBlog();
    } catch (error) {
      router.push('/login');
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/admin/blogs/${blogId}`);
      if (!response.ok) {
        throw new Error('Blog not found');
      }
      
      const blog = await response.json();
      setFormData({
        title: blog.title || '',
        content: blog.content || '',
        excerpt: blog.excerpt || '',
        category: blog.category || '',
        tags: blog.tags ? blog.tags.join(', ') : '',
        status: blog.status || 'draft',
        featuredImage: blog.featuredImage || '',
        metaTitle: blog.metaTitle || '',
        metaDescription: blog.metaDescription || '',
      });

      // Set editor state with existing content
      if (blog.content) {
        setEditorState({
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: blog.content,
                    type: "text",
                    version: 1,
                  },
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1,
          },
        });
      }
    } catch (error) {
      alert('Failed to load blog');
      router.push('/admin/dashboard');
    } finally {
      setIsLoadingBlog(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditorChange = (serializedState: SerializedEditorState) => {
    setEditorState(serializedState);
    
    // Convert editor state to plain text for content field
    const extractText = (node: any): string => {
      if (node.text) return node.text;
      if (node.children) {
        return node.children.map(extractText).join(' ');
      }
      return '';
    };
    
    const content = extractText(serializedState.root);
    setFormData(prev => ({
      ...prev,
      content: content
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

      const blogData = {
        ...formData,
        tags: tagsArray,
      };

      const response = await fetch(`/api/admin/blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update blog');
      }

      const result = await response.json();
      alert('Blog updated successfully!');
      router.push('/admin/dashboard');
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated || isLoadingBlog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0CB39A] mx-auto mb-4"></div>
          <p className="text-gray-600">
            {!isAuthenticated ? 'Checking authentication...' : 'Loading blog...'}
          </p>
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
            <div className="flex items-center gap-4">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                    placeholder="Enter blog title"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    required
                    rows={3}
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                    placeholder="Brief description of the blog post"
                  />
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Content *
                  </label>
                  <div className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#0CB39A] focus-within:border-transparent">
                    <Editor
                      editorSerializedState={editorState}
                      onSerializedChange={handleEditorChange}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Use the rich text editor above to format your content. The content will be saved as plain text.
                  </p>
                </div>

                {/* Category and Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      <option value="General">General</option>
                      <option value="Clinical Research">Clinical Research</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Oncology">Oncology</option>
                      <option value="Cardiovascular">Cardiovascular</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Technology">Technology</option>
                      <option value="Industry News">Industry News</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Tag className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                      placeholder="Enter tags separated by commas"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Example: clinical trials, research, healthcare</p>
                </div>

                {/* Featured Image */}
                <div>
                  <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Upload className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="featuredImage"
                      name="featuredImage"
                      value={formData.featuredImage}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                {/* SEO Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        id="metaTitle"
                        name="metaTitle"
                        value={formData.metaTitle}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                        placeholder="SEO title for search engines"
                      />
                    </div>

                    <div>
                      <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        id="metaDescription"
                        name="metaDescription"
                        rows={3}
                        value={formData.metaDescription}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0CB39A] focus:border-transparent"
                        placeholder="SEO description for search engines"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-3 pt-6 border-t">
                  <Link
                    href="/admin/dashboard"
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center gap-2 px-6 py-2 bg-[#0CB39A] text-white rounded-lg hover:bg-[#0A9B85] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Update Blog Post
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
                
                {formData.title && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{formData.title}</h4>
                      {formData.excerpt && (
                        <p className="text-sm text-gray-600 mt-2">{formData.excerpt}</p>
                      )}
                    </div>
                    
                    {formData.category && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {formData.category}
                        </span>
                        {formData.status && (
                          <span className={`text-xs px-2 py-1 rounded ${
                            formData.status === 'published' ? 'bg-green-100 text-green-800' :
                            formData.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {formData.status}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {formData.tags && (
                      <div className="flex flex-wrap gap-1">
                        {formData.tags.split(',').map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {formData.content && (
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-600 line-clamp-6">
                          {formData.content.substring(0, 300)}...
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                {!formData.title && (
                  <p className="text-gray-500 text-sm">Start typing to see preview</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
