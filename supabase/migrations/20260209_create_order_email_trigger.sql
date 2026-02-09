-- Migration: Create trigger to send emails when new order is created
-- Created: 2026-02-09
-- Purpose: Automatically send confirmation emails to customer and admin

-- ============================================
-- 1. Create function to call Edge Function
-- ============================================

CREATE OR REPLACE FUNCTION public.send_order_emails()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  project_url text := current_setting('app.settings.supabase_url', true);
  service_role_key text := current_setting('app.settings.supabase_service_role_key', true);
BEGIN
  -- Call the Edge Function to send emails
  -- This runs asynchronously so it doesn't block the insert
  PERFORM
    net.http_post(
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

  RETURN NEW;
END;
$$;

-- ============================================
-- 2. Create trigger on orders table
-- ============================================

DROP TRIGGER IF EXISTS on_order_created ON public.orders;

CREATE TRIGGER on_order_created
  AFTER INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.send_order_emails();

-- ============================================
-- 3. Grant necessary permissions
-- ============================================

-- Allow the trigger function to be executed
GRANT EXECUTE ON FUNCTION public.send_order_emails() TO authenticated;
GRANT EXECUTE ON FUNCTION public.send_order_emails() TO anon;

-- ============================================
-- 4. Add comments for documentation
-- ============================================

COMMENT ON FUNCTION public.send_order_emails() IS 
'Trigger function that calls the send-order-emails Edge Function when a new order is created. Sends confirmation email to customer and notification to admin.';

COMMENT ON TRIGGER on_order_created ON public.orders IS 
'Automatically sends confirmation emails when a new order is inserted into the orders table.';
