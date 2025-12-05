import { connectToDatabase } from '@/app/api/db';
import { NextRequest } from 'next/server';

type Params = Id;

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { db } = await connectToDatabase();

  const { id: userId } = params;
  const cart = await db.collection('carts').findOne({ userId });
  if (!cart) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  }

  const cartProducts = await db
    .collection('products')
    .find({ id: { $in: cart.productIds || [] } })
    .toArray();

  return new Response(JSON.stringify(cartProducts), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}

export async function POST(request: NextRequest, { params }: { params: Params }) {
  try {
    const { db } = await connectToDatabase();

    const { id: userId } = params;
    const body = await request.json();
    const { productId } = body;

    const cart = await db
      .collection('carts')
      .findOneAndUpdate({ userId }, { $push: { productIds: productId } }, { upsert: true, returnDocument: 'after' });
    const cartProducts = await db
      .collection('products')
      .find({ id: { $in: cart?.productIds || [] } })
      .toArray();

    return new Response(JSON.stringify(cartProducts), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response('Internal server error', { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
  try {
    const { db } = await connectToDatabase();

    const { id: userId } = params;
    const body = await request.json();
    const { productId } = body;

    const cart = await db
      .collection('carts')
      .findOneAndUpdate({ userId }, { $pull: { productIds: productId } }, { returnDocument: 'after' });
    const cartProducts = await db
      .collection('products')
      .find({ id: { $in: cart?.productIds || [] } })
      .toArray();

    return new Response(JSON.stringify(cartProducts), {
      status: 202,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response('Internal server error', { status: 500 });
  }
}
