// Aplauzo — búsqueda global, login y mascota
const SA_D = window.APLAUZO;

// ---------- índice de búsqueda (todo el sitio) ----------
function buildSearchIndex() {
  const out = [];
  const add = (title, subtitle, section, nav) => out.push({ title, subtitle, section, nav });
  const name = (c) => SA_D.IBERO[c] || c;

  Object.keys(SA_D.countries).forEach(c =>
    SA_D.filterDemo(SA_D.countries[c].works).forEach(w =>
      add(w.title, (w.company || w.venue) + (w.theater ? " · " + w.theater : ""),
        "Cartelera · " + name(c), { name: "work", engName: c, workId: w.id })));

  if (SA_D.spaces) Object.keys(SA_D.spaces).forEach(c =>
    SA_D.spaces[c].forEach(s =>
      add(s.name, s.type + " · " + s.city, "Espacios · " + name(c), { name: "spaces" })));

  if (SA_D.talleres) Object.keys(SA_D.talleres).forEach(c =>
    SA_D.filterDemo(SA_D.talleres[c]).forEach(t =>
      add(t.title, t.teacher + " · " + t.institution, "Talleres · " + name(c), { name: "talleres" })));

  if (SA_D.jobs) Object.keys(SA_D.jobs).forEach(c =>
    SA_D.filterDemo(SA_D.jobs[c]).forEach(p =>
      add(p.name, p.role + " · " + p.city, "Trabajo · " + name(c), { name: "trabajo" })));

  if (SA_D.funds) Object.keys(SA_D.funds).forEach(c =>
    SA_D.filterDemo(SA_D.funds[c]).forEach(f =>
      add(f.name, f.org, "Fondos · " + name(c), { name: "fondos" })));

  if (SA_D.policies) Object.keys(SA_D.policies).forEach(c =>
    SA_D.policies[c].forEach(p =>
      add(p.title, p.law + " · " + p.year, "Políticas · " + name(c), { name: "politicas" })));

  if (SA_D.lawyers) SA_D.filterDemo(SA_D.lawyers).forEach(l =>
    add(l.name, l.specialty, "Centro legal · " + l.country, { name: "legal" }));

  if (SA_D.directory) SA_D.directory.forEach(m =>
    add(m.name, m.role + " · " + m.email, "Directorio", { name: "directorio" }));

  if (SA_D.shop) SA_D.shop.forEach(p =>
    add(p.name, p.type + " · " + p.price, "Tienda", { name: "shop" }));

  if (SA_D.opinion) Object.keys(SA_D.opinion).forEach(c => {
    const o = SA_D.opinion[c];
    add("Opinión: " + name(c), (o.kicker || "").replace(/<[^>]+>/g, ""),
      "Opinión · " + o.ciudad, { name: "opinion-article", engName: c });
  });

  return out;
}

const SA_norm = (s) => (s || "").toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// ---------- overlay de búsqueda ----------
function SearchOverlay({ onClose, onGo }) {
  const index = React.useMemo(buildSearchIndex, []);
  const [q, setQ] = React.useState("");
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef(null);

  React.useEffect(() => { if (inputRef.current) inputRef.current.focus(); }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = React.useMemo(() => {
    const nq = SA_norm(q).trim();
    if (!nq) return [];
    const tokens = nq.split(/\s+/);
    return index
      .map(it => {
        const hay = SA_norm(it.title + " " + it.subtitle + " " + it.section);
        const hit = tokens.every(tk => hay.includes(tk));
        const titleHit = SA_norm(it.title).includes(nq);
        return hit ? { it, score: titleHit ? 2 : 1 } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 24)
      .map(x => x.it);
  }, [q, index]);

  React.useEffect(() => { setActive(0); }, [q]);

  const choose = (it) => { onGo(it.nav); onClose(); };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && results[active]) { choose(results[active]); }
  };

  return (
    <div className="ov" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="search-panel">
        <div className="search-bar">
          <span className="search-ico" aria-hidden="true">⌕</span>
          <input ref={inputRef} className="search-input" value={q}
            onChange={(e) => setQ(e.target.value)} onKeyDown={onKeyDown}
            placeholder="Busca obras, espacios, talleres, personas…" />
          <button className="search-close" onClick={onClose}>Esc</button>
        </div>

        {!q.trim() &&
          <div className="search-empty">
            <div className="search-intro">
              <p className="cse-big">¿Qué buscas en la escena?</p>
              <p className="cse-sub">Obras, teatros, talleres, fondos, abogadas, productos de la tienda… todo Aplauzo, en un solo lugar.</p>
            </div>
          </div>}

        {q.trim() && results.length === 0 &&
          <div className="search-none">
            <p>No encontramos nada para <em>«{q}»</em>.</p>
            <span>Prueba con el nombre de una obra, un teatro o una ciudad.</span>
          </div>}

        {results.length > 0 &&
          <ul className="search-results">
            {results.map((it, i) => (
              <li key={i}
                className={"search-row" + (i === active ? " on" : "")}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(it)}>
                <span className="sr-title">{it.title}</span>
                <span className="sr-sub">{it.subtitle}</span>
                <span className="sr-sec">{it.section}</span>
              </li>
            ))}
          </ul>}
      </div>
    </div>
  );
}

// ---------- login (Supabase Auth real) ----------
// Normaliza el usuario de Supabase a la forma que usa la interfaz: {id, name, email}.
function SA_shapeUser(u) {
  if (!u) return null;
  const meta = u.user_metadata || {};
  const name = (meta.name || meta.full_name || "").trim() || (u.email || "").split("@")[0];
  return { id: u.id, name, email: u.email };
}

function useAuth() {
  const [user, setUser] = React.useState(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!window.SB) { setReady(true); return; }
    window.SB.auth.getSession().then(({ data }) => {
      setUser(SA_shapeUser(data.session && data.session.user));
      setReady(true);
    });
    const { data: sub } = window.SB.auth.onAuthStateChange((_e, session) => {
      setUser(SA_shapeUser(session && session.user));
    });
    return () => sub && sub.subscription && sub.subscription.unsubscribe();
  }, []);

  const login = () => {};
  const logout = async () => { if (window.SB) await window.SB.auth.signOut(); };
  return { user, login, logout, ready };
}

// Traduce errores comunes de Supabase Auth a español.
function SA_authError(e) {
  const m = (e && e.message) || "Ocurrió un error. Intenta de nuevo.";
  if (/invalid login credentials/i.test(m)) return "Correo o contraseña incorrectos.";
  if (/already registered|already been registered/i.test(m)) return "Ese correo ya tiene una cuenta. Entra en vez de crear una.";
  if (/password should be at least/i.test(m)) return "La contraseña es muy corta (mínimo 6 caracteres).";
  if (/email not confirmed/i.test(m)) return "Aún no confirmas tu correo. Revisa tu bandeja de entrada (y Spam).";
  return m;
}

function LoginModal({ onClose, onAuth }) {
  const [mode, setMode] = React.useState("in"); // in | up
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [notice, setNotice] = React.useState("");

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const valid = email.includes("@") && pass.length >= 6 && (mode === "in" || name.trim());

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || busy) return;
    setErr(""); setNotice("");
    if (!window.SB) { setErr("El backend no está configurado todavía (revisa src/supabase.js)."); return; }
    setBusy(true);
    try {
      if (mode === "up") {
        const { data, error } = await window.SB.auth.signUp({
          email, password: pass, options: { data: { name: name.trim() } },
        });
        if (error) throw error;
        if (data.user && !data.session) {
          setNotice("Te enviamos un correo para confirmar tu cuenta. Ábrelo (revisa Spam) y luego entra.");
          setBusy(false);
          return;
        }
      } else {
        const { error } = await window.SB.auth.signInWithPassword({ email, password: pass });
        if (error) throw error;
      }
      if (onAuth) onAuth();
      onClose();
    } catch (e2) {
      setErr(SA_authError(e2));
      setBusy(false);
    }
  };

  return (
    <div className="ov" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="login-panel">
        <button className="login-x" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="login-grid">
          <div className="login-aside">
            <span className="login-aside-logo">Aplauzo<span className="logo-dot">.</span></span>
            <p className="login-aside-tag">La casa común de las<br />artes escénicas<br />iberoamericanas.</p>
          </div>
          <div className="login-main">
            <span className="kicker">{mode === "in" ? "Bienvenida de vuelta" : "Únete a Aplauzo"}</span>
            <h2 className="login-title">{mode === "in" ? "Entrar" : "Crear cuenta"}</h2>
            <form className="login-form" onSubmit={submit}>
              {mode === "up" &&
                <label className="field">
                  <span>Nombre</span>
                  <input value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre o el de tu compañía" autoFocus />
                </label>}
              <label className="field">
                <span>Correo</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com" autoFocus={mode === "in"} />
              </label>
              <label className="field">
                <span>Contraseña</span>
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}
                  placeholder="Mínimo 6 caracteres" />
              </label>
              {err && <p className="login-err">{err}</p>}
              {notice && <p className="login-notice">{notice}</p>}
              <button className="btn btn-solid login-submit" disabled={!valid || busy} type="submit">
                {busy ? "Un momento…" : (mode === "in" ? "Entrar" : "Crear cuenta")}
              </button>
            </form>
            <p className="login-switch">
              {mode === "in" ? "¿Aún no tienes cuenta? " : "¿Ya tienes cuenta? "}
              <button onClick={() => { setErr(""); setNotice(""); setMode(m => m === "in" ? "up" : "in"); }}>
                {mode === "in" ? "Crear una" : "Entrar"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- "¿Quieres ser parte?" ----------
// El mensaje se entrega por FormSubmit (servicio gratuito) a este correo.
const JOIN_EMAIL = "dschamorro@gmail.com";
const JOIN_ENDPOINT = "https://formsubmit.co/ajax/" + JOIN_EMAIL;

function JoinModal({ onClose }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [kind, setKind] = React.useState("Compañía o colectivo");
  const [msg, setMsg] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const valid = name.trim() && email.includes("@");

  const submit = (e) => {
    e.preventDefault();
    if (!valid || sending) return;
    setSending(true);
    setError("");
    fetch(JOIN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: "Únete a Aplauzo — " + name.trim(),
        Nombre: name.trim(),
        Correo: email.trim(),
        Tipo: kind,
        Mensaje: msg.trim() || "(sin mensaje)",
        _template: "table"
      })
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && (data.success === "true" || data.success === true)) {
          setSent(true);
        } else {
          throw new Error("envío rechazado");
        }
      })
      .catch(() => {
        // Si falla el servicio, usamos el correo del visitante como respaldo.
        const body =
          "Nombre / proyecto: " + name.trim() + "\n" +
          "Correo: " + email.trim() + "\n" +
          "Soy: " + kind + "\n\n" +
          (msg.trim() ? msg.trim() + "\n\n" : "") +
          "— Enviado desde Aplauzo";
        window.location.href = "mailto:" + JOIN_EMAIL +
          "?subject=" + encodeURIComponent("Únete a Aplauzo — " + name.trim()) +
          "&body=" + encodeURIComponent(body);
        setError("No pudimos enviarlo automáticamente. Abrimos tu correo como respaldo.");
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="ov" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="join-panel">
        <button className="login-x" onClick={onClose} aria-label="Cerrar">✕</button>
        {!sent ? (
          <React.Fragment>
            <span className="kicker">Suma tu obra a la plataforma</span>
            <h2 className="login-title">¿Quieres ser parte?</h2>
            <p className="join-lede">
              Compañías, teatros, artistas y docentes: cuéntanos quién eres y qué haces.
              Te escribimos para sumarte a la cartelera iberoamericana.
            </p>
            <form className="login-form" onSubmit={submit}>
              <label className="field">
                <span>Nombre o compañía</span>
                <input value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre o el de tu compañía" autoFocus />
              </label>
              <label className="field">
                <span>Correo</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com" />
              </label>
              <label className="field">
                <span>¿Qué haces?</span>
                <select value={kind} onChange={(e) => setKind(e.target.value)}>
                  <option>Compañía o colectivo</option>
                  <option>Teatro o espacio</option>
                  <option>Artista intérprete</option>
                  <option>Docente o tallerista</option>
                  <option>Técnica o producción</option>
                  <option>Otro</option>
                </select>
              </label>
              <label className="field">
                <span>Cuéntanos (opcional)</span>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows="3"
                  placeholder="Tu obra, tu espacio, lo que quieras compartir…"></textarea>
              </label>
              {error && <p className="join-lede" style={{ color: "#a33" }}>{error}</p>}
              <button className="btn btn-solid login-submit" disabled={!valid || sending} type="submit">
                {sending ? "Enviando…" : "Enviar"}
              </button>
            </form>
          </React.Fragment>
        ) : (
          <div className="join-done">
            <span className="sched-check">✓</span>
            <h3 className="sched-done-title">¡Gracias!</h3>
            <p className="join-done-note">
              Recibimos tu mensaje. Te escribiremos pronto para sumarte
              a la cartelera iberoamericana.
            </p>
            <button className="btn btn-solid" onClick={onClose}>Listo</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { SearchOverlay, LoginModal, JoinModal, useAuth, buildSearchIndex });
