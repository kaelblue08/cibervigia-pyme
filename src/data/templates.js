export const recommendedTools = [
  {
    name: 'Bitwarden',
    category: 'Gestor de Contraseñas',
    type: 'Gratuito & Código Abierto',
    description: 'Guarda todas las contraseñas del negocio de forma segura y genera claves complejas imposibles de adivinar.',
    url: 'https://bitwarden.com',
    recommendedFor: 'Evitar el uso de claves repetidas en papelitos o blocs de notas.'
  },
  {
    name: 'Avast Business / ClamAV',
    category: 'Antivirus Empresarial',
    type: 'Versión Gratuita Disponible',
    description: 'Protege las computadoras contra virus, programas espía y secuestradores de información.',
    url: 'https://www.avast.com/business',
    recommendedFor: 'Detección proactiva de archivos dañinos y descargas riesgosas.'
  },
  {
    name: 'Duplicati / Google Drive Cifrado',
    category: 'Respaldos Automáticos',
    type: 'Gratuito',
    description: 'Crea copias de seguridad de tus facturas y archivos importantes de forma periódica.',
    url: 'https://www.duplicati.com',
    recommendedFor: 'Proteger la pyme contra Ransomware y pérdidas por fallas de disco.'
  },
  {
    name: 'Google Authenticator / Microsoft Authenticator',
    category: 'Doble Factor (2FA)',
    type: 'Gratuito en Móvil',
    description: 'Agrega un segundo paso de verificación mediante códigos temporales en tu teléfono celular.',
    url: 'https://support.google.com/accounts/answer/1066447',
    recommendedFor: 'Bloquear accesos no autorizados a tus correos y redes sociales.'
  }
];

export const securityTemplates = [
  {
    id: 'policy-passwords',
    title: 'Política Simplificada de Contraseñas para Pymes',
    badge: 'Uso Interno',
    description: 'Reglas mínimas y sencillas que todo empleado de tu negocio debe cumplir para proteger los accesos.',
    content: `POLÍTICA DE SEGURIDAD DE CONTRASEÑAS - [NOMBRE DE LA PYME]

1. LONGITUD MÍNIMA: Toda contraseña del negocio debe tener al menos 12 caracteres (usar frases cortas memorables, ej: "Café*Panama#2026").
2. PROHIBICIÓN DE REUTILIZACIÓN: No se debe usar la misma clave del correo institucional para redes sociales o cuentas personales.
3. DOBLE FACTOR (2FA): Es obligatorio activar el segundo factor de autenticación en la banca en línea, correo de la empresa y redes sociales.
4. CONFIDENCIALIDAD: Queda estrictamente prohibido anotar claves en papeles al lado del monitor, en notas del celular no protegidas o compartirlas con terceros.
5. GESTOR DE CONTRASEÑAS: Se recomienda usar Bitwarden o un gestor autorizado para almacenar de forma cifrada los accesos.

Aprobado por la Gerencia de la Pyme.`
  },
  {
    id: 'monthly-checklist',
    title: 'Checklist de Seguridad Digital Mensual',
    badge: 'Lista de Verificación',
    description: 'Control visual rápido para ejecutar el primer lunes de cada mes en tu negocio.',
    content: `CHECKLIST MENSUAL DE SEGURIDAD DIGITAL - [NOMBRE DE LA PYME]

[ ] 1. ACTUALIZACIONES: Verificar que Windows, antivirus y navegadores tengan las actualizaciones del mes instaladas.
[ ] 2. RESPALDOS: Probar la restauración de al menos 1 archivo del respaldo en la nube o disco externo.
[ ] 3. ACCESOS: Dar de baja de inmediato las cuentas y accesos de colaboradores que ya no trabajan en la empresa.
[ ] 4. BANCA EN LÍNEA: Revisar los extractos bancarios en busca de cargos desconocidos o pequeños cobros sospechosos.
[ ] 5. RED WI-FI: Reiniciar el módem principal y comprobar que no existan dispositivos desconocidos conectados.
[ ] 6. CIBERVIGÍA: Realizar el Chequeo Rápido en CiberVigía Pyme para medir el Semáforo de Riesgo.`
  },
  {
    id: 'incident-protocol',
    title: 'Protocolo Rápido de Respuesta ante Sospecha de Ataque',
    badge: 'Emergencia',
    description: 'Pasos urgentes a seguir si sospechas que han hackeado tu computadora o vaciado datos.',
    content: `PROTOCOLO DE EMERGENCIA ANTE ATAQUE DIGITAL

¡ACTÚA RÁPIDAMENTE SIN ENTRAR EN PÁNICO!

PASO 1: DESCONECTAR DE INTERNET
Desconecta de inmediato el cable de red de la computadora afectada o apaga el Wi-Fi. NO apagues el equipo violentamente; solo aísla su conexión a red para evitar que la infección se propague a los demás equipos.

PASO 2: CAMBIAR CLAVES DESDE OTRO DISPOSITIVO SEGURO
Desde tu teléfono celular personal (con datos móviles, no con la red Wi-Fi afectada), cambia de inmediato las contraseñas de:
  - Correo electrónico principal del negocio.
  - Banca en línea empresarial.
  - Cuentas de redes sociales y WhatsApp Business.

PASO 3: NOTIFICAR AL BANCO
Si hay sospecha de compromiso financiero, llama de inmediato a las líneas de atención a fraude de tus bancos para bloquear temporalmente las bancas en línea y tarjetas.

PASO 4: RECOLECTAR EVIDENCIA
Toma fotos con el celular a la pantalla si aparece un mensaje de rescate (Ransomware), correos raros o avisos extraños. No borres nada aún.

PASO 5: SOLICITAR AYUDA A CIBERVIGÍA
Contacta a la Red de Voluntarios Técnicos de CiberVigía Pyme para recibir orientación técnica inicial gratuita.`
  }
];
