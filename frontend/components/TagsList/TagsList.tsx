import TagsListItem from "../TagsListItem/TagsListItem"
import css from './TagsList.module.css'

interface TagsListProps {
  tags: string[];
  id: string;
}

const TagsList = ({ tags, id }: TagsListProps) => {
  return <div>
    <p className={css.title}>Tags:</p>
  <ul className={css.tagList}>
    {tags.map(tag => {
      return <TagsListItem tag={tag} key={`${tag} ${id}`}/>
    })}
  </ul>
    </div>
}

export default TagsList