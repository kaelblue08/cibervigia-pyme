import React, { useState } from 'react';
import { questionsData, categories } from '../data/questions';
import { Shield, ChevronRight, ChevronLeft, HelpCircle, CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react';

export default function QuickCheckup({ onCompleteCheckup, existingAnswers }) {
  const [answers, setAnswers] = useState(existingAnswers || {});
  const [currentStep, setCurrentStep] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  const currentQuestion = questionsData[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / questionsData.length) * 100);
  const answeredCount = Object.keys(answers).length;

  const handleSelectOption = (questionId, option) => {
    const updated = {
      ...answers,
      [questionId]: option
    };
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentStep < questionsData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateAndFinish();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateAndFinish = () => {
    let totalScore = 0;
    const categoryScores = {
      devices: 0,
      emails: 0,
      banking: 0,
      wifi: 0,
      passwords: 0,
      backups: 0
    };

    questionsData.forEach((q) => {
      const selected = answers[q.id];
      if (selected) {
        totalScore += selected.points;
        categoryScores[q.category] += selected.points;
      }
    });

    // Determine Risk Level
    let riskLevel = 'safe'; // 0-30
    let riskTitle = 'Riesgo Bajo';
    let riskColor = 'var(--risk-safe)';

    if (totalScore >= 31 && totalScore <= 60) {
      riskLevel = 'warning';
      riskTitle = 'Riesgo Moderado';
      riskColor = 'var(--risk-warning)';
    } else if (totalScore > 60) {
      riskLevel = 'danger';
      riskTitle = 'Alto Riesgo (Crítico)';
      riskColor = 'var(--risk-danger)';
    }

    onCompleteCheckup({
      totalScore,
      riskLevel,
      riskTitle,
      riskColor,
      categoryScores,
      answers
    });
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  return (
    <section style={{ padding: '32px 0' }} className="animate-fade-in">
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        
        {/* Header Progress Card */}
        <div className="glass-card" style={{ padding: '24px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <span className="badge badge-cyan" style={{ marginBottom: '6px' }}>
                Chequeo Rápido (~10 minutos)
              </span>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: '700' }}>
                Pregunta {currentStep + 1} de {questionsData.length}
              </h3>
            </div>

            <button onClick={handleReset} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              <RotateCcw size={14} /> Reiniciar
            </button>
          </div>

          {/* Progress Bar */}
          <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #38bdf8 0%, #0284c7 100%)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Question Box */}
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '10px' }}>
            <Shield size={16} />
            <span>{categories[currentQuestion.category]?.name}</span>
          </div>

          <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: '700', lineHeight: 1.4, marginBottom: '14px' }}>
            {currentQuestion.title}
          </h3>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', background: 'rgba(255, 255, 255, 0.02)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-cyan)' }}>
            {currentQuestion.description}
          </p>

          {/* Options List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = answers[currentQuestion.id]?.text === opt.text;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(currentQuestion.id, opt)}
                  style={{
                    textAlign: 'left',
                    padding: '18px 20px',
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected 
                      ? 'rgba(56, 189, 248, 0.15)' 
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected 
                      ? '1px solid var(--accent-cyan)' 
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    color: isSelected ? '#ffffff' : 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '0.95rem', fontWeight: isSelected ? '600' : '400' }}>
                    {opt.text}
                  </span>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: isSelected ? '2px solid var(--accent-cyan)' : '2px solid rgba(255, 255, 255, 0.2)',
                    background: isSelected ? 'var(--accent-cyan)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isSelected && <CheckCircle2 size={16} color="#090d16" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Framework alignment footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '18px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HelpCircle size={14} />
              <span>Estándar: {currentQuestion.frameworkAlign}</span>
            </div>

            {/* Navigation buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="btn-secondary"
                style={{ opacity: currentStep === 0 ? 0.5 : 1, padding: '10px 18px', fontSize: '0.9rem' }}
              >
                <ChevronLeft size={16} /> Anterior
              </button>

              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="btn-primary"
                style={{ opacity: !answers[currentQuestion.id] ? 0.5 : 1, padding: '10px 22px', fontSize: '0.9rem' }}
              >
                <span>{currentStep === questionsData.length - 1 ? 'Ver Diagnóstico Final' : 'Siguiente'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
