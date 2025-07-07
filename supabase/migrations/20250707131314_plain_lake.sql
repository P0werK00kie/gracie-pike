/*
  # Fix RLS policies for show_bookings table

  1. Security Changes
    - Drop existing restrictive policies
    - Add new policy to allow anonymous users to insert show bookings
    - Keep existing policy for authenticated users to view their own bookings
  
  This allows the "Book a Show" form to work for anonymous visitors while maintaining
  security for viewing existing bookings.
*/

-- Drop existing policies that might be causing conflicts
DROP POLICY IF EXISTS "Allow anon and public to insert show bookings" ON show_bookings;
DROP POLICY IF EXISTS "Authenticated users can view their own show bookings" ON show_bookings;

-- Create new policy to allow anonymous users to insert show bookings
CREATE POLICY "Allow anonymous users to insert show bookings"
  ON show_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for authenticated users to view their own bookings
CREATE POLICY "Authenticated users can view their own show bookings"
  ON show_bookings
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT auth.uid()
      FROM auth.users
      WHERE users.email = show_bookings.email
    )
  );