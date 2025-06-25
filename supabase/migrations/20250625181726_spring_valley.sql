/*
  # Fix Contact Form RLS Policy

  1. Security Changes
    - Drop the existing INSERT policy that uses 'public' role
    - Create a new INSERT policy that allows 'anon' role to submit contact forms
    - This enables anonymous users to submit the contact form without authentication

  2. Policy Details
    - Policy name: "allow_anonymous_contact_form_submissions"
    - Allows INSERT operations for anonymous (anon) users
    - No restrictions on the data being inserted (with_check = true)
*/

-- Drop the existing policy that uses 'public' role
DROP POLICY IF EXISTS "allow_anonymous_contact_submissions" ON "Gracie_Pike_Contact";

-- Create a new policy that allows 'anon' role to insert contact form submissions
CREATE POLICY "allow_anonymous_contact_form_submissions"
  ON "Gracie_Pike_Contact"
  FOR INSERT
  TO anon
  WITH CHECK (true);