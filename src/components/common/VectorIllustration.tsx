import React from 'react';

export const RecommendationGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full h-32 bg-[#F8FAFD] rounded-2xl p-3 border border-slate-200/90 overflow-hidden flex items-center justify-between ${className}`}
    >
      {/* Concentric gauge arcs in top right */}
      <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-4 border-[#3B82F6]/30 pointer-events-none" />
      <div className="absolute -top-1 -right-1 w-12 h-12 rounded-full border-4 border-[#F97316]/40 pointer-events-none" />

      {/* Main vector interface */}
      <div className="relative w-full flex items-center justify-between gap-3 px-1">
        {/* Left side 2x3 rounded pills/cards */}
        <div className="grid grid-cols-3 gap-1.5 flex-1 max-w-[150px]">
          <div className="h-8 rounded-xl bg-[#EBF3FF] border border-[#BFDBFE]/80" />
          <div className="h-8 rounded-xl bg-[#EBF3FF] border border-[#BFDBFE]/80" />
          <div className="h-8 rounded-xl bg-[#EBF3FF] border border-[#BFDBFE]/80" />
          <div className="h-8 rounded-xl bg-[#EBF3FF] border border-[#BFDBFE]/80" />
          <div className="h-8 rounded-xl bg-[#EBF3FF] border border-[#BFDBFE]/80" />
          <div className="h-8 rounded-xl bg-[#EBF3FF] border border-[#BFDBFE]/80" />
        </div>

        {/* Right side slider & axis */}
        <div className="flex-1 max-w-[150px] flex flex-col justify-between h-20 py-1">
          {/* Top blue bar */}
          <div className="w-full h-1.5 bg-[#1B64F2] rounded-full" />

          {/* Slider track with handle */}
          <div className="relative w-full h-5 flex items-center">
            <div className="w-full h-0.5 bg-[#DBEAFE]" />
            <div className="absolute right-4 w-5 h-5 rounded-full bg-[#1B64F2] ring-4 ring-[#BFDBFE]/60 shadow-xs" />
          </div>

          {/* Axis line with blue progress dots */}
          <div className="relative w-full flex items-center justify-between px-1">
            <div className="absolute inset-x-0 h-0.5 bg-[#E2E8F0]" />
            <span className="relative z-10 w-2 h-2 rounded-full bg-[#1B64F2]" />
            <span className="relative z-10 w-2 h-2 rounded-full bg-[#3B82F6]" />
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
            <span className="relative z-10 w-2 h-2 rounded-full bg-[#1B64F2]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReportGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full h-36 bg-gradient-to-r from-blue-50/60 via-slate-50 to-emerald-50/40 rounded-2xl p-4 border border-slate-200/70 overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="relative w-full max-w-[280px] flex items-center justify-between">
        {/* Document 1 (Left) */}
        <div className="w-28 bg-white rounded-xl shadow-xs border border-slate-200 p-2.5 flex flex-col gap-1.5 transform -rotate-1">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            </div>
            <div className="w-10 h-2 bg-slate-200 rounded-sm" />
          </div>
          <div className="w-full h-2 bg-blue-100 rounded-sm mt-1" />
          <div className="w-16 h-1.5 bg-slate-200 rounded-xs" />
          <div className="flex gap-1 mt-1">
            <div className="w-3 h-3 rounded-full bg-blue-200" />
            <div className="w-8 h-3 rounded-md bg-blue-100" />
          </div>
        </div>

        {/* Connection line */}
        <div className="flex-1 mx-2 relative flex items-center justify-center">
          <div className="w-full h-[2px] bg-blue-600" />
          <div className="absolute w-2 h-2 rounded-full bg-blue-600" />
        </div>

        {/* Document 2 (Right) */}
        <div className="w-28 bg-white rounded-xl shadow-xs border border-slate-200 p-2.5 flex flex-col gap-1.5 transform rotate-1">
          <div className="flex items-center justify-between">
            <div className="w-3 h-3 rounded-full bg-emerald-600" />
            <div className="w-3 h-3 rounded-full bg-blue-500" />
          </div>
          <div className="w-full h-1.5 bg-blue-100 rounded-sm mt-1" />
          <div className="w-full h-1.5 bg-blue-100 rounded-sm" />
          <div className="w-14 h-1.5 bg-slate-200 rounded-sm" />
          <div className="w-10 h-1.5 bg-emerald-200 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export const ConfirmedCalendarGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-40 h-40 mx-auto rounded-full bg-radial from-slate-100 to-transparent flex items-center justify-center ${className}`}
    >
      {/* Background subtle radial checkerboard as seen in Figma */}
      <div className="absolute inset-0 rounded-full opacity-35 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px]" />

      {/* Calendar clipboard illustration */}
      <div className="relative z-10 w-28 h-28 bg-white rounded-2xl shadow-lg border border-slate-200/90 p-2 flex flex-col items-center">
        {/* Metal ring binder clips */}
        <div className="w-full flex justify-around -mt-3.5 mb-1">
          <div className="w-3 h-5 rounded-full bg-slate-700 border-2 border-slate-300 shadow-xs" />
          <div className="w-3 h-5 rounded-full bg-slate-700 border-2 border-slate-300 shadow-xs" />
        </div>

        {/* Header bar on calendar */}
        <div className="w-full bg-[#002D4A] rounded-lg py-1 px-1.5 text-center shadow-xs">
          <span className="text-[8px] font-bold tracking-wider text-white uppercase">
            APPOINTMENT
          </span>
        </div>

        {/* Date display */}
        <div className="flex flex-col items-center justify-center flex-1 py-1">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">
            TUE 29 SEP
          </span>
          <span className="text-xl font-extrabold text-[#002D4A] tracking-tight">
            8:30 AM
          </span>
        </div>

        {/* Checkmark stamp / pin */}
        <div className="w-full flex items-center justify-between border-t border-slate-100 pt-1">
          <span className="text-[7px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm flex items-center gap-0.5">
            ✓ Confirmed
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
};
