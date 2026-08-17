import React from 'react';
import { Award, Target, Compass, Globe, User, ShieldAlert } from 'lucide-react';

export default function ProposalInfo() {
  return (
    <section style={{ padding: '36px 0' }} className="animate-fade-in">
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        
        {/* Proposal Header Banner */}
        <div className="glass-card" style={{
          padding: '40px',
          marginBottom: '32px',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(9, 13, 22, 0.95) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span className="badge badge-cyan">PROYECTO PERSONAL E INDEPENDIENTE</span>
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px', lineHeight: 1.2 }}>
            CiberVigía Pyme
          </h2>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '16px' }}>
            Plataforma de diagnóstico de ciberseguridad gratuita para pymes latinoamericanas
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={16} color="var(--accent-cyan)" />
              <span><strong>Jordy Kael Pineda D'Meza</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={16} color="var(--accent-cyan)" />
              <span>ITSE · Panamá, República de Panamá</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Compass size={22} color="var(--accent-cyan)" />
            Resumen del Proyecto
          </h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            <strong>CiberVigía Pyme</strong> es una plataforma web gratuita y de código abierto para que dueños de pymes en América Latina puedan diagnosticar si su negocio fue comprometido digitalmente, sin necesidad de saber de tecnología. Al finalizar reciben un plan de acción concreto y accesible para mejorar su seguridad.
            <br /><br />
            La idea surgió de mi investigación sobre la situación de las pymes en la región. Me di cuenta de que miles operan con sistemas vulnerables sin saberlo, y no tienen ni el dinero ni la guía para protegerse. Esta plataforma busca cambiar eso.
          </p>
        </div>

        {/* The Problem */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldAlert size={22} color="var(--risk-danger)" />
            El Problema en América Latina
          </h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
            Las pymes representan más del 90% de los negocios en América Latina, pero son las más vulnerables ante ciberataques por tres razones fundamentales:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ color: 'var(--risk-danger)', fontWeight: '700', marginBottom: '8px' }}>1. Infección Silenciosa (&gt;200 días)</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Los atacantes permanecen dentro de los sistemas por meses sin que nadie lo note, robando datos y manipulando pagos hasta que se concreta un fraude o secuestro por ransomware.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ color: 'var(--risk-warning)', fontWeight: '700', marginBottom: '8px' }}>2. Costos Inasequibles (&gt;$1,500)</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Una auditoría básica en Centroamérica cuesta más de $1,500 USD, algo imposible para el 80% de las microempresas que operan con presupuestos ajustados.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ color: 'var(--accent-cyan)', fontWeight: '700', marginBottom: '8px' }}>3. Falta de Orientación Sencilla</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Para quien no estudió tecnología, los reportes técnicos resultan incomprensibles. Se comparten claves en papel, se omiten respaldos y se navega a ciegas.
              </p>
            </div>

          </div>
        </div>

        {/* Expected Impact Timeline */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Target size={22} color="var(--risk-safe)" />
            Impacto Esperado y Escalamiento
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            <div style={{ borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '16px' }}>
              <h5 style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem' }}>Fase Inicial (0-6 meses)</h5>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                • 500 pymes diagnosticadas en Chiriquí y Ciudad de Panamá.<br />
                • Piloto con 15 voluntarios técnicos del ITSE.<br />
                • Alianzas estratégicas con AMPYME y Cámaras de Comercio locales.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid var(--risk-warning)', paddingLeft: '16px' }}>
              <h5 style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem' }}>Fase de Expansión (6-18 meses)</h5>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                • Expansión a Costa Rica, Guatemala, Honduras, El Salvador, Nicaragua y Colombia.<br />
                • Red ampliada a 100 voluntarios técnicos regionales.<br />
                • 10,000 diagnósticos acumulados con datos anonimizados.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid var(--risk-safe)', paddingLeft: '16px' }}>
              <h5 style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem' }}>Fase de Consolidación (18-36 meses)</h5>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                • Base regional de inteligencia de amenazas anonimizadas.<br />
                • Módulos de capacitación gamificada y monitoreo proactivo.<br />
                • Replicación del modelo en la región.
              </p>
            </div>

          </div>
        </div>

        {/* About Author */}
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <User size={22} color="var(--accent-cyan)" />
            Sobre el Autor
          </h4>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              fontWeight: '800',
              color: '#ffffff',
              flexShrink: 0
            }}>
              JP
            </div>

            <div style={{ flex: 1 }}>
              <h5 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: '700' }}>Jordy Kael Pineda D'Meza</h5>
              <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '10px' }}>
                Técnico Superior en Ciberseguridad (ITSE, Panamá)
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                "Soy un estudiante de ciberseguridad convencido de que la seguridad digital debería ser un derecho, no un lujo. CiberVigía Pyme nace de la necesidad de cerrar la brecha para que los pequeños empresarios de América Latina dejen de ser presa fácil en el mundo digital."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
