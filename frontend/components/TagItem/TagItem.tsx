import css from './TagItem.module.css'

interface TagItemProps {
  tag: string
  onClick: (tag: string) => void
  selected: boolean
}

const TagItem = ({ tag, onClick, selected }: TagItemProps) => {  
  return <li onClick={() => onClick(tag)}>
    <button className={`${css.tagButton} ${selected ? css.selected : ''}`}>
      {tag}
    </button>
  </li>
}

export default TagItem