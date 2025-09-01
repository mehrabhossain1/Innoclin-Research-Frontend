import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

// Mock admin user data
const ADMIN_USER = {
  id: '1',
  email: 'admin@innoclinresearch.com',
  password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/HS.iK8i', // Admin@123
  name: 'Admin User',
  role: 'admin',
  isActive: true,
  lastLogin: new Date(),
};

// Mock blogs data
let mockBlogs = [
  {
    _id: '1',
    title: 'Welcome to Innoclin Research',
    slug: 'welcome-to-innoclin-research',
    content: 'This is our first blog post about clinical research...',
    excerpt: 'Introduction to our clinical research services',
    category: 'General',
    status: 'published',
    viewCount: 150,
    createdAt: new Date('2024-01-15'),
    publishedAt: new Date('2024-01-15'),
  },
  {
    _id: '2',
    title: 'Advances in Pediatric Clinical Trials',
    slug: 'advances-in-pediatric-clinical-trials',
    content: 'Recent developments in pediatric clinical research...',
    excerpt: 'Exploring new methodologies in pediatric trials',
    category: 'Pediatrics',
    status: 'draft',
    viewCount: 0,
    createdAt: new Date('2024-01-20'),
  },
];

export const mockAuth = {
  // Verify admin credentials
  async verifyCredentials(email: string, password: string) {
    if (email.toLowerCase() !== ADMIN_USER.email) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, ADMIN_USER.password);
    if (!isValidPassword) {
      return null;
    }

    return {
      id: ADMIN_USER.id,
      email: ADMIN_USER.email,
      name: ADMIN_USER.name,
      role: ADMIN_USER.role,
    };
  },

  // Generate JWT token
  generateToken(user: any) {
    return jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
  },

  // Verify JWT token
  verifyToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET) as any;
    } catch (error) {
      return null;
    }
  },

  // Get all blogs
  getBlogs() {
    return mockBlogs;
  },

  // Create new blog
  createBlog(blogData: any) {
    const newBlog = {
      _id: Date.now().toString(),
      ...blogData,
      slug: blogData.title.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-'),
      viewCount: 0,
      createdAt: new Date(),
      publishedAt: blogData.status === 'published' ? new Date() : undefined,
    };
    mockBlogs.unshift(newBlog);
    return newBlog;
  },

  // Update blog
  updateBlog(id: string, blogData: any) {
    const index = mockBlogs.findIndex(blog => blog._id === id);
    if (index !== -1) {
      mockBlogs[index] = { ...mockBlogs[index], ...blogData };
      return mockBlogs[index];
    }
    return null;
  },

  // Delete blog
  deleteBlog(id: string) {
    const index = mockBlogs.findIndex(blog => blog._id === id);
    if (index !== -1) {
      mockBlogs.splice(index, 1);
      return true;
    }
    return false;
  },

  // Get blog statistics
  getStats() {
    return {
      total: mockBlogs.length,
      published: mockBlogs.filter(blog => blog.status === 'published').length,
      draft: mockBlogs.filter(blog => blog.status === 'draft').length,
      archived: mockBlogs.filter(blog => blog.status === 'archived').length,
    };
  },
};
