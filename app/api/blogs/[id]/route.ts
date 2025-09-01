import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, User } from '@/models';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const blog = await Blog.findById(params.id)
      .populate('author', 'name')
      .select('-__v');
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Only show published blogs to public
    if (blog.status !== 'published') {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Increment view count
    await Blog.findByIdAndUpdate(params.id, { $inc: { viewCount: 1 } });

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
