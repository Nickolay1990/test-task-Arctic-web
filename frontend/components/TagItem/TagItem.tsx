interface TagItemProps {
  tag: string
  onClick: (tag: string) => void
  selected: boolean
}

const TagItem = ({ tag, onClick, selected }: TagItemProps) => {  
  return <li onClick={() => onClick(tag)}>
    <button className={`border border-orange-400 p-1 rounded-[10px] ${selected ? 'bg-orange-400' : ''}`}>
      {tag}
    </button>
  </li>
}

export default TagItem