export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    coverImage: string;
    date: string;
    author: Author;
    category: Category;
    tags: string[];
    readingTime: string;
}

export interface Author {
    name: string;
    image: string;
    role: string;
}

export interface Category {
    name: string;
    slug: string;
}

export const samplePosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of AI in Software Development',
        slug: 'future-of-ai-in-software-development',
        description: 'Explore how artificial intelligence is revolutionizing the software development industry and what it means for businesses.',
        content: '# The Future of AI in Software Development\n\nArtificial Intelligence is transforming...',
        coverImage: '/images/blog/ai-software-dev.jpg',
        date: '2025-01-05',
        author: {
            name: 'Team Synapse',
            image: '/images/team/team-synapse.jpg',
            role: 'Tech Team'
        },
        category: {
            name: 'Artificial Intelligence',
            slug: 'ai'
        },
        tags: ['AI', 'Software Development', 'Technology Trends'],
        readingTime: '5 min read'
    },
    {
        id: '2',
        title: 'Building Scalable Web Applications with Next.js',
        slug: 'building-scalable-web-applications-nextjs',
        description: 'Learn how to build and deploy scalable web applications using Next.js and modern web technologies.',
        content: '# Building Scalable Web Applications with Next.js\n\nNext.js has become...',
        coverImage: '/images/blog/nextjs-dev.jpg',
        date: '2025-01-03',
        author: {
            name: 'Team Synapse',
            image: '/images/team/team-synapse.jpg',
            role: 'Development Team'
        },
        category: {
            name: 'Web Development',
            slug: 'web-dev'
        },
        tags: ['Next.js', 'React', 'Web Development'],
        readingTime: '7 min read'
    }
];
