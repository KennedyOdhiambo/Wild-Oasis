import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hriwwwmcpmxykupnkrhm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyaXd3d21jcG14eWt1cG5rcmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMjQxNzIsImV4cCI6MjAxOTYwMDE3Mn0.2ARYiGsEgUU4Bf-cyny9D3GZ7jqaGHobxG7VjKnkdzI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
