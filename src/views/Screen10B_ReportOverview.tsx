import React, { useState } from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';

interface Screen10BProps {
  onBack: () => void;
  onViewFullReport: () => void;
}

export const Screen10B_ReportOverview: React.FC<Screen10BProps> = ({
  onBack,
  onViewFullReport,
}) => {
  const [sectionModal, setSectionModal] = useState<number | null>(null);

  const sections = [
    {
      num: '01',
      title: 'Screening measurements',
      desc: 'Your recorded screening values',
      details: [
        { label: 'Blood Pressure', value: '118/76 mmHg', status: 'Optimal' },
        { label: 'Total Cholesterol', value: '214 mg/dL', status: 'Slightly Elevated' },
        { label: 'HDL Cholesterol', value: '52 mg/dL', status: 'Normal' },
        { label: 'LDL Cholesterol', value: '138 mg/dL', status: 'Borderline' },
        { label: 'Fasting Blood Glucose', value: '92 mg/dL', status: 'Optimal' },
      ],
    },
    {
      num: '02',
      title: 'Clinician observations',
      desc: 'Findings recorded during your screening',
      details: [
        { label: 'Attending Pathologist', value: 'Dr. Ramesh K., MD (Pathology)' },
        { label: 'Clinical Note', value: 'Bilateral blood samples collected without hemolysis. Metabolic indicators consistent with active lifestyle; moderate non-HDL elevation noted.' },
      ],
    },
    {
      num: '03',
      title: 'Recommended next steps',
      desc: 'Guidance based on your screening',
      details: [
        { label: 'Routine Dietary Review', value: 'Emphasis on soluble fiber & omega-3 fats' },
        { label: 'Follow-up Timeline', value: 'Consultation within 30 days recommended' },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Your screening report"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#1B64F2] flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6 stroke-[2]" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              Preventive health screening
            </h3>
            <p className="text-xs text-slate-500">
              HealthFirst Diagnostics
            </p>
            <p className="text-xs text-slate-400">
              Completed Sept 24, 2026
            </p>
          </div>
        </div>

        {/* Report Summary Section */}
        <div className="space-y-3 pt-1">
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-tight">
              Report summary
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              This report contains 3 report sections.
            </p>
          </div>

          {/* Section Items */}
          <div className="space-y-2.5">
            {sections.map((sec, idx) => (
              <button
                key={sec.num}
                type="button"
                onClick={() => setSectionModal(idx)}
                className="w-full bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between text-left hover:border-slate-300 transition-all cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#1B64F2] block">
                    {sec.num}
                  </span>
                  <h5 className="text-sm font-bold text-slate-900 leading-snug">
                    {sec.title}
                  </h5>
                  <p className="text-xs text-slate-500">
                    {sec.desc}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Clinical Disclaimer */}
        <p className="text-xs text-slate-400 leading-relaxed pt-2 px-1">
          Clinical findings should be interpreted by a qualified clinician.
        </p>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onViewFullReport}
            className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
          >
            View full report
          </button>
        </div>
      </div>

      {/* In-App Section Detail Modal */}
      {sectionModal !== null && (
        <Modal
          isOpen={sectionModal !== null}
          onClose={() => setSectionModal(null)}
          title={sections[sectionModal].title}
          subtitle={`Section ${sections[sectionModal].num} · HealthFirst Diagnostics`}
        >
          <div className="space-y-3 text-xs text-slate-700">
            {sections[sectionModal].details.map((item, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-xl space-y-1 border border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">{item.label}</span>
                  {'status' in item && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-800">
                      {item.status}
                    </span>
                  )}
                </div>
                <p className="text-slate-600">{item.value}</p>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setSectionModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#002D4A] text-white font-medium text-xs mt-2 cursor-pointer"
            >
              Done
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
