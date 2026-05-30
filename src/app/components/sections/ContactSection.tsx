import React, { useState } from 'react';
import { toast } from 'sonner';
import { contactInfo } from '../../data/contact';
import emailjs from '@emailjs/browser'; // 🚀 Corrección 1: Importación directa limpia

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) nextErrors.name = 'Name is required.';
    else if (name.length < 2) nextErrors.name = 'Name must be at least 2 characters.';

    if (!email) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email.';

    if (!message) nextErrors.message = 'Message is required.';
    else if (message.length < 10) nextErrors.message = 'Message must be at least 10 characters.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;
    if (!validate()) return;

    setIsSending(true);

    try {
      // 🚀 Enviamos el formulario directamente usando tus credenciales de EmailJS
      await emailjs.sendForm(
        'service_k2tjry1',     // Tu Service ID real
        'TU_TEMPLATE_ID_AQUÍ', // <-- ⚠️ Recuerda poner aquí tu Template ID real (ej. template_contact_us)
        e.currentTarget,       // Captura automáticamente los inputs del formulario
        'M6duzg08bqU1s2QLM'     // Tu Public Key real
      );

      toast.success('Enviado ✅', {
        duration: 3500,
        position: 'bottom-center',
        className:
          'rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 shadow-lg'
      });

      // Limpiamos los campos del formulario tras el éxito
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error('No se pudo enviar. Intenta de nuevo.', {
        duration: 4000,
        position: 'bottom-center',
        className: 'rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 shadow-lg'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-6 md:py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-12 rounded-2xl md:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #FFD93D 0%, #FFFFFF 100%)' }}
        >
          {/* Lado izquierdo - Información de Contacto */}
          <div className="md:col-span-5 p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Let's work together</h2>
            <p className="text-gray-800 mb-5 text-sm">Have a project in mind? Let's create something amazing together.</p>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  <div className="text-xs text-gray-700 mb-1">{info.label}</div>
                  {info.type === 'email' ? (
                    <a
                      href={`mailto:${info.value}`}
                      className="text-gray-900 font-medium hover:underline text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-gray-900 font-medium text-sm">{info.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Lado derecho - Formulario de Contacto */}
          <div className="md:col-span-7 bg-white p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  className={
                    'w-full bg-gray-50 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-all ' +
                    (errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-200 focus:ring-[#FFD93D]')
                  }
                  placeholder="Your name"
                />
                {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  className={
                    'w-full bg-gray-50 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-all ' +
                    (errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-200 focus:ring-[#FFD93D]')
                  }
                  placeholder="your.email@example.com"
                />
                {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message" // 🚀 Corrección 2: Añadido atributo name para que EmailJS capture el mensaje
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  aria-invalid={!!errors.message}
                  className={
                    'w-full bg-gray-50 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-all resize-none ' +
                    (errors.message ? 'border-red-500 focus:ring-red-300' : 'border-gray-200 focus:ring-[#FFD93D]')
                  }
                  placeholder="Tell me about your project"
                />
                {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={
                  'w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm ' +
                  (isSending ? 'opacity-70 cursor-not-allowed' : '')
                }
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}