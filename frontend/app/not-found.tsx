import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-20 p-20 flex-1'>
            <h1 className='font-semibold text-5xl text-red-600'>Page not found</h1>
              <Link href={'/'} className='text-white bg-red-600 p-2.5 rounded-xl'>Go home</Link>
        </div>
    );
}

export default NotFound