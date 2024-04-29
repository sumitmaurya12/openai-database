import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const privateKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_SERVICE_ROLE_KEY`);

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);
const client = createClient(url, privateKey);

export async function GET(request:Request,context:any) {
  const { searchParams } = new URL(request.url);
  const orderIdParam = searchParams.get('orderId');
    if (!orderIdParam) {
      return NextResponse.json({
        data:"No order details found"
      });
  }
  const orderIds = orderIdParam.split(',');
        try {
          const orders = [];

          for (const orderId of orderIds) {
              const { data, error } = await client
                  .from('orders') // Replace 'orders' with your actual table name
                  .select('*')
                  .eq('order_id', orderId)
                  .single(); // Fetch a single row
      
              if (error) {
                  console.error('Error fetching order status:', error);
                  return NextResponse.json({
                    error:error
                  });
              }
      
              orders.push(data);
          }
            return NextResponse.json({
                data:orders
            })
    } catch (error) {
        console.log(error)
    }
}