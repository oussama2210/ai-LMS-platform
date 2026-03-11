import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";


export const CreateSupabaseClient = async () => {
    const supabase = await createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            async accessToken() {
                return ((await auth()).getToken())
            }
        }
    );
    return supabase;
}