import { supabase } from '@/app/lib/supabase'

// lib/queries/getUsersWithCurrentRoles.ts
export type UserWithRoleAndTeam = {
  user_id: string;
  full_name: string;
  bio?: string;
  role_name: string;
  role_description?: string;
  role_bio?: string;
  team_id?: string;
  team_name?: string;
};


export async function getUsersWithCurrentRoles(): Promise<UserWithRoleAndTeam[]> {
  const { data, error } = await supabase
    .from('users_with_current_roles_with_team')
    .select('*')

  if (error) throw error
  return data as UserWithRoleAndTeam[]
}