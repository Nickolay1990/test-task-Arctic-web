'use client';

import { useEffect } from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  isOpen,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed bg-[#00000099] inset-0 flex justify-center items-center z-[999]'
      onClick={onCancel}>
      <div className='bg-white p-6 rounded-[12px] w-[380px]'
        onClick={(e) => e.stopPropagation()}>
        <h3>Are you sure?</h3>
        <div className='flex justify-end gap-3 mt-5'>
          <button className='bg-gray-400 px-3 py-2 rounded-[6px]'
            onClick={onCancel}>
            Cancel
          </button>
          <button className='bg-red-600 text-white px-3 py-2 rounded-[6px] min-w-[73px]'
            onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;