import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, User } from '@/models';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET!;

// Helper function to verify admin token
async function verifyAdminToken(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  console.log('Token found:', !!token);
  
  if (!token) {
    console.log('No token found in cookies');
    return null;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    console.log('Token decoded successfully, role:', decoded.role);
    if (decoded.role !== 'admin') {
      console.log('User is not admin');
      return null;
    }
    console.log('Admin verification successful, userId:', decoded.userId);
    return decoded;
  } catch (error) {
    console.log('Token verification failed:', error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await verifyAdminToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
    console.log('Blog creation request received');
    const user = await verifyAdminToken(request);
    console.log('User verification result:', user ? 'Success' : 'Failed');
    if (!user) {
      console.log('Unauthorized access attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Connecting to database for blog creation...');
    await connectDB();
    console.log('Database connected successfully for blog creation');

    const body = await request.json();
    const { title, content, excerpt, category, tags, status, featuredImage, metaTitle, metaDescription } = body;

    // Validate required fields
    if (!title || !content || !excerpt || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');

    const blogData = {
      title,
      slug,
      content,
      excerpt,
      category,
      tags: tags || [],
      status: status || 'draft',
      author: new mongoose.Types.ObjectId(user.userId || user.id),
      featuredImage,
      metaTitle,
      metaDescription,
      publishedAt: status === 'published' ? new Date() : undefined,
    };

    console.log('User ID for author:', user.userId || user.id);

    console.log('Creating blog with data:', { ...blogData, content: '...' });
    
    const blog = new Blog(blogData);
    await blog.save();
    
    console.log('Blog created successfully:', blog._id);

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

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
