// Aplauzo — vistas y app raíz
const { useState, useEffect, useMemo } = React;
const D = window.APLAUZO;

// ---------- utilidades ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paper": "Cálido",
  "display": "Cormorant Garamond"
}/*EDITMODE-END*/;

const PAPERS = {
  "Cálido":       { paper:"#F3F0E8", paper2:"#EAE5D9", land:"#E0DACA", ibero:"#C6BDA8", iberoH:"#9C9279" },
  "Frío":         { paper:"#EDF0EC", paper2:"#E1E6E0", land:"#D6DCD2", ibero:"#BBC2B5", iberoH:"#949C8E" },
  "Papel blanco": { paper:"#FAF8F3", paper2:"#F0EDE5", land:"#E3DDD0", ibero:"#CAC1AD", iberoH:"#A29A85" }
};

function Placeholder({ label, sub, ratio }) {
  return (
    <div className="ph" style={{ aspectRatio: ratio || "4 / 5" }}>
      <div className="ph-grid"></div>
      <div className="ph-cap">
        <span className="ph-label">{label}</span>
        {sub && <span className="ph-sub">{sub}</span>}
      </div>
    </div>
  );
}

// Slot de fotografía: el usuario arrastra su foto licenciada y queda guardada.
// Mismo id reutilizado entre vistas (nunca duplicado dentro de una vista).
// lock=true → la foto no captura el clic (deja navegar a la tarjeta);
// la subida real se hace en la ficha de obra, donde el slot es interactivo.
function Slot({ id, ratio, label, stop, lock }) {
  return (
    <div className={"slot" + (lock ? " slot-lock" : "")} style={{ aspectRatio: ratio || "3 / 4" }}
         onClick={stop ? (e) => e.stopPropagation() : undefined}>
      <image-slot id={id} shape="rect" fit="cover"
        placeholder={label || "Arrastra una foto"}></image-slot>
    </div>
  );
}

// Etiqueta discreta para el contenido de muestra (ficticio).
function DemoTag() {
  return <span className="demo-tag">contenido de muestra</span>;
}

// Avatar de silueta para fotos de personas (legal, bolsa de trabajo, directorio),
// en los tonos editoriales del sitio. Reemplaza la foto cuando no hay retrato.
function Avatar({ name }) {
  return (
    <div className="avatar" role="img" aria-label={name ? "Avatar de " + name : "Avatar"}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <g className="av-fig">
          <circle cx="50" cy="38" r="15" />
          <path d="M50 56c-15 0-27 11-29 28a2 2 0 002 2h54a2 2 0 002-2c-2-17-14-28-29-28z" />
        </g>
      </svg>
    </div>
  );
}

// Estado vacío editorial cuando una sección no tiene contenido real todavía.
function SoonNote({ children }) {
  return (
    <section className="hub-soon">
      <p className="hub-soon-txt">{children}</p>
    </section>
  );
}

// Países (engName) de un mapa de datos por país, ordenados por nombre en español y
// filtrados a los que tienen contenido visible según el flag de contenido de muestra.
function visibleCountries(byCountry) {
  return Object.keys(byCountry || {})
    .filter(k => D.filterDemo(byCountry[k]).length > 0)
    .sort((a, b) => (D.IBERO[a] || a).localeCompare(D.IBERO[b] || b, "es"));
}

const SECTIONS = [
  ["01", "Cartelera", "Obras, funciones y entradas por ciudad y país.", true, "Cartelera"],
  ["02", "Espacios escénicos", "Teatros, salas y espacios alternativos geolocalizados.", true, "Espacios"],
  ["03", "Talleres y formación", "Cursos presenciales y online en todas las disciplinas.", true, "Talleres"],
  ["04", "Bolsa de trabajo", "Empleos, residencias, castings y coproducciones.", true, "Trabajo"],
  ["05", "Central de fondos", "IBERESCENA, FONDART y licitaciones, con asistente IA.", true, "Fondos"],
  ["06", "Centro legal", "Contratos tipo, visas de artista y abogados especializados.", true, "Legal"],
  ["07", "Directorio", "Compañías, teatros, artistas y técnicos por país.", true, "Directorio"],
  ["08", "Políticas culturales", "Presupuestos y necesidades artísticas por región.", true, "Políticas"],
  ["09", "Opinión", "Artículos sobre el estado del arte en Iberoamérica.", true, "Opinión"],
  ["10", "Tienda", "Poleras, totebags y objetos de la comunidad escénica.", true, "Tienda"],
];

// ---------- masthead ----------
function Masthead({ onHome, onNavigate, onSearch, user, onLogin, onLogout }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleClick = (e, short) => {
    e.preventDefault();
    setOpen(false);
    onNavigate(short);
  };
  const initial = user ? user.name.trim().charAt(0).toUpperCase() : "";
  return (
    <header className="mast">
      <div className="mast-inner">
        <button className="logo" onClick={onHome} aria-label="Inicio Aplauzo">
          Aplauzo<span className="logo-dot">.</span>
        </button>
        <nav className={"mast-nav" + (open ? " is-open" : "")}>
          {SECTIONS.map(([n, , , active, short]) => (
            <a key={n} className={"nav-link" + (active ? " active" : "")}
               onClick={(e) => handleClick(e, short)}
               href="#">{short}</a>
          ))}
        </nav>
        <div className="mast-tools">
          <button className="tool-btn search-trigger" onClick={onSearch} aria-label="Buscar">
            <span className="tool-ico">⌕</span>
            <span className="tool-label">Buscar</span>
          </button>
          {!user &&
            <button className="tool-btn login-trigger" onClick={onLogin}>Entrar</button>}
          {user &&
            <div className="user-wrap">
              <button className="user-btn" onClick={() => setMenu(m => !m)}>
                <span className="user-ava">{initial}</span>
                <span className="user-name">{user.name}</span>
              </button>
              {menu &&
                <div className="user-menu" onMouseLeave={() => setMenu(false)}>
                  <span className="um-mail">{user.email}</span>
                  <button className="um-item" onClick={() => { setMenu(false); onLogout(); }}>Cerrar sesión</button>
                </div>}
            </div>}
          <button className="mast-toggle" onClick={() => setOpen(o => !o)}>
            {open ? "Cerrar" : "Índice"}
          </button>
        </div>
      </div>
    </header>
  );
}

// ---------- HOME ----------
function Home({ onSelectCountry, onOpenWork, onNavigate }) {
  // Obras visibles por país (respeta el flag de contenido de muestra).
  const visibleByCountry = {};
  Object.keys(D.countries).forEach(c => { visibleByCountry[c] = D.filterDemo(D.countries[c].works); });

  // Selección de portada: se prefieren las obras curadas; si alguna queda oculta
  // (contenido de muestra apagado) se descarta y se rellena con otras visibles.
  const curated = [
    { c: "Chile", id: "cl-glengarry" },
    { c: "Spain", id: "es-flamenco-cero" },
    { c: "Argentina", id: "ar-pampa-electrica" },
  ];
  const featured = [];
  const used = new Set();
  curated.forEach(({ c, id }) => {
    const w = (visibleByCountry[c] || []).find(x => x.id === id);
    if (w) { featured.push({ c, w }); used.add(w.id); }
  });
  if (featured.length < 3) {
    Object.keys(visibleByCountry).some(c =>
      visibleByCountry[c].some(w => {
        if (featured.length >= 3) return true;
        if (!used.has(w.id)) { featured.push({ c, w }); used.add(w.id); }
        return featured.length >= 3;
      }));
  }

  const totalWorks = Object.keys(visibleByCountry)
    .reduce((a, c) => a + visibleByCountry[c].length, 0);

  return (
    <main className="home">
      <div className="meta-rule">
        <span>Cartelera Iberoamericana</span>
        <span className="meta-mid">Edición N.º 01 · Junio 2026</span>
        <span>22 países · {totalWorks} obras vivas</span>
      </div>

      <section className="hero">
        <div className="hero-text">
          <p className="kicker">La plataforma de las artes escénicas iberoamericanas</p>
          <h1 className="hero-title">La escena de un<br />continente, en<br /><em>un solo mapa.</em></h1>
          <p className="hero-lede">
            De Santiago a Sevilla, de Ushuaia a Ciudad de México. Toca un país y
            descubre qué se está representando ahora mismo sobre sus escenarios.
          </p>
        </div>
      </section>

      <section className="map-block">
        <div className="map-frame">
          <AplauzoMap onSelect={onSelectCountry} />
          <div className="map-hint">
            <span className="hint-line"></span>
            Elige un país para ver toda su información
          </div>
        </div>
        <div className="map-legend">
          <span className="lg-item"><i className="sw sw-active"></i> Cartelera completa</span>
          <span className="lg-item"><i className="sw sw-ibero"></i> Iberoamérica · con opinión</span>
          <span className="lg-item"><i className="sw sw-dim"></i> Resto del mundo</span>
        </div>
      </section>

      <section className="featured">
        <div className="sec-head">
          <h2 className="sec-title">En cartelera ahora</h2>
          <span className="sec-meta">Una selección de la redacción</span>
        </div>
        <div className="feat-grid">
          {featured.map(({ c, w }) => (
            <article key={w.id} className="feat-card" onClick={() => onOpenWork(c, w.id)}>
              <Slot id={"ph-" + w.id} ratio="3 / 4" label="Fotografía" lock />
              <div className="feat-body">
                <span className="feat-place">{D.countries[c].es} · {w.city}</span>
                <h3 className="feat-title">{w.title}</h3>
                <p className="feat-comp">{w.company}</p>
                <p className="feat-sum">{w.summary}</p>
                <span className="read-more">Ver ficha →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="index">
        <div className="sec-head">
          <h2 className="sec-title">Aplauzo en diez secciones</h2>
          <span className="sec-meta">Todo lo escénico, en un solo lugar</span>
        </div>
        <ul className="index-list">
          {SECTIONS.map(([n, name, desc, active, short]) => (
            <li key={n} className={"index-row" + (active ? " active" : "")}
                onClick={active ? () => onNavigate(short) : undefined}
                style={active ? { cursor: "pointer" } : undefined}>
              <span className="ix-num">{n}</span>
              <span className="ix-name">{name}</span>
              <span className="ix-desc">{desc}</span>
              <span className="ix-state">{active ? "Disponible" : "Próximamente"}</span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}

// ---------- PAÍS ----------
function CountryView({ engName, onBack, onOpenWork }) {
  const data = D.countries[engName];
  const works = D.filterDemo(data.works);
  const disciplines = useMemo(
    () => ["Todas", ...Array.from(new Set(works.map(w => w.discipline)))],
    [engName, works.length]
  );
  const [disc, setDisc] = useState("Todas");
  const list = disc === "Todas" ? works : works.filter(w => w.discipline === disc);

  return (
    <main className="country">
      <div className="crumb">
        <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Cartelera</a>
        <span className="crumb-sep">/</span>
        <span className="crumb-here">{data.es}</span>
      </div>

      <header className="ct-head">
        <div className="ct-head-main">
          <p className="kicker">{data.tag} · {data.works.length} obras en cartelera</p>
          <h1 className="ct-title">{data.es}</h1>
          <p className="ct-intro">{data.intro}</p>
          <p className="ct-cities">{data.cities.join("  ·  ")}</p>
        </div>
        <a className="back-map" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
          ← Volver al mapa
        </a>
      </header>

      {works.length > 0 ? (
        <React.Fragment>
          <div className="filters">
            <span className="filters-label">Disciplina</span>
            <div className="chips">
              {disciplines.map(d => (
                <button key={d}
                  className={"chip" + (d === disc ? " on" : "")}
                  onClick={() => setDisc(d)}>{d}</button>
              ))}
            </div>
          </div>

          <div className="works-grid">
            {list.map(w => (
              <article key={w.id} className="work-card" onClick={() => onOpenWork(engName, w.id)}>
                <Slot id={"ph-" + w.id} ratio="3 / 4" label="Fotografía" lock />
                <div className="wc-body">
                  {w.demo && <DemoTag />}
                  <span className="wc-disc">{w.discipline}</span>
                  <h3 className="wc-title">{w.title}</h3>
                  <p className="wc-comp">{w.company || w.venue}</p>
                  <div className="wc-foot">
                    <span>{w.theater || w.city}</span>
                    <span>{w.run || w.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <SoonNote>
          Todavía estamos armando la cartelera de <em>{data.es}</em>.
          Muy pronto vas a poder ver aquí qué se está representando en sus escenarios.
        </SoonNote>
      )}

      <Footer />
    </main>
  );
}

// ---------- HUB DE PAÍS (toda la info disponible) ----------
const stripHtml = (s) => (s || "").replace(/<[^>]+>/g, "");

function HubList({ title, count, items, onAll, allLabel }) {
  return (
    <section className="hub-sec">
      <div className="sec-head">
        <h2 className="sec-title">{title}</h2>
        {onAll
          ? <a className="sec-meta link" href="#" onClick={(e) => { e.preventDefault(); onAll(); }}>{allLabel || "Ver todo →"}</a>
          : <span className="sec-meta">{count}</span>}
      </div>
      <ul className="hub-list">
        {items.map((it, i) => (
          <li key={i} className="hub-li">
            <span className="hl-title">{it.t}</span>
            <span className="hl-sub">{it.s}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CountryHub({ engName, onBack, onOpenWork, onGoSection, onGoOpinion }) {
  const es = D.IBERO[engName] || engName;
  const meta = D.countries[engName];
  const works = D.filterDemo((meta && meta.works) || []);
  const spaces = (D.spaces && D.spaces[engName]) || [];
  const talleres = D.filterDemo((D.talleres && D.talleres[engName]) || []);
  const jobs = D.filterDemo((D.jobs && D.jobs[engName]) || []);
  const funds = D.filterDemo((D.funds && D.funds[engName]) || []);
  const policies = (D.policies && D.policies[engName]) || [];
  const opinion = D.opinion && D.opinion[engName];
  const lawyers = D.filterDemo((D.lawyers || []).filter(l => l.country === es));

  const stats = [
    works.length && [works.length, works.length === 1 ? "obra" : "obras"],
    spaces.length && [spaces.length, "espacios"],
    talleres.length && [talleres.length, "talleres"],
    jobs.length && [jobs.length, "perfiles"],
    funds.length && [funds.length, "fondos"],
    policies.length && [policies.length, policies.length === 1 ? "ley" : "leyes"],
    lawyers.length && [lawyers.length, lawyers.length === 1 ? "abogada/o" : "abogadas/os"],
  ].filter(Boolean);

  const onlyOpinion = !works.length && !spaces.length && !talleres.length &&
    !jobs.length && !funds.length && !policies.length && !lawyers.length;

  useEffect(() => { window.scrollTo(0, 0); }, [engName]);

  return (
    <main className="hub">
      <div className="crumb">
        <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Mapa</a>
        <span className="crumb-sep">/</span>
        <span className="crumb-here">{es}</span>
      </div>

      <header className="ct-head">
        <div className="ct-head-main">
          <p className="kicker">{meta ? meta.tag : (opinion ? "Iberoamérica · " + opinion.ciudad : "Iberoamérica")}</p>
          <h1 className="ct-title">{es}</h1>
          {meta && meta.intro && <p className="ct-intro">{meta.intro}</p>}
          {stats.length > 0 &&
            <p className="hub-stats">
              {stats.map(([n, l], i) => (
                <span key={i} className="hub-stat"><b>{n}</b> {l}</span>
              ))}
            </p>}
        </div>
        <a className="back-map" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
          ← Volver al mapa
        </a>
      </header>

      {works.length > 0 &&
        <section className="hub-sec">
          <div className="sec-head">
            <h2 className="sec-title">En cartelera</h2>
            <span className="sec-meta">{works.length} obras</span>
          </div>
          <div className="works-grid">
            {works.map(w => (
              <article key={w.id} className="work-card" onClick={() => onOpenWork(engName, w.id)}>
                <Slot id={"ph-" + w.id} ratio="3 / 4" label="Fotografía" lock />
                <div className="wc-body">
                  {w.demo && <DemoTag />}
                  <span className="wc-disc">{w.discipline}</span>
                  <h3 className="wc-title">{w.title}</h3>
                  <p className="wc-comp">{w.company || w.venue}</p>
                  <div className="wc-foot">
                    <span>{w.theater || w.city}</span>
                    <span>{w.run || w.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>}

      {opinion &&
        <section className="hub-sec hub-opinion">
          <div className="sec-head">
            <h2 className="sec-title">Opinión</h2>
            <a className="sec-meta link" href="#" onClick={(e) => { e.preventDefault(); onGoOpinion(); }}>Leer la columna →</a>
          </div>
          <p className="hub-op-kicker" onClick={onGoOpinion}>{stripHtml(opinion.kicker)}</p>
          <span className="hub-op-city">{opinion.ciudad}</span>
        </section>}

      {spaces.length > 0 &&
        <HubList title="Espacios escénicos" onAll={() => onGoSection("spaces", engName)}
          allLabel="Ver espacios →"
          items={spaces.map(s => ({ t: s.name, s: s.type + " · " + s.city }))} />}

      {talleres.length > 0 &&
        <HubList title="Talleres y formación" onAll={() => onGoSection("talleres", engName)}
          allLabel="Ver talleres →"
          items={talleres.map(t => ({ t: t.title, s: t.teacher + " · " + t.institution }))} />}

      {jobs.length > 0 &&
        <HubList title="Bolsa de trabajo" onAll={() => onGoSection("trabajo", engName)}
          allLabel="Ver perfiles →"
          items={jobs.map(p => ({ t: p.name, s: p.role + " · " + p.city }))} />}

      {funds.length > 0 &&
        <HubList title="Central de fondos" onAll={() => onGoSection("fondos", engName)}
          allLabel="Ver fondos →"
          items={funds.map(f => ({ t: f.name, s: f.org }))} />}

      {policies.length > 0 &&
        <HubList title="Políticas culturales" onAll={() => onGoSection("politicas", engName)}
          allLabel="Ver políticas →"
          items={policies.map(p => ({ t: p.title, s: p.law + " · " + p.year }))} />}

      {lawyers.length > 0 &&
        <HubList title="Centro legal" onAll={() => onGoSection("legal", engName)}
          allLabel="Ver abogadas/os →"
          items={lawyers.map(l => ({ t: l.name, s: l.specialty }))} />}

      {onlyOpinion &&
        <section className="hub-soon">
          <p className="hub-soon-txt">
            Aún estamos cargando la cartelera, los espacios y la formación de <em>{es}</em>.
            Por ahora puedes leer su columna de opinión — pronto habrá mucho más.
          </p>
        </section>}

      <Footer />
    </main>
  );
}

// ---------- FICHA DE OBRA ----------
function WorkView({ engName, workId, onBack, onBackHome, onOpenWork }) {
  const data = D.countries[engName];
  const w = data.works.find(x => x.id === workId);
  const others = D.filterDemo(data.works).filter(x => x.id !== workId).slice(0, 4);

  return (
    <main className="work">
      <div className="crumb">
        <a href="#" onClick={(e) => { e.preventDefault(); onBackHome(); }}>Cartelera</a>
        <span className="crumb-sep">/</span>
        <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>{data.es}</a>
        <span className="crumb-sep">/</span>
        <span className="crumb-here">{w.title}</span>
      </div>

      <article className="work-detail">
        <div className="wd-media">
          <Slot id={"ph-" + w.id} ratio="3 / 4" label="Arrastra la foto de la obra" />
        </div>
        <div className="wd-info">
          <span className="wd-disc">{w.discipline}</span>
          <h1 className="wd-title">{w.title}</h1>
          {w.company && <p className="wd-company">{w.company}</p>}
          <p className="wd-summary">{w.summary}</p>

          <dl className="wd-meta">
            {[
              ["Ciudad", w.city],
              ["Teatro", w.sala ? w.venue + " · " + w.sala : w.venue],
              ["Funciones", w.dates],
              ["Duración", w.duration],
              ["Entradas", w.price],
            ].filter(([, v]) => v).map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>

          <div className="wd-desc">
            {w.description.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="wd-actions">
            <a className="btn btn-solid" href={w.companyUrl} target="_blank" rel="noopener">Comprar entradas</a>
            <a className="btn btn-ghost" href={w.companyUrl} target="_blank" rel="noopener">Ficha oficial</a>
            <a className="btn btn-ghost" href={"https://instagram.com/" + w.instagram.replace("@", "")} target="_blank" rel="noopener">{w.instagram}</a>
          </div>
        </div>
      </article>

      <section className="more">
        <div className="sec-head">
          <h2 className="sec-title">También en {data.es}</h2>
          <a className="sec-meta link" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
            Ver toda la cartelera →
          </a>
        </div>
        <div className="more-grid">
          {others.map(o => (
            <article key={o.id} className="more-card" onClick={() => onOpenWork(engName, o.id)}>
              <Slot id={"ph-" + o.id} ratio="4 / 3" label="Foto" lock />
              <h4 className="more-title">{o.title}</h4>
              <span className="more-meta">{o.discipline} · {o.theater || o.city}</span>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ---------- OPINIÓN ----------
function OpinionHome({ onSelectCountry }) {
  const entries = Object.keys(D.opinion)
    .map(eng => ({ eng, es: D.IBERO[eng], col: D.opinion[eng] }))
    .sort((a, b) => a.es.localeCompare(b.es, "es"));

  return (
    <main className="opinion-home">
      <div className="meta-rule">
        <span>Opinión</span>
        <span className="meta-mid">Columna semanal · Junio 2026</span>
        <span>{entries.length} países en la columna</span>
      </div>

      <section className="hero">
        <div className="hero-text">
          <p className="kicker">Artículos sobre el estado del arte en Iberoamérica</p>
          <h1 className="hero-title">Lo que se dice<br />detrás de<br /><em>cada cartelera.</em></h1>
          <p className="hero-lede">
            Una columna de opinión por país, a partir de lo que está pasando esta semana
            en sus escenarios. Toca un país para leer su columna.
          </p>
        </div>
      </section>

      <section className="index">
        <div className="sec-head">
          <h2 className="sec-title">Columnas por país</h2>
          <span className="sec-meta">Toca un país para leer su columna</span>
        </div>
        <ul className="index-list">
          {entries.map(({ eng, es, col }) => (
            <li key={eng} className="index-row op-row"
                onClick={() => onSelectCountry(eng)} style={{ cursor: "pointer" }}>
              <span className="ix-num">{col.ciudad}</span>
              <span className="ix-name">{es}</span>
              <span className="ix-desc">{col.kicker}</span>
              <span className="ix-state">Leer →</span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}

function OpinionArticle({ engName, onBack }) {
  const es = D.IBERO[engName];
  const col = D.opinion[engName];

  return (
    <main className="opinion-article">
      <div className="crumb">
        <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Opinión</a>
        <span className="crumb-sep">/</span>
        <span className="crumb-here">{es}</span>
      </div>

      <header className="op-head">
        <p className="kicker">{es} · {col.ciudad}</p>
        <h1 className="op-title">{col.kicker}</h1>
        <a className="back-map" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
          ← Volver a Opinión
        </a>
      </header>

      <article className="op-body">
        {col.slides.map((s, i) => (
          <section key={i} className="op-slide">
            {s.headline &&
              <h2 className="op-headline" dangerouslySetInnerHTML={{ __html: s.headline }} />}
            {s.byline && <p className="op-byline">Por {s.byline}</p>}
            {s.lines && s.lines.map((l, j) => <p key={j} className="op-line">{l}</p>)}
          </section>
        ))}
      </article>

      <Footer />
    </main>
  );
}

// ---------- ESPACIOS ----------
function SpacesHome() {
  const order = visibleCountries(D.spaces);
  const total = order.reduce((a, c) => a + D.filterDemo(D.spaces[c]).length, 0);
  return (
    <main className="spaces">
      <div className="meta-rule">
        <span>Espacios escénicos</span>
        <span className="meta-mid">Teatros y salas · Junio 2026</span>
        <span>{total} espacios · {order.length} {order.length === 1 ? "país" : "países"}</span>
      </div>

      <section className="hero">
        <div className="hero-text">
          <p className="kicker">Teatros, salas y espacios alternativos</p>
          <h1 className="hero-title">Dónde late<br />la escena<br /><em>iberoamericana.</em></h1>
          <p className="hero-lede">
            Los espacios que sostienen la cartelera, de los grandes coliseos líricos a los
            galpones reconvertidos. Una primera selección por país.
          </p>
        </div>
      </section>

      {order.map(eng => {
        const list = D.filterDemo(D.spaces[eng]);
        return (
        <section key={eng} className="spaces-country">
          <div className="sec-head">
            <h2 className="sec-title">{D.IBERO[eng]}</h2>
            <span className="sec-meta">{list.length} espacios</span>
          </div>
          <div className="spaces-grid">
            {list.map(s => (
              <article key={s.id} className="space-card">
                <Slot id={"ph-" + s.id} ratio="4 / 3" label="Arrastra la foto del espacio" />
                <div className="space-body">
                  {s.demo && <DemoTag />}
                  <span className="space-type">{s.type}</span>
                  <h3 className="space-name">{s.name}</h3>
                  <p className="space-sum">{s.summary}</p>
                  <dl className="space-meta">
                    <div><dt>Ciudad</dt><dd>{s.city}</dd></div>
                    <div><dt>Inauguración</dt><dd>{s.year}</dd></div>
                    <div><dt>Aforo</dt><dd>{s.capacity}</dd></div>
                    <div><dt>Dirección</dt><dd>{s.address}</dd></div>
                  </dl>
                  <div className="space-actions">
                    <a className="btn btn-ghost" href={s.url} target="_blank" rel="noopener">Sitio oficial</a>
                    <a className="btn btn-ghost" href={"https://instagram.com/" + s.instagram.replace("@", "")} target="_blank" rel="noopener">{s.instagram}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        );
      })}

      <Footer />
    </main>
  );
}

// ---------- TIENDA ----------
function ShopHome() {
  return (
    <main className="shop">
      <div className="meta-rule">
        <span>Tienda</span>
        <span className="meta-mid">Objetos de la comunidad escénica</span>
        <span>{D.shop.length} productos</span>
      </div>

      <section className="hero">
        <div className="hero-text">
          <p className="kicker">Tienda Aplauzo</p>
          <h1 className="hero-title">Llevá<br />el telón<br /><em>contigo.</em></h1>
          <p className="hero-lede">
            Indumentaria, bolsas y libros de la casa. Cada compra sostiene la plataforma
            y a la comunidad escénica iberoamericana.
          </p>
        </div>
      </section>

      <section className="shop-section">
        <div className="sec-head">
          <h2 className="sec-title">Catálogo</h2>
          <span className="sec-meta">Envíos a toda Iberoamérica</span>
        </div>
        <div className="shop-grid">
          {D.shop.map(p => (
            <article key={p.id} className={"product-card" + (p.soon ? " is-soon" : "")}>
              <Slot id={"ph-" + p.id} ratio="1 / 1" label="Arrastra la foto del producto" />
              <div className="product-body">
                <div className="product-top">
                  <span className="product-type">{p.type}</span>
                  <span className="product-price">{p.price}</span>
                </div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-sum">{p.summary}</p>
                {p.options &&
                  <div className="product-options">
                    <span className="po-label">{p.optionLabel || "Opciones"}</span>
                    <div className="po-chips">
                      {p.options.map(o => <span key={o} className="po-chip">{o}</span>)}
                    </div>
                  </div>}
                {p.soon
                  ? <button className="btn btn-ghost product-add" disabled>Próximamente</button>
                  : <button className="btn btn-solid product-add">Añadir al carrito</button>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ---------- helpers de sección por país ----------
const TRES = ["Chile", "Argentina", "Spain"];

function CountryTabs({ value, onChange, countries }) {
  const list = countries || TRES;
  return (
    <div className="filters">
      <span className="filters-label">País</span>
      <div className="chips">
        {list.map(c => (
          <button key={c} className={"chip" + (c === value ? " on" : "")}
            onClick={() => onChange(c)}>{D.IBERO[c] || c}</button>
        ))}
      </div>
    </div>
  );
}

function SectionHero({ kicker, title, lede, meta }) {
  return (
    <React.Fragment>
      <div className="meta-rule">
        <span>{meta[0]}</span>
        <span className="meta-mid">{meta[1]}</span>
        <span>{meta[2]}</span>
      </div>
      <section className="hero">
        <div className="hero-text">
          <p className="kicker">{kicker}</p>
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="hero-lede">{lede}</p>
        </div>
      </section>
    </React.Fragment>
  );
}

// ---------- TALLERES ----------
function TalleresHome({ initial }) {
  const countries = visibleCountries(D.talleres);
  const [c, setC] = useState(
    initial && D.talleres[initial] ? initial
      : (countries.indexOf("Chile") >= 0 ? "Chile" : (countries[0] || "Chile")));
  const list = D.filterDemo(D.talleres[c] || []);
  const total = countries.reduce((a, k) => a + D.filterDemo(D.talleres[k] || []).length, 0);
  return (
    <main className="section-view">
      <SectionHero kicker="Talleres y formación"
        title={"Aprender<br />haciendo,<br /><em>en escena.</em>"}
        lede="Una primera selección de talleres en curso en Chile, Argentina y España, impartidos en espacios de referencia."
        meta={["Talleres y formación", "Temporada 2026",
          total > 0 ? total + (total === 1 ? " taller · " : " talleres · ") + countries.length + (countries.length === 1 ? " país" : " países") : "Próximamente"]} />
      {countries.length > 0 && <CountryTabs value={c} onChange={setC} countries={countries} />}
      {list.length > 0 ? (
        <div className="taller-grid">
          {list.map(t => (
            <article key={t.id} className="taller-card">
              {t.demo && <DemoTag />}
              <span className="tk-disc">{t.discipline} · {t.modality}</span>
              <h3 className="tk-title">{t.title}</h3>
              <p className="tk-sum">{t.summary}</p>
              <p className="tk-teacher">Con {t.teacher}<br /><span>{t.institution} · {t.city}</span></p>
              <dl className="tk-meta">
                <div><dt>Horario</dt><dd>{t.schedule}</dd></div>
                <div><dt>Inicio</dt><dd>{t.start}</dd></div>
                <div><dt>Duración</dt><dd>{t.duration}</dd></div>
                <div><dt>Nivel</dt><dd>{t.level}</dd></div>
                <div><dt>Valor</dt><dd>{t.price}</dd></div>
              </dl>
              <a className="btn btn-ghost" href={t.url} target="_blank" rel="noopener">Inscribirse</a>
            </article>
          ))}
        </div>
      ) : (
        <SoonNote>
          Estamos reuniendo los talleres y la formación que se imparten en los espacios
          de referencia de Iberoamérica. Pronto habrá mucho más para inscribirse.
        </SoonNote>
      )}
      <Footer />
    </main>
  );
}

// ---------- BOLSA DE TRABAJO ----------
function TrabajoHome({ initial }) {
  const [c, setC] = useState(initial && D.jobs[initial] ? initial : "Chile");
  const list = D.filterDemo(D.jobs[c] || []);
  const total = TRES.reduce((a, k) => a + D.filterDemo(D.jobs[k] || []).length, 0);
  return (
    <main className="section-view">
      <SectionHero kicker="Bolsa de trabajo"
        title={"Quien sostiene<br />la escena,<br /><em>por dentro.</em>"}
        lede="Técnicos, talleristas, docentes y artistas disponibles para tu próximo proyecto. Perfiles de ejemplo."
        meta={["Bolsa de trabajo", "Perfiles disponibles",
          total > 0 ? total + (total === 1 ? " perfil · 3 países" : " perfiles · 3 países") : "Próximamente"]} />
      {total > 0 && <CountryTabs value={c} onChange={setC} />}
      {list.length > 0 ? (
        <div className="job-grid">
          {list.map(p => (
            <article key={p.id} className="job-card">
              <div className="job-photo"><Avatar name={p.name} /></div>
              <div className="job-body">
                {p.demo && <DemoTag />}
                <span className="job-role">{p.role}</span>
                <h3 className="job-name">{p.name}</h3>
                <p className="job-loc">{p.city} · {p.years} años de oficio</p>
                <p className="job-bio">{p.bio}</p>
                <div className="job-skills">
                  {p.skills.map(s => <span key={s} className="job-skill">{s}</span>)}
                </div>
                <div className="job-foot">
                  <span className={"job-avail" + (/Disponible|abiertos/i.test(p.available) ? " on" : "")}>{p.available}</span>
                  <a className="job-ig" href={"https://instagram.com/" + p.instagram.replace("@", "")} target="_blank" rel="noopener">{p.instagram}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <SoonNote>
          Estamos sumando a las técnicas, docentes y artistas que sostienen la escena,
          por dentro. Pronto vas a poder encontrar aquí perfiles para tu próximo proyecto.
        </SoonNote>
      )}
      <Footer />
    </main>
  );
}

// ---------- CENTRAL DE FONDOS ----------
function FondosHome({ initial }) {
  const countries = visibleCountries(D.funds);
  const [c, setC] = useState(
    initial && D.funds[initial] ? initial
      : (countries.indexOf("Chile") >= 0 ? "Chile" : (countries[0] || "Chile")));
  const list = D.filterDemo(D.funds[c] || []);
  const total = countries.reduce((a, k) => a + D.filterDemo(D.funds[k] || []).length, 0);
  return (
    <main className="section-view">
      <SectionHero kicker="Central de fondos"
        title={"El dinero que<br />hace posible<br /><em>la obra.</em>"}
        lede="Fondos públicos de fomento a las artes escénicas, reunidos por país. Información oficial verificada."
        meta={["Central de fondos", "Convocatorias 2026",
          total > 0 ? total + (total === 1 ? " fondo · " : " fondos · ") + countries.length + (countries.length === 1 ? " país" : " países") : "Próximamente"]} />
      {countries.length > 0 && <CountryTabs value={c} onChange={setC} countries={countries} />}
      {list.length > 0 ? (
        <div className="fund-list">
          {list.map(f => (
            <article key={f.id} className="fund-card">
              {f.demo && <DemoTag />}
              <div className="fund-head">
                <div>
                  <span className="fund-scope">{f.scope} · {f.deadline}</span>
                  <h3 className="fund-name">{f.name}</h3>
                  <p className="fund-org">{f.org}</p>
                </div>
                <a className="btn btn-ghost" href={f.url} target="_blank" rel="noopener">Ir al fondo</a>
              </div>
              <p className="fund-sum">{f.summary}</p>
              <div className="fund-lines">
                {f.lines.map(l => <span key={l} className="fund-line">{l}</span>)}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <SoonNote>
          Estamos reuniendo los fondos públicos de fomento a las artes escénicas de cada país.
          Muy pronto vas a poder consultar aquí convocatorias, becas y apoyos.
        </SoonNote>
      )}
      <Footer />
    </main>
  );
}

// ---------- POLÍTICAS CULTURALES ----------
function PoliticasHome({ initial }) {
  const [c, setC] = useState(initial && D.policies[initial] ? initial : "Chile");
  const list = D.policies[c];
  return (
    <main className="section-view">
      <SectionHero kicker="Políticas culturales"
        title={"Los derechos<br />que protegen<br /><em>el oficio.</em>"}
        lede="Leyes y marcos que reconocen los derechos de quienes trabajan en las artes escénicas, por país."
        meta={["Políticas culturales", "Derechos laborales", "9 marcos · 3 países"]} />
      <CountryTabs value={c} onChange={setC} />
      <ul className="policy-list">
        {list.map(p => (
          <li key={p.id} className="policy-row">
            <div className="policy-law">
              <span className="pl-num">{p.law}</span>
              <span className="pl-year">{p.year}</span>
            </div>
            <div className="policy-text">
              <h3 className="pl-title">{p.title}</h3>
              <p className="pl-sum">{p.summary}</p>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}

// ---------- DIRECTORIO ----------
function DirectorioHome() {
  return (
    <main className="section-view">
      <SectionHero kicker="Directorio iberoamericano"
        title={"Las personas<br />detrás de<br /><em>Aplauzo.</em>"}
        lede="El equipo que coordina la plataforma y la red de espacios, compañías y comunidades escénicas."
        meta={["Directorio", "Equipo Aplauzo", D.directory.length + " personas"]} />
      <div className="dir-grid">
        {D.directory.map(m => (
          <article key={m.id} className="dir-card">
            <div className="dir-photo"><Avatar name={m.name} /></div>
            <div className="dir-body">
              <span className="dir-role">{m.role}</span>
              <h3 className="dir-name">{m.name}</h3>
              <p className="dir-bio">{m.bio}</p>
              <a className="dir-mail" href={"mailto:" + m.email}>{m.email}</a>
            </div>
          </article>
        ))}
      </div>
      <Footer />
    </main>
  );
}

// ---------- CENTRO LEGAL (con agendamiento) ----------
function nextBusinessDays(n) {
  const days = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (days.length < n) {
    d.setDate(d.getDate() + 1);
    const wd = d.getDay();
    if (wd !== 0 && wd !== 6) days.push(new Date(d));
  }
  return days;
}
const DOW = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const MON = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const SLOTS = ["10:00", "11:30", "16:00", "17:30"];

function Scheduler({ lawyer, onClose }) {
  const days = useMemo(() => nextBusinessDays(6), [lawyer.id]);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="sched">
        <div className="sched-done">
          <span className="sched-check">✓</span>
          <h3 className="sched-done-title">Hora confirmada</h3>
          <p className="sched-done-meta">
            {lawyer.name} · {DOW[day.getDay()]} {day.getDate()} {MON[day.getMonth()]} · {time} h
          </p>
          <p className="sched-done-note">Recibirás un correo de confirmación con el enlace de la videollamada.</p>
          <div className="sched-actions">
            <button className="btn btn-ghost" onClick={() => { setDone(false); setDay(null); setTime(null); }}>Agendar otra</button>
            <button className="btn btn-solid" onClick={onClose}>Listo</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sched">
      <div className="sched-head">
        <div>
          <span className="sched-k">Agendar hora con</span>
          <h3 className="sched-name">{lawyer.name}</h3>
          <p className="sched-spec">{lawyer.specialty}</p>
        </div>
        <button className="sched-close" onClick={onClose} aria-label="Cerrar">✕</button>
      </div>

      <span className="sched-label">Elige un día</span>
      <div className="sched-days">
        {days.map((d, i) => (
          <button key={i} className={"sched-day" + (day && d.getTime() === day.getTime() ? " on" : "")}
            onClick={() => { setDay(d); setTime(null); }}>
            <span className="sd-dow">{DOW[d.getDay()]}</span>
            <span className="sd-num">{d.getDate()}</span>
            <span className="sd-mon">{MON[d.getMonth()]}</span>
          </button>
        ))}
      </div>

      <span className="sched-label">{day ? "Elige una hora" : "Primero elige un día"}</span>
      <div className="sched-times">
        {SLOTS.map(s => (
          <button key={s} disabled={!day}
            className={"sched-time" + (time === s ? " on" : "")}
            onClick={() => setTime(s)}>{s}</button>
        ))}
      </div>

      <button className="btn btn-solid sched-confirm" disabled={!day || !time}
        onClick={() => setDone(true)}>
        {day && time ? `Confirmar · ${DOW[day.getDay()]} ${day.getDate()} ${MON[day.getMonth()]} · ${time} h` : "Confirmar hora"}
      </button>
    </div>
  );
}

function LegalHome() {
  const [sel, setSel] = useState(null);
  const lawyers = D.filterDemo(D.lawyers);
  const lawyer = lawyers.find(l => l.id === sel);
  return (
    <main className="section-view">
      <SectionHero kicker="Centro legal"
        title={"Asesoría para<br />proteger<br /><em>tu trabajo.</em>"}
        lede="Abogadas y abogados especializados en derechos de artistas. Reserva una hora en línea. Perfiles de ejemplo."
        meta={["Centro legal", "Asesoría especializada",
          lawyers.length > 0 ? lawyers.length + " profesionales" : "Próximamente"]} />
      {lawyers.length > 0 ? (
        <div className="legal-grid">
          {lawyers.map(l => (
            <article key={l.id} className={"legal-card" + (sel === l.id ? " on" : "")}>
              <div className="legal-photo"><Avatar name={l.name} /></div>
              <div className="legal-body">
                {l.demo && <DemoTag />}
                <span className="legal-spec">{l.specialty}</span>
                <h3 className="legal-name">{l.name}</h3>
                <p className="legal-loc">{l.city}, {l.country} · {l.years} años</p>
                <p className="legal-bio">{l.bio}</p>
                <p className="legal-langs">{l.langs.join(" · ")}</p>
                <button className="btn btn-solid legal-book" onClick={() => setSel(l.id)}>Agendar hora</button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <SoonNote>
          Estamos sumando a las abogadas y abogados especializados en derechos de artistas.
          Muy pronto vas a poder reservar aquí una hora de asesoría en línea.
        </SoonNote>
      )}
      {lawyer &&
        <div className="sched-overlay" onClick={(e) => { if (e.target === e.currentTarget) setSel(null); }}>
          <Scheduler lawyer={lawyer} onClose={() => setSel(null)} />
        </div>}
      <Footer />
    </main>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div className="foot-brand">
          <span className="foot-logo">Aplauzo<span className="logo-dot">.</span></span>
          <p className="foot-tag">La casa común de las artes escénicas iberoamericanas.</p>
        </div>
        <div className="foot-cols">
          <div className="foot-col">
            <span className="fc-head">Explorar</span>
            <a href="#">Cartelera</a><a href="#">Espacios</a><a href="#">Talleres</a><a href="#">Directorio</a>
          </div>
          <div className="foot-col">
            <span className="fc-head">Comunidad</span>
            <a href="#">Bolsa de trabajo</a><a href="#">Central de fondos</a><a href="#">Centro legal</a>
          </div>
          <div className="foot-col">
            <span className="fc-head">Aplauzo</span>
            <a href="#">Sobre el proyecto</a><a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("aplauzo:join")); }}>Únete</a><a href={"mailto:bienvenido@aplauzo.art"}>Contacto</a>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Aplauzo · Iberoamérica</span>
        <span>Hecho para la escena</span>
      </div>
    </footer>
  );
}

// ---------- APP ----------
function App() {
  const [view, setView] = useState({ name: "home" });
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const { user, login, logout } = useAuth();

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  useEffect(() => {
    const onJoin = () => setShowJoin(true);
    window.addEventListener("aplauzo:join", onJoin);
    return () => window.removeEventListener("aplauzo:join", onJoin);
  }, []);

  useEffect(() => {
    const p = PAPERS[t.paper] || PAPERS["Cálido"];
    const r = document.documentElement.style;
    r.setProperty("--paper", p.paper);
    r.setProperty("--paper-2", p.paper2);
    r.setProperty("--land", p.land);
    r.setProperty("--ibero", p.ibero);
    r.setProperty("--ibero-h", p.iberoH);
  }, [t.paper]);

  useEffect(() => {
    document.documentElement.style.setProperty("--display", "'" + t.display + "', Georgia, serif");
  }, [t.display]);

  const goHome = () => setView({ name: "home" });
  const goCountry = (engName) => setView({ name: "country", engName });
  const goSection = (section, engName) => setView({ name: section, engName });
  const goWork = (engName, workId) => setView({ name: "work", engName, workId });
  const goOpinion = () => setView({ name: "opinion" });
  const goOpinionArticle = (engName) => setView({ name: "opinion-article", engName });
  const goSpaces = () => setView({ name: "spaces" });
  const goShop = () => setView({ name: "shop" });
  const navigateTo = (short) => {
    if (short === "Cartelera") goHome();
    else if (short === "Opinión") goOpinion();
    else if (short === "Espacios") goSpaces();
    else if (short === "Tienda") goShop();
    else if (short === "Talleres") setView({ name: "talleres" });
    else if (short === "Trabajo") setView({ name: "trabajo" });
    else if (short === "Fondos") setView({ name: "fondos" });
    else if (short === "Legal") setView({ name: "legal" });
    else if (short === "Directorio") setView({ name: "directorio" });
    else if (short === "Políticas") setView({ name: "politicas" });
  };

  return (
    <div className="app">
      <Masthead onHome={goHome} onNavigate={navigateTo}
        onSearch={() => setShowSearch(true)}
        user={user} onLogin={() => setShowLogin(true)} onLogout={logout} />
      {view.name === "home" &&
        <Home onSelectCountry={goCountry} onOpenWork={goWork} onNavigate={navigateTo} />}
      {view.name === "opinion" &&
        <OpinionHome onSelectCountry={goOpinionArticle} />}
      {view.name === "opinion-article" &&
        <OpinionArticle engName={view.engName} onBack={goOpinion} />}
      {view.name === "spaces" &&
        <SpacesHome />}
      {view.name === "shop" &&
        <ShopHome />}
      {view.name === "talleres" && <TalleresHome initial={view.engName} />}
      {view.name === "trabajo" && <TrabajoHome initial={view.engName} />}
      {view.name === "fondos" && <FondosHome initial={view.engName} />}
      {view.name === "legal" && <LegalHome />}
      {view.name === "directorio" && <DirectorioHome />}
      {view.name === "politicas" && <PoliticasHome initial={view.engName} />}
      {view.name === "country" &&
        <CountryHub engName={view.engName} onBack={goHome} onOpenWork={goWork}
          onGoSection={goSection} onGoOpinion={() => goOpinionArticle(view.engName)} />}
      {view.name === "work" &&
        <WorkView engName={view.engName} workId={view.workId}
          onBack={() => goCountry(view.engName)} onBackHome={goHome} onOpenWork={goWork} />}

      {showSearch &&
        <SearchOverlay onClose={() => setShowSearch(false)}
          onGo={(nav) => setView(nav)} />}
      {showLogin &&
        <LoginModal onClose={() => setShowLogin(false)} onAuth={login} />}
      {showJoin &&
        <JoinModal onClose={() => setShowJoin(false)} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Atmósfera" />
        <TweakRadio label="Tono del papel" value={t.paper}
          options={["Cálido", "Frío", "Papel blanco"]}
          onChange={(v) => setTweak("paper", v)} />
        <TweakSection label="Tipografía" />
        <TweakSelect label="Titulares" value={t.display}
          options={["Cormorant Garamond", "Playfair Display", "EB Garamond"]}
          onChange={(v) => setTweak("display", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
