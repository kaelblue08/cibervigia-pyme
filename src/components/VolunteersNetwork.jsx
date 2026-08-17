import React, { useState } from 'react';
import { Users, CheckCircle2, MessageSquare, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteersNetwork({ userRiskLevel }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    province: 'Panamá',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setSendingEmail(true);

    const subject = encodeURIComponent(`🛡️ Nueva Solicitud CiberVigía Pyme: ${formData.businessName}`);
    const bodyText = encodeURIComponent(`SOLICITUD DE ASISTENCIA TÉCNICA CIBERVIGÍA PYME:\n\n- Pyme / Negocio: ${formData.businessName}\n- Contacto: ${formData.contactName}\n- Teléfono: ${formData.phone}\n- Email del Solicitante: ${formData.email}\n- Provincia: ${formData.province}\n- Detalles del Problema: ${formData.details}`);

    try {
      await fetch("https://formsubmit.co/ajax/kaelpinedaa04@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `🛡️ Nueva Solicitud CiberVigía Pyme: ${formData.businessName}`,
          Pyme: formData.businessName,
          Contacto: formData.contactName,
          Telefono: formData.phone,
          Email: formData.email,
          Provincia: formData.province,
          Detalles: formData.details
        })
      });
    } catch (err) {
      window.location.href = `mailto:kaelpinedaa04@gmail.com?subject=${subject}&body=${bodyText}`;
    } finally {
      setSendingEmail(false);
      setSubmitted(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleOpenWhatsApp = () => {
    const targetPhone = "50762988190";
    const textMessage = `*SOLICITUD DE ASISTENCIA - CIBERVIGÍA PYME*%0A%0A*Negocio:* ${encodeURIComponent(formData.businessName || 'No especificado')}%0A*Contacto:* ${encodeURIComponent(formData.contactName || 'No especificado')}%0A*Teléfono:* ${encodeURIComponent(formData.phone || 'No especificado')}%0A*Provincia:* ${encodeURIComponent(formData.province || 'Panamá')}%0A*Detalles:* ${encodeURIComponent(formData.details || 'Requiero asistencia técnica')}`;
    
    window.open(`https://wa.me/${targetPhone}?text=${textMessage}`, '_blank');
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <section style={{ padding: '36px 0' }} className="animate-fade-in">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Banner */}
        <div className="glass-card" style={{
          padding: '36px',
          marginBottom: '32px',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(9, 13, 22, 0.95) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '10px', borderRadius: '12px' }}>
              <Users size={28} color="var(--accent-purple)" />
            </div>
            <div>
              <span className="badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: 'var(--accent-purple)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                Red CiberVigía de Orientación Gratuita
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: '800' }}>
                Asistencia Técnica Remota con Voluntarios ITSE
              </h3>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Si tu negocio está en <strong>Semáforo Rojo 🔴</strong> o tienes dudas sobre cómo implementar la Hoja de Ruta, nuestra red de estudiantes de Ciberseguridad del ITSE te brinda acompañamiento sin costo por Correo o WhatsApp.
          </p>
        </div>

        {submitted ? (
          <div className="glass-card" style={{ padding: '40px', textAlign: 'center', border: '1px solid var(--risk-safe-border)' }}>
            <div style={{ background: 'var(--risk-safe-bg)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle2 size={36} color="var(--risk-safe)" />
            </div>
            <h4 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>
              ¡Solicitud Procesada Exitosamente!
            </h4>
            <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 24px', fontSize: '0.95rem' }}>
              Tu consulta de <strong>{formData.businessName || 'tu Pyme'}</strong> ({formData.province}) ha sido recibida. Un voluntario se pondrá en contacto contigo a la brevedad.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-secondary">
              Enviar Otra Consulta
            </button>
          </div>
        ) : (
          <div className="glass-card" style={{ padding: '36px' }}>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: '700', marginBottom: '20px' }}>
              Formulario de Solicitud de Ayuda Gratuita
            </h4>

            <form onSubmit={handleSubmitEmail} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Nombre de la Pyme / Negocio</label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Ej: Minisúper La Estrella"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Nombre del Dueño o Encargado</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="Ej: María Rodríguez"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Teléfono o WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ej: +507 6298-8190"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Correo Electrónico (Opcional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ej: contacto@pyme.com"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Provincia / Región</label>
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: '#111927',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option value="Panamá">Panamá (Ciudad)</option>
                  <option value="Chiriquí">Chiriquí</option>
                  <option value="Panamá Oeste">Panamá Oeste</option>
                  <option value="Veraguas">Veraguas</option>
                  <option value="Colón">Colón</option>
                  <option value="Internacional">Otro país de LATAM</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Detalles de la Situación o Sospecha de Ataque
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe brevemente qué comportamiento raro has notado o en qué paso de la Hoja de Ruta necesitas ayuda..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '14px', justifyContent: 'flex-end', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '18px' }}>
                <button type="button" onClick={handleOpenWhatsApp} className="btn-whatsapp" style={{ padding: '12px 24px' }}>
                  <MessageSquare size={18} />
                  <span>Enviar a mi WhatsApp (+507 6298-8190)</span>
                </button>

                <button type="submit" disabled={sendingEmail} className="btn-primary" style={{ padding: '12px 28px', opacity: sendingEmail ? 0.6 : 1 }}>
                  <Mail size={18} />
                  <span>{sendingEmail ? 'Enviando Correo...' : 'Enviar a kaelpinedaa04@gmail.com'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
