"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSnippet, updateSnippet } from "@/lib/api";
import { SnippetType } from "@/types/snippet.type";
import css from './Form.module.css'


interface FormProps{
  mode: 'create' | 'update';
  snippetTitle?: string;
  snippetContent?: string;
  snippetTags?: string;
  snippetType?: SnippetType;
  id?: string
}

const Form = ({mode, snippetTitle, snippetContent, snippetTags, snippetType, id}: FormProps) => {
  const router = useRouter();

  const [title, setTitle] = useState(snippetTitle || '');
  const [content, setContent] = useState(snippetContent || '');
  const [tags, setTags] = useState(snippetTags || "");
  const [type, setType] = useState<SnippetType>(snippetType || SnippetType.COMMAND);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required");
      return;
    }

    const formattedTags = tags
      .split(",")
      .map(tag => tag.trim())
      .filter(Boolean);

    try {
      setLoading(true);

      if (mode === 'create') { 
        await createSnippet({
          title,
          content,
          tags: formattedTags,
          type,
        })
      }
      else if(mode === 'update' && id) {
        await updateSnippet(id, {
          title,
          content,
          tags: formattedTags,
          type,
        })
      }

      const route = mode === 'create' ? '/' : `/snippets/${id}`
      router.push(route);
      router.refresh();
    } catch {
      setError(mode === 'create' ? "Failed to create snippet" : "Failed to update snippet");
    } finally {
      setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.field}>
          <label className={css.label}>Title</label>

          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={css.input}
            placeholder="Snippet title"
          />
        </div>

        <div className={css.field}>
          <label className={css.label}>Content</label>

          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className={css.textarea}
            placeholder="Paste your snippet here..."
          />
        </div>

        <div className={css.field}>
          <label className={css.label}>Tags</label>

          <input
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
            className={css.input}
            placeholder="react, api, docker"
          />

          <p className={css.hint}>Separate tags with commas</p>
        </div>

        <div className={css.field}>
          <label className={css.label}>Type</label>

          <select
            value={type}
            onChange={e => setType(e.target.value as SnippetType)}
            className={css.select}
          >
            <option value="note">Note</option>
            <option value="link">Link</option>
            <option value="command">Command</option>
          </select>
        </div>

        {error && <div className={css.error}>{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className={css.button}
        >
          {loading ? "Creating..." : "Create Snippet"}
        </button>
      </form>
  );
};

export default Form;