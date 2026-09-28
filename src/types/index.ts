export type ScreenId =
  | 'recommendation_card'
  | 'why_recommended'
  | 'about_recommendation'
  | 'provider_options'
  | 'compare_options'
  | 'cost_coverage'
  | 'choose_appointment'
  | 'review_appointment'
  | 'appointment_confirmed'
  | 'results_ready'
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
