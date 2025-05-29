import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Since this is a portfolio site, we don't need persistent sessions
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
})

// Database table names
export const TABLES = {
  PROFILES: 'profiles',
  EXPERIENCES: 'experiences',
  ACHIEVEMENTS: 'achievements',
  PROJECTS: 'projects',
  EDUCATION: 'education',
  TECH_STACK: 'tech_stack',
  SOCIAL_LINKS: 'social_links',
} as const

// Helper function to check Supabase connection
export async function testSupabaseConnection(): Promise<{
  connected: boolean
  error?: string
}> {
  try {
    const { data, error } = await supabase
      .from(TABLES.PROFILES)
      .select('id')
      .limit(1)
    
    if (error) {
      return { connected: false, error: error.message }
    }
    
    return { connected: true }
  } catch (error) {
    return { 
      connected: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
} 