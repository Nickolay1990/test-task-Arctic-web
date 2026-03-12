"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Form from "@/components/Form/Form";
import css from "./page.module.css";
import { getSnippetById } from "@/lib/api";
import { Snippet } from "@/types/snippet.type";

const EditSnippet = () => {
  const params = useParams();
  const id = params.id as string;

  const [snippet, setSnippet] = useState<Snippet | null>(null);

  useEffect(() => {
    const fetchSnippet = async () => {
      const { data } = await getSnippetById(id);
      setSnippet(data);
    };

    if (id) {
      fetchSnippet();
    }
  }, [id]);

  if (!snippet) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Update Snippet</h2>
      <Form mode="update" snippetContent={snippet.content}
        snippetTags={snippet.tags.join(', ')}
        snippetTitle={snippet.title}
        snippetType={snippet.type}
        id={snippet._id}      
      />
    </div>
  );
};

export default EditSnippet;