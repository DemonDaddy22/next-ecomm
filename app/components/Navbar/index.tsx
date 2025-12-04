import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='w-full p-4 bg-teal-900 text-white flex justify-between items-center'>
      <div className='flex gap-4'>
        <Link href='/products' className='hover:underline hover:text-yellow-100'>
          Products
        </Link>
        <Link href='/cart' className='hover:underline hover:text-yellow-100'>
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
