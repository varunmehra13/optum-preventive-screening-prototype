import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  className?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  className = '',
}) => {
  return (
    <header className={`sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 ${className}`}>
      {showBack ? (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center text-slate-700 shrink-0 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-semibold text-slate-900 truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs text-slate-500 truncate">{subtitle}</p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-lg font-bold text-slate-900 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs font-normal text-slate-500 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </header>
  );
};
