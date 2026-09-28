import React from 'react';
import { User, Calendar, Heart } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { RecommendationGraphic } from '../components/common/VectorIllustration';
import { ScreeningInfo } from '../types';

interface Screen1Props {
  screening: ScreeningInfo;
  onNavigateNext: () => void;
}

export const Screen1_Recommendation: React.FC<Screen1Props> = ({
  screening,
  onNavigateNext,
}) => {
  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Recommended for you"
        subtitle="Preventive care"
      />

      <div className="p-4 sm:p-5 space-y-5">
        {/* Main Recommendation Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <div className="space-y-1.5">
            <span className="text-xs font-medium text-slate-500 block">
              Preventive care
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {screening.title}
            </h2>
          </div>

          <div>
            <CoverageBadge status="recommended" />
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {screening.recommendationReason}
          </p>

          <RecommendationGraphic />
        </div>

        {/* Why this may be relevant section */}
        <div className="space-y-3 pt-1">
          <h3 className="text-base font-semibold text-slate-900 px-1">
            Why this may be relevant
          </h3>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <User className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium block">
                Your profile
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">
                Your age and available health information
              </p>
            </div>
          </div>

          {/* Screening History Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <Calendar className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium block">
                Screening history
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">
                No recent screening recorded in this experience
              </p>
            </div>
          </div>

          {/* Care Guidance Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <Heart className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium block">
                Care guidance
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">
                Preventive care guidance may recommend screening before symptoms appear
              </p>
            </div>
          </div>
        </div>

        {/* Provenance Context Card */}
        <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 space-y-2">
          <p className="text-xs text-slate-500">
            Illustrative profile information shown for this concept.
          </p>
          <div className="bg-emerald-50/80 rounded-xl p-3 border border-emerald-200 text-xs text-emerald-800 font-medium leading-relaxed">
            Recommendation based on: Available health information + preventive care guidance
          </div>
        </div>

        {/* Primary CTA */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onNavigateNext}
            className="w-full h-13 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.98] text-white font-semibold text-base shadow-sm shadow-blue-500/20 transition-all flex items-center justify-center cursor-pointer"
          >
            Understand why
          </button>
        </div>
      </div>
    </div>
  );
};
