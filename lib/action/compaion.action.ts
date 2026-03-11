import { auth } from "@clerk/nextjs/server";
import { CreateSupabaseClient } from "../supabase";
import { SupabaseClient } from "@supabase/supabase-js";


export const createCompanion = async (formdata: CreateCompanion) => {


    const { userId: authorId } = await auth();
    const supabase = await CreateSupabaseClient();
    const { data, error } = await supabase
        .from('compation')
        .insert({ ...formdata, authorId })
        .select();

    if (error || !data) throw new Error(error?.message || "Failed to create companion");

    return data[0];

}