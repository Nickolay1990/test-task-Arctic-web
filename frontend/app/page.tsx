import SnippetList from "@/components/SnippetList/SnippetList"
import { getAllSnippets, getAllTags } from "@/lib/api"
import css from './page.module.css'
import Filters from "@/components/Filters/Filter"

interface HomeProps {
  searchParams: {
    tags?: string
  }
}

const Home = async ({ searchParams }: HomeProps) => {
  const params = await searchParams
  const selectedTags = params.tags?.split(",") || []
  const resSnippets = await getAllSnippets(selectedTags)
  const resTags = await getAllTags()
  
  return <div className={css.wrapper}>
      <SnippetList snippets={resSnippets.data} />
      <Filters tags={resTags.data} selectedTags={selectedTags}/>
    </div>
}

export default Home