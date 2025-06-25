/*
  # Fix RLS Policy for Gracie Pike Contact Form

  1. Security Changes
    - Update the existing INSERT policy to allow both 'anon' and 'public' roles
    - This enables unauthenticated users to submit contact forms through the frontend

  2. Changes Made
    - Modify the `public_insert_gracie_pike_contact` policy to include 'anon' role
    - Keep existing functionality intact for authenticated users
*/

-- Drop the existing policy
DROP POLICY IF EXISTS "public_insert_gracie_pike_contact" ON public."Gracie_Pike_Contact";

-- Create a new policy that allows both anon and public roles to insert
CREATE POLICY "allow_anon_and_public_insert_gracie_pike_contact"
  ON public."Gracie_Pike_Contact"
  FOR INSERT
  TO anon, public
  WITH CHECK (true);