import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://zfbhagjertdeaagzpuyz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYmhhZ2plcnRkZWFhZ3pwdXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNTA2NjgsImV4cCI6MjA2MDcyNjY2OH0._OCXJNJrBhh_R1gxPQ8-hDR43cmWVQP2IMienfy_0LM';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
