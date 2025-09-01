# Authentication System Setup Guide

## 🚀 Production-Level Admin Authentication System

This system provides secure admin authentication with MongoDB integration for blog management.

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB database
- npm or pnpm package manager

## 🔧 Installation & Setup

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/innoclin-research

# JWT Secret (Generate a strong secret for production)
JWT_SECRET=your-super-secret-jwt-key-here

# Next.js Environment
NODE_ENV=development
```

### 3. Setup Admin User

Run the setup script to create the initial admin user:

```bash
node scripts/setup-admin.js
```

**Default Admin Credentials:**
- Email: `admin@innoclinresearch.com`
- Password: `Admin@123`

⚠️ **Important:** Change the password after first login!

### 4. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

## 🔐 Authentication Features

### Security Features
- ✅ **JWT-based authentication** with HTTP-only cookies
- ✅ **Password hashing** with bcrypt (12 rounds)
- ✅ **Role-based access control** (admin/user)
- ✅ **Middleware protection** for admin routes
- ✅ **Session management** with 24-hour expiry
- ✅ **Input validation** and sanitization

### Admin Routes Protection
- `/admin/*` - All admin pages
- `/api/admin/*` - All admin API endpoints

## 📝 Blog Management Features

### Blog Model Features
- ✅ **Rich content management** with title, content, excerpt
- ✅ **SEO optimization** with meta titles and descriptions
- ✅ **Category and tag system**
- ✅ **Status management** (draft/published/archived)
- ✅ **View tracking** and analytics
- ✅ **Automatic slug generation**
- ✅ **Read time calculation**

### Admin Dashboard Features
- ✅ **Blog statistics** overview
- ✅ **CRUD operations** for blog posts
- ✅ **Status management** (draft/publish/archive)
- ✅ **Responsive design** for all devices
- ✅ **Real-time updates**

## 🛡️ Security Best Practices

### Production Deployment
1. **Change default credentials** immediately
2. **Use strong JWT secret** (32+ characters)
3. **Enable HTTPS** in production
4. **Set secure cookie flags**
5. **Implement rate limiting**
6. **Add CSRF protection**
7. **Regular security audits**

### Environment Variables for Production
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-very-long-and-very-random-secret-key-here
NODE_ENV=production
```

## 📁 File Structure

```
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   └── logout/route.ts
│   │   └── admin/
│   │       ├── blogs/route.ts
│   │       └── stats/route.ts
│   ├── admin/
│   │   └── dashboard/page.tsx
│   └── login/page.tsx
├── components/
├── lib/
│   └── mongodb.ts
├── models/
│   ├── User.ts
│   └── Blog.ts
├── middleware.ts
└── scripts/
    └── setup-admin.js
```

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout

### Blog Management
- `GET /api/admin/blogs` - Fetch all blogs
- `POST /api/admin/blogs` - Create new blog
- `GET /api/admin/stats` - Get blog statistics

## 🎯 Usage

1. **Access Login Page:** Navigate to `/login`
2. **Admin Dashboard:** After login, redirects to `/admin/dashboard`
3. **Create Blogs:** Use the "New Blog Post" button
4. **Manage Content:** Edit, publish, or archive blogs
5. **View Analytics:** Check statistics and view counts

## 🚨 Important Notes

- **Admin-only access:** Only users with admin role can access the dashboard
- **Secure cookies:** Authentication tokens are stored in HTTP-only cookies
- **Automatic redirects:** Unauthorized users are redirected to login
- **Session expiry:** Tokens expire after 24 hours
- **Password security:** Passwords are hashed with bcrypt

## 🆘 Troubleshooting

### Common Issues
1. **MongoDB connection failed:** Check your MONGODB_URI
2. **JWT errors:** Ensure JWT_SECRET is set
3. **Admin access denied:** Verify user role is 'admin'
4. **Cookie issues:** Check browser settings and HTTPS

### Support
For issues or questions, check the console logs and ensure all environment variables are properly set.
