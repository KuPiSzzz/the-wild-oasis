import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tuibtznzniairefokpbz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1aWJ0em56bmlhaXJlZm9rcGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4OTU0NzMsImV4cCI6MjA2MDQ3MTQ3M30.mssAaNCJmlhyhLWvq1OuxkxDmyo-FL62ITZFh0MRES8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
