// Aplauzo — publicar contenido (obra / taller / espacio / trabajo / directorio)
// El envío queda 'pending' hasta que el admin lo apruebe en #/admin.

// ---------- esquema de campos por tipo ----------
// Cada campo coincide con la forma que ya consumen los componentes de render
// (ver src/data.js y src/data-sections.js), para que lo aprobado se muestre igual.
const SUB_FIELDS = {
  obra: [
    { name: "title", label: "Título de la obra", required: true },
    { name: "company", label: "Compañía / autor" },
    { name: "discipline", label: "Disciplina", type: "select",
      options: ["Teatro", "Teatro familiar", "Danza", "Circo", "Música", "Performance", "Ópera", "Otra"] },
    { name: "city", label: "Ciudad", required: true },
    { name: "venue", label: "Espacio / teatro", required: true, placeholder: "Ej. GAM · Centro Gabriela Mistral" },
    { name: "theater", label: "Nombre corto del teatro", placeholder: "Ej. GAM" },
    { name: "dates", label: "Fechas y horarios", placeholder: "Ej. 28 may – 7 jun 2026 · ju a sá 19:30" },
    { name: "duration", label: "Duración", placeholder: "Ej. 90 min" },
    { name: "price", label: "Entradas / precio", placeholder: "Ej. Entradas: gam.ticketplus.cl" },
    { name: "instagram", label: "Instagram", placeholder: "@tucuenta" },
    { name: "companyUrl", label: "Enlace (sitio / entradas)", type: "url" },
    { name: "summary", label: "Resumen breve", type: "textarea", required: true },
    { name: "description", label: "Descripción completa", type: "textarea" },
  ],
  taller: [
    { name: "title", label: "Título del taller", required: true },
    { name: "discipline", label: "Disciplina", type: "select",
      options: ["Actuación", "Clown", "Danza", "Teatro físico", "Dramaturgia", "Circo", "Voz", "Otra"] },
    { name: "teacher", label: "Tallerista / profesor", required: true },
    { name: "institution", label: "Institución / espacio", required: true },
    { name: "city", label: "Ciudad", required: true },
    { name: "modality", label: "Modalidad", type: "select", options: ["Presencial", "Online", "Híbrido"] },
    { name: "level", label: "Nivel", type: "select",
      options: ["Todos los niveles", "Principiante", "Intermedio", "Avanzado"] },
    { name: "schedule", label: "Horario", placeholder: "Ej. Mar y jue · 18:30–21:00" },
    { name: "start", label: "Inicio", placeholder: "Ej. Desde 1 jul 2026" },
    { name: "duration", label: "Duración", placeholder: "Ej. 8 semanas" },
    { name: "price", label: "Precio", placeholder: "Ej. $120.000" },
    { name: "url", label: "Enlace de inscripción", type: "url" },
    { name: "summary", label: "Descripción", type: "textarea", required: true },
  ],
  espacio: [
    { name: "name", label: "Nombre del espacio", required: true },
    { name: "type", label: "Tipo", placeholder: "Ej. Centro cultural, sala independiente…", required: true },
    { name: "city", label: "Ciudad", required: true },
    { name: "capacity", label: "Capacidad / salas", placeholder: "Ej. Varias salas · hasta 2.000" },
    { name: "year", label: "Año de apertura" },
    { name: "address", label: "Dirección" },
    { name: "instagram", label: "Instagram", placeholder: "@tucuenta" },
    { name: "url", label: "Sitio web", type: "url" },
    { name: "summary", label: "Resumen breve", type: "textarea", required: true },
    { name: "description", label: "Descripción completa", type: "textarea" },
  ],
  trabajo: [
    { name: "name", label: "Tu nombre", required: true },
    { name: "role", label: "Rol / oficio", required: true, placeholder: "Ej. Diseñadora de iluminación" },
    { name: "discipline", label: "Área", type: "select",
      options: ["Técnica", "Diseño", "Pedagogía", "Actuación", "Dirección", "Producción", "Circo", "Otra"] },
    { name: "city", label: "Ciudad", required: true },
    { name: "years", label: "Años de experiencia", type: "number" },
    { name: "available", label: "Disponibilidad", placeholder: "Ej. Disponible jul–sep" },
    { name: "rate", label: "Tarifa", placeholder: "Ej. A convenir" },
    { name: "skills", label: "Habilidades (separadas por coma)", placeholder: "Iluminación, Operación, Diseño" },
    { name: "instagram", label: "Instagram", placeholder: "@tucuenta" },
    { name: "bio", label: "Bio / presentación", type: "textarea", required: true },
  ],
  directorio: [
    { name: "name", label: "Nombre o compañía", required: true },
    { name: "role", label: "Rol", required: true, placeholder: "Ej. Compañía de teatro, artista, técnico…" },
    { name: "email", label: "Correo de contacto", type: "email" },
    { name: "bio", label: "Descripción", type: "textarea", required: true },
  ],
};

// Campos que en realidad son una lista separada por comas.
const SUB_LIST_FIELDS = { skills: true };

// ---------- lista de países (nombre inglés -> español) ----------
function SUB_countries() {
  const ib = (window.APLAUZO && window.APLAUZO.IBERO) || {};
  return Object.keys(ib)
    .map(eng => ({ eng, es: ib[eng] }))
    .sort((a, b) => a.es.localeCompare(b.es, "es"));
}

// ---------- botón "Publicar" ----------
function PublishButton({ onClick, className }) {
  return (
    <button className={className || "btn btn-line publish-btn"} onClick={onClick}>
      ＋ Publicar
    </button>
  );
}

// ---------- modal de publicación ----------
function SubmitModal({ user, initialType, onClose, onDone }) {
  const types = window.APLAUZO_TYPES || [];
  const [type, setType] = React.useState(initialType || "obra");
  const [country, setCountry] = React.useState("Chile");
  const [values, setValues] = React.useState({});
  const [files, setFiles] = React.useState([]);       // File[]
  const [previews, setPreviews] = React.useState([]); // dataURL[] (solo imágenes)
  const [busy, setBusy] = React.useState(false);
  const [progress, setProgress] = React.useState("");
  const [err, setErr] = React.useState("");
  const [done, setDone] = React.useState(false);

  const fields = SUB_FIELDS[type] || [];
  const countries = React.useMemo(SUB_countries, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && !busy) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [busy]);

  const set = (name, v) => setValues(s => ({ ...s, [name]: v }));

  const onPickFiles = (e) => {
    const picked = Array.from(e.target.files || []).slice(0, 6);
    setFiles(picked);
    Promise.all(picked.map(f => f.type.startsWith("image/")
      ? new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(f); })
      : Promise.resolve(null)
    )).then(setPreviews);
  };

  const missing = fields.filter(f => f.required && !((values[f.name] || "").toString().trim()));
  const canSend = missing.length === 0 && !busy;

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    if (!window.SB) { setErr("El backend no está configurado (revisa src/supabase.js)."); return; }
    if (!user) { setErr("Debes iniciar sesión para publicar."); return; }
    if (!canSend) { setErr("Completa los campos obligatorios."); return; }
    setBusy(true);

    try {
      // 1) subir archivos
      const imageUrls = [];
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        setProgress(`Subiendo archivo ${i + 1} de ${files.length}…`);
        const safe = f.name.replace(/[^\w.\-]+/g, "_");
        const path = `submissions/${user.id}/${crypto.randomUUID()}-${safe}`;
        const { error: upErr } = await window.SB.storage.from("uploads")
          .upload(path, f, { cacheControl: "3600", upsert: false });
        if (upErr) throw upErr;
        const { data: pub } = window.SB.storage.from("uploads").getPublicUrl(path);
        imageUrls.push(pub.publicUrl);
      }

      // 2) armar payload con la forma que espera el render
      setProgress("Guardando…");
      const payload = {};
      fields.forEach(f => {
        let v = values[f.name];
        if (v == null || v === "") return;
        if (SUB_LIST_FIELDS[f.name]) v = v.split(",").map(s => s.trim()).filter(Boolean);
        else if (f.type === "number") v = Number(v);
        payload[f.name] = v;
      });
      // la primera imagen también como campo directo por si alguna tarjeta lo usa
      if (imageUrls.length) payload.image = imageUrls[0];

      // 3) insertar (RLS fuerza pending + author_id)
      const { error: insErr } = await window.SB.from("submissions").insert({
        type, country, author_id: user.id, author_email: user.email,
        status: "pending", payload, images: imageUrls,
      });
      if (insErr) throw insErr;

      setDone(true);
      if (onDone) onDone();
    } catch (e2) {
      setErr((e2 && e2.message) || "No se pudo enviar. Intenta de nuevo.");
    } finally {
      setBusy(false);
      setProgress("");
    }
  };

  if (done) {
    return (
      <div className="ov" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="submit-panel submit-done">
          <button className="login-x" onClick={onClose} aria-label="Cerrar">✕</button>
          <img className="cat-blob-lg" src="cat-blob.png" alt="" />
          <span className="kicker">¡Gracias!</span>
          <h2 className="login-title">Tu envío quedó pendiente de revisión</h2>
          <p className="submit-done-p">
            Lo revisaremos y, si todo está en orden, aparecerá publicado en Aplauzo.
            Puedes ver su estado en <em>«Mis envíos»</em>, dentro de tu menú de usuario.
          </p>
          <button className="btn btn-solid" onClick={onClose}>Listo</button>
        </div>
      </div>
    );
  }

  return (
    <div className="ov" onClick={(e) => { if (e.target === e.currentTarget && !busy) onClose(); }}>
      <div className="submit-panel">
        <button className="login-x" onClick={onClose} aria-label="Cerrar" disabled={busy}>✕</button>
        <span className="kicker">Publicar en Aplauzo</span>
        <h2 className="login-title">Comparte tu {typeLabel(type).toLowerCase()}</h2>

        <div className="submit-typebar">
          {types.map(t => (
            <button key={t.key} type="button"
              className={"submit-typebtn" + (t.key === type ? " on" : "")}
              onClick={() => { setType(t.key); setValues({}); }}>
              {t.label}
            </button>
          ))}
        </div>

        <form className="submit-form" onSubmit={submit}>
          <label className="field">
            <span>País *</span>
            <select value={country} onChange={e => setCountry(e.target.value)}>
              {countries.map(c => <option key={c.eng} value={c.eng}>{c.es}</option>)}
            </select>
          </label>

          {fields.map(f => (
            <label className="field" key={f.name}>
              <span>{f.label}{f.required ? " *" : ""}</span>
              {f.type === "textarea" ? (
                <textarea rows={4} value={values[f.name] || ""}
                  placeholder={f.placeholder || ""}
                  onChange={e => set(f.name, e.target.value)} />
              ) : f.type === "select" ? (
                <select value={values[f.name] || ""} onChange={e => set(f.name, e.target.value)}>
                  <option value="">—</option>
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input type={f.type === "number" ? "number" : (f.type === "url" ? "url" : (f.type === "email" ? "email" : "text"))}
                  value={values[f.name] || ""} placeholder={f.placeholder || ""}
                  onChange={e => set(f.name, e.target.value)} />
              )}
            </label>
          ))}

          <label className="field">
            <span>Fotos y documentos (hasta 6)</span>
            <input type="file" multiple accept="image/*,.pdf"
              onChange={onPickFiles} />
          </label>

          {files.length > 0 &&
            <div className="submit-previews">
              {files.map((f, i) => (
                <div className="submit-thumb" key={i}>
                  {previews[i]
                    ? <img src={previews[i]} alt="" />
                    : <span className="submit-doc">📄 {f.name}</span>}
                </div>
              ))}
            </div>}

          {err && <p className="login-err">{err}</p>}
          {progress && <p className="login-notice">{progress}</p>}

          <button className="btn btn-solid submit-send" type="submit" disabled={!canSend}>
            {busy ? "Enviando…" : "Enviar para revisión"}
          </button>
          <p className="submit-hint">Tu envío no se publica de inmediato: pasa por una revisión antes de aparecer.</p>
        </form>
      </div>
    </div>
  );
}

function typeLabel(key) {
  const t = (window.APLAUZO_TYPES || []).find(x => x.key === key);
  return t ? t.label : key;
}

Object.assign(window, { PublishButton, SubmitModal, SUB_FIELDS, typeLabel });
