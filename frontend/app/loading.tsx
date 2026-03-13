import { BarLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='w-[640px] mx-auto flex-1 p-30 flex-1'>
            <p className='text-xl mb-2.5 text-center'>Loading, please wait...</p>
            <BarLoader
                cssOverride={{
                    display: 'block',
                    margin: '0 auto',
                    backgroundColor: 'orange',
                    width: '100%',
                }}
            />
        </div>
    );
};

export default Loading;
