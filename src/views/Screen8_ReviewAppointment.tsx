import React, { useState } from 'react';
import { Calendar, Shield, CheckCircle2 } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { Modal } from '../components/common/Modal';
import { AppointmentState } from '../types';

interface Screen8Props {
  appointment: AppointmentState;
  onBack: () => void;
  onConfirm: () => void;
  onChangeAppointment: () => void;
  onViewCostDetails: () => void;
}

export const Screen8_ReviewAppointment: React.FC<Screen8Props> = ({
  appointment,
  onBack,
  onConfirm,
  onChangeAppointment,
  onViewCostDetails,
}) => {
  const [prepModal, setPrepModal] = useState(false);
  const [policyModal, setPolicyModal] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Review your appointment"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Appointment Date & Location Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-snug">
                {appointment.selectedDate}
              </h2>
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
        </div>

        {/* Cost & Coverage Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Cost &amp; Coverage
          </span>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-600">Provider price</span>
            <span className="font-bold text-slate-900">
              ₹{appointment.provider.providerPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-600">Coverage status</span>
            <CoverageBadge status={appointment.provider.coverageStatus} customLabel="Verified" size="sm" />
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
            className="text-xs font-semibold text-[#0F7645] hover:underline block pt-1 cursor-pointer"
          >
            View cost details
          </button>
        </div>

        {/* Before your appointment Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Before your appointment
          </h3>

          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B64F2] mt-1.5 shrink-0" />
              <span>
                <strong>Preparation instructions:</strong> Review any requirements provided for this screening.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B64F2] mt-1.5 shrink-0" />
              <span>
                <strong>What to bring:</strong> Required identification or coverage information, if applicable.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B64F2] mt-1.5 shrink-0" />
              <span>
                <strong>Arrival:</strong> Follow the provider&apos;s appointment instructions.
              </span>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setPrepModal(true)}
            className="text-xs font-semibold text-[#0F7645] hover:underline block pt-1 cursor-pointer"
          >
            View preparation instructions
          </button>
        </div>

        {/* Need to change plans? Card */}
        <div className="bg-[#EDF4FF] rounded-3xl p-5 border border-[#D5E5FD] space-y-2">
          <h4 className="text-sm font-bold text-slate-900">
            Need to change plans?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Rescheduling or cancellation options are available based on the provider&apos;s policy.
          </p>
          <button
            type="button"
            onClick={() => setPolicyModal(true)}
            className="text-xs font-semibold text-[#0F7645] hover:underline block pt-0.5 cursor-pointer"
          >
            View change policy
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={onConfirm}
            className="w-full h-13 rounded-2xl bg-[#002D4A] hover:bg-[#042338] active:scale-[0.98] text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Confirm appointment
          </button>

          <button
            type="button"
            onClick={onChangeAppointment}
            className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Change appointment
          </button>
        </div>
      </div>

      {/* Modal: Preparation instructions */}
      <Modal
        isOpen={prepModal}
        onClose={() => setPrepModal(false)}
        title="Preparation Checklist"
        subtitle="HealthFirst Diagnostics instructions"
      >
        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
            <span className="font-bold text-emerald-900">1. Fasting Status</span>
            <p className="text-emerald-800">
              8–10 hours fasting requested prior to your 8:30 AM appointment. Water is permitted.
            </p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900">2. Verification Token</span>
            <p className="text-slate-600">
              Present your Optum verification code upon check-in for instant zero-billing pass.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPrepModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Modal: Change policy */}
      <Modal
        isOpen={policyModal}
        onClose={() => setPolicyModal(false)}
        title="Change & Cancellation Policy"
        subtitle="Zero fee flexibility"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            You may reschedule or cancel your appointment free of charge at any time up to 2 hours before your scheduled time slot.
          </p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>No cancellation penalties</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Your preventive care benefit remains active and can be used with any other participating provider.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPolicyModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs mt-2"
          >
            I understand
          </button>
        </div>
      </Modal>
    </div>
  );
};
