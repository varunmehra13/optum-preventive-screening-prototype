import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { Modal } from '../components/common/Modal';
import { Provider } from '../types';

interface Screen7Props {
  provider: Provider;
  onBack: () => void;
  onContinue: (date: string, time: string) => void;
}

export const Screen7_ChooseAppointment: React.FC<Screen7Props> = ({
  provider,
  onBack,
  onContinue,
}) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(1); // default Tue 29
  const [selectedTime, setSelectedTime] = useState<string>('8:30 AM');
  const [prepModalOpen, setPrepModalOpen] = useState<boolean>(false);

  const selectedDateObj = provider.availableDates[selectedDateIndex] || provider.availableDates[0];

  const handleContinue = () => {
    onContinue(selectedDateObj.fullDate, selectedTime);
  };

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Choose Appointment"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-5">
        {/* Provider Overview Header Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <CoverageBadge status={provider.coverageStatus} customLabel={provider.coverageLabel} size="sm" />
            <span className="text-xs font-semibold text-slate-800">
              Expected amount: {provider.costDisplay}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              {provider.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Preventive health screening · {provider.distance}
            </p>
          </div>
        </div>

        {/* Date Selection */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold text-slate-500 block px-1">
            Select date
          </label>
          <div className="grid grid-cols-4 gap-2.5">
            {provider.availableDates.map((item, idx) => {
              const isSelected = selectedDateIndex === idx;
              return (
                <button
                  key={item.date}
                  type="button"
                  onClick={() => setSelectedDateIndex(idx)}
                  className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B64F2] border-[#1B64F2] text-white shadow-xs'
                      : 'bg-white border-slate-200/90 text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      isSelected ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {item.day}
                  </span>
                  <span className="text-lg font-bold mt-0.5 tracking-tight">
                    {item.date}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold text-slate-500 block px-1">
            Available times
          </label>
          <div className="flex flex-wrap gap-2.5">
            {provider.availableTimes.map((time) => {
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B64F2] text-white shadow-xs'
                      : 'bg-[#F0F6FF] text-slate-800 hover:bg-blue-100 border border-blue-100'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Before You Book Notice Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-amber-700">
            <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <Info className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-amber-900">
              Before you book
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Preparation instructions may apply to your appointment.
          </p>

          <button
            type="button"
            onClick={() => setPrepModalOpen(true)}
            className="text-xs font-bold text-[#0F7645] hover:underline block pt-0.5 cursor-pointer text-left"
          >
            Review preparation requirements
          </button>

          <p className="text-[11px] text-slate-400 pt-1 leading-snug">
            Specific instructions will depend on the selected screening and provider.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={handleContinue}
            className="w-full h-13 rounded-2xl bg-[#002D4A] hover:bg-[#042338] active:scale-[0.98] text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Continue
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Back to provider
          </button>
        </div>
      </div>

      {/* Preparation Instructions Modal */}
      <Modal
        isOpen={prepModalOpen}
        onClose={() => setPrepModalOpen(false)}
        title="Preparation Requirements"
        subtitle="Ensure accurate laboratory diagnostic results"
      >
        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1">
            <div className="font-bold text-amber-900">Overnight Fasting (8–10 Hours)</div>
            <p className="text-amber-800">
              Do not consume food, tea, coffee, or milk. You may drink ordinary water to remain well-hydrated.
            </p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-slate-900">What to Bring</div>
            <p className="text-slate-600">
              Government Photo ID (Aadhaar / Driving License / Voter Card) &amp; Optum appointment pass on your phone.
            </p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-slate-900">Arrival Time</div>
            <p className="text-slate-600">
              Arrive 15 minutes prior to 8:30 AM for express check-in at Counter 2 (Optum FastTrack).
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPrepModalOpen(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            I understand these requirements
          </button>
        </div>
      </Modal>
    </div>
  );
};
