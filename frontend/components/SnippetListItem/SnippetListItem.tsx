import { Snippet } from '@/types/snippet.type'
import TagsList from '../TagsList/TagsList';
import Link from 'next/link';

interface SnippetListItemProps {
  snippet : Snippet
}

const SnippetListItem = ({ snippet }: SnippetListItemProps) => {  
  return <li key={snippet._id}
          className='border border-gray-400 p-2.5 flex flex-col gap-1.5 relative rounded-[10px]'>
            <h3 className='font-bold text-base text-center'>{snippet.title}</h3>
            <p className='text-sm'>{snippet.content}</p>
            <p className='text-sm'>Type: <span className='text-[#5579cc]'>{snippet.type}</span></p>
            {
              snippet.tags &&
              snippet.tags.length > 0 &&
              <TagsList id={snippet._id} tags={snippet.tags} />
            }
            <p className='text-sm'>
              Last update 
              <span className='text-[#5579cc]'> {snippet.updatedAt?.split('.')[0]}</span>
            </p>
            <Link href={`snippets/${snippet._id}`}
              className='bg-orange-500 rounded-[10px] text-white p-1.5 absolute right-[5px] bottom-[5px]'>
              Details
            </Link>
        </li>
      }


export default SnippetListItem