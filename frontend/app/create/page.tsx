"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import css from './page.module.css'
import { createSnippet } from "@/lib/api";

type SnippetType = "link" | "note" | "command";

const CreateSnippet = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [type, setType] = useState<SnippetType>("note");

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

      await createSnippet({
        title,
        content,
        tags: formattedTags,
        type,
      })

      router.push("/");
      router.refresh();
    } catch {
      setError("Failed to create snippet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Create Snippet</h1>

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
    </div>
  );
};

export default CreateSnippet;