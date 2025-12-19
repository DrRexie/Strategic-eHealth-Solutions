-- Add CHECK constraints to enforce max lengths on consultation_requests table
-- This provides server-side validation that cannot be bypassed by malicious actors

ALTER TABLE consultation_requests
ADD CONSTRAINT name_length CHECK (length(name) <= 100),
ADD CONSTRAINT organization_length CHECK (length(organization) <= 200),
ADD CONSTRAINT email_length CHECK (length(email) <= 255),
ADD CONSTRAINT role_length CHECK (length(role) <= 100),
ADD CONSTRAINT engagement_type_length CHECK (length(engagement_type) <= 100),
ADD CONSTRAINT message_length CHECK (length(message) <= 2000);

-- Add email format validation at database level
ALTER TABLE consultation_requests
ADD CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');