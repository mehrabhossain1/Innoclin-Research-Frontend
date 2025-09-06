import mongoose from "mongoose";

export interface IBlog extends mongoose.Document {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    author: mongoose.Types.ObjectId;
    featuredImage?: string;
    tags: string[];
    category: string;
    status: "draft" | "published" | "archived";
    publishedAt?: Date;
    metaTitle?: string;
    metaDescription?: string;
    readTime: number;
    viewCount: number;
    createdAt: Date;
    updatedAt: Date;
}

const blogSchema = new mongoose.Schema<IBlog>(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxlength: [200, "Title cannot exceed 200 characters"],
        },
        slug: {
            type: String,
            required: [true, "Slug is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        content: {
            type: String,
            required: [true, "Content is required"],
        },
        excerpt: {
            type: String,
            required: [true, "Excerpt is required"],
            maxlength: [300, "Excerpt cannot exceed 300 characters"],
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author is required"],
        },
        featuredImage: {
            type: String,
        },
        tags: [
            {
                type: String,
                trim: true,
            },
        ],
        category: {
            type: String,
            required: [true, "Category is required"],
            trim: true,
        },
        status: {
            type: String,
            enum: ["draft", "published", "archived"],
            default: "draft",
        },
        publishedAt: {
            type: Date,
        },
        metaTitle: {
            type: String,
            maxlength: [60, "Meta title cannot exceed 60 characters"],
        },
        metaDescription: {
            type: String,
            maxlength: [160, "Meta description cannot exceed 160 characters"],
        },
        readTime: {
            type: Number,
            default: 0,
        },
        viewCount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

// Generate slug from title
blogSchema.pre("save", function (next) {
    if (!this.isModified("title")) return next();

    this.slug = this.title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes

    // Calculate read time (average reading speed: 200 words per minute)
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);

    next();
});

// Index for better query performance
blogSchema.index({ slug: 1 });
blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ category: 1 });
blogSchema.index({ tags: 1 });

export default mongoose.models.Blog ||
    mongoose.model<IBlog>("Blog", blogSchema);
