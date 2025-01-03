import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch for Your Software Project',
    description: 'Contact Synapse Labs for your software development needs. We\'re here to help bring your digital ideas to life.',
    openGraph: {
        title: 'Contact Synapse Labs - Software Development Company',
        description: 'Get in touch with our team to discuss your software development project needs.',
        images: ['/contact-og.jpg'],
    },
};

export default function Contact() {
    return <ContactForm />;
} 