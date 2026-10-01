import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Sparkles, Calendar, MapPin } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
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
  const [aiAssistantModal, setAiAssistantModal] = useState(false);
  const [coverageHelpModal, setCoverageHelpModal] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Review your screening"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Selected Provider Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <span className="text-xs text-slate-400 font-normal block">
            Your selected provider
          </span>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              {provider.name}
            </h3>
            <p className="text-xs text-slate-500">
              Preventive Screening Center
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{provider.nextAvailable}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{provider.distance}</span>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              ✓ Coverage verified
            </span>
          </div>
        </div>

        {/* Blue Gradient Cost Card */}
        <div className="rounded-3xl p-5 bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] text-white shadow-sm space-y-4">
          <div>
            <span className="text-xs text-blue-100 font-medium block">
              Your estimated cost
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-1 text-white">
              {provider.costDisplay}
            </div>
            <p className="text-xs text-blue-100/90 mt-1">
              Based on your verified preventive care coverage
            </p>
          </div>

          {/* White inner breakdown card */}
          <div className="bg-white rounded-2xl p-4 text-slate-900 space-y-2.5 text-xs sm:text-sm">
            <div className="flex justify-between items-center text-slate-600">
              <span>Provider cost</span>
              <span className="font-semibold text-slate-900">
                ₹{provider.providerPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-[#1B64F2]">
              <span>Insurance coverage</span>
              <span className="font-semibold">
                -₹{provider.insuranceDiscount.toLocaleString()}
              </span>
            </div>
            <div className="border-t border-slate-100 pt-2 flex justify-between items-center text-slate-900 font-bold">
              <span>Your estimated payment</span>
              <span className="text-base font-extrabold">
                {provider.costDisplay}
              </span>
            </div>
          </div>
        </div>

        {/* Why your coverage is verified Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-slate-900">
            Why your coverage is verified
          </h4>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1B64F2] stroke-[2.5] shrink-0" />
              <span>Your preventive care benefit includes this screening</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1B64F2] stroke-[2.5] shrink-0" />
              <span>Provider accepts your insurance plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1B64F2] stroke-[2.5] shrink-0" />
              <span>Coverage checked today</span>
            </div>
          </div>

          <div className="pt-1">
            <button
              type="button"
              onClick={() => setHowCheckedModal(true)}
              className="text-xs font-semibold text-[#1B64F2] hover:underline cursor-pointer"
            >
              How was this checked?
            </button>
          </div>
        </div>

        {/* Collapsible Card: Things that may affect your final cost */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <button
            type="button"
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full flex items-center justify-between text-left cursor-pointer"
          >
            <h4 className="text-sm font-bold text-slate-900 pr-2">
              Things that may affect your final cost
            </h4>
            {accordionOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
            )}
          </button>

          {accordionOpen && (
            <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
              <p className="text-slate-500">
                Your estimate may change if coverage details or services change.
              </p>
              <ul className="space-y-1.5 pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Additional services are added</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Insurance information changes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Coverage needs confirmation at appointment</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Card: Need help deciding? */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Need help deciding?
            </h4>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            I can explain your coverage, estimated cost, or appointment options.
          </p>

          <button
            type="button"
            onClick={() => setAiAssistantModal(true)}
            className="w-full py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs active:scale-[0.99] transition-all cursor-pointer text-center"
          >
            Ask about this screening
          </button>
        </div>

        {/* Bottom Actions */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={onContinue}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            Continue to schedule
          </button>

          <button
            type="button"
            onClick={() => setCoverageHelpModal(true)}
            className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1 cursor-pointer"
          >
            Need help understanding coverage?
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
              <Check className="w-4 h-4 text-emerald-600" />
              <span>In-Network Laboratory Accreditation: Confirmed</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-800 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Annual Preventive Benefit: 100% Covered (Zero Co-pay)</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-800 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Deductible Exemption: Preventive Care Exemption Applied</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setHowCheckedModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            Understood
          </button>
        </div>
      </Modal>

      {/* Modal: AI Assistant */}
      <Modal
        isOpen={aiAssistantModal}
        onClose={() => setAiAssistantModal(false)}
        title="Optum AI Care Guidance"
        subtitle="Coverage & Cost Explanation"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl space-y-1">
            <span className="font-bold text-purple-900 block">AI Coverage Summary</span>
            <p className="text-purple-800">
              Under your plan, preventive screenings like lipid panels and metabolic evaluations have ₹0 out-of-pocket obligation when performed at in-network facilities like {provider.name}.
            </p>
          </div>
          <p>
            You will receive a digital check-in voucher so no payment will be demanded at the provider desk.
          </p>
          <button
            type="button"
            onClick={() => setAiAssistantModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            Got it
          </button>
        </div>
      </Modal>

      {/* Modal: Need help understanding coverage? */}
      <Modal
        isOpen={coverageHelpModal}
        onClose={() => setCoverageHelpModal(false)}
        title="Insurance & Coverage FAQ"
        subtitle="Clear answers with zero jargon"
      >
        <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
          <div>
            <span className="font-bold text-slate-900 block">Will I be charged at the lab desk?</span>
            <p className="mt-0.5">
              No. {provider.name} accepts your Optum verified digital voucher. You will not pay anything at reception for this screening.
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
            onClick={() => setCoverageHelpModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            I understand
          </button>
        </div>
      </Modal>
    </div>
  );
};
