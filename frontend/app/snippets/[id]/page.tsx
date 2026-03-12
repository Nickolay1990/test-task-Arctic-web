import { getSnippetById } from "@/lib/api";
import css from './page.module.css'
import TagsList from "@/components/TagsList/TagsList";
import Button from "@/components/Button/Button";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton/DeleteButton";

type SnippetDetailsProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetails = async ({ params }: SnippetDetailsProps) => {
  const { id } = await params;
  const {data} = await getSnippetById(id)
  

  return <div className={css.wrapper}>
    <h2 className={css.title}>{data.title}</h2>
    <p className={css.content}>{data.content}</p>
    <p className={css.content}>Type: {data.type}</p>
    {
      data.tags &&
      data.tags.length > 0 &&
      <TagsList id={data._id} tags={data.tags} />
    }
    <div className={css.buttonsWrapper}>
      <Link href={`/snippets/${data._id}/edit`} className={`${css.normal} ${css.btn}`}>Edit</Link>
      <DeleteButton snippetId={data._id} />
    </div>
  </div>
};

export default SnippetDetails;