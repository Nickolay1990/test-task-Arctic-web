"use client"

import TagItem from "../TagItem/TagItem"
import css from './Filters.module.css'
import { useRouter, useSearchParams } from "next/navigation"
import {MagnifyingGlassIcon} from '@phosphor-icons/react'
import { useEffect, useState } from "react"
import { useDebounce } from "@/hooks/debounce"

interface FiltersProps {
  selectedTags: string[];
  tags: string[];
}

const Filters = ({ selectedTags, tags }: FiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchText, setSearchText] = useState(searchParams.get("q") || "")
  const debouncedSearch = useDebounce(searchText, 500)

   const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams)
    const currentTags = params.get("tags")?.split(",").filter(Boolean) || []

    if (currentTags.includes(tag)) {
      const filtered = currentTags.filter(t => t !== tag)
      if (filtered.length > 0) {
        params.set("tags", filtered.join(","))
      } else {
        params.delete("tags")
      }
    } else {
      params.set("tags", [...currentTags, tag].join(","))
    }

    router.push(`/?${params.toString()}`)
   }
  
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams)
    if (searchText.trim()) {
      params.set("q", searchText.trim())
    } else {
      params.delete("q")
    }
    router.push(`/?${params.toString()}`)
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (debouncedSearch.trim()) {
      params.set("q", debouncedSearch.trim())
    } else {
      params.delete("q")
    }
    router.replace(`/?${params.toString()}`)
  }, [debouncedSearch])
  
  return <div className={css.filterWrapper}>
    <h2 className={css.title}>Search</h2>
    <div className={css.inputWrapper}>
      <input type="text"
        className={css.input}
        placeholder="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
      <button type="button" className={css.searchBtn}>
        <MagnifyingGlassIcon size={22} />
      </button>
    </div>
    <h2 className={css.title}>Filters</h2>
    <ul className={css.tagList}>
      {
        tags &&
        tags.length > 0 &&
        tags.map(tag => {
          return <TagItem key={tag} tag={tag} onClick={() => toggleTag(tag)} selected={selectedTags.includes(tag) } />
        })
      }
    </ul>
  </div>
}

export default Filters