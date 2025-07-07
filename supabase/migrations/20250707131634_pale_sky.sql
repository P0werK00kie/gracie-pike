/*
  # Disable RLS for show_bookings table

  1. Changes
    - Drop all existing RLS policies on `show_bookings` table
    - Disable Row Level Security completely
    - This allows unrestricted access for all operations (INSERT, SELECT, UPDATE, DELETE)

  2. Security Impact
    - This table will now accept operations from any source without restrictions
    - No authentication or authorization checks will be performed
    - Suitable for public booking forms where anonymous submissions are desired
*/

-- Drop all existing policies on show_bookings table
DROP POLICY IF EXISTS "Allow public insert on show bookings" ON show_bookings;
DROP POLICY IF EXISTS "Allow anonymous users to insert show bookings" ON show_bookings;
DROP POLICY IF EXISTS "Allow anon and public to insert show bookings" ON show_bookings;
DROP POLICY IF EXISTS "Anyone can insert show bookings" ON show_bookings;
DROP POLICY IF EXISTS "Authenticated users can view their own show bookings" ON show_bookings;

-- Disable Row Level Security for the show_bookings table
ALTER TABLE show_bookings DISABLE ROW LEVEL SECURITY;