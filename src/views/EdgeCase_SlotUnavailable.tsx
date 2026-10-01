import React, { useState } from 'react';
import { Calendar, Bell, ArrowRight, Check, Clock, AlertTriangle, Building2 } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';

interface EdgeCaseSlotUnavailableProps {
  onBack: () => void;
  onSelectNextDate: (date: string, time: string) => void;
  onSwitchProvider: () => void;
}

export const EdgeCase_SlotUnavailable: React.FC<EdgeCaseSlotUnavailableProps> = ({
  onBack,
  onSelectNextDate,
  onSwitchProvider,
}) => {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [waitlistJoined, setWaitlistJoined] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Choose appointment"
        subtitle="HealthFirst Diagnostics"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Main Alert Card */}
        <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-xs space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">
                Availability Status
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Fully booked for Tuesday, 29 Sept</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
              No open slots on selected date
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fasting morning screening slots at HealthFirst Diagnostics are filled for Tuesday. Choose the next available day or explore immediate alternatives below.
            </p>
          </div>
        </div>

        {/* Options to Proceed */}
        <div className="space-y-3 pt-1">
          <h3 className="text-sm font-bold text-slate-900 px-1">
            Fastest ways to complete screening
          </h3>

          {/* Option 1: Next Available Day */}
          <div className="bg-white rounded-3xl p-5 border border-blue-200/80 shadow-xs space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-0.5 flex-1">
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#EBF3FF] text-[#1B64F2] uppercase tracking-wider">
                  Next Available Slot
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  Wednesday, 30 September · 8:15 AM
                </h4>
                <p className="text-xs text-slate-500">
                  HealthFirst Diagnostics (Same facility, 100% ₹0 covered)
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectNextDate('Wednesday, 30 September', '8:15 AM')}
              className="w-full py-3 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-xs transition-all cursor-pointer text-center"
            >
              Select Wednesday, 8:15 AM
            </button>
          </div>

          {/* Option 2: Alternative Clinic Nearby */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-0.5 flex-1">
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                  Same-day slots available
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  CityCare Labs · 3.1 km away
                </h4>
                <p className="text-xs text-slate-500">
                  Slots available today (5:05 PM) or tomorrow morning (8:00 AM)
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onSwitchProvider}
              className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              Switch to CityCare Labs
            </button>
          </div>

          {/* Option 3: Waitlist */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="text-xs font-bold text-slate-900">
                  Join Cancellation Waitlist
                </h5>
                <p className="text-[11px] text-slate-500">
                  Get notified instantly if a Tuesday slot opens
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setWaitlistModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shrink-0 cursor-pointer"
            >
              {waitlistJoined ? 'Joined' : 'Notify Me'}
            </button>
          </div>
        </div>

        {/* Modal: Waitlist Confirmation */}
        <Modal
          isOpen={waitlistModalOpen}
          onClose={() => setWaitlistModalOpen(false)}
          title={waitlistJoined ? "You're on the Waitlist" : "Tuesday Morning Waitlist"}
          subtitle="HealthFirst Diagnostics"
        >
          {waitlistJoined ? (
            <div className="space-y-4 py-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="text-base font-bold text-slate-900">Waitlist Confirmed</h4>
                <p className="text-xs text-slate-600">
                  We will hold any cancelled appointment on Tuesday 29 Sept between 7:30 AM and 10:00 AM for 15 minutes and send an SMS alert to your phone.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setWaitlistModalOpen(false)}
                className="w-full py-3 rounded-2xl bg-[#1B64F2] text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              <p className="text-xs text-slate-600">
                Preventive screening appointments occasionally become open when patients reschedule their fasting tests.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-700">
                <div className="font-semibold text-slate-900">Preferred Time Window:</div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-white border border-blue-400 text-blue-700 rounded-lg font-medium text-xs">
                    Morning (7:30 - 10:00 AM)
                  </span>
                  <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs">
                    Any Tuesday Slot
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setWaitlistJoined(true)}
                className="w-full py-3 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] text-white text-xs font-bold"
              >
                Join Waitlist via SMS
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
