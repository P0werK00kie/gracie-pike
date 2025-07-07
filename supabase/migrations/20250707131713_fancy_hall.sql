/*
  # Disable RLS for show_bookings table

  1. Security Changes
    - Drop all existing RLS policies on show_bookings table
    - Disable Row Level Security completely
    - Allow unrestricted access to the table for all operations

  2. Changes Made
    - Remove all INSERT and SELECT policies
    - Disable RLS to allow public form submissions without authentication
*/

-- Drop all existing policies on show_bookings table
DROP POLICY IF EXISTS "Allow public insert on show bookings" ON show_bookings;
DROP POLICY IF EXISTS "Anyone can insert show bookings" ON show_bookings;
DROP POLICY IF EXISTS "Authenticated users can view their own show bookings" ON show_bookings;

-- Disable Row Level Security for the show_bookings table
ALTER TABLE show_bookings DISABLE ROW LEVEL SECURITY;