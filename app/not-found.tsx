import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center p-10'>
      <h1 className='text-4xl text-red-800 font-bold'>404 | Page not found</h1>
      <Link href='/products' className='text-blue-600'>
        Go to products
      </Link>
    </div>
  );
};

export default NotFoundPage;
