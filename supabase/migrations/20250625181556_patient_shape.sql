/*
  # Fix Gracie Pike Contact Form RLS Policy

  1. Security Changes
    - Update the existing RLS policy for `Gracie_Pike_Contact` table
    - Allow both `anon` and `public` roles to insert contact form submissions
    - This enables anonymous users to submit contact forms without authentication

  2. Changes Made
    - Drop the existing restrictive policy
    - Create a new policy that allows anonymous contact form submissions
*/

-- Drop the existing policy that only allows 'public' role
DROP POLICY IF EXISTS "allow_anon_and_public_insert_gracie_pike_contact_fixed" ON "Gracie_Pike_Contact";

-- Create a new policy that allows both anonymous and public users to insert
CREATE POLICY "allow_anonymous_contact_submissions" 
  ON "Gracie_Pike_Contact"
  FOR INSERT 
  TO anon, public
  WITH CHECK (true);