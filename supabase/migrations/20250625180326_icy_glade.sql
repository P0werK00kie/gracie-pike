/*
  # Fix Gracie Pike Contact Form RLS Policy

  1. Security Updates
    - Drop existing restrictive RLS policies on Gracie_Pike_Contact table
    - Create new policy that allows public inserts for contact form submissions
    - Ensure anonymous users can submit contact forms without authentication

  2. Changes
    - Remove existing INSERT policy that may be too restrictive
    - Add new policy that explicitly allows anonymous and authenticated users to insert
    - Keep existing SELECT policy for authenticated users unchanged
*/

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "allow_anonymous_insert_gracie_pike_contact" ON "Gracie_Pike_Contact";
DROP POLICY IF EXISTS "allow_authenticated_select_gracie_pike_contact" ON "Gracie_Pike_Contact";

-- Create new INSERT policy that allows both anonymous and authenticated users
CREATE POLICY "public_insert_gracie_pike_contact"
  ON "Gracie_Pike_Contact"
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Recreate SELECT policy for authenticated users
CREATE POLICY "authenticated_select_gracie_pike_contact"
  ON "Gracie_Pike_Contact"
  FOR SELECT
  TO authenticated
  USING (true);

-- Ensure RLS is enabled
ALTER TABLE "Gracie_Pike_Contact" ENABLE ROW LEVEL SECURITY;