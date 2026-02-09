-- ==========================================
-- STEP 1: CONFIGURE APP SETTINGS
-- ==========================================

-- 1. Set Supabase URL (Done automatically)
ALTER DATABASE postgres 
SET "app.settings.supabase_url" TO 'https://sivqvqmwidqlcnuvwafj.supabase.co';

-- 2. Set Service Role Key (CRITICAL!)
-- ⚠️ REPLACE 'YOUR_SERVICE_ROLE_KEY' with key from:
-- https://app.supabase.com/project/sivqvqmwidqlcnuvwafj/settings/api
ALTER DATABASE postgres 
SET "app.settings.supabase_service_role_key" TO 'YOUR_SERVICE_ROLE_KEY';

-- 3. Verify
SELECT * FROM pg_settings WHERE name LIKE 'app.settings.%';
