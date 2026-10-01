import React, { useState } from 'react';
import { ShieldAlert, Plus, Check } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';

interface EdgeCaseInsufficientInfoProps {
  onBack: () => void;
  onContinueCurrentView: () => void;
  onProfileCompleted?: () => void;
}

export const EdgeCase_InsufficientInfo: React.FC<EdgeCaseInsufficientInfoProps> = ({
  onBack,
  onContinueCurrentView,
  onProfileCompleted,
}) => {
  const [completeProfileModal, setCompleteProfileModal] = useState(false);
  const [historyChecked, setHistoryChecked] = useState(false);
  const [recordsChecked, setRecordsChecked] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Information required"
        subtitle="System status"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">
                Confidence Level
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B64F2]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B64F2]" />
                <span>Limited — based on partial data</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
              More information needed
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We need a few more health details to generate your personalized preventive care recommendations.
            </p>
          </div>
        </div>

        {/* Required Data Points */}
        <div className="space-y-2.5 pt-1">
          <h3 className="text-sm font-bold text-slate-900 px-1">
            Required data points
          </h3>

          <button
            type="button"
            onClick={() => setHistoryChecked(!historyChecked)}
            className="w-full bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3 text-left hover:border-slate-300 transition-all cursor-pointer"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              historyChecked ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-50 text-[#1B64F2]'
            }`}>
              {historyChecked ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-900">
              Complete family health history
            </span>
          </button>

          <button
            type="button"
            onClick={() => setRecordsChecked(!recordsChecked)}
            className="w-full bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3 text-left hover:border-slate-300 transition-all cursor-pointer"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              recordsChecked ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-50 text-[#1B64F2]'
            }`}>
              {recordsChecked ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-900">
              Recent screening &amp; blood test records
            </span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-3">
          <button
            type="button"
            onClick={() => {
              if (onProfileCompleted) {
                onProfileCompleted();
              } else {
                setCompleteProfileModal(true);
              }
            }}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            Complete my profile
          </button>

          <button
            type="button"
            onClick={onContinueCurrentView}
            className="w-full py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm active:scale-[0.99] transition-all cursor-pointer text-center"
          >
            Continue with current view
          </button>
        </div>
      </div>

      {/* Modal: Quick Profile Completion */}
      <Modal
        isOpen={completeProfileModal}
        onClose={() => setCompleteProfileModal(false)}
        title="Complete Health Profile"
        subtitle="Quick health history intake"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            Please confirm your cardiovascular and diabetic risk factors so Optum algorithms can compute high-confidence preventive screening matches:
          </p>
          <div className="space-y-2">
            <label className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-[#1B64F2]" />
              <span className="text-slate-800">No known prior cardiac events before age 55</span>
            </label>
            <label className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-[#1B64F2]" />
              <span className="text-slate-800">Non-smoker or quit over 5 years ago</span>
            </label>
          </div>
          <button
            type="button"
            onClick={() => {
              setCompleteProfileModal(false);
              onContinueCurrentView();
            }}
            className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            Save &amp; Update Recommendations
          </button>
        </div>
      </Modal>
    </div>
  );
};
