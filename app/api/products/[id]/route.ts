import { NextRequest } from 'next/server';
import { connectToDatabase } from '../../db';

type Params = Id;

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { db } = await connectToDatabase();
  const { id: productId } = params;

  const product = await db.collection('products').findOne({ id: productId });

  return new Response(JSON.stringify(product || null), {
    headers: { 'Content-Type': 'application/json' },
    status: product ? 200 : 404,
  });
}
