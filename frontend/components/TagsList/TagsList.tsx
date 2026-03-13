import TagsListItem from '../TagsListItem/TagsListItem'

interface TagsListProps {
  tags: string[];
  id: string;
}

const TagsList = ({ tags, id }: TagsListProps) => {
  return <div>
      <p className='text-sm'>Tags:</p>
      <ul className='text-xs text-[#5579cc] flex gap-2.5 flex-wrap'>
        {tags.map((tag, index) => {
          return <TagsListItem tag={tag} key={`${index} ${tag} ${id}`}/>
        })}
      </ul>
    </div>
}

export default TagsList