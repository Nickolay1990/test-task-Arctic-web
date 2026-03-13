'use client'

import TagItem from '../TagItem/TagItem'
import { useRouter, useSearchParams } from 'next/navigation'
import {MagnifyingGlassIcon} from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/debounce'

interface FiltersProps {
  selectedTags: string[];
  tags: string[];
}

const Filters = ({ selectedTags, tags }: FiltersProps) => {
  const searchParams = useSearchParams()
  const [searchText, setSearchText] = useState(searchParams.get('q') || '')

  const router = useRouter()

  const debouncedSearch = useDebounce(searchText, 300)

   const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams)
    const currentTags = params.get('tags')?.split(',').filter(Boolean) || []

     if (currentTags.includes(tag)) {
      const filtered = currentTags.filter(t => t !== tag)
       
      if (filtered.length > 0) {
        params.set('tags', filtered.join(','))
      } else {
        params.delete('tags')
      }
    } else {
      params.set('tags', [...currentTags, tag].join(','))
    }

    params.delete('page')
     
    router.push(`/?${params.toString()}`)
   }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (debouncedSearch.trim()) {
      params.set('q', debouncedSearch.trim())
    } else {
      params.delete('q')
    }

    params.delete('page')
    
    router.replace(`/?${params.toString()}`)
  }, [debouncedSearch])
  
  return <div className='w-[20%] p-2.5 border-gray-400 mt-[41px] border rounded-xl self-start sticky top-6'>
    <h2 className='text-center mb-2.5 font-semibold'>Search</h2>
    <div className='relative mb-2.5'>
      <input type='text'
        className='outline-none border border-orange-400 p-1 pl-2.5 w-[100%] rounded-xl'
        placeholder='search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
      <button type='button' className='absolute top-[5px] right-[5px]'>
        <MagnifyingGlassIcon size={22} />
      </button>
    </div>
    <h2 className='text-center mb-2.5 font-semibold'>Filters</h2>
    <ul className='flex gap-2.5 flex-wrap'>
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