-- Create consultation_requests table for contact form submissions
CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  engagement_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for public inserts (anyone can submit a consultation request)
CREATE POLICY "Anyone can submit consultation requests"
ON public.consultation_requests
FOR INSERT
WITH CHECK (true);

-- Create index for faster queries by date
CREATE INDEX idx_consultation_requests_created_at ON public.consultation_requests(created_at DESC);