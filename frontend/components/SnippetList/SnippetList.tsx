import { Snippet } from "@/types/snippet.type"
import SnippetListItem from "../SnippetListItem/SnippetListItem";
import css from './SnippetLIst.module.css'

interface SnippetListProps {
  snippets : Snippet[]
}

const SnippetList = ({ snippets }: SnippetListProps) => {   
  return <div className={css.wrapperSnippets}>
    <h2 className={css.title}>Snippet List</h2>
    <ul className={css.list}>
      {snippets.map(snippet => {
        return <SnippetListItem key={snippet._id} snippet={snippet}/>
      })}
    </ul>
  </div>
}

export default SnippetList