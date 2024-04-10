import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const privateKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_SERVICE_ROLE_KEY`);

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);
const client = createClient(url, privateKey);

export async function GET(request:Request,context:any) {
        try {
            const { data, error } = await client
              .from('orders') // Replace 'orders' with your actual table name
              .select('*')
              .eq('order_id', 23599047)
              .single(); // Fetch a single row
            // console.log(data);
            if (error) {
                console.error('Error fetching order status:', error);
              }
            return NextResponse.json({
                data:data
            })
    } catch (error) {
        console.log(error)
    }
}