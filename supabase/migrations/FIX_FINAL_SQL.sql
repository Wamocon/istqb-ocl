-- ==========================================
-- FINAL FIX: Correct pg_net.http_post parameters
-- ==========================================

CREATE OR REPLACE FUNCTION public.send_order_emails()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  project_url text := 'https://sivqvqmwidqlcnuvwafj.supabase.co';
  
  -- ⚠️ HIER IHREN SERVICE ROLE KEY EINFÜGEN:
  service_role_key text := 'YOUR_SERVICE_ROLE_KEY_HERE';
  
  http_response record;
BEGIN
  -- Validate configuration
  IF service_role_key = 'YOUR_SERVICE_ROLE_KEY_HERE' THEN
    RAISE WARNING 'Email trigger: Service Role Key not set in function code!';
    RETURN NEW;
  END IF;

  -- Call Edge Function via pg_net (FIXED PARAMETERS)
  SELECT INTO http_response *
  FROM net.http_post(
    url := project_url || '/functions/v1/send-order-emails',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role_key
    ),
    -- FIX: body must be JSONB, not TEXT!
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
    )
  );

  RAISE LOG 'Email trigger executed. Status: %', http_response.status;
  RETURN NEW;
END;
$$;
