import { supabase, TABLES } from './supabase'
import type {
  Profile,
  Experience,
  Achievement,
  Project,
  Education,
  TechStack,
  SocialLink,
  ApiResponse,
  ApiListResponse,
  ProfileData
} from './types'

// Generic API fetch wrapper
async function apiRequest<T>(
  request: () => Promise<{ data: T | null; error: any }>
): Promise<ApiResponse<T>> {
  try {
    const { data, error } = await request()
    
    if (error) {
      console.error('API Error:', error)
      return {
        data: null,
        error: error.message || 'An error occurred',
        status: 500
      }
    }
    
    return {
      data,
      error: null,
      status: 200
    }
  } catch (error) {
    console.error('API Request Error:', error)
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Network error',
      status: 500
    }
  }
}

// Generic API list fetch wrapper
async function apiListRequest<T>(
  request: () => Promise<{ data: T[] | null; error: any; count?: number | null }>
): Promise<ApiListResponse<T>> {
  try {
    const { data, error, count } = await request()
    
    if (error) {
      console.error('API List Error:', error)
      return {
        data: null,
        error: error.message || 'An error occurred',
        status: 500,
        count: 0
      }
    }
    
    return {
      data: data || [],
      error: null,
      status: 200,
      count: count || data?.length || 0
    }
  } catch (error) {
    console.error('API List Request Error:', error)
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Network error',
      status: 500,
      count: 0
    }
  }
}

// Profile API
export const profileApi = {
  getProfile: async (profileId?: string): Promise<ApiResponse<Profile>> => {
    return apiRequest(async () => {
      const query = supabase
        .from(TABLES.PROFILES)
        .select('*')
      
      if (profileId) {
        query.eq('id', profileId)
      }
      
      const { data, error } = await query.single()
      return { data, error }
    })
  },

  getDefaultProfile: async (): Promise<ApiResponse<Profile>> => {
    return apiRequest(async () => {
      const { data, error } = await supabase
        .from(TABLES.PROFILES)
        .select('*')
        .order('created_at', { ascending: true })
        .limit(1)
        .single()
      
      return { data, error }
    })
  }
}

// Experience API
export const experienceApi = {
  getExperiences: async (profileId: string): Promise<ApiListResponse<Experience>> => {
    return apiListRequest(async () => {
      const { data, error, count } = await supabase
        .from(TABLES.EXPERIENCES)
        .select(`
          *,
          achievements:${TABLES.ACHIEVEMENTS}(*)
        `)
        .eq('profile_id', profileId)
        .order('order_index', { ascending: true })
      
      return { data, error, count }
    })
  }
}

// Projects API
export const projectsApi = {
  getProjects: async (profileId: string): Promise<ApiListResponse<Project>> => {
    return apiListRequest(async () => {
      const { data, error, count } = await supabase
        .from(TABLES.PROJECTS)
        .select('*')
        .eq('profile_id', profileId)
        .order('order_index', { ascending: true })
      
      return { data, error, count }
    })
  },

  getFeaturedProjects: async (profileId: string): Promise<ApiListResponse<Project>> => {
    return apiListRequest(async () => {
      const { data, error, count } = await supabase
        .from(TABLES.PROJECTS)
        .select('*')
        .eq('profile_id', profileId)
        .eq('featured', true)
        .order('order_index', { ascending: true })
      
      return { data, error, count }
    })
  }
}

// Education API
export const educationApi = {
  getEducation: async (profileId: string): Promise<ApiListResponse<Education>> => {
    return apiListRequest(async () => {
      const { data, error, count } = await supabase
        .from(TABLES.EDUCATION)
        .select('*')
        .eq('profile_id', profileId)
        .order('order_index', { ascending: true })
      
      return { data, error, count }
    })
  }
}

// Tech Stack API
export const techStackApi = {
  getTechStack: async (profileId: string): Promise<ApiListResponse<TechStack>> => {
    return apiListRequest(async () => {
      const { data, error, count } = await supabase
        .from(TABLES.TECH_STACK)
        .select('*')
        .eq('profile_id', profileId)
        .order('order_index', { ascending: true })
      
      return { data, error, count }
    })
  }
}

// Social Links API
export const socialLinksApi = {
  getSocialLinks: async (profileId: string): Promise<ApiListResponse<SocialLink>> => {
    return apiListRequest(async () => {
      const { data, error, count } = await supabase
        .from(TABLES.SOCIAL_LINKS)
        .select('*')
        .eq('profile_id', profileId)
        .order('order_index', { ascending: true })
      
      return { data, error, count }
    })
  }
}

// Complete Portfolio Data API
export const portfolioApi = {
  getCompletePortfolio: async (profileId?: string): Promise<{
    data: ProfileData | null
    error: string | null
    status: number
  }> => {
    try {
      // First get the profile
      const profileResponse = profileId 
        ? await profileApi.getProfile(profileId)
        : await profileApi.getDefaultProfile()
      
      if (profileResponse.error || !profileResponse.data) {
        return {
          data: null,
          error: profileResponse.error || 'Profile not found',
          status: profileResponse.status
        }
      }
      
      const profile = profileResponse.data
      
      // Fetch all related data in parallel
      const [
        experiencesResponse,
        projectsResponse,
        educationResponse,
        techStackResponse,
        socialLinksResponse
      ] = await Promise.all([
        experienceApi.getExperiences(profile.id),
        projectsApi.getProjects(profile.id),
        educationApi.getEducation(profile.id),
        techStackApi.getTechStack(profile.id),
        socialLinksApi.getSocialLinks(profile.id)
      ])
      
      // Check for any errors
      const errors = [
        experiencesResponse.error,
        projectsResponse.error,
        educationResponse.error,
        techStackResponse.error,
        socialLinksResponse.error
      ].filter(Boolean)
      
      if (errors.length > 0) {
        return {
          data: null,
          error: `Failed to fetch some data: ${errors.join(', ')}`,
          status: 500
        }
      }
      
      return {
        data: {
          profile,
          experiences: experiencesResponse.data || [],
          projects: projectsResponse.data || [],
          education: educationResponse.data || [],
          techStack: techStackResponse.data || [],
          socialLinks: socialLinksResponse.data || []
        },
        error: null,
        status: 200
      }
    } catch (error) {
      console.error('Portfolio API Error:', error)
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Failed to fetch portfolio data',
        status: 500
      }
    }
  }
}

// Health check function
export const healthCheck = async (): Promise<ApiResponse<{ status: string; timestamp: string }>> => {
  return apiRequest(async () => {
    const { data, error } = await supabase
      .from(TABLES.PROFILES)
      .select('id')
      .limit(1)
    
    if (error) {
      throw error
    }
    
    return {
      data: {
        status: 'healthy',
        timestamp: new Date().toISOString()
      },
      error: null
    }
  })
} 