import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import QuickCheckup from './components/QuickCheckup';
import RiskTrafficLight from './components/RiskTrafficLight';
import ActionRoadmap from './components/ActionRoadmap';
import VolunteersNetwork from './components/VolunteersNetwork';
import ProposalInfo from './components/ProposalInfo';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [checkupResult, setCheckupResult] = useState(null);

  const handleCompleteCheckup = (result) => {
    setCheckupResult(result);
    setActiveTab('traffic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Bar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="app-container" style={{ flex: 1, paddingBottom: '60px' }}>
        
        {activeTab === 'hero' && (
          <HeroBanner
            onStartCheckup={() => setActiveTab('checkup')}
            onViewProposal={() => setActiveTab('proposal')}
          />
        )}

        {activeTab === 'checkup' && (
          <QuickCheckup
            onCompleteCheckup={handleCompleteCheckup}
            existingAnswers={checkupResult?.answers}
          />
        )}

        {activeTab === 'traffic' && (
          <RiskTrafficLight
            result={checkupResult}
            onViewRoadmap={() => setActiveTab('roadmap')}
            onRetake={() => setActiveTab('checkup')}
          />
        )}

        {activeTab === 'roadmap' && (
          <ActionRoadmap
            result={checkupResult}
            onConnectVolunteers={() => setActiveTab('volunteers')}
          />
        )}

        {activeTab === 'volunteers' && (
          <VolunteersNetwork userRiskLevel={checkupResult?.riskLevel} />
        )}

        {activeTab === 'proposal' && (
          <ProposalInfo />
        )}

      </main>

      {/* Footer */}
      <footer style={{
        background: '#070a12',
        borderTop: '1px solid var(--border-color)',
        padding: '24px 0',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <div className="app-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
          <div>
            <strong style={{ color: '#ffffff' }}>CiberVigía Pyme</strong> · Diagnóstico de Ciberseguridad Gratuito para América Latina
          </div>
          <div>
            Jordy Kael Pineda D'Meza · Proyecto Personal · ITSE Panamá
          </div>
        </div>
      </footer>

    </div>
  );
}
