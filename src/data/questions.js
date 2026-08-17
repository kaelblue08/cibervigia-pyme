export const categories = {
  devices: { name: 'Comportamiento de Dispositivos', icon: 'Monitor' },
  emails: { name: 'Correos y Mensajes Sospechosos', icon: 'Mail' },
  banking: { name: 'Banca y Transacciones Financieras', icon: 'DollarSign' },
  wifi: { name: 'Red Wi-Fi y Conexiones', icon: 'Wifi' },
  passwords: { name: 'Contraseñas y Accesos (2FA)', icon: 'Key' },
  backups: { name: 'Respaldos y Actualizaciones', icon: 'Database' }
};

export const questionsData = [
  {
    id: 1,
    category: 'devices',
    title: '1. ¿Tu computadora o celular se volvió muy lento de repente, o se abren ventanas/programas solos?',
    description: 'Comportamientos anómalos repentinos son indicios frecuentes de malware, programas espía (spyware) o minería no autorizada de criptomonedas usando tus recursos.',
    options: [
      { text: 'No, los equipos funcionan normalmente y a buena velocidad.', points: 0, level: 'safe' },
      { text: 'A veces se lentifican o aparecen ventanas flotantes ocasionales.', points: 10, level: 'warning' },
      { text: 'Sí, las computadoras están sumamente lentas y se abren programas solos constantemente.', points: 20, level: 'danger' }
    ],
    frameworkAlign: 'CIS Control 10 / NIST DE.CM (Monitoreo Continuo)'
  },
  {
    id: 2,
    category: 'emails',
    title: '2. ¿Tú o tus empleados han recibido correos sospechosos o mensajes de WhatsApp pidiendo datos o claves?',
    description: 'El Phishing es la causa #1 de ciberataques a pymes en América Latina. Los atacantes se hacen pasar por bancos, proveedores o la autoridad tributaria.',
    options: [
      { text: 'No recibimos o sabemos identificar y borrar el correo basura de inmediato.', points: 0, level: 'safe' },
      { text: 'Recibimos correos raros con frecuencia y sospechamos que alguien podría hacer clic por error.', points: 10, level: 'warning' },
      { text: 'Sí, e incluso algún empleado ha descargado archivos adjuntos raros o dado clic a enlaces sospechosos recientemente.', points: 20, level: 'danger' }
    ],
    frameworkAlign: 'CIS Control 14 / NIST PR.AT (Concientización y Capacitación)'
  },
  {
    id: 3,
    category: 'banking',
    title: '3. ¿Has notado transferencias bancarias no reconocidas o cambios raros en las cuentas de tus proveedores?',
    description: 'El fraude del "proveedor comprometido" intercepta facturas electrónicas o correos para cambiar el número de cuenta bancaria del pago.',
    options: [
      { text: 'No, siempre verificamos los datos bancarios por llamada directa antes de pagar.', points: 0, level: 'safe' },
      { text: 'No verificamos por teléfono, pero revisamos los comprobantes detenidamente.', points: 8, level: 'warning' },
      { text: 'Sí, hemos detectado cobros/pagos extraños o cambios de cuenta de proveedores por simple correo sin verificar.', points: 18, level: 'danger' }
    ],
    frameworkAlign: 'CIS Control 6 / NIST PR.AC (Control de Accesos y Verificación)'
  },
  {
    id: 4,
    category: 'wifi',
    title: '4. ¿Qué tipo de clave usa el Wi-Fi de tu negocio y quién se conecta a él?',
    description: 'Una red Wi-Fi sin seguridad o con clave genérica permite a cualquier persona cercana interceptar tu facturación, ventas o correos.',
    options: [
      { text: 'Usamos contraseña fuerte, cambiada recientemente y red separada (Guest) para los clientes.', points: 0, level: 'safe' },
      { text: 'Usamos la misma clave del módem del proveedor para clientes y computadoras del trabajo.', points: 10, level: 'warning' },
      { text: 'La red Wi-Fi es abierta sin contraseña o usamos la misma clave sencilla desde hace años.', points: 18, level: 'danger' }
    ],
    frameworkAlign: 'CIS Control 12 / NIST PR.AC (Seguridad de Redes)'
  },
  {
    id: 5,
    category: 'passwords',
    title: '5. ¿Cómo gestionan las contraseñas del negocio y usan verificación en dos pasos (2FA)?',
    description: 'Reutilizar contraseñas familiares o no activar la verificación en dos pasos facilita que un atacante ingrese a tu correo o banca en línea.',
    options: [
      { text: 'Usamos contraseñas únicas y largas en cada cuenta + Verificación en dos pasos (2FA / Código al celular).', points: 0, level: 'safe' },
      { text: 'Usamos la misma clave en varias cuentas o la tenemos anotada en papeles al lado del teclado.', points: 10, level: 'warning' },
      { text: 'Compartimos claves entre todos, usamos la misma contraseña corta en todo y NO usamos 2FA.', points: 18, level: 'danger' }
    ],
    frameworkAlign: 'CIS Control 5 / NIST PR.AC (Gestión de Credenciales)'
  },
  {
    id: 6,
    category: 'backups',
    title: '6. ¿Con qué frecuencia hacen respaldo (copia de seguridad) de su información importante y dónde lo guardan?',
    description: 'Ante un ataque de Ransomware (secuestro de archivos), la única forma de evitar la quiebra o pago de rescate es tener respaldos actualizados y fuera de la red.',
    options: [
      { text: 'Hacemos respaldos automáticos semanales/diarios y guardamos copias desconectadas o en la nube cifrada.', points: 0, level: 'safe' },
      { text: 'Hacemos respaldo de vez en cuando en un USB que se mantiene conectado a la computadora.', points: 8, level: 'warning' },
      { text: 'No hacemos copia de seguridad de nuestros archivos, facturas o base de datos de clientes.', points: 16, level: 'danger' }
    ],
    frameworkAlign: 'CIS Control 11 / NIST PR.IP (Recuperación de Datos)'
  }
];
