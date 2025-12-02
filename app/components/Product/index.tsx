import Image from 'next/image';
import Link from 'next/link';

type Props = {
  product: Product;
};

const Product: React.FC<Props> = ({ product }) => {
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
      </Link>
    </div>
  );
};

export default Product;
