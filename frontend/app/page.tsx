import SnippetList from '@/components/SnippetList/SnippetList'
import { getAllSnippets, getAllTags } from '@/lib/api'
import Filters from '@/components/Filters/Filter'

interface HomeProps {
  searchParams: {
    tags?: string
    q?: string
    page?: number
  }
}

const Home = async ({ searchParams }: HomeProps) => {
  const params = await searchParams
  const selectedTags = params.tags?.split(',') || []
  const searchQuery = params.q || ''
  const requestPage = params.page || 1
  
  const resSnippets = await getAllSnippets(selectedTags, searchQuery, requestPage)
  const resTags = await getAllTags()
  
  return <div className='flex gap-3 p-2.5 relative'>
      <SnippetList snippets={resSnippets.data} totalCount={resSnippets.total} currentPage={resSnippets.page} />
      <Filters tags={resTags.data} selectedTags={selectedTags}/>
    </div>
}

export default Home


