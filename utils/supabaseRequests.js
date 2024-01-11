import { supabaseClient } from './supabaseClient';

export const getTodos = async({userId, token}) => {
    try {
        const supabase = await supabaseClient(token);
        const { data: todos, error } = await supabase.from("todos").select("*").eq("user_id", userId);

        if (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }

        return todos;
    } catch (error) {
        // Handle or log the error appropriately
        console.error('Error in getTodos:', error);
        return null; // or handle the error as appropriate
    }
}

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
