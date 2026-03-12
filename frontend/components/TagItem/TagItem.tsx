import css from './TagItem.module.css'

interface TagItemProps {
  tag: string
  onClick: (tag: string) => void
}

const TagItem = ({ tag, onClick }: TagItemProps) => {
  return <li onClick={() => onClick(tag)}>
    <button className={css.tagButton}>
      {tag}
    </button>
  </li>
}

export default TagItem