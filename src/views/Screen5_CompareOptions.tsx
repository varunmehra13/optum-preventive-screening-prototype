import React, { useState } from 'react';
import { Building2, Check } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { Provider } from '../types';

interface Screen5Props {
  providers: Provider[];
  onBack: () => void;
  onSelectProvider: (provider: Provider) => void;
}

export const Screen5_CompareOptions: React.FC<Screen5Props> = ({
  providers,
  onBack,
  onSelectProvider,
}) => {
  const p1 = providers[0]; // HealthFirst
  const p2 = providers[1]; // CityCare
  const [selectedProviderId, setSelectedProviderId] = useState<string>(p1.id);

  const selectedProvider = providers.find((p) => p.id === selectedProviderId) || p1;

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Compare options"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Top 2 side-by-side Provider mini-cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* HealthFirst Card */}
          <button
            type="button"
            onClick={() => setSelectedProviderId(p1.id)}
            className={`text-left rounded-3xl p-4 border transition-all cursor-pointer relative ${
              selectedProviderId === p1.id
                ? 'bg-[#EDF4FF] border-[#1B64F2] ring-2 ring-[#1B64F2]/20 shadow-xs'
                : 'bg-white border-slate-200/90 hover:border-slate-300'
            }`}
          >
            {selectedProviderId === p1.id && (
              <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#1B64F2] text-white flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
            )}
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mt-2.5 leading-tight truncate">
              {p1.shortName}
            </h3>
            <div className="mt-1">
              <CoverageBadge status={p1.coverageStatus} customLabel="Coverage verified" size="sm" />
            </div>
            <div className="mt-3">
              <span className="text-[11px] text-slate-500 block">
                Expected amount you pay
              </span>
              <span className="text-2xl font-extrabold text-[#1B64F2] block mt-0.5">
                {p1.costDisplay}
              </span>
            </div>
          </button>

          {/* CityCare Card */}
          <button
            type="button"
            onClick={() => setSelectedProviderId(p2.id)}
            className={`text-left rounded-3xl p-4 border transition-all cursor-pointer relative ${
              selectedProviderId === p2.id
                ? 'bg-[#FFF8ED] border-amber-400 ring-2 ring-amber-400/20 shadow-xs'
                : 'bg-white border-slate-200/90 hover:border-slate-300'
            }`}
          >
            {selectedProviderId === p2.id && (
              <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
            )}
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mt-2.5 leading-tight truncate">
              {p2.shortName}
            </h3>
            <div className="mt-1">
              <CoverageBadge status={p2.coverageStatus} customLabel="Coverage estimated" size="sm" />
            </div>
            <div className="mt-3">
              <span className="text-[11px] text-slate-500 block">
                Expected amount you pay
              </span>
              <span className="text-xl font-extrabold text-[#1B64F2] block mt-0.5">
                {p2.costDisplay}
              </span>
            </div>
          </button>
        </div>

        {/* Detailed Comparison Specs Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          {/* Distance Row */}
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Distance
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p1.shortName}</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">{p1.distance}</span>
              </div>
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p2.shortName}</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">{p2.distance}</span>
              </div>
            </div>
          </div>

          {/* Next Available Row */}
          <div className="border-t border-slate-100 pt-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Next available
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p1.shortName}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">
                  {p1.nextAvailable}
                </span>
              </div>
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p2.shortName}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block">
                  {p2.nextAvailable}
                </span>
                <span className="inline-block text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-sm mt-1">
                  Earlier slot
                </span>
              </div>
            </div>
          </div>

          {/* Provider Price Row */}
          <div className="border-t border-slate-100 pt-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Provider price
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p1.shortName}</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                  ₹{p1.providerPrice.toLocaleString()}
                </span>
              </div>
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p2.shortName}</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                  ₹{p2.providerPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Coverage Status Row */}
          <div className="border-t border-slate-100 pt-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Coverage
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p1.shortName}</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-700 mt-0.5 block">
                  Verified
                </span>
              </div>
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p2.shortName}</span>
                <span className="text-xs sm:text-sm font-bold text-amber-700 mt-0.5 block">
                  Estimated
                </span>
              </div>
            </div>
          </div>

          {/* Credibility Row */}
          <div className="border-t border-slate-100 pt-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Credibility
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p1.shortName}</span>
                <span className="text-xs font-medium text-slate-800 mt-0.5 block">
                  {p1.accreditation}
                </span>
              </div>
              <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100">
                <span className="text-xs text-slate-500 block">{p2.shortName}</span>
                <span className="text-xs font-medium text-slate-800 mt-0.5 block">
                  {p2.accreditation}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What changes between these options? Synthesis Card */}
        <div className="bg-slate-50/90 rounded-3xl p-4 sm:p-5 border border-slate-200/80 space-y-3">
          <span className="text-xs font-bold text-slate-600 block">
            What changes between these options?
          </span>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-2xs">
              <span className="text-[11px] text-slate-400 font-medium block">{p1.shortName}</span>
              <p className="text-xs font-bold text-slate-900 mt-1 leading-snug">
                ₹0 expected cost, Coverage verified
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-2xs">
              <span className="text-[11px] text-slate-400 font-medium block">{p2.shortName}</span>
              <p className="text-xs font-bold text-slate-900 mt-1 leading-snug">
                Earlier slot, ₹600-₹900 estimated
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-1">
            Choose based on what matters most to you.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={() => onSelectProvider(selectedProvider)}
            className="w-full h-13 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.98] text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center cursor-pointer"
          >
            Choose provider ({selectedProvider.shortName})
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            See all options
          </button>
        </div>
      </div>
    </div>
  );
};
