export type ScreenId =
  // 11 Core Updated Screens
  | 'recommendation_card' // CM 01 - 1.0.0 [Recommendation Card]
  | 'recommendation_ai_analysis' // CM 01 - 1.1.0 [Recommendation AI Analysis]
  | 'provider_options' // CM 02 - 1.0.0 [Provider Options]
  | 'cost_coverage' // CM 02 - 1.1.0 [Cost & Coverage Detail]
  | 'ai_decision_support' // CM 02 - 1.2.0 [AI Decision Support]
  | 'choose_appointment' // CM 03 - 1.0.0 [Choose Appointment]
  | 'review_appointment' // CM 03 - 1.1.0 [Review Appointment]
  | 'appointment_confirmed' // CM 03 - 1.2.0 [Appointment Confirmed]
  | 'results_ready' // CM 04 - 1.0.0 [Results Ready]
  | 'report_overview' // CM 04 - 1.1.0 [Report Overview]
  | 'ai_assisted_interpretation' // CM 04 - 1.2.0 [AI Assisted Interpretation]
  // 5 Edge Case Screens
  | 'ec_insufficient_info' // EC - 1.0.0 Insufficient Info
  | 'ec_coverage_pending' // EC - 1.1.0 [Coverage Pending]
  | 'ec_provider_unavailable' // EC - 1.2.0 [Provider Unavailable]
  | 'ec_slot_unavailable' // EC - 1.3.0 [Slot Unavailable]
  | 'ec_results_not_ready' // EC - 1.4.0 [Results Not Ready]
  // Aliases for compatibility
  | 'why_recommended'
  | 'about_recommendation'
  | 'compare_options'
  | 'result_summary'
  | 'what_happens_next';

export type JourneyStepNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Provider {
  id: string;
  name: string;
  shortName: string;
  coverageStatus: 'verified' | 'estimated' | 'not_verified';
  coverageLabel: string;
  costDisplay: string;
  costSubtitle: string;
  providerPrice: number;
  insuranceDiscount: number;
  outOfPocket: number;
  priceNote?: string;
  distance: string;
  nextAvailable: string;
  earliestSlotTag?: string;
  accreditation: string;
  address: string;
  badgeType: 'green' | 'amber' | 'gray';
  availableDates: {
    day: string;
    date: string;
    fullDate: string;
  }[];
  availableTimes: string[];
}

export interface ScreeningInfo {
  id: string;
  title: string;
  category: string;
  recommendationReason: string;
  whyRelevantItems: {
    title: string;
    subtitle: string;
    icon: 'user' | 'calendar' | 'heart';
  }[];
  whyNow: string;
  whatItDoesNotMean: string;
  whereItComesFrom: string;
  instructions: {
    title: string;
    detail: string;
  }[];
}

export interface AppointmentState {
  provider: Provider;
  selectedDate: string;
  selectedTime: string;
  screeningName: string;
  isConfirmed: boolean;
  confirmationCode: string;
}

export interface DesignDecisionNote {
  screenId: ScreenId;
  screenTitle: string;
  journeyStep: string;
  coreProblem: string;
  uxDecision: string;
  behavioralInsight: string;
  keyMetric: string;
}
