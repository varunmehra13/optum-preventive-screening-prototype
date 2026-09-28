import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const container =
      document.getElementById('phone-frame-container') ||
      document.getElementById('phone-screen-container');
    setPortalNode(container);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // In-app bottom sheet modal strictly constrained within the mobile phone viewport
  const modalContent = (
    <div
      className="absolute inset-0 z-50 flex flex-col justify-end bg-slate-950/65 backdrop-blur-[2px] transition-all animate-in fade-in duration-200"
      style={{ touchAction: 'none' }}
    >
      {/* Tap backdrop to close */}
      <div
        className="flex-1 w-full cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* In-App Sheet Surface adhering to Optum healthcare design language */}
      <div
        className="relative w-full bg-white rounded-t-[32px] shadow-2xl border-t border-slate-200/90 max-h-[85%] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-250 z-10"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grab bar indicator */}
        <div className="pt-2.5 pb-1 flex justify-center shrink-0">
          <div className="w-10 h-1 bg-slate-300 rounded-full" />
        </div>

        {/* In-app Modal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 shrink-0">
          <div className="min-w-0 pr-2">
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-0.5 truncate">
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-5 overflow-y-auto no-scrollbar space-y-4 text-xs text-slate-700 leading-relaxed max-h-[calc(85vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );

  // Mount strictly into the in-app phone frame so it never leaks as a web modal
  const target = portalNode || (typeof document !== 'undefined' ? (document.getElementById('phone-frame-container') || document.getElementById('phone-screen-container')) : null);

  if (mounted && target) {
    return createPortal(modalContent, target);
  }

  // Fallback within local element
  return (
    <div className="absolute inset-0 z-50 overflow-hidden">
      {modalContent}
    </div>
  );
};
