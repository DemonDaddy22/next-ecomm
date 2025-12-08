import Image from 'next/image';
import ProductNotFound from './not-found';
import { APP_BASE_URL } from '@/app/constants';

type Props = {
  params: { productId: string };
};

const ProductDetails: React.FC<Props> = async ({ params }) => {
  const response = await fetch(`${APP_BASE_URL}/api/products/${params.productId}`);
  const product = await response.json();

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
