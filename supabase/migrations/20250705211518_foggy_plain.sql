/*
  # Create show_bookings table

  1. New Tables
    - `show_bookings`
      - `id` (int8, primary key)
      - `created_at` (timestamp with timezone)
      - `full_name` (text, not null)
      - `phone_number` (text, not null)
      - `email` (text, not null)
      - `preferred_date` (date, not null)
      - `preferred_time` (time, not null)
      - `message` (text, optional)

  2. Security
    - Enable RLS on `show_bookings` table
    - Add policy for public insert access
    - Add policy for authenticated users to view their own bookings
*/

CREATE TABLE IF NOT EXISTS show_bookings (
  id bigserial PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  full_name text NOT NULL,
  phone_number text NOT NULL,
  email text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time time NOT NULL,
  message text
);

ALTER TABLE show_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert show bookings"
  ON show_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

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