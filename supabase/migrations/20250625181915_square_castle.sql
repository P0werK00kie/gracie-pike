/*
  # Disable RLS for Gracie_Pike_Contact table

  1. Changes
    - Disable Row Level Security on `Gracie_Pike_Contact` table
    - This allows unrestricted access for all operations (INSERT, SELECT, UPDATE, DELETE)
    - Removes the security restriction that was preventing contact form submissions

  2. Security Impact
    - This table will now accept insertions from any source
    - No authentication or authorization checks will be performed
    - Suitable for public contact forms where anonymous submissions are desired
*/

-- Disable Row Level Security for the Gracie_Pike_Contact table
ALTER TABLE "Gracie_Pike_Contact" DISABLE ROW LEVEL SECURITY;