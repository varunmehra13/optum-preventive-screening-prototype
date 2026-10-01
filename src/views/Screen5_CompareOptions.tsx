import React, { useState } from 'react';
import { Sparkles, Check, AlertTriangle } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Provider } from '../types';

interface Screen5Props {
  providers: Provider[];
  onBack: () => void;
  onSelectProvider: (provider: Provider) => void;
  onChangeProvider?: () => void;
}

export const Screen5_CompareOptions: React.FC<Screen5Props> = ({
  providers,
  onBack,
  onSelectProvider,
  onChangeProvider,
}) => {
  const p1 = providers[0]; // HealthFirst
  const p2 = providers[1]; // CityCare
  const [selectedPreference, setSelectedPreference] = useState<string>('lowest_cost');
  const [aiAnalysisResult, setAiAnalysisResult] = useState<string | null>(null);

  const handleRunAiComparison = () => {
    if (selectedPreference === 'lowest_cost' || selectedPreference === 'coverage_confidence') {
      setAiAnalysisResult('Based on your priority, HealthFirst Diagnostics is the recommended choice with ₹0 verified out-of-pocket obligation.');
    } else {
      setAiAnalysisResult('Based on your priority, CityCare Labs provides the earliest available appointment today at 5:05 PM.');
    }
  };

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Understand your options"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Top AI Comparison Card */}
        <div className="bg-white rounded-3xl p-5 border border-blue-200/80 shadow-xs space-y-3.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
            </div>
            <span className="text-xs font-semibold text-[#1B64F2]">
              AI comparison
            </span>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 leading-snug">
              Both options meet your screening needs
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Here are the key differences to help you decide.
            </p>
          </div>

          {/* Two comparison columns */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {/* HealthFirst Card */}
            <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-200/70 space-y-2 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-1.5">
                  Recommended match
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  HealthFirst Diagnostics
                </h4>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-600">
                <span className="text-slate-400 block text-[10px]">Best if:</span>
                <div className="flex items-start gap-1">
                  <Check className="w-3.5 h-3.5 text-[#1B64F2] shrink-0 mt-0.5" />
                  <span>You want verified coverage</span>
                </div>
                <div className="flex items-start gap-1">
                  <Check className="w-3.5 h-3.5 text-[#1B64F2] shrink-0 mt-0.5" />
                  <span>You prefer predictable cost</span>
                </div>
              </div>
            </div>

            {/* CityCare Card */}
            <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-200/70 space-y-2 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 mb-1.5">
                  Alternative option
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  CityCare Labs
                </h4>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-600">
                <span className="text-slate-400 block text-[10px]">Best if:</span>
                <div className="flex items-start gap-1">
                  <Check className="w-3.5 h-3.5 text-[#1B64F2] shrink-0 mt-0.5" />
                  <span>Earliest appointment available</span>
                </div>
                <div className="flex items-start gap-1">
                  <Check className="w-3.5 h-3.5 text-[#1B64F2] shrink-0 mt-0.5" />
                  <span>Comfortable confirming coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Cost */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900">
            Cost
          </h3>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#F8FAFC] rounded-2xl p-3 space-y-1">
              <span className="text-[10px] text-slate-400 block">HealthFirst</span>
              <span className="text-xs font-bold text-slate-900 block">₹0 estimated</span>
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                ✓ Coverage verified
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-3 space-y-1">
              <span className="text-[10px] text-slate-400 block">CityCare</span>
              <span className="text-xs font-bold text-slate-900 block">₹600–₹900</span>
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800">
                ⚠ Coverage unverified
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Convenience */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900">
            Convenience
          </h3>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#F8FAFC] rounded-2xl p-3 space-y-1">
              <span className="text-[10px] text-slate-400 block">HealthFirst</span>
              <span className="text-xs font-bold text-slate-900 block">Tomorrow · 8:30 AM</span>
              <span className="text-[11px] text-slate-500 block">2.4 km away</span>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-3 space-y-1">
              <span className="text-[10px] text-slate-400 block">CityCare</span>
              <span className="text-xs font-bold text-slate-900 block">Today · 5:00 PM</span>
              <span className="text-[11px] text-slate-500 block">4.1 km away</span>
            </div>
          </div>
        </div>

        {/* Section 3: Coverage confidence */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900">
            Coverage confidence
          </h3>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#F8FAFC] rounded-2xl p-3">
              <span className="text-[10px] text-slate-400 block mb-1">HealthFirst</span>
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                ✓ Coverage verified
              </span>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-3">
              <span className="text-[10px] text-slate-400 block mb-1">CityCare</span>
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800">
                ⚠ Coverage unverified
              </span>
            </div>
          </div>
        </div>

        {/* Section 4: Need help deciding? */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Need help deciding?
            </h4>
          </div>

          <p className="text-xs text-slate-600">
            Tell AI what matters most for your screening.
          </p>

          <div className="space-y-2 text-xs text-slate-700 pt-1">
            {[
              { id: 'lowest_cost', label: 'Lowest cost' },
              { id: 'earliest_appointment', label: 'Earliest appointment' },
              { id: 'closest_location', label: 'Closest location' },
              { id: 'coverage_confidence', label: 'Most coverage confidence' },
            ].map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-2.5 cursor-pointer py-1 select-none"
              >
                <input
                  type="radio"
                  name="decision_priority"
                  value={option.id}
                  checked={selectedPreference === option.id}
                  onChange={() => setSelectedPreference(option.id)}
                  className="w-4 h-4 text-[#1B64F2] border-slate-300 focus:ring-[#1B64F2]"
                />
                <span className="text-xs text-slate-800">{option.label}</span>
              </label>
            ))}
          </div>

          {aiAnalysisResult && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 animate-in fade-in">
              {aiAnalysisResult}
            </div>
          )}

          <button
            type="button"
            onClick={handleRunAiComparison}
            className="w-full py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs active:scale-[0.99] transition-all cursor-pointer text-center"
          >
            Compare for me
          </button>
        </div>

        {/* Buttons */}
        <div className="space-y-2 pt-2">
          <button
            type="button"
            onClick={() => onSelectProvider(p1)}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            Choose Provider
          </button>

          <button
            type="button"
            onClick={onChangeProvider || onBack}
            className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1 cursor-pointer"
          >
            Change provider
          </button>
        </div>
      </div>
    </div>
  );
};
