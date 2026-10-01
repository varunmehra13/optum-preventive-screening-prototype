import React from 'react';
import { CheckCircle2, FileText, Check, ArrowRight } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';

interface Screen10Props {
  onBack?: () => void;
  onNavigateNextAction: () => void;
}

export const Screen10_ResultsReady: React.FC<Screen10Props> = ({
  onBack,
  onNavigateNextAction,
}) => {
  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Screening results"
        subtitle="Preventive health screening"
        showBack={Boolean(onBack)}
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        <p className="text-xs text-slate-600 px-1 font-medium">
          Your preventive screening report is ready.
        </p>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-5">
          {/* Card Header */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#1B64F2] stroke-[2.2]" />
              <h3 className="text-base font-bold text-[#1B64F2]">
                Results available
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              HealthFirst Diagnostics · Preventive screening provider
            </p>

            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-slate-600">Completed Sept 24, 2026</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Ready
              </span>
            </div>
          </div>

          {/* Central Blue Check Graphic */}
          <div className="py-2 flex flex-col items-center justify-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-[#EBF3FF] flex items-center justify-center shadow-xs">
              <Check className="w-10 h-10 text-[#1B64F2] stroke-[2.5]" />
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-slate-600">Screening completed</span>
              <span className="text-slate-400">&rarr;</span>
              <span className="text-[#1B64F2] font-bold">Results ready</span>
            </div>
          </div>

          {/* Report Available sub-card */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500 block">
              Report available
            </span>

            <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-200/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1B64F2] flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    Preventive screening report
                  </h4>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Ready to review
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#EBF3FF] text-[#1B64F2] shrink-0">
                PDF
              </span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onNavigateNextAction}
              className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
            >
              Review your results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
