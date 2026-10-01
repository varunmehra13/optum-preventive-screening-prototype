import React, { useState } from 'react';
import { Sparkles, Check, AlertCircle, FileText, Calendar, MessageSquare, Download } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { Modal } from '../components/common/Modal';

interface Screen11Props {
  onBack: () => void;
  onViewResults?: () => void;
  onResetJourney: () => void;
}

export const Screen11_NextAction: React.FC<Screen11Props> = ({
  onBack,
  onViewResults,
  onResetJourney,
}) => {
  const [followUpModal, setFollowUpModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [followUpBooked, setFollowUpBooked] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="AI summary of your screening results"
        showBack
        onBack={onBack}
        rightElement={
          <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-4 h-4 fill-white" />
          </div>
        }
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Section 1: What was found Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-slate-900 leading-tight">
            What was found
          </h3>

          <div className="space-y-2.5">
            {/* Blood pressure */}
            <div className="bg-[#F8FAFC] rounded-2xl p-3.5 flex items-center gap-3 border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Blood pressure
                </h4>
                <p className="text-[11px] text-slate-500">
                  Within normal range
                </p>
              </div>
            </div>

            {/* Cholesterol - Elevated */}
            <div className="bg-[#FFF9EE] rounded-2xl p-3.5 flex items-center gap-3 border border-amber-200/70">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <AlertCircle className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Cholesterol
                </h4>
                <p className="text-[11px] text-amber-900 font-medium">
                  Slightly elevated — follow-up recommended
                </p>
              </div>
            </div>

            {/* Glucose */}
            <div className="bg-[#F8FAFC] rounded-2xl p-3.5 flex items-center gap-3 border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1B64F2] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Glucose
                </h4>
                <p className="text-[11px] text-slate-500">
                  Optimal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What it means Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-snug">
            What it means
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Based on your screening, your blood pressure and glucose are within normal ranges. However, your cholesterol levels are slightly elevated.
          </p>

          {/* AI Interpretation Box */}
          <div className="bg-[#F8FAFD] rounded-2xl p-4 border border-blue-100 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shrink-0">
                <Sparkles className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="text-xs font-semibold text-[#1B64F2]">
                AI interpretation
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
              Based on your screening data, most measurements are within expected ranges. One area may need attention.
            </p>

            <span className="text-[10px] text-slate-400 block pt-1">
              Supporting interpretation
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <button
              type="button"
              onClick={() => setFollowUpModal(true)}
              className="w-full py-3.5 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.99] text-white font-semibold text-sm shadow-xs transition-all cursor-pointer text-center"
            >
              Schedule follow-up
            </button>

            <button
              type="button"
              onClick={() => setMessageModal(true)}
              className="w-full py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm active:scale-[0.99] transition-all cursor-pointer text-center"
            >
              Message your doctor
            </button>

            <button
              type="button"
              onClick={() => setReportModal(true)}
              className="w-full text-center text-xs font-semibold text-[#1B64F2] hover:underline py-1.5 cursor-pointer block"
            >
              Download full report
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-1">
            Clinical findings should be interpreted by a qualified clinician.
          </p>
        </div>
      </div>

      {/* In-App Modal: Schedule Follow-up */}
      <Modal
        isOpen={followUpModal}
        onClose={() => {
          setFollowUpModal(false);
          setFollowUpBooked(false);
        }}
        title={followUpBooked ? "Follow-Up Scheduled" : "Schedule Clinician Follow-Up"}
        subtitle={followUpBooked ? "Optum Virtual Care Network" : "Cholesterol & Lifestyle Review"}
      >
        {followUpBooked ? (
          <div className="space-y-4 text-xs text-slate-700 py-2">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Consultation Confirmed!</h3>
              <p className="text-slate-600 text-xs">
                Dr. Ananya Sen, MD will review your lipid panel with you via Telehealth on <strong>Friday at 5:00 PM</strong>.
              </p>
              <div className="text-[11px] text-emerald-800 bg-white/80 py-1.5 px-3 rounded-lg inline-block border border-emerald-200 font-semibold">
                Covered under Optum Preventive Benefits (₹0)
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setFollowUpModal(false);
                setFollowUpBooked(false);
              }}
              className="w-full py-2.5 rounded-xl bg-[#002D4A] hover:bg-[#00385D] text-white font-medium text-xs transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-3 text-xs text-slate-600">
            <p>
              Your cholesterol is slightly elevated (214 mg/dL). A 15-minute consultation with an in-network primary care physician can guide nutritional changes:
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-slate-900 block">Dr. Ananya Sen, MD</strong>
                  <span className="text-slate-500">Preventive Cardiologist · 12 yrs exp</span>
                </div>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">
                  Covered ₹0
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Available Friday · 5:00 PM (Telehealth)</p>
            </div>
            <button
              type="button"
              onClick={() => setFollowUpBooked(true)}
              className="w-full py-2.5 rounded-xl bg-[#1B64F2] hover:bg-[#1554D1] text-white font-semibold text-xs mt-2 cursor-pointer transition-colors"
            >
              Confirm 15-Min Telehealth Review
            </button>
          </div>
        )}
      </Modal>

      {/* In-App Modal: Message Your Doctor */}
      <Modal
        isOpen={messageModal}
        onClose={() => {
          setMessageModal(false);
          setMessageSent(false);
        }}
        title={messageSent ? "Message Dispatched" : "Message Your Care Team"}
        subtitle={messageSent ? "Sent to Dr. Sharma" : "Direct clinical messaging"}
      >
        {messageSent ? (
          <div className="space-y-4 text-xs text-slate-700 py-2">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Message Sent Successfully!</h3>
              <p className="text-slate-600 text-xs">
                Your question and verified lab report have been dispatched to your physician. Expect a reply within 24 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setMessageModal(false);
                setMessageSent(false);
              }}
              className="w-full py-2.5 rounded-xl bg-[#002D4A] hover:bg-[#00385D] text-white font-medium text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-3 text-xs text-slate-600">
            <p>
              Send your screening results and any questions directly to your registered family doctor:
            </p>
            <textarea
              rows={3}
              defaultValue="Hello Doctor, I just received my preventive screening results showing slightly elevated cholesterol. Should we schedule a brief follow-up discussion?"
              className="w-full p-2.5 border border-slate-300 rounded-xl text-xs bg-slate-50"
            />
            <button
              type="button"
              onClick={() => setMessageSent(true)}
              className="w-full py-2.5 rounded-xl bg-[#002D4A] hover:bg-[#00385D] text-white font-medium text-xs mt-1 cursor-pointer transition-colors"
            >
              Send Message
            </button>
          </div>
        )}
      </Modal>

      {/* In-App Modal: Download Full Report */}
      <Modal
        isOpen={reportModal}
        onClose={() => setReportModal(false)}
        title="Preventive Diagnostic Report"
        subtitle="HealthFirst Diagnostics · Document #HF-2026-928"
      >
        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 font-mono text-[11px]">
            <div className="flex justify-between border-b pb-1 font-bold">
              <span>PARAMETER</span>
              <span>RESULT</span>
              <span>NORMAL RANGE</span>
            </div>
            <div className="flex justify-between">
              <span>Blood Pressure</span>
              <span className="text-emerald-700 font-bold">118/76</span>
              <span>&lt; 120/80</span>
            </div>
            <div className="flex justify-between">
              <span>Total Cholesterol</span>
              <span className="text-amber-700 font-bold">214 mg/dL</span>
              <span>&lt; 200 mg/dL</span>
            </div>
            <div className="flex justify-between">
              <span>Fasting Glucose</span>
              <span className="text-emerald-700 font-bold">92 mg/dL</span>
              <span>70-99 mg/dL</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setReportModal(false)}
            className="w-full py-2.5 rounded-xl bg-[#1B64F2] text-white font-semibold text-xs mt-2 cursor-pointer"
          >
            Save PDF to Device
          </button>
        </div>
      </Modal>
    </div>
  );
};
