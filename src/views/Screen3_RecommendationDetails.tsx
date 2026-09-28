import React, { useState } from 'react';
import { Calendar, User, Heart } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';

interface Screen3Props {
  onBack: () => void;
  onExploreOptions: () => void;
}

export const Screen3_RecommendationDetails: React.FC<Screen3Props> = ({
  onBack,
  onExploreOptions,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="About this recommendation"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Dark Navy Basis Card */}
        <div className="bg-[#002D4A] rounded-3xl p-5 text-white shadow-xs space-y-2">
          <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">
            RECOMMENDATION DETAILS
          </span>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Recommendation basis
          </h2>
          <p className="text-xs text-slate-200/90 leading-relaxed pt-1">
            We use the health information currently available to help surface relevant preventive care.
          </p>
        </div>

        {/* Information Used Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Information used
          </h3>

          <div className="space-y-3.5 divide-y divide-slate-100">
            <div className="flex items-center gap-3 pt-1">
              <User className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="flex-1 flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-500">Age &amp; profile</span>
                <span className="font-semibold text-slate-900">Available health information</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3.5">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="flex-1 flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-500">Screening history</span>
                <span className="font-semibold text-slate-900 text-right">No recent screening recorded here</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3.5">
              <Heart className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="flex-1 flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-500">Care guidance</span>
                <span className="font-semibold text-slate-900 text-right">Preventive care guidance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Information may be incomplete note */}
        <div className="bg-[#FFF8ED] rounded-2xl p-4 border border-[#FDE1AA] space-y-1">
          <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
            Information may be incomplete
          </h4>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            Your recommendation is based only on information currently available in this experience.
          </p>
        </div>

        {/* Something looks wrong? */}
        <div className="space-y-2 pt-1">
          <span className="text-xs text-slate-500 block px-1">
            Something looks wrong?
          </span>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full text-left p-3.5 rounded-2xl border border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Update my information
          </button>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full text-left p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            I already completed this screening
          </button>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full text-left p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Talk to someone
          </button>
        </div>

        <p className="text-[11px] text-slate-400 px-1 leading-normal">
          Updating your information may affect future recommendations.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={onExploreOptions}
            className="w-full h-13 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.98] text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Explore screening options
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Not now
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Profile Preferences"
        subtitle="Manage your health record inputs"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            Your health records are safeguarded with end-to-end encryption. Adjusting inputs helps optimize clinical cadence reminders.
          </p>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="font-semibold text-slate-800">Status: Active Preventive Track</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Next automated guideline recalculation in 90 days.</p>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};
