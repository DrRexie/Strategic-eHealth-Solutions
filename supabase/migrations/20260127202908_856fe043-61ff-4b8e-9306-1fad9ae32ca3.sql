-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON public.consultation_requests;

-- Create a restrictive INSERT policy - only service role can insert
-- This forces submissions through our edge function which has rate limiting
CREATE POLICY "Only service role can insert consultation requests" 
ON public.consultation_requests 
FOR INSERT 
TO authenticated
WITH CHECK ((auth.jwt() ->> 'role'::text) = 'service_role'::text);

-- Also allow anon to insert via service role (edge function uses service role)
CREATE POLICY "Service role can insert consultation requests" 
ON public.consultation_requests 
FOR INSERT 
TO anon
WITH CHECK (false);  -- Block direct anon inserts, must go through edge function