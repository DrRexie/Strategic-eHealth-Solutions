-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Only service role can read consultation requests" ON public.consultation_requests;

-- Create a permissive SELECT policy that allows service role to read
-- Service role users can bypass RLS, but we also want to be explicit
-- This policy allows authenticated users with service_role to read
CREATE POLICY "Service role can read consultation requests" 
ON public.consultation_requests 
FOR SELECT 
TO authenticated
USING ((auth.jwt() ->> 'role'::text) = 'service_role'::text);