/*
  # Fix show bookings RLS policy

  1. Security Changes
    - Update RLS policy to allow anonymous users to insert show bookings
    - This allows the public booking form to work without authentication

  2. Changes Made
    - Drop existing restrictive INSERT policy
    - Create new policy allowing both anonymous and authenticated users to insert
*/

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Allow anonymous users to insert show bookings" ON show_bookings;

-- Create a new policy that allows both anonymous and authenticated users to insert
CREATE POLICY "Allow public insert on show bookings"
  ON show_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);