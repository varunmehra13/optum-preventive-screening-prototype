import React, { useState } from 'react';
import { Calendar, Shield, CalendarCheck, Share2, ArrowRight } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { ConfirmedCalendarGraphic } from '../components/common/VectorIllustration';
import { Modal } from '../components/common/Modal';
import { AppointmentState } from '../types';

interface Screen9Props {
  appointment: AppointmentState;
  onBack: () => void;
  onViewCostDetails: () => void;
  onViewResultsDemo: () => void;
}

export const Screen9_AppointmentConfirmed: React.FC<Screen9Props> = ({
  appointment,
  onBack,
  onViewCostDetails,
  onViewResultsDemo,
}) => {
  const [calendarSaved, setCalendarSaved] = useState(false);
  const [prepModalOpen, setPrepModalOpen] = useState(false);
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

          <p className="text-xs text-slate-500 max-w-xs">
            Your preventive health screening has been scheduled.
          </p>

          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCalendarSaved(true)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                calendarSaved
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>{calendarSaved ? 'Added to Calendar ✓' : 'Add to Calendar'}</span>
            </button>

            <button
              type="button"
              onClick={() => setPassModalOpen(true)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Pass</span>
            </button>
          </div>
        </div>

        {/* Appointment details Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Appointment details
          </span>

          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-snug">
                {appointment.selectedDate}
              </h3>
              <div className="text-base font-semibold text-[#1B64F2]">
                {appointment.selectedTime}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {appointment.provider.name} · Central Delhi · {appointment.provider.distance}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
            <Shield className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{appointment.screeningName}</span>
          </div>

          {/* Expected amount you pay box */}
          <div className="bg-[#EDF4FF] rounded-2xl p-4 border border-[#D5E5FD] space-y-1">
            <span className="text-xs text-slate-600 font-normal">
              Expected amount you pay
            </span>
            <div className="text-3xl font-extrabold text-[#0F7645]">
              ₹0
            </div>
          </div>

          <button
            type="button"
            onClick={onViewCostDetails}
            className="text-xs font-semibold text-[#0F7645] hover:underline block cursor-pointer"
          >
            View cost details
          </button>
        </div>

        {/* Step 7 Simulator: Jump to Screening Results & Next Steps */}
        <div className="bg-[#002D4A] rounded-3xl p-5 text-white shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">
              JOURNEY STEP 7 · TEST DAY SIMULATION
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h4 className="text-base font-bold text-white leading-tight">
            Screening Completed &amp; Results Ready
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            In a real journey, the user arrives at the lab, completes their screening, and receives an alert when their diagnostic findings are available.
          </p>

          <button
            type="button"
            onClick={onViewResultsDemo}
            className="w-full py-3.5 px-4 rounded-2xl bg-white text-[#002D4A] hover:bg-slate-100 active:scale-[0.98] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
          >
            <span>View Screening Results &amp; Follow-up</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Preparation requirements link */}
        <div className="text-center pt-1">
          <button
            type="button"
            onClick={() => setPrepModalOpen(true)}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline cursor-pointer"
          >
            Review preparation requirements again
          </button>
        </div>
      </div>

      {/* Modal: Preparation Checklist */}
      <Modal
        isOpen={prepModalOpen}
        onClose={() => setPrepModalOpen(false)}
        title="Your Appointment Checklist"
        subtitle="HealthFirst Diagnostics · 8:30 AM"
      >
        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
            <span className="font-bold text-blue-900">Pass Code: #{appointment.confirmationCode}</span>
            <p className="text-blue-800 text-[11px] mt-0.5">Show this screen upon entry to skip queue.</p>
          </div>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="font-bold text-amber-900">8–10 Hour Fasting</span>
            <p className="text-amber-800 text-[11px] mt-0.5">Plain water is encouraged. No breakfast, tea, or milk before blood draw.</p>
          </div>
          <button
            type="button"
            onClick={() => setPrepModalOpen(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            Done
          </button>
        </div>
      </Modal>

      {/* In-App Modal: Optum Digital Health Pass */}
      <Modal
        isOpen={passModalOpen}
        onClose={() => setPassModalOpen(false)}
        title="Optum Digital Health Pass"
        subtitle="Express zero-billing appointment voucher"
      >
        <div className="space-y-4 text-xs">
          {/* Card Ticket styling */}
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
                <span className="text-slate-300 block text-[10px]">Date & Time</span>
                <span className="font-bold text-white">{appointment.selectedDate} · {appointment.selectedTime}</span>
              </div>
              <div className="col-span-2 pt-1">
                <span className="text-slate-300 block text-[10px]">Facility</span>
                <span className="font-semibold text-white">{appointment.provider.name} · Counter 2</span>
              </div>
            </div>

            {/* Barcode representation */}
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
              {copiedPass ? 'Copied to Clipboard! ✓' : 'Copy Voucher Code'}
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
