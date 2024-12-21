import { supabase } from './supabase';

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
}

export const signUp = async (
  email: string,
  password: string,
  fullName: string,
  phoneNumber?: string
): Promise<AuthUser> => {
  const { data: auth, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) throw signUpError;

  const { error: profileError } = await supabase
    .from('users')
    .insert([
      {
        id: auth.user!.id,
        full_name: fullName,
        phone_number: phoneNumber,
      },
    ]);

  if (profileError) throw profileError;

  return {
    id: auth.user!.id,
    email,
    fullName,
    phoneNumber,
  };
};

export const signIn = async (
  email: string,
  password: string
): Promise<AuthUser> => {
  const { data: auth, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) throw signInError;

  const { data: profile, error: profileError } = await supabase
    .from('users')
    .select('*')
    .eq('id', auth.user!.id)
    .single();

  if (profileError) throw profileError;

  return {
    id: auth.user!.id,
    email: auth.user!.email!,
    fullName: profile.full_name,
    phoneNumber: profile.phone_number,
  };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};