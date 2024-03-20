import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://bihkddkrwrcobzmfkrgr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpaGtkZGtyd3Jjb2J6bWZrcmdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MDc0NTcsImV4cCI6MjAyNTM4MzQ1N30.d1r8cxSOYuofG5UvKCnABAARZ6R_aesJp_piKGl8ByA';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
