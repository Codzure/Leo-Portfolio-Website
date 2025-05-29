import type {
  Profile,
  Experience,
  Project,
  Education,
  TechStack,
  SocialLink,
  Achievement,
  ProfileData,
  ApiResponse,
  ApiListResponse
} from './types'

// Mock Profile Data
export const mockProfile: Profile = {
  id: 'mock-profile-id',
  created_at: '2023-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  name: 'Leonard Mutugi',
  title: 'Software Engineering | Product Engineering | Product Digitization | Digital Banking Innovation | Systems & Design Thinking | Android & Fintech Solutions Specialist',
  subtitle: '',
  bio: `Senior technology leader and product digitization strategist with extensive experience transforming financial services across Africa. I have successfully scaled mobile banking ecosystems to serve over 10 million users across 6 countries, revolutionizing digital banking accessibility throughout the continent.

My expertise spans the complete product lifecycle - from conceptualizing innovative fintech solutions to implementing scalable mobile architectures that handle millions of daily transactions. I've led cross-functional teams in developing cutting-edge features including offline-first banking capabilities, AI-powered financial insights, and seamless payment integrations that have reduced customer onboarding drop-offs by 30%.

I specialize in Android development, product strategy, and digital transformation initiatives, with a proven track record of delivering solutions that drive both user engagement and business growth. My work has directly contributed to expanding financial inclusion across East Africa, enabling millions of users to access banking services through intuitive mobile experiences.

Beyond technical excellence, I'm passionate about leveraging technology for social impact, having contributed to civic tech initiatives and mentored emerging developers in the fintech space. I thrive in dynamic environments where innovation meets real-world impact, consistently delivering products that scale efficiently while maintaining exceptional user experiences.`,
  location: 'Nairobi, Kenya',
  email: 'leonard.mutugi@example.com',
  phone: '+254700000000',
  website: 'https://leonardmutugi.dev',
  avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  resume_url: 'https://example.com/resume.pdf'
}

// Mock Social Links
export const mockSocialLinks: SocialLink[] = [
  {
    id: '1',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    platform: 'GitHub',
    url: 'https://github.com/Codzure',
    username: 'Codzure',
    icon_name: 'Github',
    color_class: 'text-gray-900 hover:text-gray-700',
    order_index: 1
  },
  {
    id: '2',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/leonard-mutugi',
    username: 'leonard-mutugi',
    icon_name: 'Linkedin',
    color_class: 'text-blue-600 hover:text-blue-800',
    order_index: 2
  },
  {
    id: '3',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    platform: 'Twitter',
    url: 'https://twitter.com/leonard_mutugi',
    username: 'leonard_mutugi',
    icon_name: 'Twitter',
    color_class: 'text-blue-400 hover:text-blue-600',
    order_index: 3
  }
]

// Mock Achievements
export const mockAchievements: Achievement[] = [
  {
    id: '1',
    experience_id: '1',
    title: 'Scaled Mobile Banking Platform to 10M+ Users',
    description: 'Led the technical initiatives that grew the user base from 2M to 10M+ across 6 African countries',
    impact_metrics: '400% user growth, 6 countries',
    order_index: 1
  },
  {
    id: '2',
    experience_id: '1',
    title: 'Reduced Onboarding Drop-offs by 30%',
    description: 'Implemented intuitive UX improvements and streamlined KYC processes',
    impact_metrics: '30% reduction in drop-offs',
    order_index: 2
  },
  {
    id: '3',
    experience_id: '1',
    title: 'Introduced Offline-First Architecture',
    description: 'Pioneered offline banking capabilities enabling transactions without internet connectivity',
    impact_metrics: 'Improved accessibility in remote areas',
    order_index: 3
  }
]

// Mock Experiences
export const mockExperiences: Experience[] = [
  {
    id: '1',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    title: 'Senior Android Engineer & Product Strategist',
    company: 'Leading African Financial Institution',
    company_url: null,
    location: 'Nairobi, Kenya',
    employment_type: 'full-time',
    start_date: '2018-03-01',
    end_date: null,
    is_current: true,
    description: 'Leading mobile product development and digital transformation initiatives at one of Africa\'s largest financial institutions, focusing on scaling mobile banking solutions across multiple markets.',
    achievements: mockAchievements,
    skills: ['Android Development', 'Kotlin', 'Product Strategy', 'Fintech', 'Mobile Architecture', 'API Design', 'User Experience', 'Team Leadership'],
    order_index: 1
  },
  {
    id: '2',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    title: 'Mobile Application Developer',
    company: 'Major Telecommunications Company',
    company_url: null,
    location: 'Nairobi, Kenya',
    employment_type: 'full-time',
    start_date: '2016-06-01',
    end_date: '2018-02-28',
    is_current: false,
    description: 'Developed and maintained mobile applications for Kenya\'s leading telecommunications company, focusing on user engagement and service delivery.',
    achievements: [],
    skills: ['Android Development', 'Java', 'REST APIs', 'Mobile UI/UX', 'Agile Development'],
    order_index: 2
  }
]

// Mock Projects
export const mockProjects: Project[] = [
  {
    id: '1',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    title: 'Enterprise Mobile Banking Platform',
    description: 'Next-generation mobile banking platform serving 10M+ users across 6 African countries',
    role: 'Lead Android Engineer',
    impact: 'Scaled to 10M+ users, reduced onboarding drop-offs by 30%',
    highlights: 'Offline-first architecture, AI-powered insights, seamless payment integrations',
    tech_stack: ['Kotlin', 'Android Jetpack', 'Room Database', 'Retrofit', 'Coroutines', 'Material Design'],
    project_type: 'work',
    status: 'live',
    start_date: '2018-03-01',
    end_date: null,
    github_url: null,
    live_url: null,
    play_store_url: null,
    app_store_url: null,
    figma_url: null,
    image_url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    featured: true,
    order_index: 1
  },
  {
    id: '2',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    title: 'KYC Digital Onboarding',
    description: 'Streamlined digital onboarding system with automated KYC verification',
    role: 'Product Engineer',
    impact: 'Reduced onboarding time from 3 days to 5 minutes',
    highlights: 'OCR document scanning, biometric verification, real-time validation',
    tech_stack: ['Kotlin', 'CameraX', 'ML Kit', 'Biometric API', 'Encrypted Storage'],
    project_type: 'work',
    status: 'live',
    start_date: '2020-01-01',
    end_date: '2020-12-31',
    github_url: null,
    live_url: null,
    play_store_url: null,
    app_store_url: null,
    figma_url: null,
    image_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    featured: true,
    order_index: 2
  },
  {
    id: '3',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    title: 'Civic Engagement Platform',
    description: 'Open-source platform connecting citizens with local government services',
    role: 'Full-Stack Developer',
    impact: 'Improved civic participation by 45% in pilot areas',
    highlights: 'Real-time notifications, multi-language support, offline capabilities',
    tech_stack: ['React Native', 'Node.js', 'PostgreSQL', 'GraphQL', 'PWA'],
    project_type: 'open-source',
    status: 'completed',
    start_date: '2019-06-01',
    end_date: '2020-03-31',
    github_url: 'https://github.com/Codzure/civic-platform',
    live_url: 'https://civic-platform.vercel.app',
    play_store_url: null,
    app_store_url: null,
    figma_url: 'https://figma.com/civic-platform-design',
    image_url: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop',
    featured: true,
    order_index: 3
  }
]

// Mock Education
export const mockEducation: Education[] = [
  {
    id: '1',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    institution: 'University of Nairobi',
    degree: 'Bachelor of Science',
    field_of_study: 'Computer Science',
    start_date: '2012-09-01',
    end_date: '2016-12-31',
    is_current: false,
    grade: 'First Class Honours',
    description: 'Specialized in software engineering with focus on mobile application development and systems design.',
    highlights: ['Dean\'s List for 4 consecutive semesters', 'Led the Computer Science Students Association', 'Published research on mobile banking security'],
    order_index: 1
  }
]

// Mock Tech Stack
export const mockTechStack: TechStack[] = [
  {
    id: '1',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    category: 'Mobile Development',
    title: 'Android & Cross-Platform',
    description: 'Native Android development with modern architecture patterns and cross-platform solutions',
    skills: ['Kotlin', 'Java', 'Android Jetpack', 'Compose', 'React Native', 'Flutter'],
    icon_name: 'Smartphone',
    gradient_colors: 'from-green-400 to-blue-500',
    order_index: 1
  },
  {
    id: '2',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    category: 'Backend & APIs',
    title: 'Server-Side Development',
    description: 'Scalable backend systems and API development for fintech applications',
    skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'GraphQL', 'REST APIs'],
    icon_name: 'Server',
    gradient_colors: 'from-purple-400 to-pink-500',
    order_index: 2
  },
  {
    id: '3',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    category: 'Cloud & DevOps',
    title: 'Infrastructure & Deployment',
    description: 'Cloud architecture and DevOps practices for scalable fintech solutions',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    icon_name: 'Cloud',
    gradient_colors: 'from-blue-400 to-cyan-500',
    order_index: 3
  },
  {
    id: '4',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    profile_id: 'mock-profile-id',
    category: 'Databases',
    title: 'Data Management',
    description: 'Database design and management for high-transaction financial systems',
    skills: ['PostgreSQL', 'MongoDB', 'Room Database', 'Redis', 'SQLite', 'Supabase'],
    icon_name: 'Database',
    gradient_colors: 'from-yellow-400 to-orange-500',
    order_index: 4
  }
]

// Mock API Response Wrappers
export const mockApiResponse = <T>(data: T): ApiResponse<T> => ({
  data,
  error: null,
  status: 200
})

export const mockApiListResponse = <T>(data: T[]): ApiListResponse<T> => ({
  data,
  error: null,
  status: 200,
  count: data.length
})

// Complete Mock Portfolio Data
export const mockPortfolioData: ProfileData = {
  profile: mockProfile,
  experiences: mockExperiences,
  projects: mockProjects,
  education: mockEducation,
  techStack: mockTechStack,
  socialLinks: mockSocialLinks
}

// Simulate network delay
export const simulateNetworkDelay = (ms: number = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Mock API functions that simulate real API calls
export const mockApi = {
  getProfile: async (): Promise<ApiResponse<Profile>> => {
    await simulateNetworkDelay(800)
    return mockApiResponse(mockProfile)
  },

  getExperiences: async (): Promise<ApiListResponse<Experience>> => {
    await simulateNetworkDelay(1200)
    return mockApiListResponse(mockExperiences)
  },

  getProjects: async (): Promise<ApiListResponse<Project>> => {
    await simulateNetworkDelay(1000)
    return mockApiListResponse(mockProjects)
  },

  getEducation: async (): Promise<ApiListResponse<Education>> => {
    await simulateNetworkDelay(600)
    return mockApiListResponse(mockEducation)
  },

  getTechStack: async (): Promise<ApiListResponse<TechStack>> => {
    await simulateNetworkDelay(700)
    return mockApiListResponse(mockTechStack)
  },

  getSocialLinks: async (): Promise<ApiListResponse<SocialLink>> => {
    await simulateNetworkDelay(500)
    return mockApiListResponse(mockSocialLinks)
  },

  getCompletePortfolio: async (): Promise<{
    data: ProfileData | null
    error: string | null
    status: number
  }> => {
    await simulateNetworkDelay(1500)
    return {
      data: mockPortfolioData,
      error: null,
      status: 200
    }
  },

  healthCheck: async (): Promise<ApiResponse<{ status: string; timestamp: string }>> => {
    await simulateNetworkDelay(300)
    return mockApiResponse({
      status: 'healthy',
      timestamp: new Date().toISOString()
    })
  }
} 