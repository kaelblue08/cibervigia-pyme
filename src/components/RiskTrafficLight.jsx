import React from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert, ArrowRight, Activity, FileSpreadsheet, Lock, RefreshCw } from 'lucide-react';
import { categories } from '../data/questions';

export default function RiskTrafficLight({ result, onViewRoadmap, onRetake }) {
  if (!result) {
    return (
      <section style={{ padding: '48px 0', textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
          <ShieldAlert size={48} color="var(--accent-cyan)" style={{ marginBottom: '16px' }} />
          <h3 style={{ color: '#ffffff', marginBottom: '12px' }}>Aún no has completado el Chequeo Rápido</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            Completa el cuestionario de 10 minutos para generar el Semáforo de Riesgo y recibir la Hoja de Ruta.
          </p>
          <button onClick={onRetake} className="btn-primary">
            Iniciar Chequeo Rápido
          </button>
        </div>
      </section>
    );
  }

  const { totalScore, riskLevel, riskTitle, categoryScores } = result;

  // Determine traffic light styling
  const isSafe = riskLevel === 'safe';
  const isWarning = riskLevel === 'warning';
  const isDanger = riskLevel === 'danger';

  const trafficColor = isSafe ? 'var(--risk-safe)' : isWarning ? 'var(--risk-warning)' : 'var(--risk-danger)';
  const trafficBg = isSafe ? 'var(--risk-safe-bg)' : isWarning ? 'var(--risk-warning-bg)' : 'var(--risk-danger-bg)';
  const trafficBorder = isSafe ? 'var(--risk-safe-border)' : isWarning ? 'var(--risk-warning-border)' : 'var(--risk-danger-border)';

  // Top 3 Priority Recommendations based on results
  const getTopActions = () => {
    if (isDanger) {
      return [
        { title: 'Aislar equipos lentos o sospechosos de la red Wi-Fi', detail: 'Desconecta el cable de red o apaga el Wi-Fi en computadoras que abren ventanas solas para detener filtraciones.' },
        { title: 'Cambiar contraseñas bancarias y de correo empresarial', detail: 'Realiza el cambio inmediato desde tu celular personal usando contraseñas largas mayores a 12 caracteres.' },
        { title: 'Activar Doble Factor de Autenticación (2FA)', detail: 'Activa la verificación con código de seguridad en WhatsApp Business, correo institucional y bancos.' }
      ];
    } else if (isWarning) {
      return [
        { title: 'Instalar Bitwarden o un gestor de contraseñas gratuito', detail: 'Elimina las claves anotadas en papeles y evita repetir la misma contraseña en múltiples sitios.' },
        { title: 'Configurar una red Wi-Fi de Invitados independiente', detail: 'Separa la red Wi-Fi de clientes de la red principal donde se conectan los sistemas de cobro y facturación.' },
        { title: 'Programar respaldos semanales fuera de línea', detail: 'Crea una copia de seguridad periódica de la base de clientes y facturas en la nube cifrada o disco externo.' }
      ];
    } else {
      return [
        { title: 'Mantener la rutina de respaldos y actualizaciones', detail: 'Verifica semanalmente que Windows y tu software antivirus tengan los últimosparches de seguridad.' },
        { title: 'Capacitar al personal en detección de Phishing', detail: 'Establece como regla que nadie comparta datos confidenciales ni claves por correo o WhatsApp.' },
        { title: 'Repetir el chequeo en CiberVigía cada 3 meses', detail: 'Revisa periódicamente el estado de seguridad de tu pyme para detectar vulnerabilidades a tiempo.' }
      ];
    }
  };

  const topActions = getTopActions();

  return (
    <section style={{ padding: '36px 0' }} className="animate-fade-in">
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Main Traffic Light Result Box */}
        <div className="glass-card" style={{
          padding: '40px',
          marginBottom: '28px',
          border: `1.5px solid ${trafficBorder}`,
          boxShadow: isSafe ? 'var(--shadow-glow-safe)' : isWarning ? 'var(--shadow-glow-warning)' : 'var(--shadow-glow-danger)',
          background: `linear-gradient(135deg, ${trafficBg} 0%, rgba(18, 26, 43, 0.95) 100%)`
        }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            
            {/* Visual Traffic Light Gauge */}
            <div style={{ textTransform: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              <div style={{
                background: 'rgba(9, 13, 22, 0.8)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '30px',
                padding: '16px 20px',
                display: 'flex',
                gap: '16px',
                marginBottom: '20px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: isSafe ? 'var(--risk-safe)' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isSafe ? '0 0 18px var(--risk-safe)' : 'none',
                  opacity: isSafe ? 1 : 0.25,
                  transition: 'all 0.3s ease'
                }} />
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: isWarning ? 'var(--risk-warning)' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isWarning ? '0 0 18px var(--risk-warning)' : 'none',
                  opacity: isWarning ? 1 : 0.25,
                  transition: 'all 0.3s ease'
                }} />
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: isDanger ? 'var(--risk-danger)' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isDanger ? '0 0 18px var(--risk-danger)' : 'none',
                  opacity: isDanger ? 1 : 0.25,
                  transition: 'all 0.3s ease'
                }} />
              </div>

              {/* Score Meter */}
              <div style={{ fontSize: '3.5rem', fontWeight: '800', color: trafficColor, lineHeight: 1 }}>
                {totalScore} <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>/ 100 pts</span>
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginTop: '6px' }}>
                {riskTitle}
              </div>

            </div>

            {/* Diagnosis Explanation */}
            <div>
              <span className="badge" style={{ background: trafficBg, color: trafficColor, border: `1px solid ${trafficBorder}`, marginBottom: '12px' }}>
                Diagnóstico Oficial CiberVigía
              </span>

              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
                {isSafe && '🟢 Tu pyme presenta un nivel de riesgo bajo'}
                {isWarning && '🟡 Tu pyme requiere atención inmediata'}
                {isDanger && '🔴 Alerta: Posible compromiso activo en tu pyme'}
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                {isSafe && 'No hemos detectado señales críticas de infección o intrusión activa. Mantén tus copias de seguridad al día y refuerza tus contraseñas.'}
                {isWarning && 'Hemos identificado vulnerabilidades y comportamientos sospechosos que dejan tu facturación, contraseñas o datos a merced de atacantes.'}
                {isDanger && 'Hay indicios graves de fallas críticas de seguridad o posibles infecciones en tus sistemas. Es crucial desconectar equipos afectados y actuar de inmediato.'}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={onViewRoadmap} className="btn-primary">
                  <span>Ver Hoja de Ruta en PDF</span>
                  <ArrowRight size={18} />
                </button>
                <button onClick={onRetake} className="btn-secondary">
                  <RefreshCw size={16} />
                  <span>Repetir Diagnóstico</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Top 3 Priorities Section */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={20} color="var(--accent-cyan)" />
            Las 3 Acciones Más Urgentes para tu Negocio
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {topActions.map((act, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px', borderLeft: '4px solid var(--accent-cyan)' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: 'var(--accent-cyan)',
                  fontWeight: '800',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  {i + 1}
                </div>
                <h5 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '6px' }}>{act.title}</h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{act.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Risk Breakdown */}
        <div className="glass-card" style={{ padding: '28px' }}>
          <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: '700', marginBottom: '20px' }}>
            Desglose de Riesgo por Categoría
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {Object.keys(categories).map((catKey) => {
              const catName = categories[catKey].name;
              const catScore = categoryScores[catKey] || 0;
              const maxCatScore = 20;
              const catPercent = Math.min(100, Math.round((catScore / maxCatScore) * 100));

              let statusColor = 'var(--risk-safe)';
              let statusLabel = 'Seguro';
              if (catPercent > 40 && catPercent <= 70) {
                statusColor = 'var(--risk-warning)';
                statusLabel = 'Atención';
              } else if (catPercent > 70) {
                statusColor = 'var(--risk-danger)';
                statusLabel = 'Riesgo Alto';
              }

              return (
                <div key={catKey} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>{catName}</span>
                    <span style={{ color: statusColor, fontWeight: '700' }}>{statusLabel} ({catScore} pts)</span>
                  </div>

                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${catPercent}%`,
                      height: '100%',
                      background: statusColor,
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
