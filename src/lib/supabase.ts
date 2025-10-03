import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Some features may not work.');
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type GraciePikeContactSubmission = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
  updated_at?: string;
};

export type ShowBookingSubmission = {
  id?: number;
  created_at?: string;
  full_name: string;
  phone_number: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  location: string;
};