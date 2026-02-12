import { faqData } from '@/data/faq';

export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Course',
                name: 'ISTQB® Certified Tester Foundation Level 4.0 Online-Kurs',
                description: 'Der offizielle Weg zum ISTQB® Certified Tester mit 128 Lerneinheiten, Prüfungssimulator und DiTeLe Praxis-Tool.',
                provider: {
                    '@type': 'Organization',
                    name: 'Test-IT-Academy (WAMOCON Academy GmbH)',
                    sameAs: 'https://onlinekurs.test-it-academy.de'
                },
                offers: {
                    '@type': 'Offer',
                    price: '497.00',
                    priceCurrency: 'EUR',
                    availability: 'https://schema.org/InStock',
                    url: 'https://onlinekurs.test-it-academy.de/#pricing',
                    category: 'Online Education'
                },
                hasCourseInstance: {
                    '@type': 'CourseInstance',
                    courseMode: 'online',
                    courseWorkload: 'PT8W'
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '127'
                }
            },
            {
                '@type': 'Organization',
                '@id': 'https://onlinekurs.test-it-academy.de/#organization',
                name: 'Test-IT-Academy',
                url: 'https://onlinekurs.test-it-academy.de',
                logo: 'https://onlinekurs.test-it-academy.de/images/logo.png',
                sameAs: [
                    'https://www.linkedin.com/company/wamocon-academy',
                    'https://www.facebook.com/wamocon'
                ],
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+49-6196-5838312',
                    contactType: 'customer service',
                    areaServed: 'DE',
                    availableLanguage: 'German'
                }
            },
            {
                '@type': 'FAQPage',
                mainEntity: faqData.map(item => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.answer
                    }
                }))
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
