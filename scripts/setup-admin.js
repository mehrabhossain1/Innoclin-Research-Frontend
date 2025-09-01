const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Import models to ensure they are registered
require('../models/User');
require('../models/Blog');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://innoclin-prod:UtOpYbUDfVjlqpfR@cluster0.mljzuyv.mongodb.net/innoclin-research?retryWrites=true&w=majority&appName=Cluster0';

// User Schema (simplified for the script)
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLogin: Date,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

async function setupAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@innoclinresearch.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('Admin@123', 12);
    
    const adminUser = new User({
      email: 'admin@innoclinresearch.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      isActive: true,
    });

    await adminUser.save();
    
    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@innoclinresearch.com');
    console.log('🔑 Password: Admin@123');
    console.log('⚠️  Please change the password after first login');
    
  } catch (error) {
    console.error('❌ Error setting up admin:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

setupAdmin();
