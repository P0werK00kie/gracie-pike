/*
  # Fix show_bookings RLS policy

  1. Changes
    - Drop existing "Anyone can insert show bookings" policy
    - Create new policy that allows both anon and public roles to insert bookings

  2. Security
    - Allow unauthenticated users (anon role) to submit booking forms
    - Maintain existing policy for authenticated users to view their own bookings
*/

-- Drop the existing policy that only allows public role
DROP POLICY IF EXISTS "Anyone can insert show bookings" ON show_bookings;

-- Create new policy that allows both anon and public roles to insert
CREATE POLICY "Allow anon and public to insert show bookings"
  ON show_bookings
  FOR INSERT
  TO anon, public
  WITH CHECK (true);