'use client';

import Form from '@/components/Form/Form';

const CreateSnippet = () => {
  return (
    <div className='w-[640px] mx-auto pt-[50px]'>
      <h1 className='text-[24px] font-semibold mb-[24px] text-center'>Create Snippet</h1>
      <Form mode='create'/>
    </div>
  );
};

export default CreateSnippet;