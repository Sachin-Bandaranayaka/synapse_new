import { Metadata } from 'next';
import Image from 'next/image';
import AnimatedHero from '@/components/case-studies/AnimatedHero';

export const metadata: Metadata = {
    title: 'QuickFind.lk E-Commerce Web App Case Study | Synapse Labs',
    description: 'Learn how we developed a successful e-commerce marketplace web application for QuickFind.lk, connecting service providers with customers in Sri Lanka.',
};

export default function QuickFindCaseStudy() {
    return (
        <main className="flex-1">
            <AnimatedHero 
                title="QuickFind.lk E-Commerce Web App Case Study"
                description="Connecting service providers with customers looking for services in their local area within Sri Lanka."
            />

            {/* Content Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="prose prose-lg prose-invert mx-auto">
                        <h2>Introduction</h2>
                        <p>
                            Our client, Mr. Uditha Chathuranga, approached us to develop an e-commerce marketplace web application called QuickFind.lk. 
                            The app aims to connect service providers with customers looking for services in their local area within Sri Lanka. 
                            This case study outlines the development process, from initial requirements gathering to the successful launch of the application.
                        </p>

                        <h2>Requirements Analysis</h2>
                        <p>
                            We began the project by conducting thorough requirements analysis sessions with Mr. Chathuranga. During these meetings, 
                            he shared his vision for the QuickFind.lk platform, detailing how he envisioned the site's appearance and functionality. 
                            Our team carefully documented these requirements to ensure a clear understanding of the project scope.
                        </p>

                        <h2>Visual Design</h2>
                        <p>
                            Based on the requirements gathered, our design team created visual mockups of the QuickFind.lk web application. 
                            These mockups were presented to Mr. Chathuranga during our weekly update meetings, allowing him to provide feedback 
                            and approve the design direction. This iterative process ensured that the final design aligned with his expectations.
                        </p>

                        <h2>Technology Stack Selection</h2>
                        <p>
                            To deliver the best possible solution for our client, we carefully selected a robust and modern technology stack for the QuickFind.lk project:
                        </p>
                        <ul>
                            <li><strong>Next.js:</strong> We chose Next.js, a React framework, for its powerful server-side rendering capabilities, efficient client-side navigation, and excellent developer experience.</li>
                            <li><strong>PostgreSQL:</strong> To handle the application's data storage needs, we opted for PostgreSQL, a reliable and scalable open-source relational database management system.</li>
                            <li><strong>Amazon AWS:</strong> We deployed the QuickFind.lk application on Amazon Web Services (AWS) to ensure high availability, scalability, and security.</li>
                        </ul>

                        <h2>Development Process</h2>
                        <p>
                            Throughout the development process, we maintained a close collaboration with Mr. Chathuranga. Regular weekly update meetings 
                            were held to keep him informed of the project's progress, discuss any challenges encountered, and gather his input on key decisions.
                        </p>
                        <p>
                            Our development team followed agile methodologies, breaking down the project into manageable sprints. This approach allowed us 
                            to deliver incremental value and adapt to any changes in requirements along the way.
                        </p>

                        <h2>Testing and Quality Assurance</h2>
                        <p>
                            To ensure the quality and reliability of the QuickFind.lk application, we implemented a comprehensive testing strategy. 
                            Our quality assurance team conducted thorough functional testing, usability testing, and performance testing. Any issues 
                            identified during the testing phase were promptly addressed and resolved by the development team.
                        </p>

                        <h2>Deployment and Launch</h2>
                        <p>
                            Upon completion of the development and testing phases, we deployed the QuickFind.lk application to the production environment 
                            on Amazon AWS. We worked closely with Mr. Chathuranga to plan a smooth launch of the platform, including coordinating marketing 
                            efforts and preparing customer support channels.
                        </p>

                        <h2>Conclusion</h2>
                        <p>
                            The successful development and launch of the QuickFind.lk e-commerce marketplace web application demonstrate our commitment 
                            to delivering high-quality solutions that meet our clients' needs. By fostering a strong partnership with Mr. Chathuranga, 
                            carefully analyzing requirements, selecting the appropriate technology stack, and following a structured development process, 
                            we were able to create a platform that connects service providers with customers efficiently.
                        </p>
                        <p>
                            We look forward to the positive impact QuickFind.lk will have on the Sri Lankan market and are proud to have played a role 
                            in bringing Mr. Chathuranga's vision to life.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
