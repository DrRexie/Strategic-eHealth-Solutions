-- Add SELECT policy to prevent public read access to consultation requests
-- Only service role (admin backend) can read these records
CREATE POLICY "Only service role can read consultation requests" 
ON public.consultation_requests 
FOR SELECT 
USING (false);

-- Note: This blocks all client-side reads. Admin access should be done via 
-- service role key in edge functions or Supabase dashboard.