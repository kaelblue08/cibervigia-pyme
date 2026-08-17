import React, { useState } from 'react';
import { recommendedTools, securityTemplates } from '../data/templates';
import { Download, ExternalLink, Copy, Check, ShieldCheck, HeartHandshake, BookOpen, Wrench } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function ActionRoadmap({ result, onConnectVolunteers }) {
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const totalScore = result?.totalScore || 45;
  const riskTitle = result?.riskTitle || 'Riesgo Moderado (Ejemplo)';

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // PDF Styling
    doc.setFillColor(9, 13, 22);
    doc.rect(0, 0, 210, 297, 'F');

    // Title & Header
    doc.setTextColor(56, 189, 248);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('CiberVigía Pyme', 15, 20);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text('Hoja de Ruta Personalizada de Ciberseguridad', 15, 30);

    doc.setFontSize(10);
    doc.setTextColor(148, 163, 184);
    doc.text(`Fecha: ${new Date().toLocaleDateString('es-ES')} | Evaluado por: Algoritmo CiberVigía`, 15, 38);
    doc.text('Proyecto Personal e Independiente · Jordy Kael Pineda D\'Meza (ITSE Panamá)', 15, 44);

    doc.setDrawColor(56, 189, 248);
    doc.line(15, 48, 195, 48);

    // Score Summary Box
    doc.setFillColor(18, 26, 43);
    doc.roundedRect(15, 54, 180, 28, 3, 3, 'F');

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(`Nivel de Riesgo Diagnosticado: ${riskTitle}`, 20, 65);
    doc.text(`Puntuación Obtenida: ${totalScore} / 100 puntos`, 20, 74);

    // Section 1: Plain Language Summary
    doc.setFontSize(14);
    doc.setTextColor(56, 189, 248);
    doc.text('1. Resumen en Palabras Claras', 15, 92);

    doc.setFontSize(10);
    doc.setTextColor(220, 225, 235);
    const summaryLines = [
      'Este plan transforma los diagnósticos técnicos en pasos concretos y fáciles de seguir.',
      'Tu negocio puede mejorar drásticamente su postura de seguridad adoptando herramientas',
      'gratuitas y estableciendo hábitos mínimos de protección entre tus empleados.'
    ];
    let yPos = 100;
    summaryLines.forEach(line => {
      doc.text(line, 15, yPos);
      yPos += 6;
    });

    // Section 2: Priority Steps
    doc.setFontSize(14);
    doc.setTextColor(56, 189, 248);
    doc.text('2. Pasos Prioritarios de Seguridad', 15, 126);

    const steps = [
      'PASO 1: Instalar un gestor de contraseñas gratuito (Bitwarden) en tus equipos.',
      'PASO 2: Activar la Verificación en Dos Pasos (2FA) en correo y WhatsApp.',
      'PASO 3: Configurar respaldos semanales desconectados o en nube cifrada.',
      'PASO 4: Separar la red Wi-Fi de clientes de la red corporativa de facturación.'
    ];

    yPos = 136;
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    steps.forEach(step => {
      doc.text(step, 15, yPos);
      yPos += 8;
    });

    // Section 3: Recommended Free Tools
    doc.setFontSize(14);
    doc.setTextColor(56, 189, 248);
    doc.text('3. Herramientas Gratuitas Recomendadas', 15, 180);

    const tools = [
      '• Bitwarden (Gestor de Contraseñas) - bitwarden.com',
      '• Avast Business / ClamAV (Antivirus Gratuito) - avast.com/business',
      '• Duplicati (Respaldos Cifrados) - duplicati.com',
      '• Google / Microsoft Authenticator (App 2FA)'
    ];

    yPos = 190;
    doc.setFontSize(10);
    doc.setTextColor(200, 210, 225);
    tools.forEach(t => {
      doc.text(t, 15, yPos);
      yPos += 7;
    });

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text('CiberVigía Pyme es una plataforma de código abierto licenciada bajo MIT.', 15, 280);

    doc.save(`CiberVigla_Hoja_de_Ruta_Pyme_${totalScore}pts.pdf`);
  };

  const handleCopyText = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section style={{ padding: '36px 0' }} className="animate-fade-in">
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        
        {/* Main Action Plan Banner */}
        <div className="glass-card" style={{
          padding: '32px',
          marginBottom: '32px',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          background: 'linear-gradient(135deg, rgba(18, 26, 43, 0.95) 0%, rgba(9, 13, 22, 0.98) 100%)'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <div>
              <span className="badge badge-cyan" style={{ marginBottom: '8px' }}>
                Hoja de Ruta Personalizada
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: '800', marginBottom: '8px' }}>
                Tu Plan de Acción en Ciberseguridad
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px' }}>
                Transforma tu diagnóstico en medidas de protección inmediatas. Descarga la guía en formato PDF o utiliza nuestras plantillas gratuitas listas para implementar.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={handleDownloadPDF} className="btn-primary" style={{ padding: '12px 22px' }}>
                <Download size={18} />
                <span>Descargar Hoja de Ruta (PDF)</span>
              </button>
              <button onClick={onConnectVolunteers} className="btn-secondary">
                <HeartHandshake size={18} />
                <span>Pedir Ayuda a Voluntarios</span>
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Priority Guide */}
        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Wrench size={22} color="var(--accent-cyan)" />
            Guía Paso a Paso Adaptada a tu Pyme
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div className="glass-card" style={{ padding: '24px', borderLeft: '4px solid var(--accent-cyan)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span className="badge badge-cyan">Paso 1 · Inmediato (15 min)</span>
                <h5 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700' }}>Fortalecer las Contraseñas del Negocio</h5>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
                <strong>¿Por qué importa?</strong> El 80% de los accesos indebidos ocurren por claves repetidas o débiles anotadas en papeles.
              </p>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <strong>Acción concreta:</strong> Descarga la aplicación gratuita <strong>Bitwarden</strong>. Crea una contraseña maestra larga (frase memorable de 4 palabras) y guarda allí los accesos de la empresa.
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', borderLeft: '4px solid var(--risk-safe)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span className="badge badge-safe">Paso 2 · Hoy Mismo (20 min)</span>
                <h5 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700' }}>Activar la Verificación en Dos Pasos (2FA)</h5>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
                <strong>¿Por qué importa?</strong> Aunque adivinen tu contraseña, no podrán entrar a tus cuentas sin el código de tu teléfono celular.
              </p>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <strong>Acción concreta:</strong> Activa 2FA en tu correo institucional (Gmail/Outlook), WhatsApp Business y en la banca en línea de tu pyme.
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', borderLeft: '4px solid var(--risk-warning)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span className="badge badge-warning">Paso 3 · Esta Semana (30 min)</span>
                <h5 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700' }}>Configurar Respaldos Automáticos</h5>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
                <strong>¿Por qué importa?</strong> Si un virus o Ransomware secuestra tu equipo, un respaldo reciente es la única garantía para no perder la empresa.
              </p>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <strong>Acción concreta:</strong> Configura <strong>Duplicati</strong> o Google Drive para copiar automáticamente tus facturas y archivos de clientes a una nube cifrada.
              </div>
            </div>

          </div>
        </div>

        {/* Free Recommended Software Section */}
        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={22} color="var(--risk-safe)" />
            Recursos y Software Gratuito Recomendado
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {recommendedTools.map((tool, index) => (
              <div key={index} className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h5 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '700' }}>{tool.name}</h5>
                    <span className="badge badge-safe" style={{ fontSize: '0.65rem' }}>{tool.type}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '8px' }}>{tool.category}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
                    {tool.description}
                  </p>
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.8rem', justifyContent: 'center' }}
                >
                  <span>Obtener Herramienta</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Templates Download / Copy Section */}
        <div>
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={22} color="var(--accent-purple)" />
            Plantillas Listas para Usar en tu Negocio
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {securityTemplates.map((tpl) => (
              <div key={tpl.id} className="glass-card" style={{ padding: '24px' }}>
                <span className="badge badge-cyan" style={{ marginBottom: '10px' }}>{tpl.badge}</span>
                <h5 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>{tpl.title}</h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>{tpl.description}</p>
                
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setActiveTemplate(tpl)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem', justifyContent: 'center' }}
                  >
                    <span>Ver y Copiar</span>
                  </button>

                  <button
                    onClick={() => handleCopyText(tpl.id, tpl.content)}
                    className="btn-primary"
                    style={{ padding: '10px 14px' }}
                    title="Copiar texto de la plantilla"
                  >
                    {copiedId === tpl.id ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Viewer for Selected Template */}
        {activeTemplate && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}>
            <div className="glass-card" style={{ maxWidth: '640px', width: '100%', padding: '32px', maxHeight: '85vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700' }}>{activeTemplate.title}</h4>
                <button onClick={() => setActiveTemplate(null)} className="btn-secondary" style={{ padding: '4px 10px' }}>
                  ✕
                </button>
              </div>

              <pre style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                background: 'rgba(9, 13, 22, 0.9)',
                padding: '18px',
                borderRadius: 'var(--radius-sm)',
                color: '#e2e8f0',
                whiteSpace: 'pre-wrap',
                marginBottom: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {activeTemplate.content}
              </pre>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => handleCopyText(activeTemplate.id, activeTemplate.content)}
                  className="btn-primary"
                >
                  {copiedId === activeTemplate.id ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedId === activeTemplate.id ? '¡Copiado!' : 'Copiar Texto'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
