import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';

type Props = {
  product: Product;
  showCartCTA?: boolean;
  cartCTAText?: string;
  handleCartCTA?: (e: MouseEvent) => Promise<void>;
};

const Product: React.FC<Props> = ({ product, showCartCTA, cartCTAText, handleCartCTA }) => {
  return (
    <div className='border p-4 mb-4'>
      <Link href={`/products/${product.id}`} className='block'>
        <div className='w-full h-48 overflow-hidden mb-3'>
          <Image
            src={`/${product.imageUrl}`}
            alt={product.name}
            width={200}
            height={200}
            className='w-full h-full object-cover'
          />
        </div>
        <h2 className='text-2xl font-semibold'>{product.name}</h2>
        <p className='text-gray-600 mt-1 mb-1'>{product.description}</p>
        <span className='text-lg font-bold text-green-600'>${product.price}</span>
        {showCartCTA && cartCTAText && (
          <div>
            <button onClick={handleCartCTA} className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
              {cartCTAText}
            </button>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Product;
