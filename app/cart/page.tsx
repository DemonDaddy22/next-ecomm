'use client';

import { useMemo, useState } from 'react';
import { products } from '../data/products';
import Product from '../components/Product';

const Cart: React.FC = () => {
  const [productIds, setProductIds] = useState<Array<string>>(['123', '456']);

  const cartProducts = useMemo(() => {
    const foundProducts = [];
    for (const id of productIds) {
      const product = products.find(p => p.id === id);
      if (product) {
        foundProducts.push(product);
      }
    }
    return foundProducts;
  }, [productIds]);

  return (
    <div className='max-w-lg flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        {cartProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
