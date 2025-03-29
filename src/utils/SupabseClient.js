import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jwccewuvanjnxrrgrung.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Y2Nld3V2YW5qbnhycmdydW5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTMyMzMsImV4cCI6MjA1Njc2OTIzM30.FMUju1p6swSDIjnAc23ppw9iPQ_hsiMBp4Zc0P7Wakc";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
