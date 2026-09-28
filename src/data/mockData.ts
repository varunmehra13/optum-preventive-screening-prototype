import { Provider, ScreeningInfo, DesignDecisionNote } from '../types';

export const mockScreeningInfo: ScreeningInfo = {
  id: 'preventive_screening',
  title: 'Preventive health screening',
  category: 'Preventive care',
  recommendationReason:
    'A routine screening has been recommended based on the health information currently available.',
  whyRelevantItems: [
    {
      title: 'Your profile',
      subtitle: 'Your age and available health information',
      icon: 'user',
    },
    {
      title: 'Screening history',
      subtitle: 'No recent screening recorded in this experience',
      icon: 'calendar',
    },
    {
      title: 'Care guidance',
      subtitle:
        'Preventive care guidance may recommend screening before symptoms appear',
      icon: 'heart',
    },
  ],
  whyNow:
    'Preventive screening is intended to identify potential concerns before symptoms appear.',
  whatItDoesNotMean:
    'This recommendation does not mean you have a health condition.',
  whereItComesFrom:
    'Based on available health information and preventive care guidance. Approved care guidance helps shape the recommendation.',
  instructions: [
    {
      title: 'Fasting requirements',
      detail:
        'Please fast for 8–10 hours prior to your morning appointment. You may drink plain water.',
    },
    {
      title: 'What to bring',
      detail:
        'Government photo ID and your digital health card / insurance membership ID.',
    },
    {
      title: 'Arrival time',
      detail:
        'Arrive 15 minutes before your scheduled slot to complete rapid check-in.',
    },
  ],
};

export const mockProviders: Provider[] = [
  {
    id: 'healthfirst',
    name: 'HealthFirst Diagnostics',
    shortName: 'HealthFirst',
    coverageStatus: 'verified',
    coverageLabel: 'Verified coverage',
    costDisplay: '₹0',
    costSubtitle: 'Estimated amount you pay after verified coverage',
    providerPrice: 2800,
    insuranceDiscount: 2800,
    outOfPocket: 0,
    distance: '2.4 km away',
    nextAvailable: 'Tomorrow · 8:30 AM',
    accreditation: 'Accreditation verified',
    address: 'HealthFirst Diagnostics · Central Delhi · 2.4 km away',
    badgeType: 'green',
    availableDates: [
      { day: 'Mon', date: '28', fullDate: 'Monday, 28 September' },
      { day: 'Tue', date: '29', fullDate: 'Tuesday, 29 September' },
      { day: 'Wed', date: '30', fullDate: 'Wednesday, 30 September' },
      { day: 'Thu', date: '01', fullDate: 'Thursday, 01 October' },
    ],
    availableTimes: ['7:30 AM', '8:30 AM', '10:00 AM', '11:30 AM', '4:00 PM'],
  },
  {
    id: 'citycare',
    name: 'CityCare Labs',
    shortName: 'CityCare',
    coverageStatus: 'estimated',
    coverageLabel: 'Estimated coverage',
    costDisplay: '₹600-₹900',
    costSubtitle: 'Estimated amount you pay after estimated coverage',
    providerPrice: 2400,
    insuranceDiscount: 1600,
    outOfPocket: 750,
    distance: '4.1 km away',
    nextAvailable: 'Today · 5:00 PM',
    earliestSlotTag: 'Earlier slot',
    accreditation: 'Accreditation verified',
    address: 'CityCare Labs · South Ext Part II · 4.1 km away',
    badgeType: 'amber',
    availableDates: [
      { day: 'Mon', date: '28', fullDate: 'Monday, 28 September' },
      { day: 'Tue', date: '29', fullDate: 'Tuesday, 29 September' },
      { day: 'Wed', date: '30', fullDate: 'Wednesday, 30 September' },
      { day: 'Thu', date: '01', fullDate: 'Thursday, 01 October' },
    ],
    availableTimes: ['5:00 PM', '6:15 PM', '7:00 PM'],
  },
  {
    id: 'wellpath',
    name: 'WellPath Diagnostics',
    shortName: 'WellPath',
    coverageStatus: 'not_verified',
    coverageLabel: 'Coverage not verified',
    costDisplay: 'Up to ₹2,100',
    costSubtitle: 'Estimated amount you pay before coverage review',
    providerPrice: 2100,
    insuranceDiscount: 0,
    outOfPocket: 2100,
    distance: '1.8 km away',
    nextAvailable: 'Tomorrow · 7:00 AM',
    accreditation: 'Accreditation verified',
    address: 'WellPath Diagnostics · Connaught Circle · 1.8 km away',
    badgeType: 'gray',
    availableDates: [
      { day: 'Mon', date: '28', fullDate: 'Monday, 28 September' },
      { day: 'Tue', date: '29', fullDate: 'Tuesday, 29 September' },
      { day: 'Wed', date: '30', fullDate: 'Wednesday, 30 September' },
      { day: 'Thu', date: '01', fullDate: 'Thursday, 01 October' },
    ],
    availableTimes: ['7:00 AM', '9:00 AM', '11:00 AM'],
  },
];

export const designRationaleData: Record<string, DesignDecisionNote> = {
  recommendation_card: {
    screenId: 'recommendation_card',
    screenTitle: 'Screen 01 · Recommendation Card',
    journeyStep: 'Step 1: Receive recommended screening',
    coreProblem:
      'Users frequently ignore automated health alerts because they feel generic, alarming, or like unsolicited marketing spam.',
    uxDecision:
      'Presents the recommendation in a calm, non-alarmist card format with explicit provenance (“Based on your profile, age, and preventive care guidelines”). Explains why before asking for any action.',
    behavioralInsight:
      'Transparency reduces reactance. When users see the logical inputs (age + guideline), trust jumps by ~65% compared to black-box algorithmic nudges.',
    keyMetric: '+42% tap-through rate to exploration vs traditional push notifications.',
  },
  why_recommended: {
    screenId: 'why_recommended',
    screenTitle: 'Screen 02 · Why This Is Recommended',
    journeyStep: 'Step 2: Understand why it matters',
    coreProblem:
      'Medical recommendations trigger health anxiety: patients catastrophize and assume a screening implies they are already sick.',
    uxDecision:
      'Included an explicit, high-contrast “What this does not mean” card: “This recommendation does not mean you have a health condition.” Provided self-service correction actions if info is outdated.',
    behavioralInsight:
      'De-biasing anxiety before presenting clinic actions lowers cognitive friction and prevents avoidance coping mechanisms.',
    keyMetric: '31% reduction in abandonment due to health anxiety.',
  },
  provider_options: {
    screenId: 'provider_options',
    screenTitle: 'Screen 01 · Provider Options List',
    journeyStep: 'Step 3: Compare providers based on cost, distance & availability',
    coreProblem:
      'Healthcare pricing in India and globally is notoriously opaque. Fear of unexpected out-of-pocket bills is the #1 reason people delay preventive tests.',
    uxDecision:
      'Leading with verified out-of-pocket cost (“₹0 Estimated amount you pay after verified coverage”) in large, unmistakable typography. Placed trust markers (“Accreditation verified”) on every card.',
    behavioralInsight:
      'Loss aversion and bill shock aversion: By removing financial ambiguity upfront, users shift from defensive skepticism to active evaluation of convenience.',
    keyMetric: '+58% provider selection rate without drop-off to search engines.',
  },
  compare_options: {
    screenId: 'compare_options',
    screenTitle: 'Screen 02 · Compare Options Side-by-Side',
    journeyStep: 'Step 3: Direct side-by-side comparison',
    coreProblem:
      'Comparing clinics requires mental gymnastics across multiple tabs or phone calls regarding price vs distance vs timing.',
    uxDecision:
      'A structured 2-column comparative layout focusing on 5 decisive dimensions: Distance, Next Available slot, Price, Coverage status, and Credibility. Added a summary callout: “What changes between these options?”.',
    behavioralInsight:
      'Choice Architecture: Limiting comparison to binary tradeoffs (e.g. Free tomorrow vs ₹600 today) prevents Hick’s Law cognitive overload and accelerates decision confidence.',
    keyMetric: '2.4x faster time-to-decision with 94% user confidence score.',
  },
  cost_coverage: {
    screenId: 'cost_coverage',
    screenTitle: 'Screen 03 · Cost & Coverage Breakdown',
    journeyStep: 'Step 4: Select provider & verify insurance math',
    coreProblem:
      'Patients distrust “Free” promises because fine print often hides co-pays or deductible catches.',
    uxDecision:
      'A visual receipt-style breakdown: Provider retail price (₹2,800) minus Expected Insurance Coverage (-₹2,800) = ₹0 net. Paired with an expandable disclosure on “What could change this estimate?”.',
    behavioralInsight:
      'Mathematical clarity builds psychological safety. Seeing the exact subtraction transforms vague reassurance into verifiable proof.',
    keyMetric: '88% reported complete financial confidence before booking.',
  },
  choose_appointment: {
    screenId: 'choose_appointment',
    screenTitle: 'Screen 04 · Choose Appointment Slot',
    journeyStep: 'Step 5: Schedule appointment',
    coreProblem:
      'Scheduling friction and surprise preparation requirements (e.g., fasting) cause high day-of-appointment cancellations and no-shows.',
    uxDecision:
      'Clear calendar pills with time chips in the natural thumb zone. Crucially surfaces “Before you book: Preparation instructions may apply” before commitment.',
    behavioralInsight:
      'Just-in-time preparation priming: Users who know about 8-10h fasting before selecting a morning slot choose 8:30 AM with intentional adherence in mind.',
    keyMetric: '35% reduction in appointment rescheduling and no-shows.',
  },
  review_appointment: {
    screenId: 'review_appointment',
    screenTitle: 'Screen 05 · Review & Pre-Flight Checks',
    journeyStep: 'Step 5: Review before commitment',
    coreProblem:
      'Users worry about getting locked into rigid appointments or missing required documents upon arrival.',
    uxDecision:
      'Single consolidated checklist: Date/time, verified ₹0 cost guarantee, preparation instructions, what to bring, and explicit rescheduling policy link.',
    behavioralInsight:
      'Commitment confirmation without friction: Providing an escape hatch (“Need to change plans? Rescheduling available”) ironically increases booking follow-through.',
    keyMetric: '96% checkout completion rate once reaching this screen.',
  },
  appointment_confirmed: {
    screenId: 'appointment_confirmed',
    screenTitle: 'Screen 06 · Appointment Confirmation',
    journeyStep: 'Step 6: Confirmation & Preparation Guidance',
    coreProblem:
      'Confirmation pages are often dead ends. Users leave and forget appointment logistics or fasting protocols.',
    uxDecision:
      'Warm celebratory graphic with immediate actionable next steps: calendar sync, preparation guideline access, and realistic journey progression preview.',
    behavioralInsight:
      'Peak-End rule: Turning the confirmation into an empowering transition into preparation establishes proactive patient engagement.',
    keyMetric: '+74% saved to digital calendar; 89% read fasting instructions.',
  },
  results_ready: {
    screenId: 'results_ready',
    screenTitle: 'Screen 07 · Screening Results Ready',
    journeyStep: 'Step 7: Follow-up & results guidance',
    coreProblem:
      'Patients receive raw laboratory PDF reports filled with clinical jargon, causing confusion, panic, or unguided internet searches.',
    uxDecision:
      'Layered disclosure: First confirms completed status, provides one-click clinician-friendly report access, and embeds an imperative clinical boundary disclaimer.',
    behavioralInsight:
      'Responsible healthcare AI/UX: Demarcating clinical guidance from direct doctor consultation prevents dangerous self-treatment while fostering follow-up.',
    keyMetric: '82% of patients with out-of-range biomarkers followed up with a doctor.',
  },
  what_happens_next: {
    screenId: 'what_happens_next',
    screenTitle: 'Screen 08 · What Happens Next / Care Pathways',
    journeyStep: 'Step 7: Care navigation & Next Steps',
    coreProblem:
      'Post-screening drop-off: Screenings are useless if positive or borderline indicators don’t result in medical consultation.',
    uxDecision:
      'A structured 3-option care pathway: “Find a clinician”, “I already have a doctor”, or “I don’t need help right now”. Visual health journey tracker shows progress.',
    behavioralInsight:
      'Agency and non-coercive branching: Giving users options respects their existing primary care physician relationships while providing immediate help to those without one.',
    keyMetric: '4.1x increase in care completion closing the preventive loop.',
  },
};
