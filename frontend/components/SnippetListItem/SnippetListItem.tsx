import { Snippet } from "@/types/snippet.type"
import TagsList from "../TagsList/TagsList";
import css from './SnippetLIstItem.module.css'

interface SnippetListItemProps {
  snippet : Snippet
}

const SnippetListItem = ({ snippet }: SnippetListItemProps) => {  
  return <li key={snippet._id} className={css.item}>
            <h3 className={css.title}>{snippet.title}</h3>
            <p className={css.content}>{snippet.content}</p>
            <p className={css.type}>{snippet.type}</p>
            {
              snippet.tags &&
              snippet.tags.length > 0 &&
              <TagsList id={snippet._id} tags={snippet.tags} />
            }
        </li>
      }


export default SnippetListItem