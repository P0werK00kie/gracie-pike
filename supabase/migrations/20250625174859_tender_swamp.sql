/*
  # Create Gracie Pike Contact table

  1. New Tables
    - `Gracie_Pike_Contact`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `Gracie_Pike_Contact` table
    - Add policy for public submissions
    - Add policy for authenticated users to read submissions

  3. Changes
    - Creates new dedicated table for Gracie Pike contact submissions
    - Includes automatic timestamp management
    - Proper security policies for contact form functionality
*/

CREATE TABLE IF NOT EXISTS "Gracie_Pike_Contact" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE "Gracie_Pike_Contact" ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit to Gracie Pike contact form"
  ON "Gracie_Pike_Contact"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy to allow authenticated users to read contact submissions
CREATE POLICY "Authenticated users can read Gracie Pike contact submissions"
  ON "Gracie_Pike_Contact"
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_gracie_pike_contact_updated_at
  BEFORE UPDATE ON "Gracie_Pike_Contact"
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();