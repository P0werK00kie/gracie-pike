/*
  # Fix RLS policy for Gracie_Pike_Contact table

  1. Security Changes
    - Drop the existing INSERT policy that only allows 'public' role
    - Create a new INSERT policy that allows both 'anon' and 'public' roles
    - This enables the contact form to work for anonymous users visiting the website

  2. Policy Details
    - Policy name: "allow_anon_and_public_insert_gracie_pike_contact_fixed"
    - Allows INSERT operations for both anonymous and public users
    - Uses WITH CHECK (true) to allow all inserts from these roles
*/

-- Drop the existing policy that only allows 'public' role
DROP POLICY IF EXISTS "allow_anon_and_public_insert_gracie_pike_contact" ON "Gracie_Pike_Contact";

-- Create a new policy that allows both 'anon' and 'public' roles to insert
CREATE POLICY "allow_anon_and_public_insert_gracie_pike_contact_fixed"
  ON "Gracie_Pike_Contact"
  FOR INSERT
  TO anon, public
  WITH CHECK (true);