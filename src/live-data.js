// Aplauzo — capa de fusión: mezcla los envíos APROBADOS de Supabase con
// los datos semilla (window.APLAUZO), sin tocar los componentes de render.
// Expone window.APLAUZO_READY (promesa) que app.jsx espera antes de montar.

window.APLAUZO_READY = (async function mergeApproved() {
  const D = window.APLAUZO;
  if (!D || !window.SB) return { merged: 0, ok: false };

  try {
    const { data, error } = await window.SB
      .from("submissions")
      .select("id,type,country,payload,images,created_at")
      .eq("status", "approved")
      .order("created_at", { ascending: false });
    if (error) throw error;

    let merged = 0;
    (data || []).forEach(row => {
      const p = Object.assign({}, row.payload || {});
      p.id = p.id || ("sub-" + row.id);
      if (row.images && row.images.length) {
        p.images = row.images;
        if (!p.image) p.image = row.images[0];
      }
      const c = row.country;

      switch (row.type) {
        case "obra":
          if (!D.countries[c]) {
            const es = (D.IBERO && D.IBERO[c]) || c;
            D.countries[c] = { es, tag: es, intro: "", cities: [], works: [] };
          }
          if (!Array.isArray(D.countries[c].works)) D.countries[c].works = [];
          D.countries[c].works.unshift(p);
          break;
        case "taller":
          D.talleres = D.talleres || {};
          (D.talleres[c] = D.talleres[c] || []).unshift(p);
          break;
        case "espacio":
          D.spaces = D.spaces || {};
          p.country = c;
          (D.spaces[c] = D.spaces[c] || []).unshift(p);
          break;
        case "trabajo":
          D.jobs = D.jobs || {};
          (D.jobs[c] = D.jobs[c] || []).unshift(p);
          break;
        case "directorio":
          D.directory = D.directory || [];
          p.country = (D.IBERO && D.IBERO[c]) || c;
          D.directory.unshift(p);
          break;
        default:
          return;
      }
      merged++;
    });

    return { merged, ok: true };
  } catch (e) {
    console.warn("[Aplauzo] No se pudieron cargar los envíos aprobados:", e.message);
    return { merged: 0, ok: false };
  }
})();
