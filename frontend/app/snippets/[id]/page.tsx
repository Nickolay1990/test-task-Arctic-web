import { getSnippetById } from "@/lib/api";
import css from './page.module.css'
import TagsList from "@/components/TagsList/TagsList";
import Button from "@/components/Button/Button";

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
      <Button text="Edit" type="danger"/>
      <Button text="Delete" type="normal"/>
    </div>
  </div>
};

export default SnippetDetails;