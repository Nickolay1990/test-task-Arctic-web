interface TagsListItemProps {
  tag: string
}

const TagsListItem = ({ tag }: TagsListItemProps) => {
  return <li>
    <p>{tag}</p>
  </li>
}
export default TagsListItem