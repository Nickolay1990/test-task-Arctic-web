import { Snippet } from '@/types/snippet.type'
import SnippetListItem from '../SnippetListItem/SnippetListItem';
import Pagination from '../Pagination/Pagination';

interface SnippetListProps {
  snippets: Snippet[];
  totalCount: number;
  currentPage: number;
}

const SnippetList = ({ snippets, totalCount, currentPage }: SnippetListProps) => { 
  return <div className='w-[80%] flex flex-col min-h-[90vh]'>
    {snippets && snippets.length > 0 ? 
      <>
        <h2 className='text-center font-semibold text-2xl mb-2.5'>Snippet List</h2>
        <ul className='flex flex-col gap-2.5'>
          {snippets.map(snippet => {
            return <SnippetListItem key={snippet._id} snippet={snippet}/>
          })}
        </ul>
        <Pagination currentPage={currentPage} totalCount={totalCount} />
      </>
      : 
      <p className='text-center font-semibold text-2xl pt-10'>Snippets not found</p>
  }
  </div>
}

export default SnippetList