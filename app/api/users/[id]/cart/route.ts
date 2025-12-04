import { products } from '@/app/data/products';
import { NextRequest } from 'next/server';

type Cart = Record<string, Array<string>>;

type Params = Id;

const carts: Cart = {
  '1': ['456', '123'],
  '2': ['345', '123', '234'],
  '3': ['234'],
};

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { id: userId } = params;

  const userCart = carts[userId] || [];
  const cartProducts = products.filter(product => userCart.includes(product.id));

  return new Response(JSON.stringify(cartProducts), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}

export async function POST(request: NextRequest, { params }: { params: Params }) {
  try {
    const { id: userId } = params;
    const body = await request.json();
    const { productId } = body;

    carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];
    const cartProducts = products.filter(product => carts[userId].includes(product.id));

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
    const { id: userId } = params;
    const body = await request.json();
    const { productId } = body;

    carts[userId] = carts[userId]?.filter(id => id !== productId) || [];
    const cartProducts = products.filter(product => carts[userId].includes(product.id));

    return new Response(JSON.stringify(cartProducts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response('Internal server error', { status: 500 });
  }
}
