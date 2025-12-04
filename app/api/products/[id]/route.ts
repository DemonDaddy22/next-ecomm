import { products } from '@/app/data/products';
import { NextRequest } from 'next/server';

type Params = Id;

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { id: productId } = params;

  const product = products.find(p => p.id === productId);

  return new Response(JSON.stringify(product || null), {
    headers: { 'Content-Type': 'application/json' },
    status: product ? 200 : 404,
  });
}
