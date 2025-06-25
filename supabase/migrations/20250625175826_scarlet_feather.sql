/*
  # Fix RLS Policy for Gracie Pike Contact Form

  1. Security Changes
    - Drop existing restrictive INSERT policy
    - Create new permissive INSERT policy for anonymous and authenticated users
    - Ensure the policy allows public form submissions without authentication

  2. Policy Details
    - Allow INSERT operations for both 'anon' and 'authenticated' roles
    - Remove any restrictive conditions that might block anonymous submissions
    - Maintain existing SELECT policy for authenticated users
*/

-- Drop the existing INSERT policy that might be too restrictive
DROP POLICY IF EXISTS "Anyone can submit to Gracie Pike contact form" ON "Gracie_Pike_Contact";

-- Create a new, more permissive INSERT policy for public form submissions
CREATE POLICY "Public can submit Gracie Pike contact form"
  ON "Gracie_Pike_Contact"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure the existing SELECT policy remains intact for authenticated users
-- (This should already exist based on the schema, but we'll recreate it to be safe)
DROP POLICY IF EXISTS "Authenticated users can read Gracie Pike contact submissions" ON "Gracie_Pike_Contact";

CREATE POLICY "Authenticated users can read Gracie Pike contact submissions"
  ON "Gracie_Pike_Contact"
  FOR SELECT
  TO authenticated
  USING (true);