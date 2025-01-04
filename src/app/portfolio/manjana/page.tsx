import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaCalendarAlt, FaBlog, FaUsers, FaGlobe } from 'react-icons/fa';

const stats = [
    { name: 'Monthly Bookings', value: '50+', icon: FaCalendarAlt },
    { name: 'Blog Articles', value: '30+', icon: FaBlog },
    { name: 'Monthly Visitors', value: '1000+', icon: FaUsers },
    { name: 'Page Views', value: '5000+', icon: FaGlobe },
];

export default function ManjanaPortfolioCaseStudy() {
    return (
        <MainLayout>
            {/* Hero Section */}
            <div className="relative isolate">
                <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-gray-900 to-gray-800" />
                
                <div className="relative pt-24 pb-32 sm:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                                Professional Bartender Portfolio
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Digital Presence for Mr. Manjana
                            </p>
                        </div>
                    </div>
                </div>

                {/* Project Overview */}
                <div className="relative bg-gray-900 py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-video rounded-2xl overflow-hidden">
                                <Image
                                    src="/projects/bartender-main.jpg"
                                    alt="Bartender Portfolio"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
                                <p className="text-gray-300 mb-6">
                                    Created a professional portfolio website for Mr. Manjana, a skilled bartender and barista. 
                                    The site showcases his expertise, allows clients to book his services online, and features 
                                    a blog where he shares industry insights and recipes.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                                    {stats.map((stat) => {
                                        const Icon = stat.icon;
                                        return (
                                            <div key={stat.name} className="text-center">
                                                <Icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                                                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                                                <div className="text-sm text-gray-400">{stat.name}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Details */}
                <div className="relative bg-gray-800 py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-2xl font-semibold text-white mb-12 text-center">Technical Implementation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Frontend Stack</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Framework</span>
                                        <span className="ml-2">Next.js</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Styling</span>
                                        <span className="ml-2">Tailwind CSS</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Animation</span>
                                        <span className="ml-2">Framer Motion</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Backend Stack</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Database</span>
                                        <span className="ml-2">Prisma</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">CMS</span>
                                        <span className="ml-2">Markdown</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">API</span>
                                        <span className="ml-2">REST API</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Booking</span>
                                        <span className="ml-2">Calendar System</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Blog</span>
                                        <span className="ml-2">MDX Support</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Gallery</span>
                                        <span className="ml-2">Image Optimization</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results & Impact */}
                <div className="relative bg-gray-900 py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-2xl font-semibold text-white mb-12 text-center">Results & Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Business Impact</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>200% increase in booking inquiries</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Growing blog readership with 30+ articles</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Enhanced professional credibility</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Technical Achievements</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>90+ Lighthouse performance score</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>SEO-optimized content structure</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Fully responsive design</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
