import React, { useState } from 'react';
import { MapPin, Home, AlertCircle, ChevronRight, Check, Search, ShieldCheck } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';

interface EdgeCaseProviderUnavailableProps {
  onBack: () => void;
  onSelectHomeCollection: () => void;
  onExpandRadius: () => void;
}

export const EdgeCase_ProviderUnavailable: React.FC<EdgeCaseProviderUnavailableProps> = ({
  onBack,
  onSelectHomeCollection,
  onExpandRadius,
}) => {
  const [homeModalOpen, setHomeModalOpen] = useState(false);
  const [outOfNetworkModal, setOutOfNetworkModal] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Provider options"
        subtitle="Preventive health screening"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Main Edge Case Alert Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">
                Coverage Area
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>No in-network clinics within 15 km</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
              No local screening center found
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We couldn&apos;t find an in-network provider with immediate availability in your primary postal area. Here are alternative ways to complete your screening with full benefit coverage.
            </p>
          </div>
        </div>

        {/* Alternative Solutions */}
        <div className="space-y-3 pt-1">
          <h3 className="text-sm font-bold text-slate-900 px-1">
            Available alternatives for you
          </h3>

          {/* Option 1: Home Sample Collection */}
          <div className="bg-white rounded-3xl p-5 border border-blue-200/80 shadow-xs space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#EBF3FF] text-[#1B64F2] uppercase tracking-wider">
                    Recommended
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Optum Home Sample Collection
                  </h4>
                  <p className="text-xs text-slate-500">
                    A certified phlebotomist visits your home at your convenience
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% Covered (₹0 copay)</span>
              </div>
              <span className="text-slate-500">Slots available tomorrow</span>
            </div>

            <button
              type="button"
              onClick={onSelectHomeCollection}
              className="w-full py-3 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-xs transition-all cursor-pointer text-center"
            >
              Book Home Collection
            </button>
          </div>

          {/* Option 2: Expand Search Radius */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-0.5 flex-1">
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  Expand search to 25 km
                </h4>
                <p className="text-xs text-slate-500">
                  Found 4 certified in-network centers in neighboring sub-districts
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onExpandRadius}
              className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              Show Providers in 25 km
            </button>
          </div>

          {/* Option 3: Out of network pre-approval */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <h5 className="text-xs font-bold text-slate-900">
                Have a preferred local clinic?
              </h5>
              <p className="text-[11px] text-slate-500">
                Request out-of-network preventive care pre-authorization
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOutOfNetworkModal(true)}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shrink-0 cursor-pointer"
            >
              Request
            </button>
          </div>
        </div>

        {/* Modal: Out of Network Request */}
        <Modal
          isOpen={outOfNetworkModal}
          onClose={() => {
            setOutOfNetworkModal(false);
            setRequestSubmitted(false);
          }}
          title={requestSubmitted ? "Pre-Authorization Submitted" : "Out-of-Network Request"}
          subtitle="Optum Preventive Care Benefits"
        >
          {requestSubmitted ? (
            <div className="space-y-4 py-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="text-base font-bold text-slate-900">Request #PA-8849 Received</h4>
                <p className="text-xs text-slate-600">
                  Our benefits coordinator will review your clinic and issue pre-approval within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOutOfNetworkModal(false);
                  setRequestSubmitted(false);
                }}
                className="w-full py-3 rounded-2xl bg-[#1B64F2] text-white text-xs font-bold"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              <p className="text-xs text-slate-600">
                If your preferred diagnostic center is not yet in our direct billing directory, we can initiate a zero-out-of-pocket voucher directly with their front desk.
              </p>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">Clinic Name</label>
                <input
                  type="text"
                  placeholder="e.g. Medanta Diagnostics"
                  defaultValue="Apex Diagnostic Center"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-blue-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">Clinic Address or Landmark</label>
                <input
                  type="text"
                  placeholder="e.g. Connaught Place, Block C"
                  defaultValue="Sector 14 Market"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-blue-600"
                />
              </div>
              <button
                type="button"
                onClick={() => setRequestSubmitted(true)}
                className="w-full py-3 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] text-white text-xs font-bold"
              >
                Submit Pre-Authorization
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
