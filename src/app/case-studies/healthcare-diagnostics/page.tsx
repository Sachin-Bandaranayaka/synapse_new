import { Metadata } from 'next';
import CaseStudyTemplate from '@/components/case-studies/CaseStudyTemplate';

export const metadata: Metadata = {
    title: 'AI-Driven Healthcare Diagnostics Platform Case Study | Synapse Labs',
    description: 'Learn how we helped a leading healthcare provider improve diagnostic accuracy by 45% using advanced AI and machine learning technologies.',
};

export default function HealthcareDiagnosticsCaseStudy() {
    return (
        <CaseStudyTemplate
            title="AI-Driven Healthcare Diagnostics Platform"
            subtitle="Revolutionizing medical imaging analysis with artificial intelligence"
            heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
            clientDescription="Our client, a leading healthcare provider network with over 500 facilities across North America, faced challenges in maintaining consistent diagnostic accuracy across their diverse network of radiologists and healthcare professionals."
            challenge="The client needed to improve diagnostic accuracy, reduce the time taken for image analysis, and create a standardized approach to medical imaging interpretation across their network. They were dealing with increasing volumes of medical imaging data and wanted to leverage AI to support their radiologists in making more accurate diagnoses."
            solution="We developed an AI-powered medical imaging analysis platform that uses deep learning algorithms to assist radiologists in detecting and classifying abnormalities in various types of medical images, including X-rays, MRIs, and CT scans. The system provides real-time analysis, highlighting potential areas of concern and offering probability scores for different diagnoses."
            implementation="The implementation involved:
            • Training custom deep learning models on an extensive dataset of annotated medical images
            • Developing a user-friendly interface for radiologists to interact with the AI analysis
            • Implementing secure cloud infrastructure for processing and storing sensitive medical data
            • Creating an API for seamless integration with existing healthcare systems
            • Establishing a continuous learning pipeline to improve the AI models over time"
            results="The implementation of our AI-driven diagnostics platform resulted in:
            • 45% improvement in diagnostic accuracy
            • 60% reduction in image analysis time
            • 35% decrease in healthcare costs
            • Standardized reporting across the network
            • Improved patient outcomes through earlier and more accurate diagnoses"
            stats={[
                {
                    label: "Accuracy Improvement",
                    value: "45%",
                    description: "Increase in diagnostic accuracy across all imaging types"
                },
                {
                    label: "Time Reduction",
                    value: "60%",
                    description: "Decrease in image analysis time"
                },
                {
                    label: "Cost Savings",
                    value: "35%",
                    description: "Reduction in overall healthcare costs"
                }
            ]}
            testimonial={{
                quote: "The AI platform has transformed how we approach medical imaging analysis. It's like having a highly skilled assistant that helps us catch things we might miss and confirms our diagnoses.",
                author: "Dr. Sarah Chen",
                position: "Chief of Radiology, Metropolitan Healthcare Network"
            }}
            technologies={[
                "TensorFlow",
                "PyTorch",
                "CUDA",
                "Azure Cloud",
                "Docker",
                "Kubernetes",
                "Python",
                "React",
                "Node.js",
                "MongoDB"
            ]}
        />
    );
}
