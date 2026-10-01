import React, { useState } from 'react';
import { Sparkles, Check, Star, ShieldCheck, MapPin, Calendar, Clock } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';
import { Provider } from '../types';

interface Screen4Props {
  providers: Provider[];
  onSelectProvider: (provider: Provider) => void;
  onCompareProviders: () => void;
  onSelectPendingCoverage?: (provider: Provider) => void;
  onSelectUnavailableProvider?: (provider: Provider) => void;
  onBack?: () => void;
}

export const Screen4_ProviderOptions: React.FC<Screen4Props> = ({
  providers,
  onSelectProvider,
  onCompareProviders,
  onSelectPendingCoverage,
  onSelectUnavailableProvider,
  onBack,
}) => {
  const [activeFilter, setActiveFilter] = useState<'recommended' | 'earliest' | 'coverage' | 'distance'>('recommended');
  const [detailsModalProvider, setDetailsModalProvider] = useState<Provider | null>(null);

  // Clinic thumbnail image placeholders matching Figma aesthetics
  const clinicImages: Record<string, string> = {
    'hf-diag': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=160&q=80',
    'cc-labs': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=160&q=80',
    'wp-diag': 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=160&q=80',
  };

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Your Screening Options"
        subtitle="Based on your health profile"
        showBack={Boolean(onBack)}
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Top Card: AI Recommendation Banner */}
        <div className="bg-white rounded-3xl p-5 border border-blue-200/70 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
            </div>
            <span className="text-xs font-semibold text-[#1B64F2]">
              AI recommendation
            </span>
          </div>

          <h2 className="text-lg font-bold text-slate-900 leading-tight">
            Preventive health screening
          </h2>

          <div className="space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1B64F2] stroke-[2.5] shrink-0" />
              <span>Matches your health profile</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1B64F2] stroke-[2.5] shrink-0" />
              <span>Due based on your screening history</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1B64F2] stroke-[2.5] shrink-0" />
              <span>Covered through your preventive care benefits</span>
            </div>
          </div>
        </div>

        {/* Section Heading & Filter Pills */}
        <div className="space-y-2.5 pt-1">
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              Recommended options
            </h3>
            <p className="text-xs text-slate-500">
              3 providers matched your screening needs
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              type="button"
              onClick={() => setActiveFilter('recommended')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'recommended'
                  ? 'bg-[#1B64F2] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Recommended for you
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('earliest')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'earliest'
                  ? 'bg-[#1B64F2] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Earliest appointment
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('coverage')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'coverage'
                  ? 'bg-[#1B64F2] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Coverage
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('distance')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'distance'
                  ? 'bg-[#1B64F2] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Distance
            </button>
          </div>
        </div>

        {/* Provider 1: HealthFirst Diagnostics */}
        <div className="bg-white rounded-3xl p-5 border border-blue-200 shadow-xs space-y-4">
          <div className="flex items-start gap-3">
            <img
              src={clinicImages['hf-diag']}
              alt="HealthFirst Diagnostics"
              className="w-12 h-12 rounded-xl object-cover border border-slate-100 shrink-0"
            />
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 leading-tight">
                HealthFirst Diagnostics
              </h4>
              <p className="text-xs text-slate-500">
                Preventive Screening Center
              </p>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ✓ Recommended match
              </span>
            </div>
          </div>

          {/* Key Attributes */}
          <div className="grid grid-cols-2 gap-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <span className="text-slate-400">Coverage</span>
            <span className="font-semibold text-[#1B64F2] text-right">✓ Verified</span>

            <span className="text-slate-400">Next available</span>
            <span className="font-semibold text-slate-900 text-right">Tomorrow · 8:30 AM</span>

            <span className="text-slate-400">Distance</span>
            <span className="font-medium text-slate-600 text-right">2.4 km away</span>
          </div>

          {/* Out of pocket box */}
          <div className="bg-[#F0F6FF] rounded-2xl p-4 space-y-1">
            <span className="text-[11px] text-slate-500 block">
              Estimated out-of-pocket
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                ₹0
              </span>
              <span className="text-xs text-slate-500">
                after verified coverage
              </span>
            </div>
          </div>

          {/* Match reasons */}
          <div className="space-y-1 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#1B64F2] stroke-[2.5]" />
              <span>Verified coverage — covered by your plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#1B64F2] stroke-[2.5]" />
              <span>Recommended based on your location</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#1B64F2] stroke-[2.5]" />
              <span>Earliest appointment available</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={() => onSelectProvider(providers[0])}
              className="w-full py-3 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
            >
              Choose this provider
            </button>

            <button
              type="button"
              onClick={() => setDetailsModalProvider(providers[0])}
              className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1.5 cursor-pointer"
            >
              View details
            </button>
          </div>
        </div>

        {/* Provider 2: CityCare Labs */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-start gap-3">
            <img
              src={clinicImages['cc-labs']}
              alt="CityCare Labs"
              className="w-12 h-12 rounded-xl object-cover border border-slate-100 shrink-0"
            />
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 leading-tight">
                CityCare Labs
              </h4>
              <p className="text-xs text-slate-500">
                Preventive Screening Center
              </p>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                Coverage needs confirmation
              </span>
            </div>
          </div>

          {/* Key Attributes */}
          <div className="grid grid-cols-2 gap-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <span className="text-slate-400">Coverage</span>
            <span className="font-semibold text-amber-700 text-right">Estimated</span>

            <span className="text-slate-400">Next available</span>
            <span className="font-semibold text-slate-900 text-right">Today · 5:05 PM</span>

            <span className="text-slate-400">Distance</span>
            <span className="font-medium text-slate-600 text-right">4.1 km away</span>
          </div>

          {/* Out of pocket box */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 space-y-2">
            <span className="text-[11px] text-slate-500 block">
              Estimated out-of-pocket
            </span>
            <div>
              <span className="text-2xl font-black text-slate-900 tracking-tight block">
                ₹600–₹900
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">
                Estimated after coverage confirmation
              </span>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-2.5 py-1 text-[11px] text-amber-800 font-medium">
              We can verify your benefits before booking
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={() => {
                if (onSelectPendingCoverage) {
                  onSelectPendingCoverage(providers[1]);
                } else {
                  onSelectProvider(providers[1]);
                }
              }}
              className="w-full py-3 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
            >
              Choose this provider
            </button>

            <button
              type="button"
              onClick={() => setDetailsModalProvider(providers[1])}
              className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1.5 cursor-pointer"
            >
              View details
            </button>
          </div>
        </div>

        {/* Provider 3: WellPath Diagnostics */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-start gap-3">
            <img
              src={clinicImages['wp-diag']}
              alt="WellPath Diagnostics"
              className="w-12 h-12 rounded-xl object-cover border border-slate-100 shrink-0"
            />
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 leading-tight">
                WellPath Diagnostics
              </h4>
              <p className="text-xs text-slate-500">
                Preventive Screening Center
              </p>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600">
                Coverage not verified
              </span>
            </div>
          </div>

          {/* Key Attributes */}
          <div className="grid grid-cols-2 gap-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <span className="text-slate-400">Coverage</span>
            <span className="font-semibold text-slate-600 text-right">Not verified</span>

            <span className="text-slate-400">Next available</span>
            <span className="font-semibold text-slate-900 text-right">Tomorrow · 7:30 AM</span>

            <span className="text-slate-400">Distance</span>
            <span className="font-medium text-slate-600 text-right">1.8 km away</span>
          </div>

          {/* Out of pocket box */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 space-y-1">
            <span className="text-[11px] text-slate-500 block">
              Estimated out-of-pocket
            </span>
            <span className="text-2xl font-black text-slate-900 tracking-tight block">
              Up to ₹2,100
            </span>
            <span className="text-xs text-slate-500 block">
              Coverage needs confirmation
            </span>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={() => {
                if (onSelectUnavailableProvider) {
                  onSelectUnavailableProvider(providers[2]);
                } else {
                  onSelectProvider(providers[2]);
                }
              }}
              className="w-full py-3 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
            >
              Choose this provider
            </button>

            <button
              type="button"
              onClick={() => setDetailsModalProvider(providers[2])}
              className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1.5 cursor-pointer"
            >
              View details
            </button>
          </div>
        </div>

        {/* Need Help Choosing? Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-slate-700" />
            <h4 className="text-sm font-bold text-slate-900">
              Need help choosing?
            </h4>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            AI can compare providers based on coverage, appointment availability, and cost
          </p>

          <button
            type="button"
            onClick={onCompareProviders}
            className="w-full py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs active:scale-[0.99] transition-all cursor-pointer text-center"
          >
            Compare options for me
          </button>
        </div>
      </div>

      {/* In-App Provider Details Modal */}
      {detailsModalProvider && (
        <Modal
          isOpen={Boolean(detailsModalProvider)}
          onClose={() => setDetailsModalProvider(null)}
          title={detailsModalProvider.name}
          subtitle={detailsModalProvider.address}
        >
          <div className="space-y-3 text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-xl space-y-1">
              <span className="font-bold text-slate-900 block">Accreditation</span>
              <p>{detailsModalProvider.accreditation}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl space-y-1">
              <span className="font-bold text-slate-900 block">Diagnostic equipment</span>
              <p>Automated high-throughput analyzers with daily multi-point calibrator validation.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const prov = detailsModalProvider;
                setDetailsModalProvider(null);
                onSelectProvider(prov);
              }}
              className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs mt-2 cursor-pointer"
            >
              Select {detailsModalProvider.shortName}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
