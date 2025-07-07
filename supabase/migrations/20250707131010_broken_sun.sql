/*
  # Fix show_bookings RLS policy for anonymous users

  1. Security Changes
    - Drop existing INSERT policy that only allows 'public' role
    - Create new INSERT policy that allows both 'anon' and 'public' roles
    - This enables unauthenticated users to submit show booking requests

  2. Policy Details
    - Allows anonymous users to insert show booking requests
    - Maintains security by only allowing INSERT operations
    - No changes to SELECT policy (still requires authentication to view)
*/

-- Drop the existing INSERT policy
DROP POLICY IF EXISTS "Allow anon and public to insert show bookings" ON show_bookings;

-- Create new INSERT policy that allows both anon and public roles
CREATE POLICY "Allow anon and public to insert show bookings"
  ON show_bookings
  FOR INSERT
  TO anon, public
  WITH CHECK (true);