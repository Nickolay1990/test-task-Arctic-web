'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Form from '@/components/Form/Form';
import { getSnippetById } from '@/lib/api';
import { Snippet } from '@/types/snippet.type';
import Loading from '@/app/loading';

const EditSnippet = () => {
  const [snippet, setSnippet] = useState<Snippet | null>(null);

  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const fetchSnippet = async () => {
      const { data } = await getSnippetById(id);
      setSnippet(data);
    };

    if (id) {
      fetchSnippet();
    }
  }, [id]);

  if (!snippet) {
    return <Loading/>
  }

  return (
    <div className='w-[640px] mx-auto pt-[24px]'>
      <h2 className='text-2xl font-semibold text-center mb-5'>Update Snippet</h2>
      <Form mode='update'
        snippetContent={snippet.content}
        snippetTags={snippet.tags.join(', ')}
        snippetTitle={snippet.title}
        snippetType={snippet.type}
        id={snippet._id}      
      />
    </div>
  );
};

export default EditSnippet;