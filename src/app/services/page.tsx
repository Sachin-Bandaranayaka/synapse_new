import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { FaCode, FaMobile, FaDesktop, FaPaintBrush, FaCloud, FaCogs, FaRobot, FaBrain, FaChartLine } from 'react-icons/fa';
import SEO from '@/components/common/SEO';
import OptimizedImage from '@/components/common/OptimizedImage';
import FAQSchema, { FAQ } from '@/components/common/FAQSchema';
import ProductSchema from '@/components/common/ProductSchema';
import ResourcePreload from '@/components/common/ResourcePreload';
import SEOLink from '@/components/common/SEOLink';

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Software Development Services',
    provider: {
        '@type': 'Organization',
        name: 'Synapse Labs',
        url: 'https://synapselabs.lk'
    },
    description: 'Comprehensive software development services including AI solutions, intelligent automation, and custom software development.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'AI Solutions',
                    description: 'Cutting-edge artificial intelligence solutions'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Intelligent Automation',
                    description: 'Smart automation solutions powered by AI'
                }
            }
        ]
    }
};

const services = [
    {
        name: 'Custom Software Development',
        description: 'Tailored software solutions designed to solve your unique business challenges.',
        icon: FaCode,
        features: [
            'Enterprise Software Solutions',
            'Cloud-Native Applications',
            'API Development & Integration',
            'Legacy System Modernization',
        ],
        href: '/custom-software'
    },
    {
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
        icon: FaMobile,
        features: [
            'iOS & Android Development',
            'Cross-Platform Solutions',
            'Mobile UI/UX Design',
            'App Store Optimization',
        ],
        href: '/mobile-apps'
    },
    {
        name: 'Web Development',
        description: 'Modern, responsive web applications built with cutting-edge technologies.',
        icon: FaDesktop,
        features: [
            'Full-Stack Development',
            'E-commerce Solutions',
            'Progressive Web Apps',
            'Performance Optimization',
        ],
        href: '/web-development'
    },
    {
        name: 'AI & Machine Learning',
        description: 'Intelligent solutions that help businesses automate processes and gain insights.',
        icon: FaBrain,
        features: [
            'Custom AI Solutions',
            'Machine Learning Models',
            'Natural Language Processing',
            'Computer Vision',
        ],
        href: '/ai-solutions'
    },
    {
        name: 'Business Intelligence',
        description: 'Data-driven insights to help you make informed business decisions.',
        icon: FaChartLine,
        features: [
            'Data Analytics',
            'Business Reporting',
            'Predictive Analytics',
            'Data Visualization',
        ],
        href: '/business-intelligence'
    },
    {
        name: 'UI/UX Design',
        description: 'User-centered design that creates engaging and intuitive digital experiences.',
        icon: FaPaintBrush,
        features: [
            'User Interface Design',
            'User Experience Design',
            'Prototyping',
            'Design Systems',
        ],
        href: '/ui-ux-design'
    }
];

const faqs = [
    {
        question: 'What types of AI solutions do you offer?',
        answer: 'We offer a wide range of AI solutions including custom AI model development, machine learning integration, natural language processing, and computer vision solutions tailored to your business needs.'
    },
    {
        question: 'How can intelligent automation benefit my business?',
        answer: 'Intelligent automation can streamline your business processes, reduce operational costs, improve accuracy, and free up your team to focus on strategic tasks through AI-powered process automation and smart workflows.'
    },
    {
        question: 'What industries do you serve?',
        answer: 'We serve a diverse range of industries including healthcare, finance, retail, manufacturing, and technology sectors, providing customized solutions for each industry\'s specific needs.'
    },
    {
        question: 'How long does it typically take to implement an AI solution?',
        answer: 'Implementation timelines vary based on project complexity, but typically range from 2-6 months. We provide detailed project timelines during our initial consultation.'
    }
];

export const metadata: Metadata = {
    title: 'Our Services - Web, Mobile, AI & Custom Software Development',
    description: 'Explore our comprehensive software development services including web development, mobile apps, AI solutions, custom software solutions, and UI/UX design.',
    alternates: {
        canonical: 'https://synapselabs.lk/services'
    }
};

export default function Services() {
    const criticalResources = [
        {
            href: '/hero-services.jpg',
            as: 'image',
        },
        {
            href: '/fonts/inter.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
        }
    ];

    const thirdPartyScripts = [
        { src: 'https://www.googletagmanager.com/gtag/js', priority: 'high' as const },
        { src: 'https://connect.facebook.net/en_US/sdk.js', priority: 'medium' as const },
        { src: 'https://platform.twitter.com/widgets.js', priority: 'low' as const }
    ];

    return (
        <MainLayout>
            <div className="relative isolate">
                {/* Background gradient */}
                <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-gray-900 to-gray-800" />
                
                {/* Hero section */}
                <div className="relative pt-24 pb-32 sm:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                                Technology Solutions for Modern Business
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                We help businesses transform and grow through innovative technology solutions. 
                                From custom software to AI integration, we're your partner in digital success.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services grid */}
                <div className="relative bg-gray-900 py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={service.name}
                                        className="relative group"
                                    >
                                        <div className="relative p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 hover:border-blue-500">
                                            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl">
                                                <Icon className="h-8 w-8 text-blue-400" />
                                            </div>
                                            <h3 className="mt-6 text-xl font-semibold text-white">
                                                {service.name}
                                            </h3>
                                            <p className="mt-2 text-gray-300 text-sm">
                                                {service.description}
                                            </p>
                                            <ul className="mt-6 space-y-3">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="flex items-center text-sm text-gray-300">
                                                        <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <SEOLink 
                                                href={service.href}
                                                className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                            >
                                                Learn more
                                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </SEOLink>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}