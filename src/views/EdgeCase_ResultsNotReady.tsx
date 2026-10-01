import React, { useState } from 'react';
import { Clock, Check, Bell, RefreshCw, ArrowRight, Shield, PhoneCall } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';

interface EdgeCaseResultsNotReadyProps {
  onBack: () => void;
  onSimulateReady: () => void;
}

export const EdgeCase_ResultsNotReady: React.FC<EdgeCaseResultsNotReadyProps> = ({
  onBack,
  onSimulateReady,
}) => {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notified, setNotified] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Screening results"
        subtitle="HealthFirst Diagnostics"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Status Hero Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 stroke-[2.2] animate-pulse" />
              </div>
              <span className="text-xs font-bold text-[#1B64F2]">
                Processing in progress
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
              Est. today 6:00 PM
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
              Your results are being processed
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your sample was collected at HealthFirst Diagnostics and is undergoing automated multi-assay laboratory testing.
            </p>
          </div>
        </div>

        {/* Multi-step Lab Processing Timeline Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900">
            Laboratory Tracking
          </h3>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-3 relative">
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="space-y-0.5 flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-bold text-slate-900">Sample Collected</h4>
                  <span className="text-[10px] text-slate-400">8:45 AM</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  HealthFirst Diagnostics · Central Delhi Center
                </p>
              </div>
              <div className="absolute left-3 top-6 w-0.5 h-8 bg-emerald-300" />
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 relative pt-1">
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="space-y-0.5 flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-bold text-slate-900">Intake & Centrifugation</h4>
                  <span className="text-[10px] text-slate-400">11:15 AM</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Sample barcode verified & pre-adjudicated
                </p>
              </div>
              <div className="absolute left-3 top-6 w-0.5 h-8 bg-blue-300" />
            </div>

            {/* Step 3: Active */}
            <div className="flex items-start gap-3 relative pt-1">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs ring-4 ring-blue-100">
                <RefreshCw className="w-3 h-3 animate-spin" />
              </div>
              <div className="space-y-0.5 flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-bold text-[#1B64F2]">Multi-Assay Analysis</h4>
                  <span className="text-[10px] text-blue-600 font-semibold">Active now</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Running comprehensive lipid panel & glycemic markers
                </p>
              </div>
              <div className="absolute left-3 top-6 w-0.5 h-8 bg-slate-200" />
            </div>

            {/* Step 4: Pending */}
            <div className="flex items-start gap-3 pt-1">
              <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-400 flex items-center justify-center shrink-0 text-xs">
                4
              </div>
              <div className="space-y-0.5 flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs font-semibold text-slate-400">Pathologist Review & Release</h4>
                  <span className="text-[10px] text-slate-400">Est. 6:00 PM</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Final sign-off by attending clinical pathologist
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Box */}
        <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
              <Bell className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h5 className="text-xs font-bold text-slate-900">
                SMS Notification Enabled
              </h5>
              <p className="text-[11px] text-slate-500">
                We will text +91 98765 43210 the moment your PDF is ready
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setNotifyModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shrink-0 cursor-pointer"
          >
            Manage
          </button>
        </div>

        {/* Prototype Demo Fast-Forward Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onSimulateReady}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Simulate Results Ready (Demo Action)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Modal: Notification Settings */}
        <Modal
          isOpen={notifyModalOpen}
          onClose={() => setNotifyModalOpen(false)}
          title="Notification Preferences"
          subtitle="Optum Health Alert System"
        >
          <div className="space-y-3.5">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>SMS notifications active for your registered phone number.</span>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <p>You will receive:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Immediate SMS alert once findings are validated</li>
                <li>Secure one-tap link to view results inside Optum app</li>
                <li>Automated copy sent to your verified email address</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setNotifyModalOpen(false)}
              className="w-full py-2.5 rounded-2xl bg-[#1B64F2] text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
