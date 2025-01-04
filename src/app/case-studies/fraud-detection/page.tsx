import { Metadata } from 'next';
import CaseStudyTemplate from '@/components/case-studies/CaseStudyTemplate';

export const metadata: Metadata = {
    title: 'FinTech Fraud Detection System Case Study | Synapse Labs',
    description: 'Discover how we helped a major financial institution reduce fraudulent transactions by 92% using advanced real-time analytics and machine learning.',
};

export default function FraudDetectionCaseStudy() {
    return (
        <CaseStudyTemplate
            title="FinTech Fraud Detection System"
            subtitle="Real-time fraud prevention using advanced machine learning"
            heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
            clientDescription="Our client, a major financial institution processing over 10 million transactions daily, needed to enhance their fraud detection capabilities while maintaining fast transaction processing times."
            challenge="The client faced increasing sophisticated fraud attempts while struggling with high false-positive rates that were affecting legitimate transactions. They needed a solution that could detect fraud in real-time without compromising the user experience or creating unnecessary friction for legitimate customers."
            solution="We developed a real-time fraud detection system using advanced machine learning algorithms and behavioral analytics. The system analyzes hundreds of parameters in real-time to detect fraudulent patterns while continuously learning from new data to improve its accuracy."
            implementation="The implementation process included:
            • Developing a scalable real-time processing pipeline using Apache Kafka and Spark
            • Creating ensemble machine learning models combining rule-based and AI approaches
            • Implementing a real-time scoring system for transaction risk assessment
            • Building a case management system for fraud analysts
            • Developing APIs for seamless integration with existing banking systems
            • Setting up automated model retraining pipelines"
            results="The implementation of our fraud detection system achieved:
            • 92% reduction in fraudulent transactions
            • 75% decrease in false positives
            • Real-time processing within 100ms
            • $50M+ in prevented fraud losses
            • Improved customer satisfaction due to reduced false declines"
            stats={[
                {
                    label: "Fraud Reduction",
                    value: "92%",
                    description: "Decrease in successful fraudulent transactions"
                },
                {
                    label: "False Positives",
                    value: "-75%",
                    description: "Reduction in false positive alerts"
                },
                {
                    label: "Processing Time",
                    value: "100ms",
                    description: "Average transaction analysis time"
                }
            ]}
            testimonial={{
                quote: "This system has revolutionized our fraud prevention capabilities. We're now catching fraud attempts we never could before, while significantly reducing false positives.",
                author: "Michael Rodriguez",
                position: "Head of Security, Global Financial Services"
            }}
            technologies={[
                "Apache Kafka",
                "Apache Spark",
                "TensorFlow",
                "scikit-learn",
                "AWS",
                "Docker",
                "Kubernetes",
                "Python",
                "Java",
                "Elasticsearch"
            ]}
        />
    );
}
