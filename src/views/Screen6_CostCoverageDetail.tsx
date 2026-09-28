import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { Modal } from '../components/common/Modal';
import { Provider } from '../types';

interface Screen6Props {
  provider: Provider;
  onBack: () => void;
  onContinue: () => void;
}

export const Screen6_CostCoverageDetail: React.FC<Screen6Props> = ({
  provider,
  onBack,
  onContinue,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const [howCheckedModal, setHowCheckedModal] = useState(false);
  const [questionsModal, setQuestionsModal] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Cost & coverage"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Blue Gradient Header Card */}
        <div className="rounded-3xl p-5 bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] text-white shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full font-medium bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              {provider.coverageLabel}
            </span>
          </div>

          <div>
            <span className="text-xs text-blue-100/90 block">
              Expected amount you pay
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-1 text-white">
              {provider.costDisplay}
            </div>
          </div>

          {/* Breakdown sub-box */}
          <div className="bg-white rounded-2xl p-4 text-slate-800 space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Provider price</span>
              <span className="font-bold text-slate-900">
                ₹{provider.providerPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-emerald-700">
              <span className="font-medium">Expected insurance coverage</span>
              <span className="font-bold">
                -₹{provider.insuranceDiscount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Selected Provider Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs text-slate-400 font-medium block">
            Selected provider
          </span>
          <p className="text-base font-bold text-slate-900">
            {provider.name}
          </p>
        </div>

        {/* Coverage Verification Status Details */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2.5">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Coverage verified
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Your available plan information currently indicates this screening is covered.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
            <span className="text-slate-400">Last checked: Today</span>
            <button
              type="button"
              onClick={() => setHowCheckedModal(true)}
              className="font-semibold text-[#1B64F2] hover:underline cursor-pointer"
            >
              How was this checked?
            </button>
          </div>
        </div>

        {/* What could change this estimate? Accordion */}
        <div className="bg-[#EDF4FF] rounded-2xl border border-[#D5E5FD] overflow-hidden">
          <button
            type="button"
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full p-4 text-left flex items-center justify-between gap-2 cursor-pointer"
          >
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              What could change this estimate?
            </span>
            {accordionOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
            )}
          </button>

          {accordionOpen && (
            <div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-[#D5E5FD]/60">
              <p className="pt-2">
                Your final amount may change if: your plan information changes, additional services are added, coverage cannot be confirmed at the time of service.
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-3">
          <button
            type="button"
            onClick={onContinue}
            className="w-full h-13 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.98] text-white font-semibold text-base shadow-sm shadow-blue-500/20 transition-all flex items-center justify-center cursor-pointer"
          >
            Choose this provider
          </button>

          <button
            type="button"
            onClick={() => setQuestionsModal(true)}
            className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Questions about coverage?
          </button>
        </div>
      </div>

      {/* Modal: How was this checked? */}
      <Modal
        isOpen={howCheckedModal}
        onClose={() => setHowCheckedModal(false)}
        title="How was this checked?"
        subtitle="Automated insurance pre-adjudication"
      >
        <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
          <p>
            Optum runs an instant eligibility check through national insurance claims clearinghouses.
          </p>
          <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 text-emerald-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>In-Network Laboratory Accreditation: Confirmed</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Annual Preventive Benefit: 100% Covered (Zero Co-pay)</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Deductible Exemption: Preventive Care Exemption Applied</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setHowCheckedModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            Understood
          </button>
        </div>
      </Modal>

      {/* Modal: Questions about coverage? */}
      <Modal
        isOpen={questionsModal}
        onClose={() => setQuestionsModal(false)}
        title="Insurance & Coverage FAQ"
        subtitle="Clear answers with zero jargon"
      >
        <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
          <div>
            <span className="font-bold text-slate-900 block">Will I be charged at the lab desk?</span>
            <p className="mt-0.5">
              No. HealthFirst Diagnostics accepts your Optum verified digital voucher. You will not pay anything at reception for this screening.
            </p>
          </div>
          <div>
            <span className="font-bold text-slate-900 block">What if I need extra blood tests?</span>
            <p className="mt-0.5">
              Only optional non-preventive tests requested separately by you will have their costs presented for explicit consent before sampling.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setQuestionsModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs mt-2"
          >
            Close FAQ
          </button>
        </div>
      </Modal>
    </div>
  );
};
