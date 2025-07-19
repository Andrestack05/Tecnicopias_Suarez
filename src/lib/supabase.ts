// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jxfwyiyiumhiftwmgyzv.supabase.co'; // <-- reemplaza esto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4Znd5aXlpdW1oaWZ0d21neXp2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mjg4MjY1NSwiZXhwIjoyMDY4NDU4NjU1fQ.AfQZI1zb0vQ6d6-SelRCbzf1ifwVHr9RE990frBvHsA';

export const supabase = createClient(supabaseUrl, supabaseKey);
