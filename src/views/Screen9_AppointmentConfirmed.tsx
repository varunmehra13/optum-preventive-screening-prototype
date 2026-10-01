import React, { useState } from 'react';
import { Calendar, Shield, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { ConfirmedCalendarGraphic } from '../components/common/VectorIllustration';
import { Modal } from '../components/common/Modal';
import { AppointmentState } from '../types';

interface Screen9Props {
  appointment: AppointmentState;
  onBack: () => void;
  onViewCostDetails: () => void;
  onViewResultsDemo: () => void;
  onViewResultsNotReady?: () => void;
}

export const Screen9_AppointmentConfirmed: React.FC<Screen9Props> = ({
  appointment,
  onBack,
  onViewCostDetails,
  onViewResultsDemo,
  onViewResultsNotReady,
}) => {
  const [passModalOpen, setPassModalOpen] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Appointment confirmed"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Confirmed Hero Card with Graphic */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center space-y-3">
          <ConfirmedCalendarGraphic />

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 mt-2">
            Appointment confirmed
          </h2>

          <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
            Your preventive health screening has been scheduled.
          </p>
        </div>

        {/* Appointment details Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Appointment details
          </span>

          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-snug">
              {appointment.selectedDate}
            </h3>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-base font-bold text-[#1B64F2]">
                {appointment.selectedTime}
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              {appointment.provider.name} · Central Delhi · {appointment.provider.distance}
            </p>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <Shield className="w-4 h-4 text-slate-400" />
              <span>{appointment.screeningName}</span>
            </div>
          </div>

          {/* Expected amount you pay inner card */}
          <div className="bg-[#F0F6FF] rounded-2xl p-4 space-y-1">
            <span className="text-xs text-slate-600 font-medium block">
              Expected amount you pay
            </span>
            <div className="text-3xl font-black text-[#1B64F2] tracking-tight">
              ₹0
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onViewCostDetails}
              className="text-xs font-semibold text-[#1B64F2] hover:underline cursor-pointer"
            >
              View cost details
            </button>
          </div>
        </div>

        {/* Journey progression action cards */}
        <div className="pt-2 space-y-2.5">
          <button
            type="button"
            onClick={onViewResultsDemo}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <span>Proceed to Screening Results</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPassModalOpen(true)}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>View Pass</span>
            </button>

            {onViewResultsNotReady && (
              <button
                type="button"
                onClick={onViewResultsNotReady}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Edge Case: Processing</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* In-App Modal: Optum Digital Health Pass */}
      <Modal
        isOpen={passModalOpen}
        onClose={() => setPassModalOpen(false)}
        title="Optum Digital Health Pass"
        subtitle="Express zero-billing appointment voucher"
      >
        <div className="space-y-4 text-xs">
          <div className="bg-gradient-to-br from-[#002D4A] to-[#0A4770] text-white rounded-2xl p-4 shadow-md space-y-3">
            <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="font-bold tracking-wide text-xs">OPTUM HEALTH PASS</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                Verified ₹0
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-slate-300 block text-[10px]">Pass Code</span>
                <span className="font-mono font-bold text-sm text-white tracking-wider">{appointment.confirmationCode}</span>
              </div>
              <div>
                <span className="text-slate-300 block text-[10px]">Date &amp; Time</span>
                <span className="font-bold text-white">{appointment.selectedDate} · {appointment.selectedTime}</span>
              </div>
              <div className="col-span-2 pt-1">
                <span className="text-slate-300 block text-[10px]">Facility</span>
                <span className="font-semibold text-white">{appointment.provider.name} · Counter 2</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col items-center gap-1">
              <div className="h-9 w-full bg-white/95 rounded px-2 py-1 flex items-center justify-between">
                {[4, 2, 6, 2, 3, 5, 2, 7, 3, 2, 5, 3, 2, 6, 4, 2, 4, 3, 5, 2, 3, 6, 2].map((w, i) => (
                  <span
                    key={i}
                    className="h-full bg-slate-900 rounded-[0.5px]"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-slate-300 tracking-widest">
                *{appointment.confirmationCode}*
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setCopiedPass(true);
                setTimeout(() => setCopiedPass(false), 2500);
              }}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors text-center cursor-pointer"
            >
              {copiedPass ? 'Copied! ✓' : 'Copy Voucher Code'}
            </button>
            <button
              type="button"
              onClick={() => setPassModalOpen(false)}
              className="flex-1 py-2.5 rounded-xl bg-[#002D4A] hover:bg-[#00385D] text-white font-semibold text-xs transition-colors text-center cursor-pointer"
            >
              Close Pass
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
