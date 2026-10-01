/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, Provider, AppointmentState } from './types';
import { mockProviders, mockScreeningInfo } from './data/mockData';
import { PhoneWrapper } from './components/layout/PhoneWrapper';
import { DesignInterviewToolbar } from './components/layout/DesignInterviewToolbar';

// 11 Recreated Core Figma Screen Views
import { Screen1_Recommendation } from './views/Screen1_Recommendation'; // CM 01 - 1.0.0
import { Screen2_WhyRecommended } from './views/Screen2_WhyRecommended'; // CM 01 - 1.1.0
import { Screen3_RecommendationDetails } from './views/Screen3_RecommendationDetails';
import { Screen4_ProviderOptions } from './views/Screen4_ProviderOptions'; // CM 02 - 1.0.0
import { Screen5_CompareOptions } from './views/Screen5_CompareOptions'; // CM 02 - 1.2.0
import { Screen6_CostCoverageDetail } from './views/Screen6_CostCoverageDetail'; // CM 02 - 1.1.0
import { Screen7_ChooseAppointment } from './views/Screen7_ChooseAppointment'; // CM 03 - 1.0.0
import { Screen8_ReviewAppointment } from './views/Screen8_ReviewAppointment'; // CM 03 - 1.1.0
import { Screen9_AppointmentConfirmed } from './views/Screen9_AppointmentConfirmed'; // CM 03 - 1.2.0
import { Screen10_ResultsReady } from './views/Screen10_ResultsReady'; // CM 04 - 1.0.0
import { Screen10B_ReportOverview } from './views/Screen10B_ReportOverview'; // CM 04 - 1.1.0
import { Screen11_NextAction } from './views/Screen11_NextAction'; // CM 04 - 1.2.0

// 5 Product Edge Case Views
import { EdgeCase_InsufficientInfo } from './views/EdgeCase_InsufficientInfo'; // EC - 1.0.0
import { EdgeCase_CoveragePending } from './views/EdgeCase_CoveragePending'; // EC - 1.1.0
import { EdgeCase_ProviderUnavailable } from './views/EdgeCase_ProviderUnavailable'; // EC - 1.2.0
import { EdgeCase_SlotUnavailable } from './views/EdgeCase_SlotUnavailable'; // EC - 1.3.0
import { EdgeCase_ResultsNotReady } from './views/EdgeCase_ResultsNotReady'; // EC - 1.4.0

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('recommendation_card');
  const [selectedProvider, setSelectedProvider] = useState<Provider>(mockProviders[0]);
  const [isFramed, setIsFramed] = useState<boolean>(true);

  const [appointment, setAppointment] = useState<AppointmentState>({
    provider: mockProviders[0],
    selectedDate: 'Tuesday, 29 September',
    selectedTime: '8:30 AM',
    screeningName: 'Preventive health screening',
    isConfirmed: false,
    confirmationCode: 'OPTUM-7829',
  });

  // Navigation handlers
  const handleSelectProvider = (prov: Provider) => {
    setSelectedProvider(prov);
    setAppointment((prev) => ({
      ...prev,
      provider: prov,
    }));
    setCurrentScreen('cost_coverage');
  };

  const handleSlotChosen = (date: string, time: string) => {
    setAppointment((prev) => ({
      ...prev,
      selectedDate: date,
      selectedTime: time,
    }));
    setCurrentScreen('review_appointment');
  };

  const handleConfirmAppointment = () => {
    setAppointment((prev) => ({
      ...prev,
      isConfirmed: true,
    }));
    setCurrentScreen('appointment_confirmed');
  };

  const handleReset = () => {
    setSelectedProvider(mockProviders[0]);
    setAppointment({
      provider: mockProviders[0],
      selectedDate: 'Tuesday, 29 September',
      selectedTime: '8:30 AM',
      screeningName: 'Preventive health screening',
      isConfirmed: false,
      confirmationCode: 'OPTUM-7829',
    });
    setCurrentScreen('recommendation_card');
  };

  return (
    <div className="min-h-screen bg-slate-900/95 flex flex-col font-sans">
      {/* Portfolio Presentation & Interview Navigation Toolbar */}
      <DesignInterviewToolbar
        currentScreen={currentScreen}
        onNavigateScreen={(screenId) => setCurrentScreen(screenId)}
        isFramed={isFramed}
        onToggleFrame={() => setIsFramed(!isFramed)}
        onReset={handleReset}
      />

      {/* Main Interactive Mobile Container */}
      <main className="flex-1 flex items-center justify-center p-0 sm:p-2">
        <PhoneWrapper isFramed={isFramed}>
          {/* CM 01 - 1.0.0 [Recommendation Card] */}
          {currentScreen === 'recommendation_card' && (
            <Screen1_Recommendation
              screening={mockScreeningInfo}
              onNavigateNext={() => setCurrentScreen('recommendation_ai_analysis')}
              onInsufficientInfo={() => setCurrentScreen('ec_insufficient_info')}
              onNotNow={() => setCurrentScreen('recommendation_card')}
            />
          )}

          {/* CM 01 - 1.1.0 [Recommendation AI Analysis] */}
          {(currentScreen === 'recommendation_ai_analysis' || currentScreen === 'why_recommended') && (
            <Screen2_WhyRecommended
              screening={mockScreeningInfo}
              onBack={() => setCurrentScreen('recommendation_card')}
              onExploreOptions={() => setCurrentScreen('provider_options')}
              onAboutDetails={() => setCurrentScreen('about_recommendation')}
              onUpdateInfo={() => setCurrentScreen('ec_insufficient_info')}
            />
          )}

          {/* Recommendation Transparency Details */}
          {currentScreen === 'about_recommendation' && (
            <Screen3_RecommendationDetails
              onBack={() => setCurrentScreen('recommendation_ai_analysis')}
              onExploreOptions={() => setCurrentScreen('provider_options')}
            />
          )}

          {/* CM 02 - 1.0.0 [Provider Options] */}
          {currentScreen === 'provider_options' && (
            <Screen4_ProviderOptions
              providers={mockProviders}
              onSelectProvider={handleSelectProvider}
              onCompareProviders={() => setCurrentScreen('ai_decision_support')}
              onSelectPendingCoverage={() => setCurrentScreen('ec_coverage_pending')}
              onSelectUnavailableProvider={() => setCurrentScreen('ec_provider_unavailable')}
              onBack={() => setCurrentScreen('recommendation_ai_analysis')}
            />
          )}

          {/* CM 02 - 1.2.0 [AI Decision Support] / Compare Options */}
          {(currentScreen === 'ai_decision_support' || currentScreen === 'compare_options') && (
            <Screen5_CompareOptions
              providers={mockProviders}
              onBack={() => setCurrentScreen('provider_options')}
              onSelectProvider={handleSelectProvider}
            />
          )}

          {/* CM 02 - 1.1.0 [Cost & Coverage Detail] */}
          {currentScreen === 'cost_coverage' && (
            <Screen6_CostCoverageDetail
              provider={selectedProvider}
              onBack={() => setCurrentScreen('provider_options')}
              onContinue={() => setCurrentScreen('choose_appointment')}
            />
          )}

          {/* CM 03 - 1.0.0 [Choose Appointment] */}
          {currentScreen === 'choose_appointment' && (
            <Screen7_ChooseAppointment
              provider={selectedProvider}
              onBack={() => setCurrentScreen('cost_coverage')}
              onContinue={handleSlotChosen}
              onSlotUnavailable={() => setCurrentScreen('ec_slot_unavailable')}
            />
          )}

          {/* CM 03 - 1.1.0 [Review Appointment] */}
          {currentScreen === 'review_appointment' && (
            <Screen8_ReviewAppointment
              appointment={appointment}
              onBack={() => setCurrentScreen('choose_appointment')}
              onConfirm={handleConfirmAppointment}
              onChangeAppointment={() => setCurrentScreen('choose_appointment')}
              onViewCostDetails={() => setCurrentScreen('cost_coverage')}
            />
          )}

          {/* CM 03 - 1.2.0 [Appointment Confirmed] */}
          {currentScreen === 'appointment_confirmed' && (
            <Screen9_AppointmentConfirmed
              appointment={appointment}
              onBack={() => setCurrentScreen('review_appointment')}
              onViewCostDetails={() => setCurrentScreen('cost_coverage')}
              onViewResultsDemo={() => setCurrentScreen('results_ready')}
              onViewResultsNotReady={() => setCurrentScreen('ec_results_not_ready')}
            />
          )}

          {/* CM 04 - 1.0.0 [Results Ready] */}
          {(currentScreen === 'results_ready' || currentScreen === 'result_summary') && (
            <Screen10_ResultsReady
              onBack={() => setCurrentScreen('appointment_confirmed')}
              onNavigateNextAction={() => setCurrentScreen('report_overview')}
            />
          )}

          {/* CM 04 - 1.1.0 [Report Overview] */}
          {currentScreen === 'report_overview' && (
            <Screen10B_ReportOverview
              onBack={() => setCurrentScreen('results_ready')}
              onViewFullReport={() => setCurrentScreen('ai_assisted_interpretation')}
            />
          )}

          {/* CM 04 - 1.2.0 [AI Assisted Interpretation] / What Happens Next */}
          {(currentScreen === 'ai_assisted_interpretation' || currentScreen === 'what_happens_next') && (
            <Screen11_NextAction
              onBack={() => setCurrentScreen('report_overview')}
              onViewResults={() => setCurrentScreen('results_ready')}
              onResetJourney={handleReset}
            />
          )}

          {/* EC - 1.0.0 [Insufficient Info] */}
          {currentScreen === 'ec_insufficient_info' && (
            <EdgeCase_InsufficientInfo
              onBack={() => setCurrentScreen('recommendation_card')}
              onContinueCurrentView={() => setCurrentScreen('recommendation_card')}
              onProfileCompleted={() => setCurrentScreen('recommendation_ai_analysis')}
            />
          )}

          {/* EC - 1.1.0 [Coverage Pending] */}
          {currentScreen === 'ec_coverage_pending' && (
            <EdgeCase_CoveragePending
              onBack={() => setCurrentScreen('provider_options')}
              onContinueBrowsing={() => setCurrentScreen('provider_options')}
              onViewWithoutCoverage={() => setCurrentScreen('cost_coverage')}
            />
          )}

          {/* EC - 1.2.0 [Provider Unavailable] */}
          {currentScreen === 'ec_provider_unavailable' && (
            <EdgeCase_ProviderUnavailable
              onBack={() => setCurrentScreen('provider_options')}
              onSelectHomeCollection={() => {
                setSelectedProvider({
                  ...mockProviders[0],
                  name: 'Optum Home Sample Collection',
                  distance: 'Direct to your door',
                  nextAvailable: 'Tomorrow · Flexible slot',
                });
                setCurrentScreen('choose_appointment');
              }}
              onExpandRadius={() => setCurrentScreen('provider_options')}
            />
          )}

          {/* EC - 1.3.0 [Slot Unavailable] */}
          {currentScreen === 'ec_slot_unavailable' && (
            <EdgeCase_SlotUnavailable
              onBack={() => setCurrentScreen('choose_appointment')}
              onSelectNextDate={(d, t) => {
                setAppointment((prev) => ({
                  ...prev,
                  selectedDate: d,
                  selectedTime: t,
                }));
                setCurrentScreen('review_appointment');
              }}
              onSwitchProvider={() => {
                setSelectedProvider(mockProviders[1]);
                setAppointment((prev) => ({
                  ...prev,
                  provider: mockProviders[1],
                }));
                setCurrentScreen('choose_appointment');
              }}
            />
          )}

          {/* EC - 1.4.0 [Results Not Ready] */}
          {currentScreen === 'ec_results_not_ready' && (
            <EdgeCase_ResultsNotReady
              onBack={() => setCurrentScreen('appointment_confirmed')}
              onSimulateReady={() => setCurrentScreen('results_ready')}
            />
          )}
        </PhoneWrapper>
      </main>
    </div>
  );
}
