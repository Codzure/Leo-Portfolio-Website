// Database Types for Supabase
export interface Profile {
  id: string
  created_at: string
  updated_at: string
  name: string
  title: string
  subtitle: string
  bio: string
  location: string
  email: string
  phone: string
  website?: string | null
  avatar_url?: string | null
  resume_url?: string | null
}

export interface Experience {
  id: string
  created_at: string
  updated_at: string
  profile_id: string
  title: string
  company: string
  company_url?: string | null
  location: string
  employment_type: 'full-time' | 'part-time' | 'contract' | 'internship'
  start_date: string
  end_date?: string | null
  is_current: boolean
  description: string
  achievements: Achievement[]
  skills: string[]
  order_index: number
}

export interface Achievement {
  id: string
  experience_id: string
  title: string
  description: string
  impact_metrics?: string | null
  order_index: number
}

export interface Project {
  id: string
  created_at: string
  updated_at: string
  profile_id: string
  title: string
  description: string
  role?: string | null
  impact?: string | null
  highlights?: string | null
  tech_stack: string[]
  project_type: 'work' | 'personal' | 'open-source'
  status: 'live' | 'development' | 'completed' | 'archived'
  start_date?: string | null
  end_date?: string | null
  github_url?: string | null
  live_url?: string | null
  play_store_url?: string | null
  app_store_url?: string | null
  figma_url?: string | null
  image_url?: string | null
  featured: boolean
  order_index: number
}

export interface Education {
  id: string
  created_at: string
  updated_at: string
  profile_id: string
  institution: string
  degree: string
  field_of_study?: string | null
  start_date: string
  end_date?: string | null
  is_current: boolean
  grade?: string | null
  description?: string | null
  highlights: string[]
  order_index: number
}

export interface TechStack {
  id: string
  created_at: string
  updated_at: string
  profile_id: string
  category: string
  title: string
  description: string
  skills: string[]
  icon_name: string
  gradient_colors: string
  order_index: number
}

export interface SocialLink {
  id: string
  created_at: string
  updated_at: string
  profile_id: string
  platform: string
  url: string
  username?: string | null
  icon_name: string
  color_class: string
  order_index: number
}

// API Response Types
export interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: number
}

export interface ApiListResponse<T> {
  data: T[] | null
  error: string | null
  status: number
  count?: number
}

// Component Props Types
export interface ProfileData {
  profile: Profile
  experiences: Experience[]
  projects: Project[]
  education: Education[]
  techStack: TechStack[]
  socialLinks: SocialLink[]
}

// Loading States
export interface LoadingState {
  profile: boolean
  experiences: boolean
  projects: boolean
  education: boolean
  techStack: boolean
  socialLinks: boolean
}

// Error States
export interface ErrorState {
  profile: string | null
  experiences: string | null
  projects: string | null
  education: string | null
  techStack: string | null
  socialLinks: string | null
} 