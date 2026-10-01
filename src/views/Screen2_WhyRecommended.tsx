import React, { useState } from 'react';
import { User, Calendar, Heart, Shield, Sparkles, Check, MessageSquare } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';
import { ScreeningInfo } from '../types';

interface Screen2Props {
  screening: ScreeningInfo;
  onBack: () => void;
  onExploreOptions: () => void;
  onAboutDetails?: () => void;
  onUpdateInfo?: () => void;
  onNotNow?: () => void;
}

export const Screen2_WhyRecommended: React.FC<Screen2Props> = ({
  screening,
  onBack,
  onExploreOptions,
  onAboutDetails,
  onUpdateInfo,
  onNotNow,
}) => {
  const [modalType, setModalType] = useState<
    'update_info' | 'already_completed' | 'talk_someone' | null
  >(null);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Recommendation AI Analysis"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Dark Navy Hero Header Card */}
        <div className="bg-[#002D4A] rounded-3xl p-5 text-white shadow-sm space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1B64F2] shadow-xs shrink-0">
              <Shield className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs text-slate-300 font-normal block">
                Preventive care
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white leading-tight">
                Why this is recommended
              </h2>
            </div>
          </div>
          <p className="text-xs text-slate-200/90 leading-relaxed pt-1">
            Here&apos;s what this recommendation is based on.
          </p>
        </div>

        {/* White Main Card: Optum Health Analysis */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          {/* Analysis Header Pill Banner */}
          <div className="bg-[#EEF2FF] rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <span className="text-base font-bold text-slate-900 tracking-tight">
              Optum Health Analysis
            </span>
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
              High confidence
            </span>
          </div>

          {/* Item 1: Health profile */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0 mt-0.5">
              <User className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                Health profile
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your age and health profile match recommended screening guidelines.
              </p>
            </div>
          </div>

          {/* Item 2: Preventive care guidelines */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0 mt-0.5">
              <Calendar className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                Preventive care guidelines
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                This screening aligns with established preventive care recommendations.
              </p>
            </div>
          </div>

          {/* Item 3: Health history */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0 mt-0.5">
              <Heart className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                Health history
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Previous information helps personalize this recommendation.
              </p>
            </div>
          </div>
        </div>

        {/* Something looks wrong? section */}
        <div className="space-y-2 pt-1 px-1">
          <span className="text-xs text-slate-400 font-medium block">
            Something looks wrong?
          </span>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => {
                if (onUpdateInfo) {
                  onUpdateInfo();
                } else {
                  setModalType('update_info');
                }
              }}
              className="text-xs font-semibold text-[#1B64F2] hover:underline block text-left cursor-pointer"
            >
              Update my information
            </button>

            <button
              type="button"
              onClick={() => setModalType('already_completed')}
              className="text-xs font-semibold text-[#1B64F2] hover:underline block text-left cursor-pointer"
            >
              I already completed this screening
            </button>

            <button
              type="button"
              onClick={() => setModalType('talk_someone')}
              className="text-xs font-semibold text-[#1B64F2] hover:underline block text-left cursor-pointer"
            >
              Talk to someone
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-3">
          <button
            type="button"
            onClick={onExploreOptions}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            Explore screening options
          </button>

          <button
            type="button"
            onClick={onNotNow || onBack}
            className="w-full py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm active:scale-[0.99] transition-all cursor-pointer text-center"
          >
            Not now
          </button>
        </div>
      </div>

      {/* Modal: Update Info */}
      <Modal
        isOpen={modalType === 'update_info'}
        onClose={() => setModalType(null)}
        title="Update Health Information"
        subtitle="Keep your profile accurate"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            Your preventive care recommendations adapt immediately when your profile or medical records change.
          </p>
          <div className="space-y-2">
            <div>
              <label className="font-semibold text-slate-800 block mb-1">Last general health checkup</label>
              <input
                type="text"
                defaultValue="More than 12 months ago"
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-slate-50"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-800 block mb-1">Family cardiovascular risk</label>
              <input
                type="text"
                defaultValue="No premature cardiac events known"
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-slate-50"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            Save &amp; Recalculate
          </button>
        </div>
      </Modal>

      {/* Modal: Already Completed */}
      <Modal
        isOpen={modalType === 'already_completed'}
        onClose={() => setModalType(null)}
        title="Screening Completed Elsewhere?"
        subtitle="Upload or record previous records"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            If you completed this screening within the last 12 months at another clinic, upload the report or enter the date to silence reminders.
          </p>
          <input
            type="date"
            defaultValue="2026-03-15"
            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-slate-50"
          />
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            Record Past Screening
          </button>
        </div>
      </Modal>

      {/* Modal: Talk to Someone */}
      <Modal
        isOpen={modalType === 'talk_someone'}
        onClose={() => setModalType(null)}
        title="Optum Care Navigation"
        subtitle="Speak with a registered health advocate"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            Have questions regarding this recommendation or your benefits? Connect directly with our clinical support team:
          </p>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-slate-700">
            <p>Call toll-free: <strong>1800-425-OPTUM</strong> (Available 8 AM - 8 PM IST)</p>
            <p className="text-slate-500">Live chat is also available in your Optum member portal.</p>
          </div>
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};
