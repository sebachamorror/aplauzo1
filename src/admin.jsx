// Aplauzo — intranet de moderación (#/admin) + "Mis envíos"
// Solo el admin (isAdmin) puede aprobar/rechazar; el servidor lo hace
// cumplir vía RLS, esto es solo la interfaz.

// nombre de país en español
function ADM_countryName(eng) {
  const ib = (window.APLAUZO && window.APLAUZO.IBERO) || {};
  return ib[eng] || eng;
}

function ADM_statusLabel(s) {
  return s === "approved" ? "Aprobado" : s === "rejected" ? "Rechazado" : "Pendiente";
}

// ---------- vista previa de un envío (campos + imágenes) ----------
function SubmissionCard({ row, children }) {
  const p = row.payload || {};
  const fields = (window.SUB_FIELDS && window.SUB_FIELDS[row.type]) || [];
  const imgs = (row.images || []).filter(u => !/\.pdf($|\?)/i.test(u));
  const docs = (row.images || []).filter(u => /\.pdf($|\?)/i.test(u));
  return (
    <article className="adm-card">
      <div className="adm-card-head">
        <span className={"adm-badge adm-" + row.status}>{ADM_statusLabel(row.status)}</span>
        <span className="adm-type">{window.typeLabel ? window.typeLabel(row.type) : row.type}</span>
        <span className="adm-country">{ADM_countryName(row.country)}</span>
        <span className="adm-date mono">{new Date(row.created_at).toLocaleDateString("es")}</span>
      </div>
      <h3 className="adm-title">{p.title || p.name || "(sin título)"}</h3>
      {imgs.length > 0 &&
        <div className="adm-imgs">
          {imgs.map((u, i) => <a key={i} href={u} target="_blank" rel="noreferrer"><img src={u} alt="" /></a>)}
        </div>}
      <dl className="adm-fields">
        {fields.map(f => {
          let v = p[f.name];
          if (v == null || v === "" || f.name === "title" || f.name === "name") return null;
          if (Array.isArray(v)) v = v.join(", ");
          return (<React.Fragment key={f.name}><dt>{f.label}</dt><dd>{String(v)}</dd></React.Fragment>);
        })}
        <dt>Autor</dt><dd>{row.author_email || row.author_id}</dd>
        {docs.length > 0 && <><dt>Documentos</dt><dd>
          {docs.map((u, i) => <a key={i} className="adm-doc" href={u} target="_blank" rel="noreferrer">📄 Documento {i + 1}</a>)}
        </dd></>}
        {row.admin_note && <><dt>Nota</dt><dd>{row.admin_note}</dd></>}
      </dl>
      {children}
    </article>
  );
}

// ---------- panel de moderación (#/admin) ----------
function AdminPanel({ user, onExit }) {
  const [tab, setTab] = React.useState("pending");
  const [rows, setRows] = React.useState(null);
  const [err, setErr] = React.useState("");
  const [busyId, setBusyId] = React.useState(null);

  const authorized = window.isAdmin && window.isAdmin(user);

  const load = React.useCallback(async () => {
    if (!window.SB || !authorized) return;
    setErr("");
    const { data, error } = await window.SB.from("submissions")
      .select("*").eq("status", tab).order("created_at", { ascending: false });
    if (error) { setErr(error.message); setRows([]); }
    else setRows(data || []);
  }, [tab, authorized]);

  React.useEffect(() => { setRows(null); load(); }, [load]);

  const decide = async (row, status) => {
    let note = null;
    if (status === "rejected") {
      note = window.prompt("Motivo del rechazo (opcional, lo verá el autor):", "") || null;
    }
    setBusyId(row.id);
    const { error } = await window.SB.from("submissions")
      .update({ status, admin_note: note, reviewed_at: new Date().toISOString() })
      .eq("id", row.id);
    setBusyId(null);
    if (error) { alert("No se pudo guardar: " + error.message); return; }
    setRows(rs => rs.filter(r => r.id !== row.id));
  };

  if (!authorized) {
    return (
      <div className="adm-wrap">
        <div className="adm-denied">
          <span className="kicker">Intranet</span>
          <h1 className="adm-h1">No autorizado</h1>
          <p>Esta área es solo para el equipo de moderación de Aplauzo.</p>
          <button className="btn btn-line" onClick={onExit}>Volver al inicio</button>
        </div>
      </div>
    );
  }

  const tabs = [["pending", "Pendientes"], ["approved", "Aprobados"], ["rejected", "Rechazados"]];

  return (
    <div className="adm-wrap">
      <header className="adm-header">
        <div>
          <span className="kicker">Intranet · Moderación</span>
          <h1 className="adm-h1">Envíos de la comunidad</h1>
        </div>
        <button className="btn btn-line" onClick={onExit}>← Salir</button>
      </header>

      <nav className="adm-tabs">
        {tabs.map(([k, l]) => (
          <button key={k} className={"adm-tab" + (tab === k ? " on" : "")} onClick={() => setTab(k)}>{l}</button>
        ))}
        <button className="adm-refresh mono" onClick={load}>↻ Actualizar</button>
      </nav>

      {err && <p className="login-err">{err}</p>}
      {rows === null && <p className="adm-empty">Cargando…</p>}
      {rows && rows.length === 0 && <p className="adm-empty">No hay envíos {ADM_statusLabel(tab).toLowerCase()}s.</p>}

      <div className="adm-grid">
        {rows && rows.map(row => (
          <SubmissionCard key={row.id} row={row}>
            <div className="adm-actions">
              {tab !== "approved" &&
                <button className="btn btn-solid" disabled={busyId === row.id}
                  onClick={() => decide(row, "approved")}>Aprobar</button>}
              {tab !== "rejected" &&
                <button className="btn btn-line" disabled={busyId === row.id}
                  onClick={() => decide(row, "rejected")}>Rechazar</button>}
            </div>
          </SubmissionCard>
        ))}
      </div>
    </div>
  );
}

// ---------- "Mis envíos" (cualquier usuario ve los suyos) ----------
function MySubmissions({ user, onClose }) {
  const [rows, setRows] = React.useState(null);
  const [err, setErr] = React.useState("");

  React.useEffect(() => {
    if (!window.SB || !user) return;
    window.SB.from("submissions").select("*")
      .eq("author_id", user.id).order("created_at", { ascending: false })
      .then(({ data, error }) => { if (error) setErr(error.message); else setRows(data || []); });
  }, [user]);

  return (
    <div className="ov" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="submit-panel mine-panel">
        <button className="login-x" onClick={onClose} aria-label="Cerrar">✕</button>
        <span className="kicker">Tu actividad</span>
        <h2 className="login-title">Mis envíos</h2>
        {err && <p className="login-err">{err}</p>}
        {rows === null && !err && <p className="adm-empty">Cargando…</p>}
        {rows && rows.length === 0 &&
          <p className="adm-empty">Aún no has publicado nada. Usa el botón <em>«Publicar»</em> para empezar.</p>}
        <div className="mine-list">
          {rows && rows.map(row => (
            <div className="mine-row" key={row.id}>
              <span className={"adm-badge adm-" + row.status}>{ADM_statusLabel(row.status)}</span>
              <span className="mine-title">{(row.payload && (row.payload.title || row.payload.name)) || "(sin título)"}</span>
              <span className="mine-type mono">{window.typeLabel ? window.typeLabel(row.type) : row.type}</span>
              {row.status === "rejected" && row.admin_note &&
                <span className="mine-note">Motivo: {row.admin_note}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AdminPanel, MySubmissions });
