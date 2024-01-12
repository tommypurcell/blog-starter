import { supabaseClient } from './supabaseClient';


export const getAllPosts = async({token}) => {
    try {
        const supabase = await supabaseClient(token);
        const { data: posts, error } = await supabase.from("posts").select("*");

        if (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }

        return posts;
    } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in getTodos:', error);
        return null; // or handle the error as appropriate
    }
}
