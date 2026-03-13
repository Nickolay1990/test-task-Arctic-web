'use client';

type Props = {
    error: Error;
    reset: () => void;
};

const Error = ({ error, reset }: Props) => {
    return (
        <div className='flex flex-col items-center justify-center gap-10 flex-1'>
            <h2 className='font-semibold text-5xl text-red-600'>Error loading data</h2>
            <p className='text-2xl'>{error.message}</p>
            <button className='text-xl text-white bg-red-600 p-2.5 rounded-xl'
             onClick={reset}>
                Try again
            </button>
        </div>
    );
};

export default Error;
