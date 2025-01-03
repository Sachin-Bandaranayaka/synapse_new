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
        name: 'AI Solutions',
        description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
        features: [
            'Custom AI Model Development',
            'Machine Learning Integration',
            'Natural Language Processing',
            'Computer Vision Solutions',
        ],
        href: '/ai-solutions'
    },
    {
        name: 'Intelligent Automation',
        description: 'Smart automation solutions powered by AI to streamline your business processes.',
        features: [
            'Process Automation with AI',
            'Intelligent Chatbots',
            'Predictive Analytics',
            'Document Processing & Analysis',
        ],
        href: '/intelligent-automation'
    },
    {
        name: 'Data Analytics & AI',
        description: 'Transform your data into actionable insights with advanced analytics and AI.',
        features: [
            'Big Data Analytics',
            'AI-Powered Insights',
            'Business Intelligence',
            'Data Visualization',
        ],
        href: '/data-analytics-ai'
    },
    {
        name: 'Web Development',
        description: 'Modern web applications built with cutting-edge technologies and AI integration capabilities.',
        features: [
            'AI-Enhanced Web Apps',
            'Full-Stack Development',
            'Progressive Web Apps (PWA)',
            'API & AI Integration',
        ],
        href: '/web-development'
    },
    {
        name: 'Mobile App Development',
        description: 'Smart mobile applications with AI capabilities for iOS and Android.',
        features: [
            'AI-Powered Mobile Apps',
            'Cross-Platform Development',
            'Native iOS & Android',
            'Smart Feature Integration',
        ],
        href: '/mobile-app-development'
    },
    {
        name: 'Custom Software',
        description: 'Intelligent software solutions tailored to your specific business needs.',
        features: [
            'AI-Enhanced Enterprise Software',
            'Smart CRM Systems',
            'Intelligent Process Automation',
            'Custom AI Solutions',
        ],
        href: '/custom-software'
    },
    {
        name: 'UI/UX Design',
        description: 'User-centered design solutions enhanced with AI-driven insights.',
        features: [
            'AI-Assisted UI Design',
            'Smart UX Optimization',
            'Interactive Prototypes',
            'Data-Driven Design Systems',
        ],
        href: '/ui-ux-design'
    },
    {
        name: 'Cloud & AI Infrastructure',
        description: 'Scalable cloud solutions optimized for AI and machine learning workloads.',
        features: [
            'AI-Ready Cloud Architecture',
            'ML Ops Implementation',
            'Scalable AI Infrastructure',
            'Cloud AI Integration',
        ],
        href: '/cloud-ai-infrastructure'
    },
    {
        name: 'AI Maintenance & Support',
        description: 'Comprehensive maintenance and support for AI-powered systems and applications.',
        features: [
            'AI Model Monitoring',
            'Performance Optimization',
            'Model Retraining & Updates',
            '24/7 Technical Support',
        ],
        href: '/ai-maintenance-support'
    },
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

    const serviceIcons = {
        'AI Solutions': <FaRobot className="h-6 w-6" />,
        'Intelligent Automation': <FaCogs className="h-6 w-6" />,
        'Data Analytics & AI': <FaChartLine className="h-6 w-6" />,
        'Web Development': <FaCode className="h-6 w-6" />,
        'Mobile App Development': <FaMobile className="h-6 w-6" />,
        'Custom Software': <FaDesktop className="h-6 w-6" />,
        'UI/UX Design': <FaPaintBrush className="h-6 w-6" />,
        'Cloud & AI Infrastructure': <FaCloud className="h-6 w-6" />,
        'AI Maintenance & Support': <FaBrain className="h-6 w-6" />
    };

    return (
        <>
            <SEO 
                title="Our Services - Web Development, Mobile Apps & AI Solutions"
                description="Explore our comprehensive software development services including web development, mobile apps, AI solutions, custom software solutions, and UI/UX design."
                canonical="/services"
                breadcrumbs={[
                    { name: 'Home', item: '/' },
                    { name: 'Services', item: '/services' }
                ]}
            />
            <ResourcePreload resources={criticalResources} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <FAQSchema questions={faqs} />
            {services.map((service) => (
                <ProductSchema
                    key={service.name}
                    name={service.name}
                    description={service.description}
                    category="Software Development"
                    brand="Synapse Labs"
                />
            ))}
            <MainLayout>
                {/* Hero Section */}
                <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <OptimizedImage
                                src="/hero-services.jpg"
                                alt="Our Services"
                                width={1200}
                                height={600}
                                priority={true}
                                className="rounded-lg shadow-xl mb-8"
                            />
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
                                Our Services
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Discover our comprehensive range of software development services designed to transform your digital presence and drive business growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <div key={service.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                                    <div className="text-primary-600 mb-4">
                                        {serviceIcons[service.name]}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                        <SEOLink href={service.href} type="internal">
                                            {service.name}
                                        </SEOLink>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
                    <div className="container">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
                            Frequently Asked Questions
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <FAQ questions={faqs} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative bg-primary py-24 sm:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center text-white">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Ready to Start Your Project?
                            </h2>
                            <p className="mt-6 text-lg leading-8">
                                Let's discuss how we can help bring your ideas to life.
                            </p>
                            <div className="mt-10">
                                <a
                                    href="/contact"
                                    className="rounded-md bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}