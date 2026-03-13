'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSnippet, updateSnippet } from '@/lib/api';
import { SnippetType } from '@/types/snippet.type';


interface FormProps{
  mode: 'create' | 'update';
  snippetTitle?: string;
  snippetContent?: string;
  snippetTags?: string;
  snippetType?: SnippetType;
  id?: string
}

const Form = ({mode, snippetTitle, snippetContent, snippetTags, snippetType, id}: FormProps) => {
  const router = useRouter();

  const [title, setTitle] = useState(snippetTitle || '');
  const [content, setContent] = useState(snippetContent || '');
  const [tags, setTags] = useState(snippetTags || '');
  const [type, setType] = useState<SnippetType>(snippetType || SnippetType.COMMAND);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }

    const formattedTags = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(Boolean);

    try {
      setLoading(true);

      if (mode === 'create') { 
        await createSnippet({
          title,
          content,
          tags: formattedTags,
          type,
        })
      }
      else if(mode === 'update' && id) {
        await updateSnippet(id, {
          title,
          content,
          tags: formattedTags,
          type,
        })
      }

      const route = mode === 'create' ? '/' : `/snippets/${id}`
      
      router.push(route);
      router.refresh();
    } catch {
      setError(mode === 'create' ? 'Failed to create snippet' : 'Failed to update snippet');
    } finally {
      setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='flex flex-col'>
          <label className='mb-2 font-medium'>Title</label>

          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='border border-orange-400 rounded-[8px] px-2.5 py-[8px] outline-none text-sm'
            placeholder='Snippet title'
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2 font-medium'>Content</label>

          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className='border border-orange-400 rounded-[8px] px-2.5 py-[8px] min-h-[120px] text-sm'
            placeholder='Paste your snippet here...'
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2 font-medium'>Tags</label>

          <input
            type='text'
            value={tags}
            onChange={e => setTags(e.target.value)}
            className='border border-orange-400 rounded-[8px] px-2.5 py-[8px] outline-none text-sm'
            placeholder='react, api, docker'
          />

          <p className='mt-0.5 text-xs text-gray-400 pl-1'>Separate tags with commas</p>
        </div>

        <div className='flex flex-col'>
          <label className='mb-2 font-medium'>Type</label>

          <select
            value={type}
            onChange={e => setType(e.target.value as SnippetType)}
            className='border border-orange-400 rounded-[10px] px-2.5 py-[8px] outline-none text-sm'
          >
            <option value={SnippetType.NOTE}>Note</option>
            <option value={SnippetType.LINK}>Link</option>
            <option value={SnippetType.COMMAND}>Command</option>
          </select>
        </div>

        {error && <div className='text-red-600 text-xs'>{error}</div>}

        <button
          type='submit'
          disabled={loading}
          className='font-semibold bg-orange-400 text-white px-4 py-2.5 rounded-[10px] text-sx disabled:opacity-60 disabled:cursor-not-allowed'
      >
        {mode === 'create' && 
          <p>{loading ? 'Creating...' : 'Create Snippet'}</p>
        }
        {mode === 'update' && 
          <p>{loading ? 'Updating...' : 'Update Snippet'}</p>
        }
        </button>
      </form>
  );
};

export default Form;