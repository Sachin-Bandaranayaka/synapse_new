import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaAndroid, FaPrint, FaChartLine, FaBox } from 'react-icons/fa';

const stats = [
    { name: 'Daily Invoices', value: '100+', icon: FaPrint },
    { name: 'Products Managed', value: '200+', icon: FaBox },
    { name: 'Time Saved', value: '70%', icon: FaChartLine },
    { name: 'Active Users', value: '10+', icon: FaAndroid },
];

export default function LuluEnterprisesCaseStudy() {
    return (
        <MainLayout>
            {/* Hero Section */}
            <div className="relative isolate">
                <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-gray-900 to-gray-800" />
                
                <div className="relative pt-24 pb-32 sm:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                                LULU Enterprises
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Mobile Sales Management System
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
                                    src="/projects/lulu-main.jpg"
                                    alt="LULU Enterprises App"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-6">Project Overview</h2>
                                <p className="text-gray-300 mb-6">
                                    LULU Enterprises needed to modernize their sales operations from manual processes to a 
                                    digital solution. We developed a comprehensive Android app that streamlined their entire 
                                    sales workflow, from invoice generation to inventory management, complemented by a web 
                                    dashboard for business analytics.
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
                                <h3 className="text-lg font-semibold text-white mb-4">Mobile App</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Platform</span>
                                        <span className="ml-2">Android Native</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Language</span>
                                        <span className="ml-2">Kotlin</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Database</span>
                                        <span className="ml-2">SQLite</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Web Dashboard</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Frontend</span>
                                        <span className="ml-2">React</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Backend</span>
                                        <span className="ml-2">Node.js</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Database</span>
                                        <span className="ml-2">MongoDB</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Invoicing</span>
                                        <span className="ml-2">Bluetooth Printing</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Inventory</span>
                                        <span className="ml-2">Real-time Tracking</span>
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="w-24 text-sm text-gray-500">Analytics</span>
                                        <span className="ml-2">Sales Reports</span>
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
                                        <span>Reduced invoice generation time by 70%</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Eliminated manual bookkeeping errors</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Improved inventory accuracy to 99.9%</span>
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
                                        <span>Offline-first architecture</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Real-time data synchronization</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <svg className="h-6 w-6 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Seamless bluetooth printer integration</span>
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
