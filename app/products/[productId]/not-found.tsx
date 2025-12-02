import Link from 'next/link';

const ProductNotFound = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center p-10'>
      <h1 className='text-4xl text-red-800 font-bold'>Product Not Found</h1>
      <Link href='/products' className='text-blue-600'>
        Go to products
      </Link>
    </div>
  );
};

export default ProductNotFound;
