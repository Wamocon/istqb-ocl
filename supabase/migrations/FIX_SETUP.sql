-- ==========================================
-- FIX: DIRECT CONFIGURATION (Bypassing Permission Error)
-- ==========================================

-- 1. Drop old function to be sure
DROP FUNCTION IF EXISTS public.send_order_emails() CASCADE;

-- 2. Create the function with HARDCODED configuration
CREATE OR REPLACE FUNCTION public.send_order_emails()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  project_url text := 'https://sivqvqmwidqlcnuvwafj.supabase.co'; -- URL ist bereits korrekt eingetragen!
  
  -- ⚠️ HIER IHREN SERVICE ROLE KEY EINFÜGEN (innerhalb der Hochkommas):
  service_role_key text := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdnF2cW13aWRxbGNudXZ3YWZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTU4OTk0MywiZXhwIjoyMDg1MTY1OTQzfQ.gmUwvuC0QjBVV3cn6wKbGh6ZmKoBswLBq_v9Js3l22Q';
  
  http_response record;
BEGIN
  -- Validate configuration
  IF service_role_key = 'YOUR_SERVICE_ROLE_KEY_HERE' THEN
    RAISE WARNING 'Email trigger: Service Role Key not set in function code!';
    RETURN NEW;
  END IF;
  
  -- REST OF THE LOGIC IS THE SAME...
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
      'product_name', NEW.product_name,
      'price', NEW.price,
      'zahlungsart', NEW.zahlungsart,
      'total_amount', NEW.total_amount,
      'agb_akzeptiert', NEW.agb_akzeptiert,
      'widerrufsbelehrung_akzeptiert', NEW.widerrufsbelehrung_akzeptiert,
      'datenschutz_akzeptiert', NEW.datenschutz_akzeptiert,
      'firma', NEW.firma,
      'ust_id_nr', NEW.ust_id_nr
    )::text
  );
  
  RAISE LOG 'Email trigger executed. Status: %', http_response.status;
  RETURN NEW;
END;
$$;

-- 3. Re-Create Trigger
DROP TRIGGER IF EXISTS on_order_created ON public.orders;
CREATE TRIGGER on_order_created
  AFTER INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.send_order_emails();

-- 4. Verify
SELECT count(*) as triggers_active FROM information_schema.triggers WHERE trigger_name = 'on_order_created';
