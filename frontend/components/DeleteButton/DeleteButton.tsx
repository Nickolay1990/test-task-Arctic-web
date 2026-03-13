"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteSnippet } from "@/lib/api";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

interface DeleteButtonProps {
  snippetId: string;
}

const DeleteButton = ({ snippetId }: DeleteButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteSnippet(snippetId);
      router.push("/");
      router.refresh();
    } catch {
      alert("Failed to delete snippet");
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}
      className="bg-red-600 rounded-xl p-2.5 text-2xl text-white">
        Delete
      </button>

      <ConfirmModal
        isOpen={open}
        onCancel={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default DeleteButton;