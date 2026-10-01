import React from 'react';
import { Building2 } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';

interface EdgeCaseCoveragePendingProps {
  onBack: () => void;
  onContinueBrowsing: () => void;
  onViewWithoutCoverage: () => void;
}

export const EdgeCase_CoveragePending: React.FC<EdgeCaseCoveragePendingProps> = ({
  onBack,
  onContinueBrowsing,
  onViewWithoutCoverage,
}) => {
  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Provider Options"
        subtitle="Preventive health screening"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
              <Building2 className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                HealthFirst Diagnostics
              </h3>
              <span className="inline-block px-3 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                Verifying coverage...
              </span>
            </div>
          </div>

          {/* Expected amount inner box */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 space-y-1">
            <span className="text-xs text-slate-500 font-medium block">
              Expected amount you pay
            </span>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              ₹0 – ₹2,800
            </div>
            <p className="text-xs text-slate-500 pt-0.5">
              Final amount depends on coverage verification
            </p>
          </div>

          {/* Details table */}
          <div className="space-y-2 text-xs text-slate-600 pt-1">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Coverage</span>
              <span className="font-semibold text-slate-700">Verification in progress</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Distance</span>
              <span className="font-medium text-slate-600">2.4 km away</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={onContinueBrowsing}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            Continue browsing
          </button>

          <button
            type="button"
            onClick={onViewWithoutCoverage}
            className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1 cursor-pointer block"
          >
            View without coverage info
          </button>
        </div>
      </div>
    </div>
  );
};
