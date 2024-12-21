/*
  # Initial Schema Setup

  1. New Tables
    - users (extends Supabase auth.users)
      - id (references auth.users)
      - full_name
      - phone_number
      - created_at
    
    - services
      - id
      - name
      - description
      - price_per_unit
      - unit_type
      - created_at
    
    - bookings
      - id
      - user_id (references users)
      - service_id (references services)
      - booking_date
      - status
      - notes
      - created_at

  2. Security
    - Enable RLS on all tables
    - Add policies for user access
*/

-- Users table extending auth.users
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT NOT NULL,
  phone_number TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON public.users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON public.users
  FOR UPDATE
  USING (auth.uid() = id);

-- Services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price_per_unit DECIMAL(10,2) NOT NULL,
  unit_type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are readable by everyone"
  ON public.services
  FOR SELECT
  TO authenticated
  USING (true);

-- Bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id),
  service_id UUID REFERENCES public.services(id),
  booking_date TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own bookings"
  ON public.bookings
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bookings"
  ON public.bookings
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Insert initial services
INSERT INTO public.services (name, description, price_per_unit, unit_type) VALUES
  ('Agricultural Spraying', 'Precision crop spraying services', 200.00, 'acre'),
  ('3D Mapping', 'High-resolution terrain mapping', 500.00, 'project'),
  ('Aerial Photography', 'Professional aerial photography', 300.00, 'hour');