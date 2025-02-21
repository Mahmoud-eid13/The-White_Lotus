import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://shzanwqffsfmzwxspvje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoemFud3FmZnNmbXp3eHNwdmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NjMyNzcsImV4cCI6MjA1NTAzOTI3N30._YamHO-tIgg94DqdcHbAYCharZATJEFAZ0I8NPlsneY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
