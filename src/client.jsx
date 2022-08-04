import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://nltjzxfycdjspmhwtpof.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdGp6eGZ5Y2Rqc3BtaHd0cG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyMTIwOTgsImV4cCI6MTk3NDc4ODA5OH0.fYnEzp_i3Gk_mnRnF_exSxnZLR6EKoTIIzlEXBfNG_Q"
);

export { supabase };
