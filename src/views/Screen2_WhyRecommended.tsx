import React, { useState } from 'react';
import { User, Calendar, Heart, Shield, Check, MessageSquare } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';
import { ScreeningInfo } from '../types';

interface Screen2Props {
  screening: ScreeningInfo;
  onBack: () => void;
  onExploreOptions: () => void;
  onAboutDetails?: () => void;
}

export const Screen2_WhyRecommended: React.FC<Screen2Props> = ({
  screening,
  onBack,
  onExploreOptions,
  onAboutDetails,
}) => {
  const [modalType, setModalType] = useState<
    'how_works' | 'update_info' | 'already_completed' | 'talk_concierge' | null
  >(null);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Why this is recommended"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Dark Navy Hero Header Card */}
        <div className="bg-[#002D4A] rounded-3xl p-5 text-white shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs text-slate-300 font-medium block">
                Preventive care
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Why this is recommended
              </h2>
            </div>
          </div>
          <p className="text-xs text-slate-200/90 leading-relaxed pt-1">
            Here&apos;s what this recommendation is based on.
          </p>
        </div>

        {/* Why it may be relevant card cluster */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Why it may be relevant
            </h3>
            {onAboutDetails && (
              <button
                type="button"
                onClick={onAboutDetails}
                className="text-xs font-semibold text-[#1B64F2] hover:underline cursor-pointer"
              >
                Detailed basis &rarr;
              </button>
            )}
          </div>

          {/* Age & Risk Profile */}
          <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <User className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium block">
                Age and risk profile
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                Your available health information
              </p>
            </div>
          </div>

          {/* Screening Guidelines */}
          <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <Calendar className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium block">
                Screening guidelines
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                No recent screening recorded here
              </p>
            </div>
          </div>

          {/* Prevention Timing */}
          <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <Heart className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium block">
                Prevention timing
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                Preventive care guidance may recommend screening before symptoms appear
              </p>
            </div>
          </div>
        </div>

        {/* Why now? Card */}
        <div className="bg-[#EDF4FF] rounded-2xl p-4 border border-[#D5E5FD] space-y-1">
          <h4 className="text-sm font-bold text-slate-900">Why now?</h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {screening.whyNow}
          </p>
        </div>

        {/* What this does not mean (Reassurance Card) */}
        <div className="bg-[#FFF8ED] rounded-2xl p-4 border border-[#FDE1AA] space-y-1">
          <h4 className="text-sm font-bold text-amber-900">
            What this does not mean
          </h4>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            {screening.whatItDoesNotMean}
          </p>
        </div>

        {/* Where this comes from */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2">
          <h4 className="text-xs text-slate-500 font-medium">Where this comes from</h4>
          <p className="text-sm font-semibold text-slate-900">
            Based on available health information and preventive care guidance.
          </p>
          <p className="text-xs text-slate-600">
            Approved care guidance helps shape the recommendation.
          </p>
          <button
            type="button"
            onClick={() => setModalType('how_works')}
            className="text-xs font-semibold text-[#1B64F2] hover:underline pt-1 inline-block cursor-pointer"
          >
            How recommendations work
          </button>
        </div>

        {/* Something looks wrong? */}
        <div className="space-y-2 pt-1">
          <span className="text-xs text-slate-500 block px-1">
            Something looks wrong?
          </span>

          <button
            type="button"
            onClick={() => setModalType('update_info')}
            className="w-full text-left p-3.5 rounded-2xl border border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Update my information
          </button>

          <button
            type="button"
            onClick={() => setModalType('already_completed')}
            className="w-full text-left p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            I already completed this screening
          </button>

          <button
            type="button"
            onClick={() => setModalType('talk_concierge')}
            className="w-full text-left p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Talk to someone
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-3">
          <button
            type="button"
            onClick={onExploreOptions}
            className="w-full h-13 rounded-2xl bg-[#002D4A] hover:bg-[#042338] active:scale-[0.98] text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center cursor-pointer"
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

      {/* Modal: How recommendations work */}
      <Modal
        isOpen={modalType === 'how_works'}
        onClose={() => setModalType(null)}
        title="How recommendations work"
        subtitle="Clinical governance and algorithmic criteria"
      >
        <div className="space-y-3">
          <p className="text-xs leading-relaxed text-slate-600">
            Optum analyzes routine preventive benchmarks recommended by global health bodies (e.g., WHO, ICMR, US Preventive Services Task Force).
          </p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs text-slate-700">
            <div className="font-semibold text-slate-900">Key Data Signals Considered:</div>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>Age-bracket preventive schedule (Annual preventive window)</li>
              <li>Absence of recorded diagnostic test in the prior 12 months</li>
              <li>Standard metabolic health and lipid screening cadence</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500">
            Our recommendation engine is strictly non-diagnostic: it acts as a proactive schedule reminder for healthy adults.
          </p>
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            Understood
          </button>
        </div>
      </Modal>

      {/* Modal: Update information */}
      <Modal
        isOpen={modalType === 'update_info'}
        onClose={() => setModalType(null)}
        title="Update health profile"
        subtitle="Keep your records accurate"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            Correcting your age, existing diagnoses, or recent clinical visits ensures our preventive reminders stay strictly relevant.
          </p>
          <div className="space-y-2">
            <label className="block font-medium text-slate-700">Age / Date of Birth</label>
            <input
              type="text"
              defaultValue="34 years old (1992)"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-medium text-slate-700">Recent Lab Tests</label>
            <input
              type="text"
              placeholder="e.g. Completed lipid panel in July"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
            />
          </div>
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-xs mt-2 flex items-center justify-center gap-1"
          >
            <Check className="w-3.5 h-3.5" /> Save updates
          </button>
        </div>
      </Modal>

      {/* Modal: Already completed */}
      <Modal
        isOpen={modalType === 'already_completed'}
        onClose={() => setModalType(null)}
        title="Screening already completed"
        subtitle="Log past preventive care"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            Great job! If you have already completed this routine test with another hospital or clinic, you can log the completion date so we don&apos;t prompt you again this year.
          </p>
          <input
            type="date"
            defaultValue="2026-06-15"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
          />
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            Mark as completed
          </button>
        </div>
      </Modal>

      {/* Modal: Talk to someone */}
      <Modal
        isOpen={modalType === 'talk_concierge'}
        onClose={() => setModalType(null)}
        title="Care Concierge"
        subtitle="Speak to a preventive care coordinator"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 text-blue-900 flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 mt-0.5 text-blue-700 shrink-0" />
            <div>
              <div className="font-semibold">Dedicated Care Support</div>
              <p className="mt-0.5 text-[11px] text-blue-800">
                Our care coordinators can assist with coverage questions, provider logistics, or scheduling conflicts.
              </p>
            </div>
          </div>
          <p>Call toll-free: <strong>1800-425-OPTUM</strong> (Available 8 AM - 8 PM IST)</p>
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs mt-2"
          >
            Request callback
          </button>
        </div>
      </Modal>
    </div>
  );
};
