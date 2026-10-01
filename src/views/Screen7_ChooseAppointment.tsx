import React, { useState } from 'react';
import { Info, Sparkles, Calendar, MapPin } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';
import { Provider } from '../types';

interface Screen7Props {
  provider: Provider;
  onBack: () => void;
  onContinue: (date: string, time: string) => void;
  onSlotUnavailable?: () => void;
}

export const Screen7_ChooseAppointment: React.FC<Screen7Props> = ({
  provider,
  onBack,
  onContinue,
  onSlotUnavailable,
}) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(1); // default Tue 29
  const [selectedTime, setSelectedTime] = useState<string>('8:30 AM');
  const [prepModalOpen, setPrepModalOpen] = useState<boolean>(false);
  const [suggestTimeModal, setSuggestTimeModal] = useState<boolean>(false);

  const availableDates = [
    { day: 'Mon', date: '28', fullDate: 'Monday, 28 September' },
    { day: 'Tue', date: '29', fullDate: 'Tuesday, 29 September' },
    { day: 'Wed', date: '30', fullDate: 'Wednesday, 30 September' },
    { day: 'Thu', date: '01', fullDate: 'Thursday, 01 October' },
  ];

  const availableTimes = ['7:30 AM', '8:30 AM', '10:00 AM', '11:30 AM', '4:00 PM'];

  const selectedDateObj = availableDates[selectedDateIndex] || availableDates[1];

  const handleTimeSelect = (t: string) => {
    setSelectedTime(t);
  };

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

      <div className="p-4 sm:p-5 space-y-4">
        {/* Selected Provider Mini Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=160&q=80"
              alt={provider.name}
              className="w-12 h-12 rounded-xl object-cover border border-slate-100 shrink-0"
            />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                {provider.name}
              </h3>
              <p className="text-xs text-slate-500">
                Preventive Screening Center
              </p>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ✓ Coverage verified
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Tomorrow · 8:30 AM available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{provider.distance}</span>
            </div>
          </div>
        </div>

        {/* Select Date Section */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-600 block px-1">
            Select date
          </span>
          <div className="grid grid-cols-4 gap-2.5">
            {availableDates.map((item, idx) => {
              const isSelected = selectedDateIndex === idx;
              return (
                <button
                  key={item.date}
                  type="button"
                  onClick={() => setSelectedDateIndex(idx)}
                  className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B64F2] border-[#1B64F2] text-white shadow-xs'
                      : 'bg-[#F0F6FF] border-blue-100/70 text-slate-800 hover:border-blue-200'
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

        {/* Available Times Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-slate-600">
              Available times
            </span>
            {onSlotUnavailable && (
              <button
                type="button"
                onClick={onSlotUnavailable}
                className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 hover:underline cursor-pointer"
              >
                Simulate fully booked date →
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {availableTimes.map((timeStr) => {
              const isSelected = selectedTime === timeStr;
              return (
                <button
                  key={timeStr}
                  type="button"
                  onClick={() => handleTimeSelect(timeStr)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B64F2] text-white shadow-xs'
                      : 'bg-[#F0F6FF] text-slate-800 hover:bg-blue-100/60'
                  }`}
                >
                  {timeStr}
                </button>
              );
            })}
          </div>
        </div>

        {/* Before You Book Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-2.5">
          <div className="flex items-center gap-2 text-amber-700">
            <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
              i
            </div>
            <span className="text-xs font-bold text-amber-900">
              Before you book
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Preparation instructions may apply to your appointment.
          </p>

          <button
            type="button"
            onClick={() => setPrepModalOpen(true)}
            className="text-xs font-semibold text-[#1B64F2] hover:underline block text-left cursor-pointer"
          >
            Review preparation requirements
          </button>

          <p className="text-[11px] text-slate-400">
            Specific instructions will depend on the selected screening and provider.
          </p>
        </div>

        {/* Need Help Finding the Right Time? Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Need help finding the right time?
            </h4>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            AI can consider your schedule, provider availability, and appointment urgency.
          </p>

          <button
            type="button"
            onClick={() => setSuggestTimeModal(true)}
            className="w-full py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs active:scale-[0.99] transition-all cursor-pointer text-center"
          >
            Suggest a time for me
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <button
            type="button"
            onClick={handleContinue}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            Continue
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1 cursor-pointer"
          >
            Back to provider
          </button>
        </div>
      </div>

      {/* Modal: Preparation Requirements */}
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
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            I understand these requirements
          </button>
        </div>
      </Modal>

      {/* Modal: AI Time Suggestion */}
      <Modal
        isOpen={suggestTimeModal}
        onClose={() => setSuggestTimeModal(false)}
        title="Optum AI Time Optimizer"
        subtitle="Fasting-optimized scheduling"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl space-y-1">
            <span className="font-bold text-purple-900 block">Recommended Slot: Tuesday 8:30 AM</span>
            <p className="text-purple-800">
              Because this preventive screening requires 8–10 hours of fasting, morning appointments allow you to fast overnight while sleeping and complete testing early.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedDateIndex(1);
              setSelectedTime('8:30 AM');
              setSuggestTimeModal(false);
            }}
            className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs mt-2 cursor-pointer"
          >
            Select Tuesday 8:30 AM
          </button>
        </div>
      </Modal>
    </div>
  );
};
