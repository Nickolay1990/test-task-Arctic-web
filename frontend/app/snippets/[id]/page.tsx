import { getSnippetById } from '@/lib/api';
import TagsList from '@/components/TagsList/TagsList';
import Link from 'next/link';
import DeleteButton from '@/components/DeleteButton/DeleteButton';

type SnippetDetailsProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetails = async ({ params }: SnippetDetailsProps) => {
  const { id } = await params;
  const {data} = await getSnippetById(id)
  

  return <div className='p-5'>
    <h2 className='text-2xl font-semibold text-center mb-5'>{data.title}</h2>
    <p className='font-medium text-lg mb-10'>{data.content}</p>
    <p className='font-medium text-lg mb-10'>Type: <span className='text-[#5579cc]'>{data.type}</span></p>
    {
      data.tags &&
      data.tags.length > 0 &&
      <TagsList id={data._id} tags={data.tags} />
    }
    <div className='mt-10 flex gap-5 justify-center'>
      <Link href={`/snippets/${data._id}/edit`} className={'bg-orange-400 min-w-[89px] text-center p-2.5 rounded-lg text-2xl text-white'}>Edit</Link>
      <DeleteButton snippetId={data._id} />
    </div>
  </div>
};

export default SnippetDetails;