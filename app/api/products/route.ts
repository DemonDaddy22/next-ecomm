import { connectToDatabase } from '../db';

export async function GET() {
  const { db } = await connectToDatabase();
  const products = await db.collection('products').find({}).toArray();

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
