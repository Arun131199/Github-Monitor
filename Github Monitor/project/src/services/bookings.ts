import { supabase } from './supabase';

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  bookingDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export const createBooking = async (
  serviceId: string,
  bookingDate: Date,
  notes?: string
): Promise<Booking> => {
  const { data: booking, error } = await supabase
    .from('bookings')
    .insert([
      {
        service_id: serviceId,
        booking_date: bookingDate.toISOString(),
        notes,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return {
    id: booking.id,
    userId: booking.user_id,
    serviceId: booking.service_id,
    bookingDate: new Date(booking.booking_date),
    status: booking.status,
    notes: booking.notes,
  };
};

export const getUserBookings = async (): Promise<Booking[]> => {
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select(`
      *,
      services (
        name,
        price_per_unit,
        unit_type
      )
    `)
    .order('booking_date', { ascending: false });

  if (error) throw error;

  return bookings.map(booking => ({
    id: booking.id,
    userId: booking.user_id,
    serviceId: booking.service_id,
    bookingDate: new Date(booking.booking_date),
    status: booking.status,
    notes: booking.notes,
  }));
};