import { useAuth } from '@clerk/clerk-react';
import { createClient } from "@supabase/supabase-js";

import { useState } from 'react';
 
const supabaseClient = async (supabaseAccessToken) => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    });
    // set Supabase JWT on the client object,
    // so it is sent up with all Supabase requests
    return supabase;
  };
  
export default function SupabaseTest() {


  const { getToken } = useAuth();
 
  const [todoData, setTodoData] = useState([]);
  const [todoError, setTodoError] = useState([])

  const fetchData = async () => {
    // TODO #1: Replace with your JWT template name
    const supabaseAccessToken = await getToken({ template: 'supabase' });
 
    const supabase = await supabaseClient(supabaseAccessToken);
    
    // TODO #2: Replace with your database table name
    
    const { data, error } = await supabase.from('todos').select();
    console.log('data==>', data)
    // TODO #3: Handle the response

    setTodoData(data)
  };


 
  return (
    <div className="app">
      <button onClick={fetchData}>Fetch data</button>
      {todoData.map((todoItem, index) => 
        <div key={index} className='flex flex-col'>
            {todoItem}
        </div>
      )}
    </div>
  );
}