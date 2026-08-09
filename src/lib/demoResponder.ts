export interface BusinessConfig {
  name: string;
  horario: string;
  ubicacion: string;
  servicios: string;
}

export function generateResponse(message: string, config: BusinessConfig): string {
  const m = message.toLowerCase();

  if (/agend|reserv|cita|hora para/.test(m)) {
    return `¡Perfecto! Para agendar necesito tu nombre y qué día/hora te acomoda, y te confirmo altiro ✅`;
  }
  if (/precio|costo|vale|cuesta|cuánto|cuanto/.test(m)) {
    return `Estos son nuestros valores:\n${config.servicios}`;
  }
  if (/donde|ubicaci|direcci|queda/.test(m)) {
    return `Estamos en ${config.ubicacion} 📍`;
  }
  if (/hora(rio)?|abiert|cierra|abre/.test(m)) {
    return `¡Hola! Nuestro horario es: ${config.horario} 😊`;
  }
  if (/servicio|que hacen|ofrecen|que venden/.test(m)) {
    return `Ofrecemos:\n${config.servicios}\n¿Te gustaría agendar o tienes otra consulta?`;
  }
  if (/^\s*(hola|buenas|hey|buenos)\W*$/.test(m)) {
    return `¡Hola! Bienvenido a ${config.name} 👋 ¿En qué te puedo ayudar? (horarios, precios, agendar hora)`;
  }
  return `Buena pregunta, dame un segundo que te confirmo 🙌\n\n(En el asistente real esta respuesta la genera IA entendiendo cualquier pregunta, no solo palabras clave como en esta vista previa)`;
}
