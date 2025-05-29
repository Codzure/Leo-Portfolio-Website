import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Leonard Mutugi | Lead Android Engineer & Product Digitization Strategist',
    template: '%s | Leonard Mutugi - Fintech & Mobile Solutions Expert'
  },
  description: 'Leonard Mutugi is a senior technology leader specializing in software engineering, product digitization, digital banking innovation, and Android fintech solutions. Expert in scaling mobile apps to 10M+ users across Africa with proven track record in Kotlin, product strategy, financial technology, and team leadership.',
  keywords: [
    // Core expertise
    'Leonard Mutugi',
    'Senior Android Engineer',
    'Lead Mobile Developer',
    'Product Digitization Strategist',
    'Digital Banking Innovation',
    'Fintech Solutions Architect',
    'Software Engineering Leader',
    'Product Engineering Expert',
    'Systems Design Specialist',
    'Mobile Architecture Expert',
    'Technical Product Manager',
    'Fintech Consultant',
    
    // Technical skills
    'Kotlin Expert',
    'Android Development Specialist',
    'Mobile App Development',
    'Jetpack Compose',
    'React Native',
    'Flutter',
    'API Development',
    'Cloud Architecture',
    'Database Design',
    'Microservices',
    'DevOps',
    'CI/CD',
    'Agile Methodology',
    'Software Architecture',
    
    // Industry focus
    'Financial Technology',
    'Mobile Banking Solutions',
    'Digital Payment Systems',
    'KYC Solutions',
    'Offline Banking',
    'Cross-border Payments',
    'Financial Inclusion',
    'Civic Technology',
    'Banking Technology',
    'Payment Gateway Integration',
    'Blockchain Integration',
    'AI in Finance',
    'Machine Learning',
    
   // Geographic & Market
   'Kenya Software Engineer',
   'Nairobi Technology Leader',
   'East Africa Fintech',
   'Africa Mobile Development',
   'African Banking Technology',
   'Sub-Saharan Africa Fintech',
   'Absa Bank',
   'Standard Bank',
   'First Bank of Nigeria',
   'Access Bank',
   'Zenith Bank',
   'Ecobank',
   'Nedbank',
   'UBA Group',
   'Stanbic Bank',
   'Bank of Africa',
   'Attijariwafa Bank',
   'Banque Misr',
   'National Bank of Egypt',
   'MTN Group',
   'Airtel Africa',
   'Vodacom',
   'Orange',
   'Safaricom',
   'Telkom Kenya',
   'Glo (Globacom)',
   '9mobile',
   'Econet Wireless',
   'Cell C',
   'Telecom Egypt',
   'Sonatel',
   'Moov Africa',
    
    // Solutions & Services
    'Mobile App Scaling',
    'User Experience Design',
    'Technical Leadership',
    'Product Strategy',
    'Digital Transformation',
    'Team Leadership',
    'Agile Development',
    'CI/CD Implementation',
    'Performance Optimization',
    'Security Implementation',
    'Code Review',
    'Mentorship',
    'Technology Consulting',
    'Project Management',
    'Startup Technology Advisor'
  ],
  authors: [{ name: 'Leonard Mutugi', url: 'https://leonardmutugi.dev' }],
  creator: 'Leonard Mutugi',
  publisher: 'Leonard Mutugi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://leonardmutugi.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leonardmutugi.dev',
    siteName: 'Leonard Mutugi - Fintech & Mobile Solutions Expert',
    title: 'Leonard Mutugi | Lead Android Engineer & Product Digitization Strategist',
    description: 'Senior technology leader specializing in software engineering, product digitization, digital banking innovation, and Android fintech solutions. Proven track record scaling mobile apps to 10M+ users across Africa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Leonard Mutugi - Lead Android Engineer & Product Digitization Strategist',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonard Mutugi | Lead Android Engineer & Product Digitization Strategist',
    description: 'Senior technology leader specializing in software engineering, product digitization, digital banking innovation, and Android fintech solutions.',
    images: ['/og-image.jpg'],
    creator: '@leonard_mutugi',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology',
  classification: 'Software Engineering, Fintech, Mobile Development',
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://leonardmutugi.dev/#person',
        name: 'Leonard Mutugi',
        url: 'https://leonardmutugi.dev',
        image: {
          '@type': 'ImageObject',
          url: 'https://leonardmutugi.dev/profile-image.jpg',
          width: 400,
          height: 400
        },
        sameAs: [
          'https://linkedin.com/in/leonardmutugi',
          'https://github.com/Codzure',
          'https://twitter.com/leonard_mutugi',
          'https://medium.com/@codzure'
        ],
        jobTitle: 'Lead Android Engineer & Product Digitization Strategist',
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Senior Software Engineer',
          occupationalCategory: 'Technology',
          skills: 'Android Development, Fintech Solutions, Product Strategy, Team Leadership'
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressRegion: 'Nairobi',
          addressCountry: 'KE'
        },
        email: 'leonard.mutugi.m@gmail.com',
        telephone: '+254797035505',
        description: 'Senior technology leader and product digitization strategist with extensive experience scaling mobile applications to 10M+ users across Africa. Expert in Android development, fintech solutions, digital banking innovation, and leading high-performing engineering teams.',
        knowsAbout: [
          'Android Development',
          'Kotlin Programming',
          'Product Digitization',
          'Digital Banking',
          'Fintech Solutions',
          'Mobile Architecture',
          'Product Strategy',
          'Technical Leadership',
          'Financial Technology',
          'Mobile Banking',
          'API Development',
          'Cloud Architecture',
          'Team Management',
          'Software Engineering',
          'Payment Systems',
          'Blockchain Technology',
          'Machine Learning',
          'DevOps',
          'Agile Methodology'
        ],
        alumniOf: {
          '@type': 'Organization',
          name: 'University of Nairobi',
          url: 'https://uonbi.ac.ke'
        },
        award: [
          'Scaled mobile banking platform to 10M+ users',
          'Improved user onboarding by 30%',
          'Led digital transformation initiatives across 6 African countries'
        ]
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://leonardmutugi.dev/#services',
        name: 'Leonard Mutugi - Technology Solutions',
        url: 'https://leonardmutugi.dev',
        description: 'Comprehensive software engineering, product digitization, and fintech solutions services for businesses across Africa and globally',
        provider: {
          '@id': 'https://leonardmutugi.dev/#person'
        },
        areaServed: [
          {
            '@type': 'Place',
            name: 'Africa'
          },
          {
            '@type': 'Place', 
            name: 'Kenya'
          },
          {
            '@type': 'Place',
            name: 'East Africa'
          }
        ],
        serviceType: [
          'Software Engineering',
          'Product Engineering',
          'Product Digitization',
          'Digital Banking Innovation',
          'Android App Development',
          'Fintech Solutions',
          'Mobile Architecture',
          'Technical Leadership',
          'Product Strategy',
          'Systems Design',
          'API Development',
          'Cloud Solutions',
          'DevOps Implementation',
          'Team Leadership',
          'Technology Consulting'
        ],
        offers: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description: 'Native Android development with modern architecture patterns, scaling to millions of users across multiple markets'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Product Digitization',
              description: 'End-to-end digital transformation of traditional business processes and services with focus on user experience'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fintech Solutions',
              description: 'Digital banking, payment systems, and financial technology implementations for emerging markets'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technical Leadership',
              description: 'Strategic technology leadership, team building, mentorship, and engineering excellence for high-growth companies'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technology Consulting',
              description: 'Strategic technology advisory for startups and enterprises looking to scale their digital presence'
            }
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://leonardmutugi.dev/#website',
        url: 'https://leonardmutugi.dev',
        name: 'Leonard Mutugi - Fintech & Mobile Solutions Expert',
        description: 'Professional portfolio showcasing expertise in software engineering, product digitization, and fintech solutions with proven track record in Africa',
        publisher: {
          '@id': 'https://leonardmutugi.dev/#person'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://leonardmutugi.dev/?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        },
        mainEntity: {
          '@id': 'https://leonardmutugi.dev/#person'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://leonardmutugi.dev/#webpage',
        url: 'https://leonardmutugi.dev',
        name: 'Leonard Mutugi | Lead Android Engineer & Product Digitization Strategist',
        isPartOf: {
          '@id': 'https://leonardmutugi.dev/#website'
        },
        about: {
          '@id': 'https://leonardmutugi.dev/#person'
        },
        description: 'Professional portfolio showcasing extensive experience in software engineering, product digitization, and scaling fintech solutions across Africa with measurable impact',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://leonardmutugi.dev'
            }
          ]
        },
        mainEntity: {
          '@id': 'https://leonardmutugi.dev/#person'
        }
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://leonardmutugi.dev" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Leonard Mutugi - Fintech & Mobile Solutions Expert" />
        <meta name="twitter:site" content="@leonard_mutugi" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Nairobi, Kenya" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        
        <meta name="language" content="EN" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        
        <meta property="article:author" content="Leonard Mutugi" />
        <meta property="article:publisher" content="https://leonardmutugi.dev" />
        
        <meta name="linkedin:creator" content="@leonard-mutugi" />
        <meta name="github:creator" content="@Codzure" />
        
        <meta name="subject" content="Software Engineering, Fintech Solutions, Mobile Development" />
        <meta name="topic" content="Technology, Software Development, Financial Technology" />
        <meta name="summary" content="Senior Android Engineer and Product Digitization Strategist specializing in fintech solutions and mobile app development with proven track record scaling applications to millions of users across Africa." />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 