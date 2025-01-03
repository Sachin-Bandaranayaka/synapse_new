import { Organization, WithContext } from 'schema-dts';

export default function OrganizationJsonLd() {
  const organizationData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Synapse Labs',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://synapselabs.lk',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synapselabs.lk'}/logo.png`,
    description: 'Leading software development company in Sri Lanka specializing in AI solutions, web development, mobile apps, and custom software.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kurunegala',
      addressRegion: 'North Western Province',
      addressCountry: 'LK'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-XXX-XXX-XXX',
      contactType: 'customer service'
    },
    sameAs: [
      'https://www.linkedin.com/company/synapse-labs',
      'https://twitter.com/synapselabs',
      'https://github.com/synapselabs'
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'Cloud Computing',
      'Data Analytics'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}
