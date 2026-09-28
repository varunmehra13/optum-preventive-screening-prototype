/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, Provider, AppointmentState } from './types';
import { mockProviders, mockScreeningInfo } from './data/mockData';
import { PhoneWrapper } from './components/layout/PhoneWrapper';
import { DesignInterviewToolbar } from './components/layout/DesignInterviewToolbar';

// Recreated Figma Screen Views
import { Screen1_Recommendation } from './views/Screen1_Recommendation';
import { Screen2_WhyRecommended } from './views/Screen2_WhyRecommended';
import { Screen3_RecommendationDetails } from './views/Screen3_RecommendationDetails';
import { Screen4_ProviderOptions } from './views/Screen4_ProviderOptions';
import { Screen5_CompareOptions } from './views/Screen5_CompareOptions';
import { Screen6_CostCoverageDetail } from './views/Screen6_CostCoverageDetail';
import { Screen7_ChooseAppointment } from './views/Screen7_ChooseAppointment';
import { Screen8_ReviewAppointment } from './views/Screen8_ReviewAppointment';
import { Screen9_AppointmentConfirmed } from './views/Screen9_AppointmentConfirmed';
import { Screen10_ResultsReady } from './views/Screen10_ResultsReady';
import { Screen11_NextAction } from './views/Screen11_NextAction';

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
          {currentScreen === 'recommendation_card' && (
            <Screen1_Recommendation
              screening={mockScreeningInfo}
              onNavigateNext={() => setCurrentScreen('why_recommended')}
            />
          )}

          {currentScreen === 'why_recommended' && (
            <Screen2_WhyRecommended
              screening={mockScreeningInfo}
              onBack={() => setCurrentScreen('recommendation_card')}
              onExploreOptions={() => setCurrentScreen('provider_options')}
              onAboutDetails={() => setCurrentScreen('about_recommendation')}
            />
          )}

          {currentScreen === 'about_recommendation' && (
            <Screen3_RecommendationDetails
              onBack={() => setCurrentScreen('why_recommended')}
              onExploreOptions={() => setCurrentScreen('provider_options')}
            />
          )}

          {currentScreen === 'provider_options' && (
            <Screen4_ProviderOptions
              providers={mockProviders}
              onSelectProvider={handleSelectProvider}
              onCompareProviders={() => setCurrentScreen('compare_options')}
              onBack={() => setCurrentScreen('why_recommended')}
            />
          )}

          {currentScreen === 'compare_options' && (
            <Screen5_CompareOptions
              providers={mockProviders}
              onBack={() => setCurrentScreen('provider_options')}
              onSelectProvider={handleSelectProvider}
            />
          )}

          {currentScreen === 'cost_coverage' && (
            <Screen6_CostCoverageDetail
              provider={selectedProvider}
              onBack={() => setCurrentScreen('provider_options')}
              onContinue={() => setCurrentScreen('choose_appointment')}
            />
          )}

          {currentScreen === 'choose_appointment' && (
            <Screen7_ChooseAppointment
              provider={selectedProvider}
              onBack={() => setCurrentScreen('cost_coverage')}
              onContinue={handleSlotChosen}
            />
          )}

          {currentScreen === 'review_appointment' && (
            <Screen8_ReviewAppointment
              appointment={appointment}
              onBack={() => setCurrentScreen('choose_appointment')}
              onConfirm={handleConfirmAppointment}
              onChangeAppointment={() => setCurrentScreen('choose_appointment')}
              onViewCostDetails={() => setCurrentScreen('cost_coverage')}
            />
          )}

          {currentScreen === 'appointment_confirmed' && (
            <Screen9_AppointmentConfirmed
              appointment={appointment}
              onBack={() => setCurrentScreen('review_appointment')}
              onViewCostDetails={() => setCurrentScreen('cost_coverage')}
              onViewResultsDemo={() => setCurrentScreen('results_ready')}
            />
          )}

          {(currentScreen === 'results_ready' || currentScreen === 'result_summary') && (
            <Screen10_ResultsReady
              onBack={() => setCurrentScreen('appointment_confirmed')}
              onNavigateNextAction={() => setCurrentScreen('what_happens_next')}
            />
          )}

          {currentScreen === 'what_happens_next' && (
            <Screen11_NextAction
              onBack={() => setCurrentScreen('results_ready')}
              onViewResults={() => setCurrentScreen('results_ready')}
              onResetJourney={handleReset}
            />
          )}
        </PhoneWrapper>
      </main>
    </div>
  );
}
