import { Metadata } from 'next';
import CaseStudyTemplate from '@/components/case-studies/CaseStudyTemplate';

export const metadata: Metadata = {
    title: 'Smart Manufacturing Optimization Case Study | Synapse Labs',
    description: 'Learn how we helped an automotive manufacturer increase production throughput by 40% using IoT and AI technologies.',
};

export default function SmartManufacturingCaseStudy() {
    return (
        <CaseStudyTemplate
            title="Smart Manufacturing Optimization"
            subtitle="Transforming production efficiency with IoT and AI"
            heroImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070"
            clientDescription="Our client, a leading automotive manufacturer with multiple production facilities across Europe and Asia, sought to optimize their manufacturing processes and reduce operational inefficiencies."
            challenge="The client was facing challenges with production line inefficiencies, equipment downtime, and quality control issues. They needed a solution that could provide real-time insights into their manufacturing processes and enable predictive maintenance while ensuring consistent product quality."
            solution="We implemented a comprehensive smart manufacturing solution that combines IoT sensors, real-time analytics, and machine learning to optimize production processes. The system provides predictive maintenance capabilities, real-time quality control, and automated process optimization."
            implementation="The implementation involved:
            • Installing IoT sensors across production lines and equipment
            • Developing a real-time data collection and analysis platform
            • Creating machine learning models for predictive maintenance
            • Implementing quality control computer vision systems
            • Building a centralized dashboard for monitoring and control
            • Setting up automated alerting and reporting systems"
            results="The smart manufacturing solution delivered:
            • 40% increase in production throughput
            • 65% reduction in unplanned downtime
            • 35% improvement in product quality
            • 50% decrease in maintenance costs
            • 25% reduction in energy consumption"
            stats={[
                {
                    label: "Throughput Increase",
                    value: "40%",
                    description: "Improvement in production output"
                },
                {
                    label: "Downtime Reduction",
                    value: "65%",
                    description: "Decrease in unplanned maintenance"
                },
                {
                    label: "Quality Improvement",
                    value: "35%",
                    description: "Increase in first-pass yield"
                }
            ]}
            testimonial={{
                quote: "The smart manufacturing solution has transformed our operations. We're now able to predict and prevent issues before they occur, and our productivity has never been higher.",
                author: "Thomas Weber",
                position: "Director of Operations, European Manufacturing Division"
            }}
            technologies={[
                "Industrial IoT",
                "Azure IoT Hub",
                "TensorFlow",
                "OpenCV",
                "Time Series DB",
                "MQTT",
                "Python",
                "Node.js",
                "React",
                "InfluxDB"
            ]}
        />
    );
}
