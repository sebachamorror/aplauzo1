// Aplauzo — datos de secciones: Talleres, Trabajo, Fondos, Políticas, Legal, Directorio
// Fondos y políticas: información real y verificable. Perfiles de Trabajo y Legal: ficticios.

// ---------- TALLERES (institución real · tallerista ficticio) ----------
window.APLAUZO.talleres = {
  "Chile": [
    { demo: true, id: "tl-cl-1", title: "El cuerpo poético: entrenamiento actoral", discipline: "Actuación",
      teacher: "Valentina Errázuriz", institution: "GAM · Centro Gabriela Mistral", city: "Santiago",
      modality: "Presencial", level: "Intermedio", schedule: "Mar y jue · 18:30–21:00", start: "Desde 1 jul 2026",
      duration: "8 semanas", price: "$120.000", url: "https://gam.cl",
      summary: "Un laboratorio sobre presencia, voz y la poética del cuerpo en escena." },
    { demo: true, id: "tl-cl-2", title: "Clown y comedia física", discipline: "Clown",
      teacher: "Joaquín Mella", institution: "Matucana 100", city: "Santiago",
      modality: "Presencial", level: "Todos los niveles", schedule: "Sábados · 11:00–14:00", start: "Desde 5 jul 2026",
      duration: "6 sesiones", price: "$85.000", url: "https://www.m100.cl",
      summary: "La nariz roja como máscara más pequeña del mundo: el fracaso vuelto juego." },
    { demo: true, id: "tl-cl-3", title: "Improvisación en danza contemporánea", discipline: "Danza",
      teacher: "Antonia Reyes", institution: "NAVE · Centro de Creación", city: "Santiago",
      modality: "Presencial", level: "Avanzado", schedule: "Lun y mié · 10:00–12:30", start: "Desde 30 jun 2026",
      duration: "5 semanas", price: "$140.000", url: "#",
      summary: "Composición instantánea: escuchar el peso, el otro y el espacio." }
  ],
  "Argentina": [
    { demo: true, id: "tl-ar-1", title: "Actuación: la verdad escénica", discipline: "Actuación",
      teacher: "Mariano Bértola", institution: "Andamio 90", city: "Buenos Aires",
      modality: "Presencial", level: "Intermedio", schedule: "Lunes · 19:00–22:00", start: "Desde 6 jul 2026",
      duration: "Cuatrimestral", price: "$38.000/mes", url: "#",
      summary: "El método y su contrario: construir la organicidad sin perder el oficio." },
    { demo: true, id: "tl-ar-2", title: "Entrenamiento corporal del actor", discipline: "Teatro físico",
      teacher: "Lucía Pereyra", institution: "Sportivo Teatral", city: "Buenos Aires",
      modality: "Presencial", level: "Todos los niveles", schedule: "Miércoles · 18:00–21:00", start: "Desde 8 jul 2026",
      duration: "Anual", price: "$42.000/mes", url: "#",
      summary: "El cuerpo que piensa: disponibilidad, riesgo y juego en el espacio." },
    { demo: true, id: "tl-ar-3", title: "Dramaturgia del presente", discipline: "Dramaturgia",
      teacher: "Sofía Anzorena", institution: "El Cultural San Martín", city: "Buenos Aires",
      modality: "Online", level: "Intermedio", schedule: "Jueves · 19:00–21:00", start: "Desde 9 jul 2026",
      duration: "10 encuentros", price: "$30.000", url: "#",
      summary: "Escribir desde lo que arde hoy: materiales reales, ficción urgente." }
  ],
  "Spain": [
    { demo: true, id: "tl-es-1", title: "Interpretación ante el texto", discipline: "Actuación",
      teacher: "Marta Olalla", institution: "Cuarta Pared", city: "Madrid",
      modality: "Presencial", level: "Intermedio", schedule: "Mar y jue · 18:00–21:00", start: "Desde 1 jul 2026",
      duration: "Trimestral", price: "320 €", url: "#",
      summary: "Del análisis de mesa a la escena: la palabra hecha acción." },
    { demo: true, id: "tl-es-2", title: "Teatro gestual y máscara", discipline: "Teatro físico",
      teacher: "Iñaki Sasiain", institution: "Réplika Teatro", city: "Madrid",
      modality: "Presencial", level: "Todos los niveles", schedule: "Lunes · 17:00–20:00", start: "Desde 7 jul 2026",
      duration: "8 sesiones", price: "240 €", url: "#",
      summary: "La máscara neutra y el movimiento esencial, en la tradición de Lecoq." },
    { demo: true, id: "tl-es-3", title: "Composición en danza contemporánea", discipline: "Danza",
      teacher: "Clara Benavent", institution: "Centro Coreográfico Canal", city: "Madrid",
      modality: "Presencial", level: "Avanzado", schedule: "Vie · 10:00–13:00", start: "Desde 3 jul 2026",
      duration: "6 semanas", price: "280 €", url: "#",
      summary: "Herramientas coreográficas para construir una pieza propia." }
  ]
};

// ---------- BOLSA DE TRABAJO (perfiles ficticios) ----------
window.APLAUZO.jobs = {
  "Chile": [
    { demo: true, id: "jb-cl-1", name: "Rosario Tagle", role: "Diseñadora de iluminación", discipline: "Técnica", city: "Santiago", years: 12, available: "Disponible jul–sep", rate: "$45.000/función", instagram: "@rosario.luz", skills: ["Iluminación", "Operación", "Diseño"], bio: "Diseñadora lumínica con paso por GAM y festivales regionales." },
    { demo: true, id: "jb-cl-2", name: "Ignacio Fuenzalida", role: "Sonidista y diseñador sonoro", discipline: "Técnica", city: "Valparaíso", years: 9, available: "Disponible", rate: "$40.000/función", instagram: "@nacho.sonido", skills: ["Sonido", "Diseño sonoro", "Mezcla en vivo"], bio: "Diseño sonoro para teatro y danza; especialista en espacios no convencionales." },
    { demo: true, id: "jb-cl-3", name: "Catalina Soto", role: "Profesora de danza contemporánea", discipline: "Pedagogía", city: "Santiago", years: 15, available: "Cupos abiertos", rate: "A convenir", instagram: "@cata.danza", skills: ["Danza", "Improvisación", "Pedagogía"], bio: "Formadora e intérprete; dicta talleres para principiantes y profesionales." },
    { demo: true, id: "jb-cl-4", name: "Tomás Ávila", role: "Maestro de circo y acrobacia", discipline: "Circo", city: "Santiago", years: 11, available: "Disponible ago", rate: "$38.000/clase", instagram: "@tomas.circo", skills: ["Acrobacia", "Telas", "Mano a mano"], bio: "Acróbata y docente; trabaja con compañías de circo contemporáneo." },
    { demo: true, id: "jb-cl-5", name: "Fernanda Lillo", role: "Diseñadora de vestuario", discipline: "Diseño", city: "Concepción", years: 8, available: "Disponible", rate: "Por proyecto", instagram: "@fer.vestuario", skills: ["Vestuario", "Sastrería", "Caracterización"], bio: "Vestuarista de teatro y ópera; realización propia de taller." },
    { demo: true, id: "jb-cl-6", name: "Diego Paredes", role: "Director técnico", discipline: "Técnica", city: "Santiago", years: 17, available: "Consultar", rate: "A convenir", instagram: "@diego.dirtec", skills: ["Dirección técnica", "Montaje", "Giras"], bio: "Coordina montajes y giras nacionales e internacionales." }
  ],
  "Argentina": [
    { demo: true, id: "jb-ar-1", name: "Malena Quiroga", role: "Iluminadora", discipline: "Técnica", city: "Buenos Aires", years: 10, available: "Disponible", rate: "Por función", instagram: "@malena.luz", skills: ["Iluminación", "Diseño", "Programación"], bio: "Diseña luces para el circuito independiente porteño." },
    { demo: true, id: "jb-ar-2", name: "Bruno Saavedra", role: "Escenógrafo", discipline: "Diseño", city: "Buenos Aires", years: 13, available: "Disponible ago", rate: "Por proyecto", instagram: "@bruno.escena", skills: ["Escenografía", "Construcción", "Maqueta"], bio: "Escenógrafo y realizador; trabaja con materiales reciclados." },
    { demo: true, id: "jb-ar-3", name: "Camila Vento", role: "Profesora de danza-teatro", discipline: "Pedagogía", city: "Córdoba", years: 14, available: "Cupos abiertos", rate: "A convenir", instagram: "@cami.vento", skills: ["Danza-teatro", "Composición", "Pedagogía"], bio: "Formadora en danza-teatro; dirige un espacio independiente en Córdoba." },
    { demo: true, id: "jb-ar-4", name: "Hernán Bidart", role: "Maestro de clown y circo", discipline: "Circo", city: "Buenos Aires", years: 16, available: "Disponible", rate: "Por taller", instagram: "@hernan.clown", skills: ["Clown", "Malabares", "Acrobacia"], bio: "Payaso y docente; gira con espectáculos de circo-teatro." },
    { demo: true, id: "jb-ar-5", name: "Florencia Aguirre", role: "Vestuarista y maquilladora", discipline: "Diseño", city: "Rosario", years: 7, available: "Disponible", rate: "Por proyecto", instagram: "@flor.atelier", skills: ["Vestuario", "Maquillaje", "Caracterización"], bio: "Diseño integral de vestuario y caracterización para escena." },
    { demo: true, id: "jb-ar-6", name: "Julián Ortega", role: "Regidor y productor técnico", discipline: "Técnica", city: "Buenos Aires", years: 12, available: "Consultar", rate: "A convenir", instagram: "@juli.regie", skills: ["Regiduría", "Producción", "Logística"], bio: "Regidor de sala y productor técnico de giras." }
  ],
  "Spain": [
    { demo: true, id: "jb-es-1", name: "Nuria Sampedro", role: "Diseñadora de iluminación", discipline: "Técnica", city: "Madrid", years: 14, available: "Disponible", rate: "Por función", instagram: "@nuria.lighting", skills: ["Iluminación", "Diseño", "ETC Eos"], bio: "Diseñadora lumínica para teatro de texto y danza." },
    { demo: true, id: "jb-es-2", name: "Adrià Coll", role: "Técnico de sonido", discipline: "Técnica", city: "Barcelona", years: 10, available: "Disponible jul", rate: "Por función", instagram: "@adria.so", skills: ["Sonido", "Microfonía", "QLab"], bio: "Operador y diseñador de sonido; especialista en QLab." },
    { demo: true, id: "jb-es-3", name: "Pilar Anchía", role: "Profesora de danza clásica", discipline: "Pedagogía", city: "Madrid", years: 20, available: "Cupos abiertos", rate: "A convenir", instagram: "@pilar.ballet", skills: ["Danza clásica", "Repertorio", "Pedagogía"], bio: "Maestra de ballet; ex intérprete de compañía nacional." },
    { demo: true, id: "jb-es-4", name: "Gorka Etxeberria", role: "Maestro de circo", discipline: "Circo", city: "Madrid", years: 12, available: "Disponible", rate: "Por taller", instagram: "@gorka.circ", skills: ["Trapecio", "Mástil", "Porteos"], bio: "Artista aéreo y docente de circo contemporáneo." },
    { demo: true, id: "jb-es-5", name: "Lucía Verdú", role: "Diseñadora de vestuario", discipline: "Diseño", city: "Sevilla", years: 9, available: "Disponible", rate: "Por proyecto", instagram: "@lucia.vestuari", skills: ["Vestuario", "Sastrería", "Época"], bio: "Vestuarista para teatro clásico y flamenco contemporáneo." },
    { demo: true, id: "jb-es-6", name: "Martí Ferrer", role: "Director técnico", discipline: "Técnica", city: "Barcelona", years: 18, available: "Consultar", rate: "A convenir", instagram: "@marti.dirtec", skills: ["Dirección técnica", "Giras", "Producción"], bio: "Dirección técnica de festivales y giras internacionales." }
  ]
};

// ---------- CENTRAL DE FONDOS (reales) ----------
window.APLAUZO.funds = {
  "Chile": [
    { id: "fd-cl-1", name: "Fondo Nacional de Fomento y Desarrollo de las Artes Escénicas", org: "Ministerio de las Culturas, las Artes y el Patrimonio", scope: "Nacional", deadline: "Convocatoria anual", url: "https://www.fondosdecultura.cl/fondos/fondo-aaee/",
      summary: "Creado por la Ley N.º 21.175, financia teatro, danza, ópera, circo, títeres y narración oral.",
      lines: ["Creación escénica", "Producción de montajes", "Circulación nacional", "Festivales", "Becas Chile Crea"] },
    { id: "fd-cl-2", name: "FONDART Nacional", org: "Ministerio de las Culturas, las Artes y el Patrimonio", scope: "Nacional", deadline: "Convocatoria anual", url: "https://www.fondosdecultura.cl",
      summary: "Fondo Nacional de Desarrollo Cultural y las Artes (Ley 19.891), histórico motor del financiamiento cultural chileno.",
      lines: ["Creación", "Difusión", "Formación", "Circulación internacional"] },
    { id: "fd-cl-3", name: "Becas Chile Crea", org: "Fondos de Cultura", scope: "Nacional", deadline: "Convocatoria anual", url: "https://www.fondosdecultura.cl/fondos/becas-chile-crea/",
      summary: "Apoya la formación de artistas: postgrados, pasantías, talleres y perfeccionamiento en Chile y el extranjero.",
      lines: ["Magíster y doctorado", "Pasantías", "Perfeccionamiento"] }
  ],
  "Argentina": [
    { id: "fd-ar-1", name: "Instituto Nacional del Teatro (INT)", org: "Secretaría de Cultura de la Nación", scope: "Nacional", deadline: "Líneas con adjudicación mensual", url: "https://inteatro.ar",
      summary: "Creado por la Ley N.º 24.800, otorga subsidios y becas a grupos, salas, artistas y proyectos en todo el país.",
      lines: ["Producción de obra", "Salas y espacios", "Giras", "Formación"] },
    { id: "fd-ar-2", name: "Fondo Nacional de las Artes (FNA)", org: "Ministerio de Cultura de la Nación", scope: "Nacional", deadline: "Convocatorias abiertas", url: "https://fnartes.gob.ar",
      summary: "Becas, subsidios, préstamos y concursos para artistas y organizaciones; más de 100.000 artistas registrados.",
      lines: ["Becas", "Subsidios a montajes", "Préstamos", "Concursos"] },
    { id: "fd-ar-3", name: "Proteatro", org: "Gobierno de la Ciudad de Buenos Aires", scope: "Ciudad de Buenos Aires", deadline: "Dos llamados al año", url: "https://buenosaires.gob.ar/subsidios-proteatro",
      summary: "Fomenta el teatro no oficial porteño con apoyos a salas, grupos y proyectos especiales.",
      lines: ["Salas teatrales", "Grupos", "Proyectos especiales"] }
  ],
  "Spain": [
    { id: "fd-es-1", name: "Ayudas al Teatro y al Circo (INAEM)", org: "Instituto Nacional de las Artes Escénicas y de la Música", scope: "Estatal", deadline: "Convocatoria anual", url: "https://www.cultura.gob.es/cultura/artesescenicas/sc/ayudas-subvenciones/teatro-circo.html",
      summary: "Concurrencia competitiva para giras, residencias, proyectos estables, festivales y congresos de teatro y circo.",
      lines: ["Giras nacionales e internacionales", "Residencias", "Proyectos estables", "Festivales"] },
    { id: "fd-es-2", name: "Ayudas a la Danza y la Creación Interdisciplinar (INAEM)", org: "Instituto Nacional de las Artes Escénicas y de la Música", scope: "Estatal", deadline: "Convocatoria anual", url: "https://www.cultura.gob.es/servicios-a-la-ciudadania/catalogo/becas-ayudas-y-subvenciones/ayudas-y-subvenciones/artesescenicas.html",
      summary: "Apoya giras, coproducciones interautonómicas, residencias y programaciones coreográficas estables.",
      lines: ["Giras de danza", "Coproducciones", "Residencias", "Programación estable"] },
    { id: "fd-es-3", name: "Ayudas a Teatro y Danza · Comunidad de Madrid", org: "Comunidad de Madrid", scope: "Autonómico", deadline: "Convocatoria anual", url: "https://sede.comunidad.madrid",
      summary: "Subvenciones autonómicas a la producción y exhibición de proyectos de teatro y danza con sede en Madrid.",
      lines: ["Producción", "Exhibición", "Coproducción"] }
  ]
};

// ---------- POLÍTICAS CULTURALES (derechos · reales) ----------
window.APLAUZO.policies = {
  "Chile": [
    { id: "pl-cl-1", law: "Ley N.º 19.889", year: "2003", title: "Condiciones de trabajo de artistas y técnicos del espectáculo",
      summary: "Regula la contratación y las condiciones laborales de los trabajadores de las artes y el espectáculo, reconociendo la naturaleza intermitente de su empleo." },
    { id: "pl-cl-2", law: "Ley N.º 20.243", year: "2008", title: "Derechos de artistas intérpretes y ejecutantes",
      summary: "Reconoce a intérpretes y ejecutantes el derecho irrenunciable a una remuneración por el uso público de sus interpretaciones fijadas." },
    { id: "pl-cl-3", law: "Ley N.º 21.175", year: "2019", title: "Fomento de las Artes Escénicas",
      summary: "Reconoce el sector escénico, crea el Consejo Nacional de las Artes Escénicas y su Fondo de Fomento, e instituye el Premio a las Artes Escénicas Nacionales." }
  ],
  "Argentina": [
    { id: "pl-ar-1", law: "Ley N.º 27.203", year: "2015", title: "Ley del Actor y la Actriz",
      summary: "Regula la relación laboral y el régimen previsional de quienes ejercen la actividad histriónica, reconociendo sus particularidades." },
    { id: "pl-ar-2", law: "Ley N.º 24.800", year: "1997", title: "Ley Nacional del Teatro",
      summary: "Declara al teatro actividad de interés nacional y crea el Instituto Nacional del Teatro como órgano de fomento y protección del sector." },
    { id: "pl-ar-3", law: "Ley N.º 26.570", year: "2009", title: "Derecho de remuneración de intérpretes (SAGAI)",
      summary: "Incorpora el derecho de los actores y bailarines a una remuneración por la comunicación pública de sus interpretaciones, gestionado colectivamente." }
  ],
  "Spain": [
    { id: "pl-es-1", law: "Estatuto del Artista", year: "2018→", title: "Marco laboral y fiscal del trabajo artístico",
      summary: "Conjunto de medidas que reconocen las especificidades laborales, fiscales y de Seguridad Social del trabajo en las artes, fruto de años de reivindicación del sector." },
    { id: "pl-es-2", law: "Real Decreto-ley 5/2022", year: "2022", title: "Régimen de Seguridad Social de los artistas",
      summary: "Amplía el régimen de la Seguridad Social de artistas e incluye expresamente al personal técnico y auxiliar de las producciones escénicas, audiovisuales y musicales." },
    { id: "pl-es-3", law: "Texto Refundido de la Ley de Propiedad Intelectual", year: "vigente", title: "Derechos de los intérpretes",
      summary: "Reconoce a los artistas intérpretes y ejecutantes derechos de remuneración por el uso de sus actuaciones, gestionados de forma colectiva." }
  ]
};

// ---------- CENTRO LEGAL (abogadxs ficticios) ----------
window.APLAUZO.lawyers = [
  { demo: true, id: "lw-1", name: "Constanza Ruiz-Tagle", specialty: "Propiedad intelectual y derechos de autor", country: "Chile", city: "Santiago", langs: ["Español", "Inglés"], years: 14, bio: "Asesora a compañías y artistas en registro de obras, contratos de cesión y derechos de intérprete." },
  { demo: true, id: "lw-2", name: "Mauricio Pinto", specialty: "Contratos y derecho laboral del espectáculo", country: "Chile", city: "Valparaíso", langs: ["Español"], years: 11, bio: "Especialista en contratación de elencos, giras y condiciones laborales en artes escénicas." },
  { demo: true, id: "lw-3", name: "Agustina Roldán", specialty: "Derecho del artista y previsión social", country: "Argentina", city: "Buenos Aires", langs: ["Español", "Portugués"], years: 16, bio: "Trabaja sobre la Ley del Actor, monotributo cultural y derechos previsionales de intérpretes." },
  { demo: true, id: "lw-4", name: "Federico Lambertucci", specialty: "Propiedad intelectual y gestión colectiva", country: "Argentina", city: "Buenos Aires", langs: ["Español", "Inglés"], years: 13, bio: "Asesor en derechos de intérprete, SAGAI y contratos de coproducción internacional." },
  { demo: true, id: "lw-5", name: "Elena Vidal", specialty: "Estatuto del Artista y fiscalidad", country: "España", city: "Madrid", langs: ["Español", "Inglés", "Catalán"], years: 18, bio: "Acompaña a artistas y empresas en alta de artistas, IVA cultural y compatibilidad de prestaciones." },
  { demo: true, id: "lw-6", name: "Pau Miralles", specialty: "Visados de artista y movilidad internacional", country: "España", city: "Barcelona", langs: ["Español", "Inglés", "Francés"], years: 10, bio: "Especialista en visados de artista, giras internacionales y contratación de elencos extranjeros." }
];

// ---------- DIRECTORIO (equipo Aplauzo) ----------
window.APLAUZO.directory = [
  { id: "dir-1", name: "Seba Chamorro", role: "Director", email: "sebachamorro@aplauzo.art", country: "Chile",
    bio: "Impulsa la visión de Aplauzo como casa común de las artes escénicas iberoamericanas." },
  { id: "dir-2", name: "Noel Naint-Jean", role: "Codirectora", email: "noel.aj@aplauzo.art", country: "Iberoamérica",
    bio: "Coordina la red de espacios, compañías y comunidades que sostienen la plataforma." }
];
