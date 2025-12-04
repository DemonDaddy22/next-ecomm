import { products } from '@/app/data/products';
import Image from 'next/image';
import { useMemo } from 'react';
import ProductNotFound from './not-found';

type Props = {
  params: { productId: string };
};

const ProductDetails: React.FC<Props> = ({ params }) => {
  const product = useMemo(() => {
    const foundProduct = products.find(p => p.id === params.productId);
    return foundProduct;
  }, [params.productId]);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className='max-w-6xl flex gap-6'>
      <Image
        src={`/${product.imageUrl}`}
        alt={product.name}
        width={500}
        height={500}
        className='object-cover shadow rounded'
      />
      <div className='flex flex-col gap-2 p-8'>
        <h2 className='text-2xl font-semibold'>{product.name}</h2>
        <p className='text-gray-600 mt-1 mb-1'>{product.description}</p>
        <span className='text-lg font-bold text-green-600'>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
