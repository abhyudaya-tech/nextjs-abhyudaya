import { supabase } from '@/lib/supabase'

// lib/queries/getUsersWithCurrentRoles.ts
export type UserWithRoleAndTeam = {
  user_id: string;
  full_name: string;
  bio?: string;
  phone?: string;
  email?: string;
  address?: string;
  responsibility?: string;
  joining_date: string;
  is_active: boolean;
  role_name: string;
  role_description?: string;
  role_bio?: string;
  team_id?: string;
  team_name?: string;
};


export async function getUsersWithCurrentRoles(): Promise<UserWithRoleAndTeam[]> {
  const { data, error } = await supabase
    .from('public_user_with_role_and_team')
    .select('*')
    .order('full_name', { ascending: true })

  if (error) throw error
  return data as UserWithRoleAndTeam[]
}

export async function getAllUsers(): Promise<UserWithRoleAndTeam[]> {
  const { data, error } = await supabase
    .from('private_user_with_role_and_team')
    .select('*')
    .order('full_name', { ascending: true })

  if (error) throw error
  return data as UserWithRoleAndTeam[]
}