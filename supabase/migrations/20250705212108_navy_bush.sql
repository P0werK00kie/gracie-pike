/*
  # Add location field to show bookings table

  1. Changes
    - Add `location` column to `show_bookings` table for city & state information
    - Column is required (NOT NULL) as it's essential for show booking logistics

  2. Security
    - No changes to existing RLS policies needed
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'show_bookings' AND column_name = 'location'
  ) THEN
    ALTER TABLE show_bookings ADD COLUMN location text NOT NULL DEFAULT '';
    
    -- Remove the default after adding the column
    ALTER TABLE show_bookings ALTER COLUMN location DROP DEFAULT;
  END IF;
END $$;