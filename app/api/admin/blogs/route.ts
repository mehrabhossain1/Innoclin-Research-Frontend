import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const blogs = await Blog.find({})
      .populate('author', 'name email')
      .sort({ createdAt: -1 })
      .select('title status category viewCount createdAt publishedAt');

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, content, excerpt, category, tags, status, featuredImage, metaTitle, metaDescription } = body;

    // Validate required fields
    if (!title || !content || !excerpt || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const blogData = {
      title,
      content,
      excerpt,
      category,
      tags: tags || [],
      status: status || 'draft',
      author: userId,
      featuredImage,
      metaTitle,
      metaDescription,
      publishedAt: status === 'published' ? new Date() : undefined,
    };

    const blog = new Blog(blogData);
    await blog.save();

    return NextResponse.json(
      { message: 'Blog created successfully', blog },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating blog:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'A blog with this title already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
