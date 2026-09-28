import React, { useState } from 'react';
import { Shield, Info, CheckCircle2, CircleDot, UserCheck, Stethoscope } from 'lucide-react';
import { HeaderBar } from '../components/common/HeaderBar';
import { CoverageBadge } from '../components/common/CoverageBadge';
import { ReportGraphic } from '../components/common/VectorIllustration';
import { Modal } from '../components/common/Modal';

interface Screen11Props {
  onBack: () => void;
  onViewResults: () => void;
  onResetJourney: () => void;
}

export const Screen11_NextAction: React.FC<Screen11Props> = ({
  onBack,
  onViewResults,
  onResetJourney,
}) => {
  const [clinicianModal, setClinicianModal] = useState(false);
  const [existingDoctorModal, setExistingDoctorModal] = useState(false);
  const [noHelpModal, setNoHelpModal] = useState(false);
  const [clinicianBooked, setClinicianBooked] = useState(false);
  const [doctorShared, setDoctorShared] = useState(false);

  return (
    <div className="flex flex-col min-h-full pb-8">
      <HeaderBar
        title="What happens next"
        showBack
        onBack={onBack}
      />

      <div className="p-4 sm:p-5 space-y-4">
        {/* Next-step guidance Alert Box */}
        <div className="bg-[#FFF8ED] rounded-2xl p-4 border border-[#FDE1AA] space-y-1.5">
          <div className="flex items-center gap-2 text-amber-800">
            <Info className="w-4 h-4 stroke-[2.2] shrink-0" />
            <span className="text-xs font-bold text-amber-900">
              Next-step guidance
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-900 leading-snug">
            Your screening is complete
          </p>
          <p className="text-xs text-amber-900/90 leading-relaxed">
            Next-step guidance is available with your result.
          </p>
        </div>

        {/* Results Available Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
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

          <ReportGraphic />

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Results available
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Preventive health screening
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
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
          </div>

          <div className="pt-1 text-xs text-slate-500 italic leading-relaxed">
            Clinical findings should be interpreted by a qualified clinician.
          </div>

          {/* Action buttons inside card */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={onViewResults}
              className="w-full h-12 rounded-2xl bg-[#1B64F2] hover:bg-[#1554D1] active:scale-[0.98] text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center cursor-pointer"
            >
              View results
            </button>

            <button
              type="button"
              onClick={onViewResults}
              className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
            >
              Download report
            </button>
          </div>
        </div>

        {/* Primary Care Pathway Buttons */}
        <div className="space-y-2.5 pt-2">
          {/* Find a clinician (Primary Teal/Green button) */}
          <button
            type="button"
            onClick={() => setClinicianModal(true)}
            className="w-full h-13 rounded-2xl bg-[#00695C] hover:bg-[#004D40] active:scale-[0.98] text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Stethoscope className="w-5 h-5" />
            <span>Find a clinician</span>
          </button>

          {/* I already have a doctor (Secondary White button) */}
          <button
            type="button"
            onClick={() => setExistingDoctorModal(true)}
            className="w-full h-12 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 active:scale-[0.98] text-slate-800 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-slate-600" />
            <span>I already have a doctor</span>
          </button>

          {/* I don't need help right now (Text button) */}
          <button
            type="button"
            onClick={() => setNoHelpModal(true)}
            className="w-full py-2.5 text-center text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            I don&apos;t need help right now
          </button>
        </div>

        {/* Your Health Journey Progress Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Your health journey
          </span>

          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-2.5 text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Preventive screening:</strong> Completed
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Results:</strong> Available
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-800">
              <CircleDot className="w-4 h-4 text-[#1B64F2] shrink-0 animate-pulse" />
              <span>
                <strong>Next step:</strong> <span className="text-[#1B64F2] font-semibold">Review available</span>
              </span>
            </div>
          </div>
        </div>

        {/* Journey Completion & Restart Demo */}
        <div className="p-4 bg-slate-100 rounded-2xl text-center space-y-2">
          <span className="text-xs text-slate-500 block">
            You completed the 7-step preventive care prototype!
          </span>
          <button
            type="button"
            onClick={onResetJourney}
            className="text-xs font-bold text-[#1B64F2] hover:underline cursor-pointer"
          >
            &larr; Restart journey from Screen 1
          </button>
        </div>
      </div>

      {/* Modal: Find a Clinician */}
      <Modal
        isOpen={clinicianModal}
        onClose={() => {
          setClinicianModal(false);
          setClinicianBooked(false);
        }}
        title={clinicianBooked ? "Telehealth Confirmed" : "In-Network Primary Care Clinicians"}
        subtitle={clinicianBooked ? "Optum Virtual Care Network" : "Telehealth & In-Clinic Consultations"}
      >
        {clinicianBooked ? (
          <div className="space-y-4 text-xs text-slate-700 py-2">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Appointment Booked!</h3>
              <p className="text-slate-600 text-xs">
                Dr. Ananya Sen, MD will meet you for a 15-minute video review today at <strong>6:30 PM</strong>.
              </p>
              <div className="text-[11px] text-emerald-800 bg-white/70 py-1.5 px-3 rounded-lg inline-block border border-emerald-200/60 font-semibold">
                Covered under Optum Preventive Benefits (₹0)
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setClinicianModal(false);
                setClinicianBooked(false);
              }}
              className="w-full py-2.5 rounded-xl bg-[#002D4A] hover:bg-[#00385D] text-white font-medium text-xs transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-3 text-xs text-slate-600">
            <p>
              Review your cholesterol &amp; metabolic findings with an accredited family medicine physician covered by your insurance with zero co-pay:
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-slate-900 block">Dr. Ananya Sen, MD</strong>
                  <span className="text-slate-500">Preventive Cardiologist · 12 yrs exp</span>
                </div>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">
                  Covered ₹0
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Available for 15-min Telehealth review today at 6:30 PM.</p>
            </div>
            <button
              type="button"
              onClick={() => setClinicianBooked(true)}
              className="w-full py-2.5 rounded-xl bg-[#00695C] hover:bg-[#00574B] text-white font-medium text-xs mt-2 cursor-pointer transition-colors"
            >
              Book Telehealth Review
            </button>
          </div>
        )}
      </Modal>

      {/* Modal: I already have a doctor */}
      <Modal
        isOpen={existingDoctorModal}
        onClose={() => {
          setExistingDoctorModal(false);
          setDoctorShared(false);
        }}
        title={doctorShared ? "Report Transmitted" : "Share With Your Personal Doctor"}
        subtitle={doctorShared ? "Transfer ID: OPTUM-RX-9821" : "One-tap clinical dispatch"}
      >
        {doctorShared ? (
          <div className="space-y-4 text-xs text-slate-700 py-2">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Transmitted Successfully!</h3>
              <p className="text-slate-600 text-xs">
                Your diagnostic lab report has been dispatched to <strong>dr.sharma@delhiclinic.org</strong> via Optum Clinical Gateway.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setExistingDoctorModal(false);
                setDoctorShared(false);
              }}
              className="w-full py-2.5 rounded-xl bg-[#002D4A] hover:bg-[#00385D] text-white font-medium text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-3 text-xs text-slate-600">
            <p>
              Enter your doctor&apos;s email or phone number. We will securely transfer your verified PDF report and biomarker summary directly into their electronic records.
            </p>
            <input
              type="text"
              placeholder="Doctor's name or clinic email"
              defaultValue="dr.sharma@delhiclinic.org"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
            />
            <button
              type="button"
              onClick={() => setDoctorShared(true)}
              className="w-full py-2.5 rounded-xl bg-[#002D4A] hover:bg-[#00385D] text-white font-medium text-xs mt-2 cursor-pointer transition-colors"
            >
              Send Report to Doctor
            </button>
          </div>
        )}
      </Modal>

      {/* Modal: I don't need help right now */}
      <Modal
        isOpen={noHelpModal}
        onClose={() => setNoHelpModal(false)}
        title="Care Pathway Saved"
        subtitle="Access anytime from your Optum Health vault"
      >
        <div className="space-y-3 text-xs text-slate-600">
          <p>
            No problem! Your laboratory diagnostic report remains safely archived in your health vault. We will send an annual reminder for your next routine checkup in September 2027.
          </p>
          <button
            type="button"
            onClick={() => setNoHelpModal(false)}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs mt-2 cursor-pointer transition-colors"
          >
            Back to Health Home
          </button>
        </div>
      </Modal>
    </div>
  );
};
