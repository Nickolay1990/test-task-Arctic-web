import SnippetList from "@/components/SnippetList/SnippetList"
import { getAllSnippets } from "@/lib/api"
import css from './page.module.css'

const Home = async () => {
  const { data } = await getAllSnippets()
  
  return <div className={css.wrapper}>
      <SnippetList snippets={data}/>
    </div>
}

export default Home