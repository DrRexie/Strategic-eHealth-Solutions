-- Add policy to deny UPDATE operations
CREATE POLICY "No one can update consultation requests"
ON public.consultation_requests
FOR UPDATE
USING (false);

-- Add policy to deny DELETE operations  
CREATE POLICY "No one can delete consultation requests"
ON public.consultation_requests
FOR DELETE
USING (false);