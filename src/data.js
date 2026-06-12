// Aplauzo — datos ficticios de la Cartelera Iberoamericana
// Nombres de compañías y obras inventados para la demo.
window.APLAUZO = {
  // mapeo nombre-mundo (world-atlas, inglés) -> español + slug
  IBERO: {
    "Spain": "España", "Portugal": "Portugal", "Mexico": "México",
    "Guatemala": "Guatemala", "Honduras": "Honduras", "El Salvador": "El Salvador",
    "Nicaragua": "Nicaragua", "Costa Rica": "Costa Rica", "Panama": "Panamá",
    "Cuba": "Cuba", "Dominican Rep.": "República Dominicana", "Colombia": "Colombia",
    "Venezuela": "Venezuela", "Ecuador": "Ecuador", "Peru": "Perú",
    "Bolivia": "Bolivia", "Chile": "Chile", "Argentina": "Argentina",
    "Uruguay": "Uruguay", "Paraguay": "Paraguay", "Brazil": "Brasil",
    "Puerto Rico": "Puerto Rico"
  },

  countries: {
    "Chile": {
      es: "Chile",
      tag: "Santiago · Cartelera real, junio 2026",
      intro: "La cartelera real de las salas santiaguinas este invierno: del GAM a Matucana 100 y los escenarios del Teatro Mori.",
      cities: ["GAM", "Matucana 100", "Teatro Mori"],
      works: [
        {
          id: "cl-glengarry",
          title: "Glengarry Glen Ross",
          company: "De David Mamet",
          companyUrl: "https://gam.cl/es/que-hacer-en-gam/teatro/glengarry-glen-ross/",
          instagram: "@centrogam",
          discipline: "Teatro",
          city: "Santiago", theater: "GAM",
          venue: "GAM · Centro Gabriela Mistral", sala: "",
          dates: "28 may – 7 jun 2026 · ju a sá 19:30, do 18:30",
          run: "28 may – 7 jun", duration: "", price: "Entradas: gam.ticketplus.cl",
          summary: "El clásico de David Mamet sobre vendedores acorralados por sus propias cifras.",
          description: "Cuatro agentes inmobiliarios compiten en una oficina donde el que no vende, desaparece. Mentira, traición y desesperación en uno de los grandes textos del teatro estadounidense contemporáneo, ganador del Premio Pulitzer.\n\nEn cartelera en el GAM, Centro Gabriela Mistral, en pleno corazón de la Alameda santiaguina."
        },
        {
          id: "cl-rock-hudson",
          title: "El beso de Rock Hudson",
          company: "",
          companyUrl: "https://gam.cl/es/que-hacer-en-gam/teatro/el-beso-de-rock-hudson/",
          instagram: "@centrogam",
          discipline: "Teatro",
          city: "Santiago", theater: "GAM",
          venue: "GAM · Centro Gabriela Mistral", sala: "",
          dates: "5 – 21 jun 2026 · vi y sá 20:00, do 19:30",
          run: "5 – 21 jun", duration: "", price: "Entradas: gam.ticketplus.cl",
          summary: "El deseo, el secreto y la imagen pública a partir del galán que ocultó quién era.",
          description: "Inspirada en la figura de Rock Hudson —el galán de Hollywood que mantuvo oculta su homosexualidad hasta el final de su vida—, la obra indaga en el costo de sostener una imagen pública y en lo que queda cuando la máscara cae.\n\nProgramación de teatro 2026 del GAM, Centro Gabriela Mistral."
        },
        {
          id: "cl-infinita",
          title: "INFINITA, paisajes de Gabriela",
          company: "",
          companyUrl: "https://gam.cl/es/que-hacer-en-gam/teatro/infinita-paisajes-de-gabriela/",
          instagram: "@centrogam",
          discipline: "Teatro familiar",
          city: "Santiago", theater: "GAM",
          venue: "GAM · Centro Gabriela Mistral", sala: "",
          dates: "20 jun – 5 jul 2026 · sá 16:00 y 18:30, do 16:00",
          run: "20 jun – 5 jul", duration: "", price: "Entradas: gam.ticketplus.cl",
          summary: "Un viaje escénico por la vida y la poesía de Gabriela Mistral.",
          description: "Un recorrido por la vida y los versos de Gabriela Mistral —primera Premio Nobel de Literatura de América Latina—, pensado para públicos de todas las edades.\n\nLa obra se presenta, no por casualidad, en el centro cultural que lleva el nombre de la propia poeta: el GAM, Gabriela Mistral."
        },
        {
          id: "cl-glitches",
          title: "Glitches",
          company: "",
          companyUrl: "https://www.m100.cl/programacion/teatro/glitches/",
          instagram: "@matucana100",
          discipline: "Teatro",
          city: "Santiago", theater: "Matucana 100",
          venue: "Matucana 100", sala: "Microsala",
          dates: "18 jun – 5 jul 2026",
          run: "18 jun – 5 jul", duration: "", price: "Entradas: m100.ticketplus.cl",
          summary: "Una memoria que se quiebra y se repite: el Alzheimer llevado a la escena.",
          description: "Obra interdisciplinaria que aborda el Alzheimer a partir de recuerdos fragmentados y repetitivos. Entre la imagen, el cuerpo y el sonido, propone una reflexión sobre la identidad y la realidad cuando la memoria empieza a fallar.\n\nSe presenta en la Microsala del Centro Cultural Matucana 100, Estación Central."
        },
        {
          id: "cl-mauro",
          title: "Mauro",
          company: "",
          companyUrl: "https://www.m100.cl/programacion/teatro/mauro/",
          instagram: "@matucana100",
          discipline: "Teatro",
          city: "Santiago", theater: "Matucana 100",
          venue: "Matucana 100", sala: "Teatro Principal",
          dates: "25 – 28 jun 2026",
          run: "25 – 28 jun", duration: "", price: "Entradas: m100.ticketplus.cl",
          summary: "Una comunidad golpeada que decide, contra todo, volver a organizarse.",
          description: "Tras el desplazamiento forzado y el daño ambiental, una comunidad se organiza para resistir. Su primera huelga fracasa, pero deciden volver a levantarse y hacer visible su lucha.\n\nEn el Teatro Principal del Centro Cultural Matucana 100."
        },
        {
          id: "cl-painecur",
          title: "Painecur",
          company: "",
          companyUrl: "https://www.m100.cl/programacion/teatro/painecur/",
          instagram: "@matucana100",
          discipline: "Teatro",
          city: "Santiago", theater: "Matucana 100",
          venue: "Matucana 100", sala: "Espacio Patricio Bunster",
          dates: "18 – 21 jun 2026",
          run: "18 – 21 jun", duration: "", price: "Entradas: m100.ticketplus.cl",
          summary: "Un hecho real de 1960 que obliga a mirar la memoria y el prejuicio de frente.",
          description: "En 1960, tras el devastador terremoto de Valdivia, una comunidad mapuche se vio envuelta en el sacrificio de un niño. Hoy, un grupo de estudiantes reconstruye aquel hecho y se enfrenta a sus propios prejuicios.\n\nUna obra sobre memoria, culpa y racismo, en el Espacio Patricio Bunster de Matucana 100."
        },
        {
          id: "cl-levitas",
          title: "Levitas",
          company: "",
          companyUrl: "https://www.m100.cl/programacion/teatro/levitas/",
          instagram: "@matucana100",
          discipline: "Teatro",
          city: "Santiago", theater: "Matucana 100",
          venue: "Matucana 100", sala: "Teatro Principal",
          dates: "11 – 14 jun 2026",
          run: "11 – 14 jun", duration: "", price: "Entradas: m100.ticketplus.cl",
          summary: "Voces de mujeres que cantan juntas y, por fin, se atreven a disonar.",
          description: "Un coro femenino de iglesia entra en crisis con la llegada de una nueva integrante y la ausencia de su director. Bajo los cantos asoman el silenciamiento, la discriminación y la invisibilización de las mujeres en un contexto pentecostal.\n\nEn el Teatro Principal del Centro Cultural Matucana 100."
        },
        {
          id: "cl-perfectos",
          title: "Perfectos Desconocidos",
          company: "Versión de la película de Paolo Genovese",
          companyUrl: "https://teatromori.com/obra/95okoEig/perfectos-desconocidos",
          instagram: "@teatromori",
          discipline: "Comedia",
          city: "Santiago", theater: "Teatro Mori",
          venue: "Teatro Mori", sala: "Mori Vitacura",
          dates: "8 may – 13 jun 2026 · ju a sá 20:00",
          run: "8 may – 13 jun", duration: "", price: "Entradas: ticketmaster.cl",
          summary: "Una cena, siete teléfonos sobre la mesa y ningún secreto a salvo.",
          description: "Siete amigos se reúnen a cenar y aceptan un juego: poner los teléfonos sobre la mesa y compartir en voz alta cada mensaje y llamada que llegue. Lo que empieza como una broma destapa secretos que harán tambalear sus relaciones.\n\nLa exitosa comedia de Paolo Genovese, en Teatro Mori Vitacura."
        },
        {
          id: "cl-puentes-madison",
          title: "Los Puentes de Madison",
          company: "Basada en la novela de Robert James Waller",
          companyUrl: "https://teatromori.com/obra/ouzDqYr5/los-puentes-de-madison",
          instagram: "@teatromori",
          discipline: "Teatro",
          city: "Santiago", theater: "Teatro Mori",
          venue: "Teatro Mori", sala: "Mori Parque Arauco",
          dates: "7 may – 27 jun 2026 · ju y vi 20:00, sá 18:30 y 20:30",
          run: "7 may – 27 jun", duration: "", price: "Entradas: ticketmaster.cl",
          summary: "Cuatro días, un amor imposible y toda una vida para recordarlo.",
          description: "Un fotógrafo de paso y una ama de casa de Iowa viven, en apenas cuatro días, un amor que les cambiará la vida para siempre. La célebre historia de Robert James Waller, llevada a la escena.\n\nEn Teatro Mori Parque Arauco."
        },
        {
          id: "cl-hans-pozo",
          title: "H.P. (Hans Pozo)",
          company: "De Luis Barrales",
          companyUrl: "https://teatromori.com/obra/awRppLp4/h.-p.--hans-pozo-",
          instagram: "@teatromori",
          discipline: "Teatro",
          city: "Santiago", theater: "Teatro Mori",
          venue: "Teatro Mori", sala: "Mori Bellavista",
          dates: "25 jun – 5 jul 2026 · ju a sá 20:00, do 19:00",
          run: "25 jun – 5 jul", duration: "", price: "Entradas: ticketmaster.cl",
          summary: "Del crimen real al escenario: el retrato de una vida en los márgenes.",
          description: "Biodrama inspirado en Hans Pozo, el joven cuyo cuerpo descuartizado apareció en Santiago en 2006. A partir de ese caso real, la obra compone un retrato descarnado de la marginalidad y de las vidas que la sociedad prefiere no mirar.\n\nUn texto emblemático de la dramaturgia chilena reciente, en Teatro Mori Bellavista."
        }
      ]
    },

    "Spain": {
      es: "España",
      tag: "Península Ibérica",
      intro: "Entre la tradición de los corrales y la vanguardia europea, una escena que discute consigo misma a viva voz.",
      cities: ["Madrid", "Barcelona", "Sevilla", "Valencia", "Bilbao", "Toledo"],
      works: [
        {
          demo: true,
          id: "es-jardin-sal",
          title: "El Jardín de Sal",
          company: "Compañía Marisma",
          companyUrl: "#", instagram: "@compania.marisma",
          discipline: "Teatro contemporáneo",
          city: "Madrid", venue: "Sala Mirador",
          dates: "10 jun – 12 jul · mié a dom, 20:00",
          duration: "95 min", price: "Desde 16 €",
          summary: "Una familia hereda una salina que ya no produce más que silencio.",
          description: "En una salina abandonada del sur, cuatro hermanos se reúnen para decidir qué hacer con la herencia. Lo que empieza como un trámite termina destapando treinta años de cosas no dichas.\n\nMarisma firma un drama de cámara de escritura precisa y cruel, en la mejor tradición del teatro de texto español, con un reparto de actrices y actores de largo recorrido."
        },
        {
          demo: true,
          id: "es-flamenco-cero",
          title: "Flamenco Cero",
          company: "Cía. Compás Roto",
          companyUrl: "#", instagram: "@compasroto",
          discipline: "Flamenco contemporáneo",
          city: "Sevilla", venue: "Teatro Central",
          dates: "18 jun – 06 jul · vie y sáb, 21:00",
          duration: "70 min", price: "Desde 22 €",
          summary: "Empezar de cero: sin bata de cola, sin guitarra, solo el zapateado y el vacío.",
          description: "Compás Roto desmonta el flamenco hasta su esqueleto rítmico y lo reconstruye en diálogo con la música electrónica y la danza contemporánea. Nada de postal: aquí el duende es una pregunta, no una respuesta.\n\nUna pieza que ha incomodado a puristas y entusiasmado a programadores de festivales de toda Europa. Flamenco, sí, pero desde cero."
        },
        {
          demo: true,
          id: "es-horas-muertas",
          title: "Las Horas Muertas",
          company: "Colectivo Intramuros",
          companyUrl: "#", instagram: "@intramuros.cat",
          discipline: "Teatro",
          city: "Barcelona", venue: "Sala Beckett",
          dates: "25 jun – 20 jul · mar a dom, 19:30",
          duration: "85 min", price: "Desde 18 €",
          summary: "El turno de noche de un hotel donde nunca llega nadie.",
          description: "Dos recepcionistas, un vestíbulo iluminado por fluorescentes y la larga madrugada por delante. En las horas muertas del turno de noche caben todas las vidas que estos dos personajes no se atrevieron a vivir.\n\nIntramuros construye una comedia melancólica sobre la espera y el tiempo de trabajo, con un humor seco que va dejando paso, poco a poco, a la ternura."
        },
        {
          demo: true,
          id: "es-quijote",
          title: "Quijote en Llamas",
          company: "Cía. Molino Rojo",
          companyUrl: "#", instagram: "@molinorojo.teatro",
          discipline: "Clásico revisitado",
          city: "Toledo", venue: "Corral de Comedias",
          dates: "02 jul – 27 jul · jue a dom, 22:00",
          duration: "110 min", price: "Desde 20 €",
          summary: "Y si la locura de Alonso Quijano fuera, en realidad, la única cordura posible.",
          description: "Molino Rojo prende fuego al mito: su Quijote no lucha contra molinos sino contra un mundo que ha decidido que soñar es delito. Una versión libre, política y feroz del clásico, montada al aire libre en un corral de comedias.\n\nGran formato, fuego real en escena y una troupe de quince intérpretes. Función al anochecer, con la piedra de Toledo como telón de fondo."
        },
        {
          demo: true,
          id: "es-mediterraneo",
          title: "Mediterráneo",
          company: "Cía. Litoral",
          companyUrl: "#", instagram: "@litoral.circ",
          discipline: "Circo contemporáneo",
          city: "Valencia", venue: "Las Naves",
          dates: "09 jul – 03 ago · vie a dom, 20:30",
          duration: "65 min", price: "Desde 15 €",
          summary: "Acróbatas, una barca y un mar que es frontera y es cuna.",
          description: "Litoral lleva el circo al borde del agua para hablar del Mediterráneo como espacio de tránsito: el que une y el que separa, el de las vacaciones y el de los naufragios.\n\nMástil chino, mano a mano y tela aérea al servicio de una dramaturgia del cuerpo que no necesita palabras para conmover. Apta para todos los públicos, pensada para no dejar indiferente a ninguno."
        },
        {
          demo: true,
          id: "es-niebla",
          title: "Niebla del Norte",
          company: "Cía. Galerna",
          companyUrl: "#", instagram: "@galerna.antzerkia",
          discipline: "Teatro",
          city: "Bilbao", venue: "Pabellón 6",
          dates: "16 jul – 10 ago · mié a sáb, 20:00",
          duration: "80 min", price: "Desde 17 €",
          summary: "En un pueblo de la costa cantábrica, la niebla esconde más de lo que tapa.",
          description: "Cuando la niebla baja sobre el pueblo, una comunidad pesquera en declive se ve obligada a enfrentar el cierre de la fábrica que la sostenía. Galerna retrata el norte industrial sin nostalgia ni paternalismo.\n\nUn coro de personajes, una lengua áspera y hermosa, y la certeza de que la niebla, antes o después, siempre se levanta."
        }
      ]
    },

    "Argentina": {
      es: "Argentina",
      tag: "Río de la Plata",
      intro: "La capital mundial del teatro independiente y un país entero que ensaya en cada esquina.",
      cities: ["Buenos Aires", "Rosario", "Córdoba", "Mendoza", "Ushuaia"],
      works: [
        {
          demo: true,
          id: "ar-pampa-electrica",
          title: "Pampa Eléctrica",
          company: "Compañía Catorce",
          companyUrl: "#", instagram: "@compania.catorce",
          discipline: "Teatro",
          city: "Buenos Aires", venue: "Timbre 4",
          dates: "13 jun – 13 jul · vie a dom, 20:00",
          duration: "90 min", price: "Desde $4.500",
          summary: "Una familia rural y el día en que el campo se llenó de torres de alta tensión.",
          description: "El progreso llega en forma de tendido eléctrico que parte la pampa en dos. Compañía Catorce escribe una saga rural sobre lo que se gana, lo que se pierde y lo que nadie pidió, con el humor amargo del teatro porteño.\n\nTres actos, cinco actores y una mesa familiar que es campo de batalla. Una de las grandes obras de la temporada independiente."
        },
        {
          demo: true,
          id: "ar-tango-espejos",
          title: "Tango de los Espejos",
          company: "Cía. Arrabal Nuevo",
          companyUrl: "#", instagram: "@arrabalnuevo",
          discipline: "Danza-teatro",
          city: "Buenos Aires", venue: "Ciudad Cultural Konex",
          dates: "20 jun – 18 jul · sáb, 21:30",
          duration: "75 min", price: "Desde $6.000",
          summary: "Dos bailarines, infinitos reflejos y un tango que se baila contra uno mismo.",
          description: "Arrabal Nuevo lleva el tango a un salón de espejos donde cada paso se multiplica y se traiciona. ¿Se puede bailar en pareja cuando el otro es, en realidad, el propio reflejo?\n\nUna pieza hipnótica sobre el deseo y la identidad, con música en vivo de bandoneón y una escenografía de espejos que desarma la noción de adelante y atrás."
        },
        {
          demo: true,
          id: "ar-rio-sin-orillas",
          title: "El Río Sin Orillas",
          company: "Colectivo Paraná",
          companyUrl: "#", instagram: "@colectivoparana",
          discipline: "Teatro documental",
          city: "Rosario", venue: "Plataforma Lavardén",
          dates: "27 jun – 25 jul · vie y sáb, 20:30",
          duration: "80 min", price: "Desde $3.500",
          summary: "El Paraná en bajante histórica y los pueblos que viven de lo que el río ya no da.",
          description: "Colectivo Paraná recorre las islas y los puertos del litoral para construir un retrato coral del río más importante del país en su peor sequía. Pescadores, isleros y científicos prestan su voz a una obra hecha de testimonio.\n\nDocumento y poema a la vez, El Río Sin Orillas pregunta qué pasa con una cultura entera cuando el agua que la define empieza a faltar."
        },
        {
          demo: true,
          id: "ar-cuyo",
          title: "Cuyo Profundo",
          company: "Cía. Zonda",
          companyUrl: "#", instagram: "@cia.zonda",
          discipline: "Teatro físico",
          city: "Mendoza", venue: "Teatro Quintanilla",
          dates: "04 jul – 01 ago · jue a dom, 21:00",
          duration: "60 min", price: "Desde $4.000",
          summary: "Cuando sopla el viento Zonda, el pueblo entero pierde la cabeza.",
          description: "El Zonda, ese viento caliente que baja de la cordillera y enloquece a la gente, es el motor de esta pieza de teatro físico sobre la tierra, el vino y la furia contenida de un valle.\n\nCía. Zonda trabaja con el cuerpo al límite del agotamiento para hacer sentir, más que entender, qué significa habitar un lugar donde hasta el aire conspira."
        },
        {
          demo: true,
          id: "ar-murga",
          title: "La Murga del Fin del Mundo",
          company: "Cía. Sur Sur",
          companyUrl: "#", instagram: "@cia.sursur",
          discipline: "Teatro de calle",
          city: "Ushuaia", venue: "Plaza Cívica (al aire libre)",
          dates: "11 jul – 26 jul · sáb y dom, 17:00",
          duration: "45 min", price: "Gratuito",
          summary: "Bombo, plumas y carnaval en la ciudad más austral del planeta.",
          description: "En el fin del mundo también hay carnaval. Cía. Sur Sur saca a la calle una murga que mezcla la tradición rioplatense con las historias de quienes eligieron vivir donde termina el continente.\n\nEspectáculo gratuito al aire libre, para todas las edades. Se recomienda abrigo: el fin del mundo es hermoso, pero hace frío."
        },
        {
          demo: true,
          id: "ar-cordoba",
          title: "Córdoba Insomnio",
          company: "Cía. Sereno",
          companyUrl: "#", instagram: "@cia.sereno",
          discipline: "Performance",
          city: "Córdoba", venue: "Casa Naranja",
          dates: "18 jul – 08 ago · vie y sáb, 23:00",
          duration: "100 min", price: "Desde $5.000",
          summary: "Una función que empieza a medianoche y termina cuando sale el sol.",
          description: "Cía. Sereno propone una vigilia escénica: una performance nocturna de duración extendida donde el público es invitado a no dormir, a acompañar a los intérpretes a través de la madrugada cordobesa.\n\nUna experiencia límite sobre el cansancio, la confesión y la luz del amanecer. No es para todos: es para los que se quieren quedar despiertos."
        }
      ]
    }
  }
};

// ---------- CONFIGURACIÓN GLOBAL ----------
// showDemoContent: con true se muestra todo el contenido de muestra (ficticio),
// etiquetado como tal; con false el sitio muestra solo contenido real verificado.
window.APLAUZO.config = { showDemoContent: true };

// Devuelve la lista filtrada según el flag: los registros con demo:true se
// ocultan cuando showDemoContent es false. No muta los datos originales.
window.APLAUZO.filterDemo = function (arr) {
  if (!Array.isArray(arr)) return arr;
  if (window.APLAUZO.config.showDemoContent) return arr;
  return arr.filter(function (x) { return !x || !x.demo; });
};

window.APLAUZO.opinion = {
  "Spain": {
    "ciudad": "Madrid",
    "kicker": "Un festival clásico deja que un algoritmo decida qué obra abrirá la temporada.",
    "slides": [
      {
        "headline": "La inteligencia artificial ya elige <em>qué</em> ponemos en escena. Todavía no decide <em>por qué</em> seguimos yendo al teatro.",
        "byline": "Telón de Fondo",
        "lines": [
          "Un festival de artes escénicas clásicas anunció que dejará que una IA sugiera parte de su cartel.",
          "Nunca había sido tan fácil programar una temporada entera sin que nadie discuta en una sala de reuniones."
        ]
      },
      {
        "lines": [
          "Mientras un algoritmo cruza datos de taquilla, un dramaturgo cruza los dedos.",
          "Mientras una recomendación automática nos dice qué nos va a gustar, un actor todavía no sabe si hoy va a haber público.",
          "Optimizamos la cartelera y seguimos sin resolver lo de siempre: convencer a alguien de salir de su casa un martes por la noche."
        ]
      },
      {
        "lines": [
          "La tecnología puede predecir qué obra llenará una sala.",
          "Lo que no puede predecir es lo que pasa dentro de esa sala cuando se apagan las luces.",
          "Eso sigue dependiendo, tercamente, de un cuerpo humano frente a otro."
        ]
      },
      {
        "lines": [
          "Nunca tuvimos tantos datos sobre el público.",
          "Nunca supimos tan poco sobre por qué alguien llora en la butaca 14."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Portugal": {
    "ciudad": "Lisboa",
    "kicker": "Un premio iberoamericano reconoce, por primera vez, no a quien actúa sino a quien sostiene el telón.",
    "slides": [
      {
        "headline": "Hay diecinueve nombres que <em>nunca</em> vas a leer en una marquesina y que igual sostienen cada función.",
        "byline": "La Utilera",
        "lines": [
          "IBERCENA distinguió este año a diecinueve gestores culturales del espacio iberoamericano.",
          "Gente que nunca sale a saludar al final, pero sin la cual jamás empieza la obra."
        ]
      },
      {
        "lines": [
          "Mientras el actor recibe el aplauso, el gestor revisa si alcanza para pagar la luz del teatro.",
          "Mientras el público discute el final de la obra, alguien ya está negociando la sala para la próxima.",
          "Hacemos de la administración cultural un oficio invisible y después nos preguntamos por qué tantas salas cierran en silencio."
        ]
      },
      {
        "lines": [
          "Una obra no vive solo del talento que sube al escenario.",
          "Vive, sobre todo, de quien logra que ese escenario siga encendido un mes más."
        ]
      },
      {
        "lines": [
          "Nunca hubo tantos aplausos para los actores.",
          "Nunca hubo tan pocos para quienes hacen posible que haya teatro mañana."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Brazil": {
    "ciudad": "São Paulo",
    "kicker": "Un grupo de docentes de artes cênicas firma un manifiesto pidiendo, simplemente, condiciones dignas para enseñar a actuar.",
    "slides": [
      {
        "headline": "Antes de que alguien aprenda a llenar un escenario, alguien tuvo que enseñarle a pararse en él.",
        "byline": "Segunda Fila",
        "lines": [
          "Docentes de artes cênicas de una universidad brasileña firmaron un manifiesto por la dignidad de su trabajo.",
          "Piden lo mínimo: que formar artistas no sea, también, un acto de sacrificio personal."
        ]
      },
      {
        "lines": [
          "Mientras un graduado debuta bajo las luces, su profesor sigue dando clases bajo un tubo fluorescente.",
          "Mientras celebramos el estreno, nadie filma el ensayo número cuarenta y dos, el que nadie vio, el que lo hizo posible.",
          "Construimos escenarios para el talento y le seguimos negando un sueldo digno a quien lo enseña a nacer."
        ]
      },
      {
        "lines": [
          "Detrás de cada actor que admiras hubo un aula con sillas desparejas y una persona que no se rindió.",
          "Esa persona también merece, alguna vez, un aplauso de pie."
        ]
      },
      {
        "lines": [
          "Nunca fue tan visible el talento que sale de las escuelas de teatro.",
          "Nunca fue tan invisible quien se quedó adentro, formándolo."
        ],
        "caption": [
          "Sale de gusto",
          "e estamos montando esta vitrine",
          "do teatro ibero-americano"
        ]
      }
    ]
  },
  "Argentina": {
    "ciudad": "Buenos Aires",
    "kicker": "El Instituto Nacional del Teatro anuncia un nuevo paradigma. Una sala de barrio anuncia, esta semana, su segunda función.",
    "slides": [
      {
        "headline": "Hablamos de <em>paradigmas</em> nuevos para las artes escénicas mientras una compañía decide si puede pagar el alquiler de este mes.",
        "byline": "Cleopatha",
        "lines": [
          "El INT presentó un plan para impulsar la formación, el desarrollo local y la proyección internacional del sector.",
          "En paralelo, los Premios Max coronaron las mejores obras del año. Dos noticias, dos velocidades, un mismo oficio."
        ]
      },
      {
        "lines": [
          "Mientras una política pública se diseña a cinco años, una obra se sostiene función a función.",
          "Mientras se discute la proyección internacional del sector, alguien todavía está pegando afiches en la esquina del barrio.",
          "Necesitamos las dos cosas: el plan grande y la sala chica. El problema es cuando solo se aplaude al primero."
        ]
      },
      {
        "lines": [
          "Un premio se entrega una vez al año.",
          "Una función se sostiene, contra todo pronóstico, cada fin de semana."
        ]
      },
      {
        "lines": [
          "Nunca hubo tantos discursos sobre el futuro del teatro argentino.",
          "Nunca fue tan urgente, también, sostener el presente de la sala de la esquina."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Mexico": {
    "ciudad": "Ciudad de México",
    "kicker": "Llega a la capital un encuentro de artes escénicas pensado, por primera vez, para el público más difícil de conquistar: la infancia.",
    "slides": [
      {
        "headline": "Se puede formar un público nuevo. Solo hay que empezar <em>antes</em> de que tenga edad para elegir el celular.",
        "byline": "Camarín 3",
        "lines": [
          "La Ciudad de México recibe el VI Encuentro Internacional de Artes Escénicas para los Primeros Años.",
          "Una apuesta poco común: programar teatro pensando en espectadores que todavía no saben leer."
        ]
      },
      {
        "lines": [
          "Mientras un adulto decide si vale la pena salir esta noche, un niño de tres años todavía no sabe que el teatro es 'para otros'.",
          "Mientras tanto contenido compite por su atención desde una pantalla, una sala oscura le ofrece otra cosa: estar, simplemente, presente.",
          "Quien se sienta una vez, fascinado, frente a un escenario a los cuatro años, difícilmente lo olvida a los treinta."
        ]
      },
      {
        "lines": [
          "No se trata de competir con el algoritmo por su atención.",
          "Se trata de mostrarle, temprano, que existe algo que el algoritmo no le puede dar: estar ahí, de verdad, con otros."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil entretener a un niño con una pantalla.",
          "Nunca fue tan necesario, también, sentarlo alguna vez frente a un escenario real."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Colombia": {
    "ciudad": "Bogotá",
    "kicker": "El Teatro La Candelaria cumple sesenta años contando, desde las tablas, la historia que el país todavía está discutiendo.",
    "slides": [
      {
        "headline": "Hay un escenario en Bogotá que lleva sesenta años contando la misma historia: la de un país que no termina de escribirse.",
        "byline": "Ifigenia C.",
        "lines": [
          "El Teatro La Candelaria celebra seis décadas de pensar a Colombia desde las artes escénicas.",
          "Sesenta años de funciones son, también, sesenta años de un país que cambió de nombre a sus problemas, pero no de problemas."
        ]
      },
      {
        "lines": [
          "Mientras las noticias del país caducan en un día, una obra de teatro puede seguir diciendo lo mismo durante generaciones.",
          "Mientras todo a nuestro alrededor está hecho para olvidarse rápido, hay un edificio en el centro que existe, justamente, para que no olvidemos.",
          "Sostener una sala durante sesenta años no es nostalgia. Es una forma silenciosa de memoria colectiva."
        ]
      },
      {
        "lines": [
          "Un país puede cambiar de gobierno doce veces.",
          "Y, si tiene suerte, conservar el mismo escenario donde alguien sigue intentando explicarlo."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil olvidar lo que pasó la semana pasada.",
          "Nunca fue tan valioso un escenario que insiste en recordarlo, función tras función, durante sesenta años."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Chile": {
    "ciudad": "Santiago",
    "kicker": "Murió Julio Jung. Y con él, una manera de entender el oficio que ya casi nadie practica como él la practicaba.",
    "slides": [
      {
        "headline": "Cuando muere un actor de verdad, no se apaga una carrera. Se apaga una <em>manera</em> de estar arriba de un escenario.",
        "byline": "El Apuntador",
        "lines": [
          "Chile despidió a Julio Jung, referente del teatro, el cine y la televisión.",
          "Una de esas figuras que hicieron del oficio actoral algo serio, sin perder jamás el sentido del humor sobre sí mismas."
        ]
      },
      {
        "lines": [
          "Mientras una serie desaparece de una plataforma sin previo aviso, el recuerdo de una actuación memorable puede acompañarte cuarenta años.",
          "Mientras todo está hecho para no quedar grabado en nada, hay actuaciones que se quedan grabadas, sin pedir permiso, en la memoria de quien las vio.",
          "Eso es lo que un buen actor le hace a un escenario: lo vuelve, para siempre, un lugar donde estuvo."
        ]
      },
      {
        "lines": [
          "Las plataformas se renuevan cada temporada.",
          "La huella de un actor que de verdad te conmovió, no."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil ver actuaciones, en cualquier momento, desde cualquier pantalla.",
          "Nunca fue tan difícil, también, que alguna te marque como lo hizo aquella, una noche, en un teatro de Santiago."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos probando esta plataforma",
          "de teatro iberoamericano"
        ]
      }
    ]
  },
  "Peru": {
    "ciudad": "Lima",
    "kicker": "El Ministerio de Cultura promete llevar teatro, música, danza y circo a pueblos de menos de 35.000 habitantes.",
    "slides": [
      {
        "headline": "Hay pueblos de menos de 35 mil habitantes a los que el teatro nunca había llegado. Esta semana, por una vez, va camino hacia allá.",
        "byline": "Camarín 3",
        "lines": [
          "Perú lanzó una convocatoria cultural para llevar artes escénicas a municipios pequeños.",
          "Un gesto poco frecuente: que el escenario viaje hacia el público, y no al revés."
        ]
      },
      {
        "lines": [
          "Mientras las grandes salas compiten por llenar butacas en la capital, hay plazas de pueblo que jamás vieron una función en vivo.",
          "Mientras discutimos cómo hacer crecer al público que ya tenemos, hay públicos enteros que ni siquiera saben que el teatro es para ellos también.",
          "A veces hacer crecer la cultura no es producir más. Es, simplemente, animarse a viajar más lejos."
        ]
      },
      {
        "lines": [
          "Una obra que solo se presenta en la capital es, para el resto del país, apenas un rumor.",
          "Una obra que llega a un pueblo donde nunca hubo teatro, en cambio, puede convertirse en el primer recuerdo de algo nuevo."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil transmitir un espectáculo a miles de pantallas a la vez.",
          "Nunca fue tan importante, también, llevarlo en persona a un lugar donde nunca había llegado nada parecido."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Venezuela": {
    "ciudad": "Caracas",
    "kicker": "Una convocatoria llamada 'Tintas Criollas' invita a artistas escénicos a seguir creando, contra todo pronóstico.",
    "slides": [
      {
        "headline": "Hacer una obra de teatro en condiciones difíciles no es una hazaña aislada. Es, en algunos lugares, simplemente, el oficio.",
        "byline": "Dramaturga Anónima",
        "lines": [
          "'Tintas Criollas' abrió una convocatoria nacional para artistas, compañías y colectivos escénicos.",
          "Una invitación a seguir produciendo cultura ahí donde producir cualquier cosa ya es, de por sí, un desafío diario."
        ]
      },
      {
        "lines": [
          "Mientras en otros lugares se debate si el teatro 'sigue siendo relevante', aquí se debate, primero, cómo sostener el ensayo de mañana.",
          "Mientras unos se preguntan cómo atraer más público, otros se preguntan, antes que nada, cómo conseguir luz para el ensayo de esta noche.",
          "Y aun así, contra todo eso, alguien decide igual subirse a un escenario. Eso también es una forma de estreno."
        ]
      },
      {
        "lines": [
          "Hay países donde hacer teatro es una opción entre muchas.",
          "Y hay países donde hacerlo es, sobre todo, una forma de decir: seguimos aquí, seguimos contando."
        ]
      },
      {
        "lines": [
          "Nunca fue tan difícil sostener una temporada completa en algunos escenarios de la región.",
          "Nunca fue tan necesario, también, que alguien la sostenga igual."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Ecuador": {
    "ciudad": "Quito",
    "kicker": "El gobierno anuncia que llevará teatro, música, danza y circo a comunidades que normalmente quedan fuera del mapa cultural.",
    "slides": [
      {
        "headline": "El mapa cultural de un país no debería terminar donde termina el transporte público de su capital.",
        "byline": "La Utilera",
        "lines": [
          "Una nueva convocatoria busca acercar las artes escénicas a comunidades alejadas de los grandes centros culturales.",
          "Una manera distinta de medir el éxito de una temporada: no por cuántos llenaron la sala, sino por a cuántos lugares nuevos llegó."
        ]
      },
      {
        "lines": [
          "Mientras una ciudad discute cuál es 'la mejor cartelera del mes', un pueblo cercano se pregunta, simplemente, cuándo será la próxima vez que llegue algo así.",
          "Mientras nos acostumbramos a tener todo a un clic, hay comunidades enteras a las que el teatro todavía debe llegar, literalmente, caminando.",
          "Y cuando llega, no es solo entretenimiento. Es, por una noche, la prueba de que también fueron tomados en cuenta."
        ]
      },
      {
        "lines": [
          "No todos los públicos están esperando frente a una pantalla.",
          "Algunos están esperando, sin saberlo todavía, a que alguien arme un escenario en su plaza."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil llegar a millones de personas a la vez.",
          "Nunca fue tan valioso, también, llegar por primera vez a un solo pueblo."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Guatemala": {
    "ciudad": "Ciudad de Guatemala",
    "kicker": "Mientras el mundo discute si un centro cultural debe llevar o no el nombre de un presidente, aquí alguien sigue ensayando.",
    "slides": [
      {
        "headline": "El debate sobre quién debería poner su nombre en un teatro ocupa más titulares que la obra que se está ensayando adentro.",
        "byline": "Telón de Fondo",
        "lines": [
          "Esta semana, una disputa política volvió a poner el nombre de un centro cultural en el centro de la conversación global.",
          "Mientras tanto, en una sala de Guatemala, una compañía local sigue preparando su próximo estreno, casi sin que nadie la note."
        ]
      },
      {
        "lines": [
          "Mientras el mundo discute símbolos, alguien acá discute, todavía, si va a alcanzar el presupuesto para el vestuario.",
          "Mientras una polémica internacional ocupa portadas durante una semana, una obra local lleva meses de ensayo y tendrá, quizás, una sola nota de prensa.",
          "Las dos cosas son sobre cultura. Solo una de ellas, en realidad, está haciendo cultura."
        ]
      },
      {
        "lines": [
          "Los nombres de los edificios cambian con los gobiernos.",
          "Las funciones que ocurren adentro, si alguien insiste en sostenerlas, pueden seguir ahí mucho después."
        ]
      },
      {
        "lines": [
          "Nunca hubo tanto ruido sobre quién debería estar al frente de la cultura.",
          "Nunca fue tan importante, también, mirar quién sigue, en silencio, sosteniéndola desde adentro."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Cuba": {
    "ciudad": "La Habana",
    "kicker": "Un festival de artes escénicas para la primera infancia y un teatro que cumple cuarenta años: dos formas de pensar el largo plazo.",
    "slides": [
      {
        "headline": "Un teatro que cumple cuarenta años no celebra el pasado. Celebra haber encontrado, una y otra vez, una razón para seguir abriendo.",
        "byline": "Segunda Fila",
        "lines": [
          "La Habana recibe el Festival de Artes Escénicas para la Primera Infancia 'Príncipe Enano'.",
          "Y, casi al mismo tiempo, D'Morón Teatro celebra sus cuarenta años de funciones ininterrumpidas."
        ]
      },
      {
        "lines": [
          "Mientras unos arman su primer recuerdo de una sala oscura, otros llevan cuatro décadas dándole sentido a esa misma sala.",
          "Mientras todo lo digital se mide en visualizaciones de hoy, hay teatros que se miden en aniversarios, en generaciones, en públicos que vuelven con sus hijos.",
          "Eso es algo que ninguna métrica instantánea puede capturar: la fidelidad de un público a lo largo del tiempo."
        ]
      },
      {
        "lines": [
          "Hay contenidos que duran lo que dura un scroll.",
          "Y hay teatros que, contra toda lógica de lo inmediato, llevan cuarenta años abriendo sus puertas cada función."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil estrenar algo y que se olvide a la semana siguiente.",
          "Nunca fue tan admirable, también, sostener un escenario durante cuarenta años seguidos."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Bolivia": {
    "ciudad": "La Paz",
    "kicker": "Una convocatoria llamada 'Comunidades para el Futuro' busca a los jóvenes que todavía no saben que quieren hacer teatro.",
    "slides": [
      {
        "headline": "Nadie nace queriendo ser actor. Alguien, en algún momento, tiene que invitarlo a probar.",
        "byline": "Cleopatha",
        "lines": [
          "'Comunidades para el Futuro' abrió su convocatoria para jóvenes interesados en las artes escénicas.",
          "Una apuesta simple y, a la vez, enorme: asumir que el futuro del teatro boliviano todavía no tiene nombre ni rostro."
        ]
      },
      {
        "lines": [
          "Mientras a un adolescente le ofrecen mil maneras de mostrarse en una pantalla, pocas veces alguien le ofrece, en cambio, un escenario real donde pararse.",
          "Mientras todo lo demás le exige resultados inmediatos, el teatro le ofrece algo que ya casi no se ofrece: tiempo para equivocarse, ensayando, frente a otros.",
          "A veces formar un nuevo público empieza, simplemente, formando antes a un nuevo actor."
        ]
      },
      {
        "lines": [
          "El futuro de las artes escénicas no está en una estrategia de comunicación.",
          "Está, probablemente, en algún salón de clases donde alguien recién está descubriendo que esto le gusta."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil que un joven publique algo y lo vean miles.",
          "Nunca fue tan valioso, también, que alguien lo invite a actuar, por primera vez, frente a treinta personas reales."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Dominican Rep.": {
    "ciudad": "Santo Domingo",
    "kicker": "Mientras el mundo se entera de polémicas en teatros lejanos, aquí alguien termina de coser el último vestuario para el estreno del viernes.",
    "slides": [
      {
        "headline": "Las noticias de teatro que más circulan no siempre son las que más importan donde tú vives.",
        "byline": "El Apuntador",
        "lines": [
          "Esta semana, el algoritmo de noticias mezcló polémicas internacionales con anuncios de convocatorias locales.",
          "En Santo Domingo, mientras tanto, una compañía sigue ensayando para un estreno que no saldrá en ningún titular global."
        ]
      },
      {
        "lines": [
          "Mientras el mundo discute lo que pasa en escenarios lejanos, alguien aquí cierra, con alfileres, el último detalle de un vestuario para mañana.",
          "Mientras una controversia internacional ocupa la conversación durante días, una obra local se estrena, se sostiene dos fines de semana, y queda en la memoria de quienes fueron.",
          "Las dos cosas importan. Pero solo una de ellas te va a estar esperando, esta noche, en una sala cerca de ti."
        ]
      },
      {
        "lines": [
          "Las noticias globales cambian todos los días.",
          "La cartelera local de tu ciudad, en cambio, es la que de verdad puedes ir a ver esta semana."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil enterarte de lo que pasa en cualquier escenario del mundo.",
          "Nunca fue tan importante, también, enterarte de lo que pasa en el escenario que tienes a quince minutos de tu casa."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Honduras": {
    "ciudad": "Tegucigalpa",
    "kicker": "En medio de tanta noticia urgente, una compañía de teatro decide igual abrir el telón este fin de semana.",
    "slides": [
      {
        "headline": "Abrir un telón un viernes cualquiera, en medio de tantas urgencias, también es una forma de decir algo importante.",
        "byline": "Dramaturga Anónima",
        "lines": [
          "Entre titulares sobre política internacional y convocatorias culturales, una pequeña noticia casi pasa desapercibida: este fin de semana hay función.",
          "Una compañía local decidió, una vez más, sostener su temporada pase lo que pase afuera."
        ]
      },
      {
        "lines": [
          "Mientras todo parece urgente y efímero, programar una obra para dentro de tres semanas es, en sí mismo, un acto de fe en el futuro.",
          "Mientras el ruido general empuja a posponerlo todo, alguien decide igual encender las luces del escenario el viernes a las ocho.",
          "Eso, en tiempos difíciles, no es poca cosa: sostener un compromiso con una sala llena de desconocidos."
        ]
      },
      {
        "lines": [
          "Cancelar una función es fácil. Siempre hay una buena razón para hacerlo.",
          "Sostenerla, en cambio, es una decisión silenciosa que el público rara vez ve, pero siempre agradece."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil cancelar planes a último momento.",
          "Nunca fue tan valioso, también, que alguien decida igual abrir el telón."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Paraguay": {
    "ciudad": "Asunción",
    "kicker": "Pocas ciudades tienen tantas salas pequeñas sosteniendo, cada una a su manera, su propia versión de la cartelera.",
    "slides": [
      {
        "headline": "Una ciudad no necesita un gran teatro nacional para tener una vida escénica intensa. A veces le basta con diez salas pequeñas, tercas, abiertas.",
        "byline": "Camarín 3",
        "lines": [
          "Mientras las grandes noticias culturales llegan de afuera, Asunción sostiene su propia escena con salas pequeñas y elencos constantes.",
          "Una vida teatral que no necesita ser noticia internacional para ser, igualmente, real y necesaria."
        ]
      },
      {
        "lines": [
          "Mientras se habla de festivales gigantes en otras capitales, aquí una sala de cuarenta butacas agota sus entradas, semana tras semana, sin hacer ruido.",
          "Mientras el mapa cultural global parece tener unos pocos puntos marcados, hay ciudades enteras sosteniendo escenas propias, fuera de ese mapa.",
          "Lo pequeño, sostenido en el tiempo, también construye una tradición."
        ]
      },
      {
        "lines": [
          "No toda escena necesita ser masiva para ser importante.",
          "A veces la escena más importante es, simplemente, la única que tienes cerca."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil ver lo que pasa en escenarios lejanos.",
          "Nunca fue tan valioso, también, sostener lo que pasa en el escenario de la cuadra de al lado."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "El Salvador": {
    "ciudad": "San Salvador",
    "kicker": "Recuperar una plaza para una función de teatro también es, de alguna manera, recuperar un poco de espacio público.",
    "slides": [
      {
        "headline": "Cada vez que una compañía monta un escenario en una plaza, está diciendo, sin decirlo, que ese lugar también puede ser de todos otra vez.",
        "byline": "La Utilera",
        "lines": [
          "Entre las noticias de la semana, una pequeña: una compañía local llevó una función al espacio público.",
          "Un gesto que parece simple, pero que tiene un significado mayor: devolverle a una plaza su función de encuentro."
        ]
      },
      {
        "lines": [
          "Mientras los espacios públicos suelen pensarse solo en términos de seguridad, el teatro los piensa, también, en términos de encuentro.",
          "Mientras a muchos les cuesta imaginar una plaza llena de gente sentada, riendo, mirando lo mismo al mismo tiempo, una compañía de teatro lo hace posible una tarde al mes.",
          "Eso, aunque dure solo una hora, deja una huella distinta en quienes estuvieron ahí."
        ]
      },
      {
        "lines": [
          "Una plaza vacía es solo un espacio.",
          "Una plaza con un escenario montado en el centro es, por una tarde, una comunidad."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil quedarse en casa viendo cualquier cosa.",
          "Nunca fue tan valioso, también, salir a compartir una plaza con desconocidos durante una hora."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Nicaragua": {
    "ciudad": "Managua",
    "kicker": "En contextos difíciles, montar una obra propia sigue siendo una de las formas más silenciosas de decir lo que se piensa.",
    "slides": [
      {
        "headline": "Cuando es difícil decir las cosas directamente, alguien siempre encuentra la manera de decirlas, igual, desde un escenario.",
        "byline": "Dramaturga Anónima",
        "lines": [
          "Entre noticias internacionales sobre tensiones políticas y cultura, una compañía local terminó de montar una obra propia.",
          "Una obra escrita, dirigida y actuada desde adentro, para un público que entiende, sin que se lo expliquen, todo lo que no se dice en voz alta."
        ]
      },
      {
        "lines": [
          "Mientras afuera se discuten símbolos y nombres de instituciones, adentro de una sala alguien encuentra, en una metáfora, un espacio para decir lo que no puede decir de otra forma.",
          "Mientras en otros lugares el teatro es una opción de entretenimiento entre muchas, aquí puede ser, también, uno de los pocos lugares donde ciertas conversaciones todavía son posibles.",
          "Eso convierte a una sala pequeña en algo mucho más grande que una sala."
        ]
      },
      {
        "lines": [
          "No todo lo que se dice en un escenario se dice con palabras.",
          "Y a veces lo que más se necesita decir es, justamente, lo que se dice sin nombrarlo."
        ]
      },
      {
        "lines": [
          "Nunca fue tan difícil decir ciertas cosas en voz alta.",
          "Nunca fue tan necesario, también, que un escenario siga encontrando la manera de decirlas."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Costa Rica": {
    "ciudad": "San José",
    "kicker": "Mientras se debate la sostenibilidad de tantas cosas, hay salas que llevan años resolviendo, función a función, la suya propia.",
    "slides": [
      {
        "headline": "Sostenibilidad no es solo una palabra para hablar del planeta. También describe, perfectamente, lo que hace una sala de teatro independiente cada mes.",
        "byline": "Telón de Fondo",
        "lines": [
          "Mientras el mundo discute modelos de sostenibilidad para casi todo, una sala de San José celebra, en silencio, otro mes con las puertas abiertas.",
          "Nadie le puso ese nombre a lo que hacen. Pero llevan años sosteniéndose, función tras función, sin depender de un milagro."
        ]
      },
      {
        "lines": [
          "Mientras unos diseñan estrategias a largo plazo en una sala de juntas, otros las aplican, sin saberlo, decidiendo cada semana si hacen una función más.",
          "Mientras se buscan fórmulas grandes para problemas grandes, hay salas pequeñas resolviendo, con creatividad, sus propios problemas pequeños.",
          "Esa terquedad cotidiana, sumada durante años, también es una forma de sostenibilidad."
        ]
      },
      {
        "lines": [
          "No todas las soluciones sostenibles vienen de un gran plan.",
          "Algunas vienen, simplemente, de alguien que decide no cerrar la sala este mes tampoco."
        ]
      },
      {
        "lines": [
          "Nunca se habló tanto de sostener cosas a largo plazo.",
          "Nunca fue tan valioso, también, fijarse en quienes lo llevan haciendo, en silencio, durante años."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Panama": {
    "ciudad": "Ciudad de Panamá",
    "kicker": "Un país que conecta dos océanos también podría convertirse, alguna vez, en puente entre escenas escénicas que casi no se conocen entre sí.",
    "slides": [
      {
        "headline": "Si un país puede conectar al mundo entero por agua, ¿por qué no podría convertirse también en un punto de encuentro para sus escenarios?",
        "byline": "Ifigenia C.",
        "lines": [
          "Entre las noticias culturales de la semana, una idea que aparece cada cierto tiempo: convertir a Panamá en sede de encuentros escénicos regionales.",
          "Un país acostumbrado a conectar continentes podría, también, conectar escenas que hoy casi no se cruzan."
        ]
      },
      {
        "lines": [
          "Mientras un canal conecta mercancías de un océano a otro, las escenas teatrales de países vecinos a veces no se conocen entre sí.",
          "Mientras todo el mundo puede ver lo mismo al mismo tiempo en una pantalla, dos compañías de países cercanos pueden no haberse visto nunca en vivo.",
          "Tender un puente entre escenarios, aunque sea uno a la vez, también construye región."
        ]
      },
      {
        "lines": [
          "Conectar mercados es, sin dudas, importante.",
          "Conectar escenarios, aunque produzca menos titulares, también podría cambiar, con el tiempo, la manera en que una región se mira a sí misma."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil que algo cruce el mundo entero en segundos.",
          "Nunca fue tan valioso, también, que dos compañías vecinas finalmente se conozcan, en persona, sobre un mismo escenario."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Uruguay": {
    "ciudad": "Montevideo",
    "kicker": "Pocos países tienen, en proporción a su tamaño, tantas salas independientes sosteniendo su propia escena, casi sin pedir permiso.",
    "slides": [
      {
        "headline": "Hay países pequeños que, sin proponérselo, sostienen una vida teatral desproporcionadamente intensa para su tamaño.",
        "byline": "El Apuntador",
        "lines": [
          "Montevideo conserva, contra toda lógica de escala, una enorme cantidad de salas independientes activas.",
          "Una ciudad relativamente chica que decidió, hace mucho, que el teatro no era un lujo sino una costumbre."
        ]
      },
      {
        "lines": [
          "Mientras en otros lugares se necesitan grandes producciones para llenar titulares, aquí una sala de barrio puede sostener temporada tras temporada sin aparecer jamás en una portada.",
          "Mientras se discute si el público joven 'todavía va al teatro', en algunas esquinas de esta ciudad la respuesta parece ser, simplemente, que nunca dejó de ir.",
          "A veces el tamaño de una escena no se mide en cantidad de noticias, sino en cantidad de funciones que siguen ocurriendo, semana tras semana, sin hacer ruido."
        ]
      },
      {
        "lines": [
          "No hace falta ser un país grande para tener una escena enorme.",
          "Solo hace falta, durante muchos años, no dejar de sostenerla."
        ]
      },
      {
        "lines": [
          "Nunca fue tan fácil medir el éxito en cantidad de seguidores.",
          "Nunca fue tan valioso, también, medirlo en cantidad de funciones que siguen, año tras año, llenando una sala pequeña."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  },
  "Puerto Rico": {
    "ciudad": "San Juan",
    "kicker": "Mientras se discute, lejos de aquí, qué nombre debería llevar un centro cultural, una compañía local decide, simplemente, qué obra va a montar.",
    "slides": [
      {
        "headline": "A veces la pregunta más importante no es de quién es el teatro, sino qué se anima a contar quien finalmente sube a su escenario.",
        "byline": "Cleopatha",
        "lines": [
          "Esta semana, una controversia sobre el nombre de un centro cultural volvió a ocupar titulares internacionales.",
          "En San Juan, mientras tanto, una compañía local terminó de definir el elenco de su próxima puesta, en español, sobre su propia identidad."
        ]
      },
      {
        "lines": [
          "Mientras se debate, en otro idioma, cómo debería llamarse un edificio, aquí alguien decide, en el suyo, qué historia quiere contar y cómo quiere contarla.",
          "Mientras una polémica dura una semana en redes, una obra bien hecha sobre identidad puede acompañar a un público durante años.",
          "Esa decisión, mucho más silenciosa, también es una forma de afirmar quiénes somos."
        ]
      },
      {
        "lines": [
          "Los nombres en las fachadas cambian con el tiempo y con quién esté a cargo.",
          "Lo que una comunidad decide contar sobre sí misma, función tras función, suele quedarse mucho más tiempo."
        ]
      },
      {
        "lines": [
          "Nunca hubo tanto debate sobre cómo deberían llamarse las cosas.",
          "Nunca fue tan importante, también, decidir qué historias merecen subirse, en nuestra lengua, a un escenario."
        ],
        "caption": [
          "Sale de gusto",
          "y estamos armando esta cartelera",
          "del teatro iberoamericano"
        ]
      }
    ]
  }
};


// ---------- ESPACIOS ESCÉNICOS (datos reales) ----------
window.APLAUZO.spaces = {
  "Chile": [
    {
      id: "sp-gam",
      name: "GAM · Centro Gabriela Mistral",
      city: "Santiago", country: "Chile",
      type: "Centro cultural público",
      year: "2010", capacity: "Varias salas · hasta 2.000",
      address: "Av. Libertador Bernardo O'Higgins 227, Santiago",
      url: "https://gam.cl",
      instagram: "@centrogam",
      summary: "El gran centro cultural de la Alameda, en el edificio que en 1972 albergó la UNCTAD III.",
      description: "Reabierto en 2010 sobre el histórico edificio Diego Portales, el GAM es hoy uno de los polos de creación escénica más activos de Santiago: teatro, danza, música y artes visuales en torno a una plaza pública abierta a la ciudad."
    },
    {
      id: "sp-m100",
      name: "Centro Cultural Matucana 100",
      city: "Santiago", country: "Chile",
      type: "Centro cultural",
      year: "2001", capacity: "Teatro Principal, Microsala y más",
      address: "Av. Matucana 100, Estación Central, Santiago",
      url: "https://www.m100.cl",
      instagram: "@matucana100",
      summary: "Galpones ferroviarios reconvertidos en uno de los espacios más experimentales de la ciudad.",
      description: "Nacido en 2001 en antiguas bodegas del barrio Matucana, M100 apuesta por la creación contemporánea, el riesgo y los públicos jóvenes, con una programación de teatro, danza y artes visuales de marcado acento político."
    },
    {
      id: "sp-nescafe",
      name: "Teatro Nescafé de las Artes",
      city: "Santiago", country: "Chile",
      type: "Teatro privado",
      year: "2007", capacity: "≈ 1.000 butacas",
      address: "Manuel Montt 032, Providencia, Santiago",
      url: "https://teatro-nescafe-delasartes.confiteatro.cl",
      instagram: "@teatronescafedelasartes",
      summary: "Gran sala providenciana para los grandes formatos: ópera, ballet, conciertos y musicales.",
      description: "Una de las salas de mayor capacidad de Santiago, el Teatro Nescafé de las Artes recibe ballet, ópera, música en vivo y producciones internacionales de gira por Sudamérica."
    }
  ],
  "Argentina": [
    {
      id: "sp-colon",
      name: "Teatro Colón",
      city: "Buenos Aires", country: "Argentina",
      type: "Teatro lírico nacional",
      year: "1908", capacity: "≈ 2.500 localidades",
      address: "Cerrito 628, Buenos Aires",
      url: "https://teatrocolon.org.ar",
      instagram: "@teatrocolon",
      summary: "Uno de los grandes teatros de ópera del mundo, célebre por su acústica casi perfecta.",
      description: "Inaugurado el 25 de mayo de 1908, el Colón es Monumento Histórico Nacional y referencia mundial de la ópera y el ballet. Su sala en herradura y su acústica figuran entre las mejores del planeta."
    },
    {
      id: "sp-cervantes",
      name: "Teatro Nacional Cervantes",
      city: "Buenos Aires", country: "Argentina",
      type: "Teatro nacional",
      year: "1921", capacity: "Sala María Guerrero · 860",
      address: "Av. Córdoba 1155, Buenos Aires",
      url: "https://www.teatrocervantes.gob.ar",
      instagram: "@teatrocervantes",
      summary: "La escena nacional argentina, fundada por los actores María Guerrero y Fernando Díaz de Mendoza.",
      description: "Único teatro nacional del país, el Cervantes abrió en 1921 con una fachada inspirada en el plateresco español. Sus tres salas sostienen una programación dedicada a la dramaturgia argentina."
    },
    {
      id: "sp-sanmartin",
      name: "Teatro General San Martín",
      city: "Buenos Aires", country: "Argentina",
      type: "Teatro público",
      year: "1960", capacity: "Sala Martín Coronado · 1.049",
      address: "Av. Corrientes 1530, Buenos Aires",
      url: "https://complejoteatral.gob.ar",
      instagram: "@complejoteatralba",
      summary: "El corazón público de la avenida Corrientes y buque insignia del Complejo Teatral de Buenos Aires.",
      description: "Emblema del teatro moderno porteño, el San Martín reúne varias salas, un cuerpo estable de danza y una cartelera que cruza el teatro de autor, la danza contemporánea y el cine."
    }
  ],
  "Spain": [
    {
      id: "sp-real",
      name: "Teatro Real",
      city: "Madrid", country: "España",
      type: "Teatro de ópera",
      year: "1850", capacity: "≈ 1.700 localidades",
      address: "Plaza de Isabel II, Madrid",
      url: "https://www.teatroreal.es",
      instagram: "@teatroreal",
      summary: "El primer coliseo lírico de España, frente al Palacio Real.",
      description: "Inaugurado en 1850 por Isabel II, el Teatro Real es hoy la principal institución de ópera del país y una de las más premiadas de Europa, con una programación de primer nivel internacional."
    },
    {
      id: "sp-espanol",
      name: "Teatro Español",
      city: "Madrid", country: "España",
      type: "Teatro municipal",
      year: "1583", capacity: "Sala Principal · 760",
      address: "Calle del Príncipe 25, Madrid",
      url: "https://www.teatroespanol.es",
      instagram: "@teatroespanol",
      summary: "Más de cuatro siglos de escena en el solar del antiguo Corral del Príncipe.",
      description: "Levantado donde funcionó el Corral del Príncipe desde 1583, el Teatro Español es uno de los más antiguos del mundo en activo y la casa del teatro de texto en el centro de Madrid."
    },
    {
      id: "sp-zarzuela",
      name: "Teatro de la Zarzuela",
      city: "Madrid", country: "España",
      type: "Teatro lírico",
      year: "1856", capacity: "≈ 1.200 localidades",
      address: "Calle de Jovellanos 4, Madrid",
      url: "https://teatrodelazarzuela.mcu.es",
      instagram: "@teatrodelazarzuela",
      summary: "El templo del género lírico español, dedicado a la zarzuela y la danza.",
      description: "Abierto en 1856, este teatro a la italiana es la sede de referencia de la zarzuela. Su programación recupera el repertorio lírico español y lo cruza con la danza y el recital."
    }
  ]
};

// ---------- TIENDA ----------
window.APLAUZO.shop = [
  {
    id: "shop-polera",
    name: "Polera oficial Aplauzo",
    type: "Indumentaria",
    price: "USD 24",
    options: ["S", "M", "L", "XL"],
    optionLabel: "Talla",
    summary: "Algodón orgánico, serigrafía a una tinta con el logotipo Aplauzo.",
    description: "Nuestra polera de cabecera: 100% algodón orgánico peinado, corte unisex y el punto Aplauzo serigrafiado al pecho. En tinta negra sobre crudo, fiel a la identidad editorial del proyecto."
  },
  {
    id: "shop-tote-cartelera",
    name: "Totebag «Cartelera»",
    type: "Bolsa de tela",
    price: "USD 16",
    options: null,
    summary: "Lona de algodón con el mapa iberoamericano impreso a una tinta.",
    description: "Bolsa de lona resistente con el mapa de la escena iberoamericana estampado en negro. Asas largas para llevar al hombro camino al teatro."
  },
  {
    id: "shop-tote-telon",
    name: "Totebag «Telón»",
    type: "Bolsa de tela",
    price: "USD 16",
    options: null,
    summary: "El gesto del telón que se abre, tipografía Cormorant a gran escala.",
    description: "Segunda edición de nuestra bolsa de lona, con la palabra Aplauzo compuesta en gran cuerpo serif. Algodón natural, costuras reforzadas."
  },
  {
    id: "shop-stickers",
    name: "Set de stickers Aplauzo",
    type: "Stickers",
    price: "USD 6",
    options: null,
    summary: "Lámina de calcomanías con el punto Aplauzo y el mapa iberoamericano.",
    description: "Set de calcomanías resistentes al agua, impresas a una tinta sobre fondo crudo: el punto Aplauzo, el mapa de la escena iberoamericana y pequeños guiños tipográficos. Para la laptop, el estuche o la puerta del camarín."
  },
  {
    id: "shop-chapitas",
    name: "Chapitas Aplauzo",
    type: "Chapitas",
    price: "USD 5",
    options: null,
    summary: "Pin metálico con el logotipo Aplauzo, para llevar la escena puesta.",
    description: "Chapita (pin) metálica de 38 mm con el logotipo Aplauzo grabado a una tinta. Cierre de seguridad por detrás. Pequeña, terca y editorial, como la escena que celebra."
  },
  {
    id: "shop-libro",
    name: "Historia del teatro iberoamericano",
    type: "Libro",
    price: "Próximamente",
    soon: true,
    options: null,
    summary: "Un recorrido ilustrado por cuatro siglos de escena, de los corrales a hoy.",
    description: "Edición de tapa dura, 320 páginas, que traza la historia de las artes escénicas en Iberoamérica: del corral de comedias y la zarzuela al teatro independiente, la creación contemporánea y la danza. Ilustrado con fotografías de archivo de las principales salas del continente.\n\nEn preparación: muy pronto podrás encargarlo desde aquí."
  }
];
