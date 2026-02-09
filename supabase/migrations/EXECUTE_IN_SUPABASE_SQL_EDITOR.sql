/*
 * ============================================
 * SUPABASE E-MAIL SYSTEM - PRODUCTION SETUP
 * ============================================
 * 
 * Execute this ENTIRE file in Supabase SQL Editor to enable automatic emails!
 * 
 * What this does:
 * 1. Activates pg_net extension (for HTTP requests)
 * 2. Creates trigger function to call Edge Function
 * 3. Creates trigger on orders table
 * 4. Sets up app settings
 * 
 * After running this:
 * - Every new order will automatically trigger 2 emails
 * - 100% server-side, no frontend needed
 * 
 * Created: 2026-02-09
 * ============================================
 */

-- ============================================
-- STEP 1: Enable pg_net extension
-- ============================================
-- This allows database functions to make HTTP requests

CREATE EXTENSION IF NOT EXISTS pg_net;

COMMENT ON EXTENSION pg_net IS 'Enables HTTP requests from database functions - required for email triggers';


-- ============================================
-- STEP 2: Configure App Settings
-- ============================================
-- These settings are used by the trigger function
-- IMPORTANT: Replace YOUR_PROJECT_REF with your actual Supabase project reference ID!
-- Find it at: https://app.supabase.com > Your Project > Settings > General > Reference ID

-- Supabase Project URL
ALTER DATABASE postgres 
SET "app.settings.supabase_url" TO 'https://sivqvgmwidqlcnuvwafj.supabase.co';

-- Service Role Key (CRITICAL: Get this from Supabase Dashboard > Settings > API > service_role key)
-- ⚠️ WARNING: This is a SECRET! Never commit to Git!
-- You'll need to set this manually after deployment
ALTER DATABASE postgres 
SET "app.settings.supabase_service_role_key" TO 'YOUR_SERVICE_ROLE_KEY_HERE';


-- ============================================
-- STEP 3: Create Trigger Function
-- ============================================
-- This function calls the Edge Function when a new order is created

CREATE OR REPLACE FUNCTION public.send_order_emails()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  project_url text;
  service_role_key text;
  http_response record;
BEGIN
  -- Get configuration from app settings
  project_url := current_setting('app.settings.supabase_url', true);
  service_role_key := current_setting('app.settings.supabase_service_role_key', true);
  
  -- Validate configuration
  IF project_url IS NULL OR service_role_key IS NULL THEN
    RAISE WARNING 'Email trigger: Missing configuration (supabase_url or service_role_key)';
    RETURN NEW;
  END IF;
  
  -- Call the Edge Function asynchronously
  -- This will send the emails without blocking the INSERT operation
  SELECT INTO http_response *
  FROM net.http_post(
    url := project_url || '/functions/v1/send-order-emails',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role_key
    ),
    body := jsonb_build_object(
      'order_id', NEW.id,
      'order_number', NEW.order_number,
      'created_at', NEW.created_at,
      'anrede', NEW.anrede,
      'vorname', NEW.vorname,
      'nachname', NEW.nachname,
      'email', NEW.email,
      'strasse', NEW.strasse,
      'hausnummer', NEW.hausnummer,
      'plz', NEW.plz,
      'ort', NEW.ort,
      'land', NEW.land,
      'firma', NEW.firma,
      'ust_id_nr', NEW.ust_id_nr,
      'product_name', NEW.product_name,
      'price', NEW.price,
      'zahlungsart', NEW.zahlungsart,
      'total_amount', NEW.total_amount,
      'agb_akzeptiert', NEW.agb_akzeptiert,
      'widerrufsbelehrung_akzeptiert', NEW.widerrufsbelehrung_akzeptiert,
      'datenschutz_akzeptiert', NEW.datenschutz_akzeptiert
    )::text
  );
  
  -- Log result for debugging
  RAISE LOG 'Email trigger executed for order %. HTTP Status: %', NEW.order_number, http_response.status;
  
  -- If Edge Function doesn't exist yet, log a warning but don't fail the order
  IF http_response.status >= 400 THEN
    RAISE WARNING 'Email trigger: Edge Function returned error %. Response: %', http_response.status, http_response.content;
  END IF;
  
  -- Always return NEW to allow the INSERT to complete
  RETURN NEW;
END;
$$;

-- Grant permissions
GRANT EXECUTE ON FUNCTION public.send_order_emails() TO authenticated;
GRANT EXECUTE ON FUNCTION public.send_order_emails() TO anon;
GRANT EXECUTE ON FUNCTION public.send_order_emails() TO service_role;

-- Add documentation
COMMENT ON FUNCTION public.send_order_emails() IS 
'Trigger function that automatically sends confirmation emails when a new order is created.
Calls the send-order-emails Edge Function via HTTP POST.
Runs asynchronously - order will be saved even if email fails.';


-- ============================================
-- STEP 4: Create Trigger on Orders Table
-- ============================================
-- This trigger fires after each INSERT into the orders table

DROP TRIGGER IF EXISTS on_order_created ON public.orders;

CREATE TRIGGER on_order_created
  AFTER INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.send_order_emails();

COMMENT ON TRIGGER on_order_created ON public.orders IS 
'Automatically sends confirmation emails when a new order is inserted.
Sends 2 emails: customer confirmation + admin notification.';


-- ============================================
-- STEP 5: Verification Queries
-- ============================================
-- Run these to verify everything is set up correctly

-- Check if trigger exists
SELECT 
  trigger_name, 
  event_manipulation, 
  action_statement,
  action_timing
FROM information_schema.triggers 
WHERE trigger_name = 'on_order_created';

-- Check if pg_net extension is enabled
SELECT * FROM pg_extension WHERE extname = 'pg_net';

-- Check app settings (URL will be visible, service key will show as SET)
SELECT 
  name, 
  setting
FROM pg_settings 
WHERE name LIKE 'app.settings.%';


-- ============================================
-- SUCCESS MESSAGE
-- ============================================
DO $$
BEGIN
  RAISE NOTICE '
  ╔══════════════════════════════════════════════════════════════╗
  ║  ✅ DATABASE TRIGGER SETUP COMPLETE!                        ║
  ╚══════════════════════════════════════════════════════════════╝
  
  Next steps:
  
  1. ✅ Deploy Edge Function:
     supabase functions deploy send-order-emails
  
  2. ✅ Set Secrets:
     supabase secrets set RESEND_API_KEY=re_xxxxx
     supabase secrets set EMAIL_FROM=info@test-it-academy.de
     supabase secrets set ADMIN_EMAIL=info@test-it-academy.de
     supabase secrets set DOMAIN=https://your-domain.com
  
  3. ✅ Test with SQL:
     INSERT INTO orders (...) VALUES (...);
  
  4. ✅ Check logs:
     supabase functions logs send-order-emails
  
  🎉 Ready for production!
  ';
END $$;
