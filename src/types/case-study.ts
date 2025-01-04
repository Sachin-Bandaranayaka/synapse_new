export interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string;
    industry: string;
    duration: string;
    challenge: string;
    solution: string;
    results: Result[];
    technologies: string[];
    testimonial?: {
        quote: string;
        author: string;
        position: string;
    };
    coverImage: string;
    images: string[];
}

export interface Result {
    metric: string;
    value: string;
    description: string;
}

export const sampleCaseStudies: CaseStudy[] = [
    {
        id: '1',
        title: 'QuickFind.lk - Revolutionizing Online Search in Sri Lanka',
        slug: 'quickfind-search-platform',
        client: 'QuickFind.lk',
        industry: 'Technology / Search Engine',
        duration: '3 months',
        challenge: 'Create a comprehensive search platform that helps users find local businesses, services, and information quickly and efficiently in Sri Lanka.',
        solution: 'Developed a modern web application with advanced search capabilities, real-time updates, and a user-friendly interface. Implemented AI-powered search algorithms for better results.',
        results: [
            {
                metric: 'Search Speed',
                value: '0.5s',
                description: 'Average search response time'
            },
            {
                metric: 'User Engagement',
                value: '85%',
                description: 'Increase in user engagement'
            },
            {
                metric: 'Business Listings',
                value: '1000+',
                description: 'Active business listings'
            }
        ],
        technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'AI/ML'],
        testimonial: {
            quote: 'Synapse Labs transformed our vision into reality. Their expertise in web development and AI integration helped us create a platform that truly serves our users\' needs.',
            author: 'Mr. Uditha Chathuranga',
            position: 'Owner, QuickFind.lk'
        },
        coverImage: '/images/quickfind.png',
        images: [
            '/images/quickfind.png',
            '/images/coming-soon.png',
            '/images/coming-soon.png'
        ]
    },
    {
        id: '2',
        title: 'LULU Enterprises - Sales Management System',
        slug: 'lulu-sales-management',
        client: 'LULU Enterprises',
        industry: 'Retail / Sales',
        duration: '2 months',
        challenge: 'Streamline sales operations and improve inventory management for a growing retail business.',
        solution: 'Built a custom sales management system with real-time inventory tracking, sales analytics, and automated reporting features.',
        results: [
            {
                metric: 'Efficiency',
                value: '40%',
                description: 'Increase in operational efficiency'
            },
            {
                metric: 'Time Saved',
                value: '15hrs',
                description: 'Weekly hours saved in reporting'
            },
            {
                metric: 'Accuracy',
                value: '99.9%',
                description: 'Inventory accuracy'
            }
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        testimonial: {
            quote: 'The sales management system has transformed our operations. The team at Synapse Labs delivered beyond our expectations.',
            author: 'Mr. Anuruddha Rajakaruna',
            position: 'Owner, LULU Enterprises'
        },
        coverImage: '/images/lulu.png',
        images: [
            '/images/lulu.png',
            '/images/coming-soon.png',
            '/images/coming-soon.png'
        ]
    }
];
