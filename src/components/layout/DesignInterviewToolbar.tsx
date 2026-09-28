import React, { useState } from 'react';
import {
  Sparkles,
  Smartphone,
  RotateCcw,
  BookOpen,
  ChevronRight,
  X,
  Target,
  Lightbulb,
  TrendingUp,
  Layers,
} from 'lucide-react';
import { ScreenId } from '../../types';
import { designRationaleData } from '../../data/mockData';

interface DesignInterviewToolbarProps {
  currentScreen: ScreenId;
  onNavigateScreen: (screenId: ScreenId) => void;
  isFramed: boolean;
  onToggleFrame: () => void;
  onReset: () => void;
}

const JOURNEY_STEPS: {
  num: number;
  label: string;
  screenId: ScreenId;
}[] = [
  { num: 1, label: 'Recommendation', screenId: 'recommendation_card' },
  { num: 2, label: 'Why It Matters', screenId: 'why_recommended' },
  { num: 3, label: 'Compare', screenId: 'provider_options' },
  { num: 4, label: 'Cost Details', screenId: 'cost_coverage' },
  { num: 5, label: 'Schedule', screenId: 'choose_appointment' },
  { num: 6, label: 'Confirmed', screenId: 'appointment_confirmed' },
  { num: 7, label: 'Results & Next', screenId: 'results_ready' },
];

const ALL_SCREENS: { id: ScreenId; title: string; category: string }[] = [
  { id: 'recommendation_card', title: '01 · Recommendation Card', category: 'Awareness' },
  { id: 'why_recommended', title: '02 · Why This Is Recommended', category: 'Education' },
  { id: 'about_recommendation', title: '03 · About This Recommendation', category: 'Transparency' },
  { id: 'provider_options', title: '04 · Screening Options (List)', category: 'Comparison' },
  { id: 'compare_options', title: '05 · Compare Options (Side-by-Side)', category: 'Comparison' },
  { id: 'cost_coverage', title: '06 · Cost & Coverage Breakdown', category: 'Financial Trust' },
  { id: 'choose_appointment', title: '07 · Choose Appointment Slot', category: 'Scheduling' },
  { id: 'review_appointment', title: '08 · Review Appointment', category: 'Verification' },
  { id: 'appointment_confirmed', title: '09 · Appointment Confirmed', category: 'Success & Priming' },
  { id: 'results_ready', title: '10 · Screening Results Summary', category: 'Clinical Delivery' },
  { id: 'what_happens_next', title: '11 · What Happens Next / Pathways', category: 'Care Completion' },
];

export const DesignInterviewToolbar: React.FC<DesignInterviewToolbarProps> = ({
  currentScreen,
  onNavigateScreen,
  isFramed,
  onToggleFrame,
  onReset,
}) => {
  const [rationaleOpen, setRationaleOpen] = useState(false);
  const [screensDropdownOpen, setScreensDropdownOpen] = useState(false);

  // Active rationale
  const activeRationale =
    designRationaleData[currentScreen] ||
    designRationaleData.recommendation_card;

  // Find matching journey step number
  const currentStepNum = (() => {
    switch (currentScreen) {
      case 'recommendation_card':
        return 1;
      case 'why_recommended':
      case 'about_recommendation':
        return 2;
      case 'provider_options':
      case 'compare_options':
        return 3;
      case 'cost_coverage':
        return 4;
      case 'choose_appointment':
      case 'review_appointment':
        return 5;
      case 'appointment_confirmed':
        return 6;
      case 'results_ready':
      case 'result_summary':
      case 'what_happens_next':
        return 7;
      default:
        return 1;
    }
  })();

  return (
    <>
      {/* Top Floating Portfolio Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-slate-900 text-white shadow-md border-b border-slate-800 px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Brand & Prototype Info */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#E87722] flex items-center justify-center font-black text-xs text-white">
                O
              </span>
              <div>
                <span className="text-xs font-bold tracking-tight text-white block">
                  Optum
                </span>
                <span className="text-[10px] text-slate-400 block -mt-0.5">
                  Senior Product Design Portfolio
                </span>
              </div>
            </div>

            {/* Quick Screen Jumper for mobile */}
            <div className="relative md:hidden">
              <button
                type="button"
                onClick={() => setScreensDropdownOpen(!screensDropdownOpen)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-[11px] font-semibold text-slate-200 border border-slate-700 flex items-center gap-1 cursor-pointer"
              >
                <Layers className="w-3 h-3 text-blue-400" />
                <span>Jump Screen</span>
              </button>
            </div>
          </div>

          {/* 7-Step User Journey Timeline Pills */}
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
            {JOURNEY_STEPS.map((step) => {
              const isCurrent = currentStepNum === step.num;
              const isPast = currentStepNum > step.num;

              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => onNavigateScreen(step.screenId)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isCurrent
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : isPast
                      ? 'bg-slate-800/90 text-emerald-400 hover:bg-slate-700'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/60'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center ${
                      isCurrent
                        ? 'bg-white text-blue-700'
                        : isPast
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span>{step.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: Rationale Drawer, All Screens Dropdown, Frame Toggle, Reset */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            {/* All Screens Dropdown */}
            <div className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setScreensDropdownOpen(!screensDropdownOpen)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>All 11 Screens</span>
              </button>

              {screensDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1.5 border-b border-slate-800">
                    Figma Recreated Screens
                  </div>
                  <div className="max-h-80 overflow-y-auto space-y-1 py-1">
                    {ALL_SCREENS.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          onNavigateScreen(s.id);
                          setScreensDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex flex-col transition-colors cursor-pointer ${
                          currentScreen === s.id
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span className="truncate">{s.title}</span>
                        <span className="text-[10px] opacity-75">{s.category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* UX Rationale Toggle */}
            <button
              type="button"
              onClick={() => setRationaleOpen(!rationaleOpen)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                rationaleOpen
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>UX Rationale</span>
            </button>

            {/* Frame Toggle */}
            <button
              type="button"
              onClick={onToggleFrame}
              title={isFramed ? 'Switch to fluid responsive view' : 'Switch to mobile frame'}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={onReset}
              title="Reset prototype state"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Floating UX Rationale Drawer for Interview Presentation */}
      {rationaleOpen && (
        <aside className="fixed bottom-4 right-4 z-50 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-300 overflow-hidden animate-in slide-in-from-bottom duration-200">
          <div className="bg-[#002D4A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Senior Product Design Case Study
                </span>
                <h4 className="text-sm font-bold text-white">
                  {activeRationale.screenTitle}
                </h4>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setRationaleOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3.5 max-h-[70vh] overflow-y-auto text-xs text-slate-700">
            {/* Core Problem */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-rose-700 font-bold uppercase tracking-wider text-[10px]">
                <Target className="w-3.5 h-3.5" />
                <span>User Problem Solved</span>
              </div>
              <p className="bg-rose-50/70 p-2.5 rounded-xl border border-rose-100 text-rose-950 leading-relaxed font-medium">
                {activeRationale.coreProblem}
              </p>
            </div>

            {/* Design Decision */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-blue-700 font-bold uppercase tracking-wider text-[10px]">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>UX Architecture &amp; Interaction Decision</span>
              </div>
              <p className="bg-blue-50/70 p-2.5 rounded-xl border border-blue-100 text-blue-950 leading-relaxed">
                {activeRationale.uxDecision}
              </p>
            </div>

            {/* Behavioral Science Insight */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-700 font-bold uppercase tracking-wider text-[10px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Behavioral Science &amp; Trust Mechanism</span>
              </div>
              <p className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-100 text-amber-950 leading-relaxed">
                {activeRationale.behavioralInsight}
              </p>
            </div>

            {/* Quantifiable Impact */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold uppercase tracking-wider text-[10px]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Measured / Projected Clinical Impact</span>
              </div>
              <p className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100 text-emerald-950 leading-relaxed font-semibold">
                {activeRationale.keyMetric}
              </p>
            </div>

            <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
              <span>{activeRationale.journeyStep}</span>
              <button
                type="button"
                onClick={() => setRationaleOpen(false)}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Hide notes
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
