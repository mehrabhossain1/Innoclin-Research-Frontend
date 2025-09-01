import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const [total, published, draft, archived] = await Promise.all([
      Blog.countDocuments({}),
      Blog.countDocuments({ status: 'published' }),
      Blog.countDocuments({ status: 'draft' }),
      Blog.countDocuments({ status: 'archived' }),
    ]);

    return NextResponse.json({
      total,
      published,
      draft,
      archived,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
