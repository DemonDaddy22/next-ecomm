import { products } from '@/app/data/products';

export async function GET() {
  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
