"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

export function DetailDialog({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    const trigger = document.activeElement as HTMLElement | null;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
      trigger?.focus();
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="detail-dialog"
      aria-labelledby={titleId}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="dialog-close"
        aria-label="Close details"
        onClick={onClose}
      >
        <X size={22} />
      </button>
      <div className="dialog-content">
        <p className="eyebrow">KIU / CONCEPT EXPLORER</p>
        <h2 id={titleId}>{title}</h2>
        {children}
      </div>
    </dialog>
  );
}
