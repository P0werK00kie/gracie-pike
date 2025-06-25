/*
  # Fix Gracie Pike Contact Form RLS Policies

  1. Security Updates
    - Drop existing policies that might be conflicting
    - Create new clear policies for anonymous and authenticated users
    - Ensure anonymous users can submit contact forms
    - Ensure authenticated users can read submissions

  2. Policy Changes
    - Allow anonymous (anon) users to insert contact form submissions
    - Allow authenticated users to read all contact submissions
    - Maintain data security while enabling form functionality
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public can submit Gracie Pike contact form" ON "Gracie_Pike_Contact";
DROP POLICY IF EXISTS "Authenticated users can read Gracie Pike contact submissions" ON "Gracie_Pike_Contact";

-- Create new policy for anonymous users to submit contact forms
CREATE POLICY "allow_anonymous_insert_gracie_pike_contact"
  ON "Gracie_Pike_Contact"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create new policy for authenticated users to read contact submissions
CREATE POLICY "allow_authenticated_select_gracie_pike_contact"
  ON "Gracie_Pike_Contact"
  FOR SELECT
  TO authenticated
  USING (true);

-- Ensure RLS is enabled (it should already be enabled based on schema)
ALTER TABLE "Gracie_Pike_Contact" ENABLE ROW LEVEL SECURITY;