// src/services/emailService.js

export async function enviarCorreo(destinatario, asunto, mensaje) {
  try {
    // Ejemplo con fetch a una API de backend que envía correos
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: destinatario, subject: asunto, body: mensaje })
    });

    if (!res.ok) throw new Error('Fallo al enviar el correo');
    return await res.json();
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return null;
  }
}
