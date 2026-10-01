import React from 'react';
import { User, Calendar, Heart } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { RecommendationGraphic } from '../components/common/VectorIllustration';
import { ScreeningInfo } from '../types';

interface Screen1Props {
  screening: ScreeningInfo;
  onNavigateNext: () => void;
  onNotNow?: () => void;
  onInsufficientInfo?: () => void;
}

export const Screen1_Recommendation: React.FC<Screen1Props> = ({
  screening,
  onNavigateNext,
  onNotNow,
  onInsufficientInfo,
}) => {
  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Recommended for you"
        subtitle="Preventive care"
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Main Recommendation Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5">
          <div className="space-y-1">
            <span className="text-xs font-normal text-slate-500 block">
              Preventive care
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {screening.title}
            </h2>
          </div>

          <RecommendationGraphic />

          <div className="pt-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              Recommended
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {screening.recommendationReason}
          </p>
        </div>

        {/* Why it may be relevant card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5">
          <h3 className="text-base font-bold text-slate-900">
            Why it may be relevant
          </h3>

          {/* Item 1: Age and risk profile */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0 mt-0.5">
              <User className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-slate-400 font-normal block">
                Age and risk profile
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                Your available health information
              </p>
            </div>
          </div>

          {/* Item 2: Screening guidelines */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0 mt-0.5">
              <Calendar className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-slate-400 font-normal block">
                Screening guidelines
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                No recent screening recorded here
              </p>
            </div>
          </div>

          {/* Item 3: Prevention timing */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0 mt-0.5">
              <Heart className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-slate-400 font-normal block">
                Prevention timing
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                Preventive care guidance may recommend screening before symptoms appear
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={onNavigateNext}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            Understand Why
          </button>

          <button
            type="button"
            onClick={onNotNow}
            className="w-full py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm active:scale-[0.99] transition-all cursor-pointer text-center"
          >
            Not now
          </button>

          {onInsufficientInfo && (
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={onInsufficientInfo}
                className="text-[11px] text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer"
              >
                Missing health history? Check information requirements →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
