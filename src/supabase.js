// Aplauzo — cliente Supabase (backend de subidas + moderación)
// ---------------------------------------------------------------------
// CONFIGURACIÓN: reemplaza estos dos valores con los de tu proyecto.
//   Supabase → Project Settings → Data API / API Keys
//   - SUPABASE_URL:  https://xxxxxxxx.supabase.co
//   - SUPABASE_ANON_KEY:  la clave "anon public" (es pública por diseño;
//     la seguridad real vive en las políticas RLS del servidor).
// ---------------------------------------------------------------------
const SUPABASE_URL = "https://vffnesaxdapfancnnyln.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_MOpowge4qVOkJgI6prFfXA_hKZvGUMc";

// Correo(s) del moderador. Debe coincidir con public.is_admin() en
// supabase/schema.sql. Solo controla la interfaz; el servidor manda.
const APLAUZO_ADMINS = ["dschamorro@gmail.com"];

// Tipos de contenido que la gente puede publicar en v1.
window.APLAUZO_TYPES = [
  { key: "obra",       label: "Obra",       section: "Cartelera" },
  { key: "taller",     label: "Taller",     section: "Talleres" },
  { key: "espacio",    label: "Espacio",    section: "Espacios" },
  { key: "trabajo",    label: "Trabajo",    section: "Bolsa de trabajo" },
  { key: "directorio", label: "Directorio", section: "Directorio" },
];

// ¿Está configurado? (para mostrar avisos claros en vez de fallar mudo)
window.SB_CONFIGURED =
  !SUPABASE_URL.includes("TU-PROYECTO") && !SUPABASE_ANON_KEY.includes("TU_ANON");

// Cliente global. Requiere que @supabase/supabase-js se cargue antes.
window.SB = (window.supabase && window.SB_CONFIGURED)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

if (!window.supabase) {
  console.error("[Aplauzo] No se cargó @supabase/supabase-js (revisa el <script> en el HTML).");
} else if (!window.SB_CONFIGURED) {
  console.warn("[Aplauzo] Falta configurar SUPABASE_URL / SUPABASE_ANON_KEY en src/supabase.js. " +
    "El login y las subidas están deshabilitados hasta entonces.");
}

// ¿El usuario dado es moderador?
window.isAdmin = function (user) {
  if (!user || !user.email) return false;
  return APLAUZO_ADMINS.includes(user.email.toLowerCase());
};
