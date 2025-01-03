import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { FaRobot } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'AI Solutions | Synapse Labs',
  description: 'Transform your business with our cutting-edge AI solutions.',
};

const aiSolutions = [
  {
    name: 'Custom AI Model Development',
    description: 'Tailored AI solutions designed for your business needs',
    icon: FaRobot,
    features: [
      'Deep Learning Models',
      'Neural Networks',
      'Transfer Learning',
      'Model Optimization',
    ],
  },
];

export default function AiSolutions() {
  return (
    <MainLayout>
      <section className="relative bg-white dark:bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              AI Solutions
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Transform your business with cutting-edge AI
            </p>
          </div>
          
          <div className="mt-16">
            {aiSolutions.map((solution) => (
              <div
                key={solution.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center">
                  <solution.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="ml-4 text-xl font-semibold">{solution.name}</h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center">
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
    </MainLayout>
  );
}
