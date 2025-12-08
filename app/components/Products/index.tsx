'use client';

import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Product from '../Product';
import { APP_BASE_URL } from '@/app/constants';

type Props = {
  products: Array<Product>;
  cart: Array<Product>;
};

const Products: React.FC<Props> = ({ products, cart: initialCart }) => {
  const [cart, setCart] = useState<Array<Product>>(initialCart);

  const router = useRouter();

  const handleCartCTA = async (e: MouseEvent, id: string, isProductInCart: boolean) => {
    e.stopPropagation();
    e.preventDefault();
    const response = await fetch(`${APP_BASE_URL}/api/users/2/cart`, {
      method: isProductInCart ? 'DELETE' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: id }),
    });
    const updatedCart = await response.json();
    setCart(updatedCart);
    router.refresh();
  };

  const isInCart = (productId: string) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <section className='max-w-5xl grid grid-cols-3 gap-4'>
      {products?.map(product => (
        <Product
          key={product.id}
          product={product}
          showCartCTA
          handleCartCTA={e => handleCartCTA(e, product.id, isInCart(product.id))}
          cartCTAText={isInCart(product.id) ? 'Remove from cart' : 'Add to cart'}
        />
      ))}
    </section>
  );
};

export default Products;
