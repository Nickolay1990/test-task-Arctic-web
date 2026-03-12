"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { deleteSnippet } from "@/lib/api";

interface DeleteButtonProps {
  snippetId: string;
}

const DeleteButton = ({ snippetId }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this snippet?");
    if (!confirmed) return;

    try {
      await deleteSnippet(snippetId);
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Failed to delete snippet");
    }
  };

  return <Button text="Delete" type="danger" onClick={handleDelete} />;
};

export default DeleteButton;