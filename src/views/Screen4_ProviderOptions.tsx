import React, { useState } from 'react';
import { Building2, ShieldCheck, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { PriceCallout } from '../components/common/PriceCallout';
import { Modal } from '../components/common/Modal';
import { Provider } from '../types';

interface Screen4Props {
  providers: Provider[];
  onSelectProvider: (provider: Provider) => void;
  onCompareProviders: () => void;
  onBack?: () => void;
}

export const Screen4_ProviderOptions: React.FC<Screen4Props> = ({
  providers,
  onSelectProvider,
  onCompareProviders,
  onBack,
}) => {
  const [activeFilter, setActiveFilter] = useState<'soonest' | 'distance' | 'coverage'>('soonest');
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);

  // Sorting based on active filter
  const sortedProviders = [...providers].sort((a, b) => {
    if (activeFilter === 'soonest') {
      if (a.nextAvailable.includes('Today')) return -1;
      if (b.nextAvailable.includes('Today')) return 1;
      return 0;
    }
    if (activeFilter === 'distance') {
      const distA = parseFloat(a.distance);
      const distB = parseFloat(b.distance);
      return distA - distB;
    }
    if (activeFilter === 'coverage') {
      const rank = { verified: 1, estimated: 2, not_verified: 3 };
      return rank[a.coverageStatus] - rank[b.coverageStatus];
    }
    return 0;
  });

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Screening Options"
        subtitle="Preventive health screening"
        showBack={Boolean(onBack)}
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Intro text */}
        <p className="text-sm text-slate-700 leading-snug">
          Compare providers by availability, distance and expected cost.
        </p>

        {/* Filter Pills & Help Link */}
        <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-200/80 space-y-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveFilter('soonest')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'soonest'
                  ? 'bg-[#EBF8F2] text-[#0F7645] border border-[#86EFAC] shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Soonest available
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('distance')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'distance'
                  ? 'bg-[#EBF8F2] text-[#0F7645] border border-[#86EFAC] shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Distance
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('coverage')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'coverage'
                  ? 'bg-[#EBF8F2] text-[#0F7645] border border-[#86EFAC] shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Coverage
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => setComparisonModalOpen(true)}
              className="text-xs font-semibold text-[#1B64F2] hover:underline cursor-pointer"
            >
              How comparison works
            </button>

            <button
              type="button"
              onClick={onCompareProviders}
              className="text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-400 px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3 text-[#1B64F2]" />
              Compare side-by-side
            </button>
          </div>
        </div>

        {/* Provider Cards */}
        <div className="space-y-4">
          {sortedProviders.map((prov) => (
            <div
              key={prov.id}
              className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4 hover:border-blue-200 transition-all"
            >
              {/* Provider Header */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {prov.name}
                  </h3>
                  <div>
                    <CoverageBadge
                      status={prov.coverageStatus}
                      customLabel={prov.coverageLabel}
                      size="sm"
                    />
                  </div>
                </div>
              </div>

              {/* Price Callout */}
              <PriceCallout
                price={prov.costDisplay}
                subtitle={prov.costSubtitle}
              />

              {/* Spec Rows */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-500">Coverage</span>
                  <span className="font-semibold text-slate-800 capitalize">
                    {prov.coverageStatus === 'verified'
                      ? 'Verified'
                      : prov.coverageStatus === 'estimated'
                      ? 'Estimated'
                      : 'Not verified'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-500">Distance</span>
                  <span className="font-semibold text-slate-800">
                    {prov.distance}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-500">Next available</span>
                  <div className="flex items-center gap-1.5">
                    {prov.earliestSlotTag && (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-sm">
                        {prov.earliestSlotTag}
                      </span>
                    )}
                    <span className="font-semibold text-slate-800">
                      {prov.nextAvailable}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <button
                type="button"
                onClick={() => onSelectProvider(prov)}
                className="w-full h-11 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.98] text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center cursor-pointer"
              >
                View details
              </button>

              {/* Accreditation footer */}
              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>{prov.accreditation}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side Compare Banner */}
        <div className="bg-[#002D4A] rounded-2xl p-4 text-white flex items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-xs font-bold text-emerald-400 block">
              Direct Comparison
            </span>
            <p className="text-xs text-slate-200 mt-0.5">
              Unsure between HealthFirst &amp; CityCare?
            </p>
          </div>
          <button
            type="button"
            onClick={onCompareProviders}
            className="px-3.5 py-2 rounded-xl bg-white text-[#002D4A] font-bold text-xs hover:bg-slate-100 shrink-0 flex items-center gap-1 transition-colors cursor-pointer"
          >
            Compare <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal: How comparison works */}
      <Modal
        isOpen={comparisonModalOpen}
        onClose={() => setComparisonModalOpen(false)}
        title="How comparison works"
        subtitle="Unbiased sorting and verified pricing"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            We prioritize clinical quality, proximity, and transparent pricing. No healthcare provider pays for higher positioning on Optum.
          </p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
            <div>
              <span className="font-semibold text-slate-900 block">1. Verified Coverage</span>
              <span className="text-slate-500">Real-time insurance API query to confirm in-network ₹0 eligibility.</span>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">2. Proximity</span>
              <span className="text-slate-500">Calculated distance from your registered residence or current location.</span>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">3. Slot Freshness</span>
              <span className="text-slate-500">Live calendar integration updating open lab slots every 15 minutes.</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setComparisonModalOpen(false)}
            className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2"
          >
            Got it
          </button>
        </div>
      </Modal>
    </div>
  );
};
