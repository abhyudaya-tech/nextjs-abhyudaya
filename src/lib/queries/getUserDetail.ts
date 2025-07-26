import { supabase } from '@/lib/supabase'

export async function getUserDetail(id: string) {
    const { data, error } = await supabase
        .from('private_user_with_role_and_team')
        .select('*')
        .eq('user_id', id)
        .single()

    if (error) throw error

    // Fetch role history (without team)
    const { data: rolesData } = await supabase
        .from('role_history')
        .select('id, start_date,  end_date, role:role_id(name)')
        .eq('user_id', id).order('start_date', { ascending: false })

    return {
        ...data,
        roles: rolesData?.map((r) => ({
            id: r.id,
            role_name: r.role,
            start_date: r.start_date,
            end_date: r.end_date,
        })) || [],
    }
}
