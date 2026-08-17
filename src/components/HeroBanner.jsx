import React from 'react';
import { ShieldAlert, Clock, DollarSign, CheckCircle2, ArrowRight, Lock, Award, HeartHandshake } from 'lucide-react';

export default function HeroBanner({ onStartCheckup, onViewProposal }) {
  return (
    <section style={{ padding: '48px 0' }} className="animate-fade-in">
      <div className="glass-card" style={{
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        background: 'linear-gradient(135deg, rgba(18, 26, 43, 0.9) 0%, rgba(9, 13, 22, 0.95) 100%)'
      }}>
        
        {/* Background Decorative Element */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
          
          {/* Main Hero Copy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span className="badge badge-cyan">
                <Award size={14} /> Proyecto Personal · ITSE Panamá
              </span>
              <span className="badge badge-safe">100% Gratuito</span>
            </div>

            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', lineHeight: 1.2, marginBottom: '16px', color: '#ffffff' }}>
              Diagnóstico de Ciberseguridad Simple para Pymes Latinoamericanas
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
              Descubre en <strong>menos de 10 minutos</strong> si tu negocio está compromised digitalmente o en riesgo de ataques, sin necesidad de saber de tecnología. Obtén tu resultado visual y una <strong>Hoja de Ruta en PDF</strong> con acciones sencillas.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
              <button onClick={onStartCheckup} className="btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <span>Iniciar Chequeo Rápido</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={onViewProposal} className="btn-secondary">
                <HeartHandshake size={18} />
                <span>Conocer el Proyecto</span>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={16} color="var(--accent-cyan)" />
                <span>100% Anónimo (Sin registros)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--risk-safe)" />
                <span>Basado en NIST & CIS Controls</span>
              </div>
            </div>
          </div>

          {/* Regional Problem Cards / Key Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '10px', borderRadius: '10px' }}>
                <Clock size={22} color="var(--risk-danger)" />
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700' }}>+200 Días de Infección Silenciosa</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Las pymes pasan más de 6 meses atacadas sin saberlo mientras roban datos de clientes y manipulan pagos.
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '10px', borderRadius: '10px' }}>
                <DollarSign size={22} color="var(--risk-warning)" />
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700' }}>Auditorías Inaccesibles (&gt; $1,500 USD)</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  El 80% de las microempresas en Panamá y Centroamérica no pueden costear especialistas de seguridad.
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '10px', borderRadius: '10px' }}>
                <ShieldAlert size={22} color="var(--accent-cyan)" />
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700' }}>90% de los Negocios de la Región</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Comerciantes, agricultores, hoteles y restaurantes se digitalizan rápido pero navegan sin protección.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
