'use client';

import { useEffect, useState } from 'react';
import Product from '../Product';

type Props = {
  initialCart: Array<Product>;
};

const Cart: React.FC<Props> = ({ initialCart }) => {
  const [cart, setCart] = useState<Array<Product>>(initialCart);

  useEffect(() => {
    setCart(initialCart);
  }, [initialCart]);

  return (
    <div className='max-w-lg flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        {cart.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
