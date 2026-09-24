/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `submission_id` (uuid, unique identifier sent in the email)
  - `name` (text, not null — submitter's name)
  - `email` (text, not null — submitter's email)
  - `phone` (text, not null — submitter's phone number)
  - `service` (text — selected service type, nullable if none selected)
  - `message` (text, not null — the message/project description)
  - `source` (text — which form the submission came from: 'contact' or 'quote')
  - `created_at` (timestamptz, default now)

2. Security
- Enable RLS on `contact_submissions`.
- INSERT: allow anon + authenticated (the edge function inserts via service role which bypasses RLS,
  but this policy covers the case where the frontend inserts directly).
- SELECT/UPDATE/DELETE: denied for anon and authenticated — submissions are private data
  only accessible via the service role (edge function / admin tools).

3. Indexes
- Index on `created_at` for chronological queries.
- Index on `email` for lookups by submitter.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text,
  message text NOT NULL,
  source text DEFAULT 'contact',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon (frontend / edge function with anon key)
DROP POLICY IF EXISTS "insert_contact_submissions" ON contact_submissions;
CREATE POLICY "insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon or authenticated.
-- Submissions are private and only accessible via the service role key (edge function).

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email
ON contact_submissions (email);
