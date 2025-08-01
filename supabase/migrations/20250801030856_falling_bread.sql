/*
  # Create event_rsvps table for RSVP functionality

  1. New Tables
    - `event_rsvps`
      - `id` (bigserial, primary key)
      - `created_at` (timestamptz, default now())
      - `event_title` (text, not null)
      - `event_date` (date, not null)
      - `event_time` (text, not null)
      - `attendee_name` (text, not null)
      - `attendee_email` (text, not null)
      - `location` (text, not null)

  2. Security
    - Disable RLS to allow public RSVP submissions
    - This allows anonymous users to RSVP for events
*/

CREATE TABLE IF NOT EXISTS event_rsvps (
  id bigserial PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  event_title text NOT NULL,
  event_date date NOT NULL,
  event_time text NOT NULL,
  attendee_name text NOT NULL,
  attendee_email text NOT NULL,
  location text NOT NULL
);

-- Disable Row Level Security to allow public RSVP submissions
ALTER TABLE event_rsvps DISABLE ROW LEVEL SECURITY;