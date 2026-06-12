# PROGRESO — APLAUZO

Bitácora de avance del proyecto. Cada sesión registra aquí lo hecho y lo que sigue,
para retomar sin perder contexto.

---

## Roadmap general
1. **Separar contenido real del ficticio en los datos** ← (Paso 1, hecho en esta sesión)
2. Captura de correos real (newsletter, reemplazar el `mailto:`)
3. Formulario de autocarga de cartelera para compañías
4. Migrar datos hardcodeados a Supabase + build real con Vite
5. Despliegue en Vercel/Netlify con dominio aplauzo.art

---

## Sesión 2026-06-11 — Paso 1: separación real / ficticio

### Qué se hizo
Se introdujo un **flag global de contenido de muestra** que permite mostrar u ocultar
todo el contenido ficticio en la app, sin borrar ningún dato. El contenido ficticio
queda etiquetado de forma discreta y, al ocultarlo, ninguna sección queda rota ni vacía
sin mensaje editorial.

**1. Flag y helper** — [src/data.js](src/data.js)
- `window.APLAUZO.config = { showDemoContent: true }` (por defecto **encendido**).
- `window.APLAUZO.filterDemo(arr)`: devuelve la lista filtrada según el flag; con el flag
  apagado oculta los registros con `demo: true`. No muta los datos originales.

**2. Contenido marcado `demo: true`** (45 registros, nada borrado):
- 6 obras de la cartelera de **España** (`countries.Spain.works`).
- 6 obras de la cartelera de **Argentina** (`countries.Argentina.works`).
- 9 **talleres** (Chile, Argentina, España) en [src/data-sections.js](src/data-sections.js).
- 18 perfiles de la **bolsa de trabajo** (`jobs`).
- 6 abogadas/os del **centro legal** (`lawyers`).

**3. Contenido confirmado REAL** (sin marcar, siempre visible):
- Cartelera de **Chile** (10 obras: GAM, Matucana 100, Teatro Mori).
- Los **9 espacios escénicos** (Chile, Argentina, España).
- La **central de fondos** (9 fondos: Fondart, AAEE/Becas Chile Crea, INT, FNA, Proteatro, INAEM…).
- Las **políticas culturales** (9 marcos legales).
- **Opinión** (22 columnas): contenido editorial real; los seudónimos (Cleopatha, Telón
  de Fondo, etc.) son personajes-gato intencionales de la editorial.
- **Directorio** (equipo Aplauzo).
- **Tienda** (catálogo real; ver edición abajo).

**4. Vistas adaptadas** — [src/app.jsx](src/app.jsx)
- Componentes nuevos `DemoTag` («contenido de muestra») y `SoonNote` (estado vacío
  editorial, reutiliza el estilo `.hub-soon` que ya usaba el hub de país).
- `Home`: se filtró el conteo de obras y se hizo robusto el bloque «En cartelera ahora»
  (antes fijaba obras de ES/AR demo y **crasheaba** con el flag apagado; ahora descarta
  las ocultas y rellena con otras visibles).
- `CountryView`, `CountryHub`, `WorkView`: las obras se leen vía `filterDemo`; etiqueta
  de muestra en las tarjetas; estado vacío cuando un país no tiene obras reales.
- `TalleresHome`, `TrabajoHome`, `LegalHome`: lista filtrada, conteo dinámico en el
  encabezado, etiqueta de muestra por tarjeta y `SoonNote` cuando queda vacío.

**5. Buscador** — [src/search-auth.jsx](src/search-auth.jsx): `buildSearchIndex` filtra
obras, talleres, trabajos y abogadas/os con `filterDemo`, para no ofrecer resultados que
lleven a secciones vacías cuando el flag está apagado.

**6. Mapa** — [src/map.jsx](src/map.jsx): el conteo del tooltip usa `filterDemo` (no dice
«6 obras» cuando están ocultas). El coloreado y las etiquetas del mapa **no** cambian
(se basan en la presencia del país, no en el número de obras).

**7. Tienda** — [src/data.js](src/data.js) `window.APLAUZO.shop` (edición de contenido
solicitada en esta sesión):
- Catálogo: polera, totebag «Cartelera», totebag «Telón», **stickers** (nuevo, `USD 6`),
  **chapitas** (nuevo, `USD 5`) y el **libro** como **«Próximamente»** (`soon: true`,
  botón deshabilitado).
- ⚠️ Precios y copys de stickers/chapitas son **propuestos** — revisar y ajustar.

**8. Estilos** — [Aplauzo.html](Aplauzo.html): clases `.demo-tag` (mono, mayúsculas,
borde discreto, color `--ink-2`), `.product-card.is-soon` y `.product-add:disabled`.

### Cómo alternar el flag
El interruptor vive en [src/data.js](src/data.js):

```js
window.APLAUZO.config = { showDemoContent: true };  // true = muestra demo · false = solo real
```

- **`true` (por defecto):** el prototipo se ve poblado; el contenido ficticio lleva la
  etiqueta «contenido de muestra».
- **`false`:** solo contenido real. Cartelera ES/AR, Talleres, Trabajo y Legal muestran
  un texto editorial «pronto habrá mucho más». Espacios, Fondos, Políticas, Opinión,
  Directorio y Tienda quedan intactos.

Para previsualizar sin editar el archivo, en la consola del navegador:
`window.APLAUZO.config.showDemoContent = false` y recargar la vista.

### Cómo verificar
Abrir [Aplauzo.html](Aplauzo.html) en el navegador. Con el flag en `true` todo se ve como
antes (más las etiquetas de muestra y la Tienda actualizada). Cambiar a `false` y recargar:
ninguna sección debe quedar rota ni vacía sin mensaje; Home no debe crashear; el buscador
no debe devolver resultados de muestra.

### Pendiente / próximos pasos
- **Confirmar precios y descripciones** de los productos nuevos de la Tienda (stickers,
  chapitas) y el copy del libro «Próximamente».
- **Regenerar copias derivadas**: `Aplauzo-print.html` y `Aplauzo (offline).html` **no**
  se actualizaron en esta sesión (son artefactos derivados del HTML principal).
- Continuar con el **Paso 2** del roadmap (captura real de correos / newsletter).

---

## Sesión 2026-06-11 (cont.) — Expansión por país + avatares

### Decisiones del usuario
- Expandir a **los 22 países** iberoamericanos: 10 obras + 10 espacios + 10 talleres +
  fondos por país.
- Datos investigados **best-effort**, marcados `demo: true` hasta verificación.
- **Sin carpetas de imágenes** (por licencias y por falta de backend): se usan siluetas
  y placeholders.
- Fotos de personas → **avatar de silueta** en los tonos del sitio.

### Qué se hizo
**1. Avatares de silueta** — [src/app.jsx](src/app.jsx): nuevo componente `Avatar` (SVG
monocromático con `--ibero-h` sobre `--paper-2`) que reemplaza la foto en Centro legal,
Bolsa de trabajo y Directorio. CSS `.avatar` en [Aplauzo.html](Aplauzo.html).

**2. App soporta N países** — [src/app.jsx](src/app.jsx):
- Helper `visibleCountries(byCountry)`: países con contenido visible, ordenados por nombre.
- `SpacesHome`, `TalleresHome`, `FondosHome` ahora iteran países dinámicamente (antes
  fijaban 3); `CountryTabs` acepta una lista de países; conteos dinámicos y `SoonNote`
  cuando una sección queda vacía. Etiqueta de muestra en tarjetas de espacios y fondos.
- `CountryHub` y el buscador filtran también `funds` con `filterDemo`.

**3. Pipeline de contenido por país** (separa lo verificado de lo best-effort):
- `contenido/<País>/datos.json` — **fuente editable** de cada país (obras, espacios,
  talleres, fondos).
- [contenido/_generar.py](contenido/_generar.py) — script (solo librería estándar) que
  lee los JSON y genera:
  - `src/data-paises.js` — asignaciones a `window.APLAUZO`, con `demo: true` forzado.
  - `contenido/<País>/<País>.docx` — documento Word legible (OOXML vía `zipfile`).
- [Aplauzo.html](Aplauzo.html) carga `src/data-paises.js` después de `data-sections.js`.
- Para añadir/editar un país: editar su `datos.json` y correr `python3 contenido/_generar.py`.

**4. Piloto: México** — `contenido/Mexico/datos.json` con 10 obras, 10 espacios (reales:
Bellas Artes, Esperanza Iris, Helénico, Foro Shakespeare, El Milagro, La Teatrería,
Insurgentes, Julio Castillo, Casa del Teatro, Juan Ruiz de Alarcón), 10 talleres y 4
fondos (Sistema de Apoyos/FONCA, EFIARTES, PAICE, PECDA). Todo `demo: true`.

### Validación
- Todo el JSX compila con `@babel/preset-react` (mismo transform del navegador).
- `data-paises.js` pasa `node --check`; el `.docx` es un zip OOXML válido y bien formado.

### Pendiente
- **Verificar** el contenido best-effort de México y quitarle `demo:true` a lo confirmado.
- La carpeta es `contenido/Mexico/` (ASCII) con `México.docx` (con acento) dentro.

---

## Sesión 2026-06-11 (cont.) — Los 22 países completos

### Qué se hizo
Se completó la cartelera de **los 22 países iberoamericanos**. Con el pipeline ya montado
en el piloto de México, se añadieron **18 países más** (cada uno con 10 obras + 10 espacios
+ 10 talleres + 3-4 fondos, todo `demo: true`):

Colombia, Perú, Uruguay, Portugal, Cuba, Brasil, Ecuador, Bolivia, Paraguay, Venezuela,
Costa Rica, Panamá, Guatemala, Honduras, El Salvador, Nicaragua, República Dominicana y
Puerto Rico.

(Chile, España y Argentina ya tenían cartelera en `data.js` y **no** se tocaron: Chile es
contenido real verificado; España y Argentina son el demo curado original.)

### Cifras
- **19 países** generados vía pipeline (México + 18) → **629 registros** de muestra.
- Cada país: `contenido/<País>/datos.json` (fuente editable) + `contenido/<País>/<País>.docx`.
- `src/data-paises.js` regenerado; carga en [Aplauzo.html](Aplauzo.html) tras `data-sections.js`.

### Validación
- Los 19 `datos.json` parsean como JSON válido.
- `src/data-paises.js` pasa `node --check`; los 19 `.docx` son OOXML bien formados.
- Las 19 claves de país coinciden con `window.APLAUZO.IBERO` (incl. `Dominican Rep.`),
  así que enganchan correctamente con el mapa y las columnas de opinión.

### Notas
- Todo el contenido nuevo (incl. **espacios y fondos**, que son instituciones reales) va
  marcado `demo: true` hasta verificación, según lo acordado. Con el flag
  `showDemoContent` apagado, solo queda el contenido real original (Chile, los 9 espacios,
  fondos y políticas verificados).
- Las **obras y talleres** son plausibles pero **no verificados** (cartelera de junio 2026
  no comprobable). Hay que revisarlos país por país y, lo confirmado, quitarle `demo`.
- Para editar: cambiar el `datos.json` del país y correr `python3 contenido/_generar.py`.

### Pendiente
- Verificar y curar el contenido best-effort de los 19 países; quitar `demo` a lo confirmado.
- Avatares de silueta ya aplicados en Legal, Trabajo y Directorio (sesión anterior).
- Regenerar copias derivadas `Aplauzo-print.html` y `Aplauzo (offline).html` (no actualizadas).
