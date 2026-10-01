import React, { ReactNode } from 'react';
import { Wifi, Battery } from 'lucide-react';

interface PhoneWrapperProps {
  children: ReactNode;
  isFramed?: boolean;
}

export const PhoneWrapper: React.FC<PhoneWrapperProps> = ({
  children,
  isFramed = true,
}) => {
  return (
    <div className={`w-full flex justify-center items-start ${isFramed ? 'py-4 sm:py-8 px-2 sm:px-4' : 'p-0'}`}>
      <div
        id="phone-frame-container"
        className={`w-full bg-[#F4F6F9] text-slate-900 transition-all relative overflow-hidden ${
          isFramed
            ? 'max-w-[420px] rounded-[44px] shadow-2xl ring-12 ring-slate-900/90 border border-slate-700/30 h-[860px] max-h-[92vh] flex flex-col'
            : 'max-w-md mx-auto min-h-screen flex flex-col'
        }`}
      >
        {/* Mobile Top Status Bar (Deep Navy #002D4A matching Figma screenshots) */}
        <div className="bg-[#002D4A] text-white px-7 pt-3.5 pb-2.5 flex items-center justify-between select-none shrink-0 z-30">
          <span className="text-xs font-semibold tracking-tight text-white">9:41</span>

          <div className="flex items-center gap-1.5">
            <span className="w-4 h-1.5 bg-white rounded-full" />
            <span className="w-4 h-1.5 bg-white rounded-full" />
            <span className="w-5 h-1.5 bg-white rounded-full" />
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div
          id="phone-screen-container"
          className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col overscroll-contain"
        >
          {children}
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="w-full bg-[#F4F6F9] py-2 shrink-0 flex justify-center items-center z-20">
          <div className="w-32 h-1 bg-slate-400/80 rounded-full" />
        </div>
      </div>
    </div>
  );
};
