import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-3 border-b border-gray-400'>
      <nav>
        <ul className='flex items-center justify-center gap-10 font-semibold text-orange-500'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/create'>Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;