import mongoose, { Document, Model } from 'mongoose';

export interface Post extends Document {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage: string;
    author: {
        name: string;
        image?: string;
    };
    categories: string[];
    tags: string[];
    status: 'draft' | 'published';
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

function generateSlug(title: string): string {
    if (!title) return '';
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    slug: {
        type: String,
        unique: true,
        required: false
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
    },
    excerpt: {
        type: String,
        required: [true, 'Excerpt is required'],
        trim: true,
    },
    coverImage: {
        type: String,
        required: [true, 'Cover image is required'],
    },
    author: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
    },
    categories: [{
        type: String,
        trim: true,
    }],
    tags: [{
        type: String,
        trim: true,
    }],
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft',
    },
    publishedAt: {
        type: Date,
    },
}, {
    timestamps: true,
});

// Create slug from title before validation
postSchema.pre('validate', function (next) {
    if (!this.slug && this.title) {
        this.slug = generateSlug(this.title);
    }
    next();
});

// Ensure unique slug before saving
postSchema.pre('save', async function (next) {
    if (!this.slug || this.isModified('title')) {
        let baseSlug = generateSlug(this.title);
        let slug = baseSlug;
        let counter = 1;

        // Keep checking until we find a unique slug
        while (true) {
            const existingPost = await mongoose.models.Post.findOne({
                slug,
                _id: { $ne: this._id }
            });

            if (!existingPost) {
                this.slug = slug;
                break;
            }

            slug = `${baseSlug}-${counter}`;
            counter++;
        }
    }

    if (this.status === 'published' && !this.publishedAt) {
        this.publishedAt = new Date();
    }

    next();
});

export const PostModel = mongoose.models.Post || mongoose.model<Post>('Post', postSchema);
export default PostModel; 