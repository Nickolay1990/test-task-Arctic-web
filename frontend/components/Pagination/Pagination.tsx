'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
    totalCount: number;
    currentPage: number;
}

export default function Pagination({ totalCount, currentPage }: PaginationProps) {
    const countPages = Math.ceil(totalCount / 10);
    const searchParams = useSearchParams();
    const renderLinks = [];

    const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));

    return `?${params.toString()}`;
  };

    for (let i = 1; i <= countPages; i++) {
        if (currentPage === i) {
            renderLinks.push(
                <li key={i}>
                    <span className='border border-gray-400 px-3 py-1 rounded-[10px]'>{i}</span>
                </li>
            );
            continue;
        }
        renderLinks.push(
            <li key={i}>
                <Link href={createPageLink(i)} className='border border-orange-400 px-3 py-1 rounded-[10px]'>{i}</Link>
            </li>
        );
    }

    return (
        <div className='mt-5'>
            {countPages > 1 &&
            <ul className='flex gap-2.5 justify-center text-xl'>
                {currentPage > 1 && (
                    <li>
                        <Link href={createPageLink(currentPage - 1)} className='border border-orange-400 px-3 py-1 rounded-[10px]'>&lt;&lt;</Link>
                    </li>
                )}
                
                {renderLinks}

                {currentPage * 10 < totalCount && (
                    <li >
                        <Link href={createPageLink(currentPage + 1)} className='border border-orange-400 px-3 py-1 rounded-[10px]'>&gt;&gt;</Link>
                    </li>
                )}
            </ul>
            }
        </div>
    );
}
