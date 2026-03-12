"use client"

import TagItem from "../TagItem/TagItem"
import css from './Filters.module.css'
import { useRouter, useSearchParams } from "next/navigation"

interface FiltersProps {
  selectedTags: string[];
  tags: string[];
}

const Filters = ({ selectedTags, tags }: FiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

   const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams)
    const currentTags = params.get("tags")?.split(",") || []

    if (currentTags.includes(tag)) {
      const filtered = currentTags.filter(t => t !== tag)
      params.set("tags", filtered.join(","))
    } else {
      params.set("tags", [...currentTags, tag].join(","))
    }

    router.push(`/?${params.toString()}`)
  }
  
  return <div className={css.filterWrapper}>
    <h2 className={css.title}>Filters</h2>
    <ul className={css.tagList}>
      {
        tags &&
        tags.length > 0 &&
        tags.map(tag => {
          return <TagItem key={tag} tag={tag} onClick={() => toggleTag(tag)}/>
        })
      }
    </ul>
  </div>
}

export default Filters