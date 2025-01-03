import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { FaRobot, FaCogs, FaChartLine, FaDatabase } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Intelligent Automation Services | Synapse Labs',
  description: 'Streamline your business processes with our intelligent automation solutions. AI-powered process automation, chatbots, and smart workflows.',
  openGraph: {
    title: 'Intelligent Automation Services - Synapse Labs',
    description: 'Streamline your business processes with our intelligent automation solutions.',
    images: ['/automation-og.jpg'],
  },
};

const automationSolutions = [
  {
    name: 'Process Automation',
    description: 'Automate repetitive tasks and workflows with AI',
    icon: FaRobot,
    features: [
      'Workflow Automation',
      'Document Processing',
      'Data Entry Automation',
      'Business Process Optimization',
    ],
  },
  {
    name: 'Intelligent Chatbots',
    description: 'AI-powered conversational agents for customer service',
    icon: FaCogs,
    features: [
      'Natural Language Understanding',
      '24/7 Customer Support',
      'Multi-channel Integration',
      'Contextual Responses',
    ],
  },
  {
    name: 'Smart Analytics',
    description: 'Automated data analysis and reporting',
    icon: FaChartLine,
    features: [
      'Real-time Analytics',
      'Automated Reporting',
      'Performance Monitoring',
      'Insight Generation',
    ],
  },
  {
    name: 'Data Processing',
    description: 'Intelligent data processing and management',
    icon: FaDatabase,
    features: [
      'Document Classification',
      'Data Extraction',
      'Information Validation',
      'Automated Data Entry',
    ],
  },
];

export default function IntelligentAutomation() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Intelligent Automation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Transform your business processes with AI-powered automation
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationSolutions.map((solution) => (
              <div
                key={solution.name}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <solution.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h3 className="ml-4 text-xl font-semibold">{solution.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Automate Your Business?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
