import React, { useState } from 'react';
import { Shield, CheckCircle2, FileText, ArrowRight, Download, Eye } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { ReportGraphic } from '../components/common/VectorIllustration';
import { Modal } from '../components/common/Modal';

interface Screen10Props {
  onBack: () => void;
  onNavigateNextAction: () => void;
}

export const Screen10_ResultsReady: React.FC<Screen10Props> = ({
  onBack,
  onNavigateNextAction,
}) => {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="Screening results"
        subtitle="Preventive health screening"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        <p className="text-xs text-slate-500 px-1">
          Your preventive screening report is ready.
        </p>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  HealthFirst Diagnostics
                </h3>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Completed: 29 September
                </span>
              </div>
            </div>

            <CoverageBadge status="available" customLabel="Available" size="sm" />
          </div>

          {/* Graphic Illustration */}
          <ReportGraphic />

          {/* Title & subtitle */}
          <div className="pt-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Results available
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Preventive health screening
            </p>
          </div>

          {/* Results Summary Box */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-900">
              Results summary
            </h4>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Status</span>
              <span className="font-bold text-slate-900">Results available</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              You can review the report and any next-step guidance provided with it.
            </p>

            {/* Checklist items */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1B64F2]" />
                <span className="font-medium">Screening: Completed</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <FileText className="w-4 h-4 text-[#1B64F2]" />
                <span className="font-medium">Report: Available</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <Shield className="w-4 h-4 text-[#1B64F2]" />
                <span className="font-medium">Next-step guidance: Available</span>
              </div>
            </div>
          </div>

          {/* Clinical Disclaimer */}
          <div className="pt-2 text-xs text-slate-500 italic leading-relaxed">
            Clinical findings should be interpreted by a qualified clinician.
          </div>

          {/* Actions */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={() => setReportModalOpen(true)}
              className="w-full h-12 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.98] text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>View results</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setDownloadSuccess(true);
                setTimeout(() => setDownloadSuccess(false), 3000);
              }}
              className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>{downloadSuccess ? 'Report Downloaded (PDF) ✓' : 'Download report'}</span>
            </button>
          </div>
        </div>

        {/* Next Action Pathway Trigger */}
        <div className="bg-[#002D4A] rounded-2xl p-4 text-white flex items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wide">
              CARE GUIDANCE READY
            </span>
            <p className="text-xs text-slate-200 mt-0.5">
              Review next step guidance and clinician referral
            </p>
          </div>
          <button
            type="button"
            onClick={onNavigateNextAction}
            className="px-3.5 py-2 rounded-xl bg-white text-[#002D4A] font-bold text-xs hover:bg-slate-100 shrink-0 flex items-center gap-1 transition-colors cursor-pointer"
          >
            Next steps <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Lab Report Viewer Modal */}
      <Modal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        title="Diagnostic Health Report"
        subtitle="HealthFirst Diagnostics · Ref #HF-89240"
      >
        <div className="space-y-4 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 grid grid-cols-2 gap-2 text-slate-700">
            <div>
              <span className="text-slate-400 block">Patient Name:</span>
              <strong className="text-slate-900">Arjun Sharma (34M)</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Sample Collected:</span>
              <strong className="text-slate-900">29 Sep 2026, 08:35 AM</strong>
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-900 uppercase tracking-wider block text-[11px]">
              Panel Biomarkers:
            </span>
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-3 bg-white flex justify-between items-center">
                <div>
                  <span className="font-semibold text-slate-900 block">HbA1c (Glycated Hemoglobin)</span>
                  <span className="text-slate-500 text-[11px]">Ref: 4.0 - 5.6 %</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-emerald-700 text-sm">5.3 %</span>
                  <span className="block text-[10px] text-emerald-600 font-medium">Optimal</span>
                </div>
              </div>

              <div className="p-3 bg-white flex justify-between items-center">
                <div>
                  <span className="font-semibold text-slate-900 block">Fasting Blood Glucose</span>
                  <span className="text-slate-500 text-[11px]">Ref: 70 - 99 mg/dL</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-emerald-700 text-sm">88 mg/dL</span>
                  <span className="block text-[10px] text-emerald-600 font-medium">Normal</span>
                </div>
              </div>

              <div className="p-3 bg-white flex justify-between items-center">
                <div>
                  <span className="font-semibold text-slate-900 block">Total Cholesterol</span>
                  <span className="text-slate-500 text-[11px]">Ref: &lt; 200 mg/dL</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-amber-700 text-sm">208 mg/dL</span>
                  <span className="block text-[10px] text-amber-600 font-medium">Borderline High</span>
                </div>
              </div>

              <div className="p-3 bg-white flex justify-between items-center">
                <div>
                  <span className="font-semibold text-slate-900 block">HDL (Good Cholesterol)</span>
                  <span className="text-slate-500 text-[11px]">Ref: &gt; 40 mg/dL</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-emerald-700 text-sm">52 mg/dL</span>
                  <span className="block text-[10px] text-emerald-600 font-medium">Normal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
            <span className="font-bold text-blue-950 block">Laboratory Pathologist Note:</span>
            <p className="text-blue-900 leading-relaxed text-[11px]">
              Metabolic parameters within healthy limits. Total cholesterol is mildly elevated (208 mg/dL). Clinical lifestyle consultation or PCP dietary review recommended.
            </p>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => {
                setReportModalOpen(false);
                onNavigateNextAction();
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#1B64F2] text-white font-medium text-xs text-center"
            >
              Proceed to Care Guidance &rarr;
            </button>
            <button
              type="button"
              onClick={() => setReportModalOpen(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-medium text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
