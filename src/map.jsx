// Aplauzo — mapa iberoamericano interactivo (d3 + topojson)
const { useEffect, useRef, useState } = React;

function AplauzoMap({ onSelect, variant }) {
  const wrapRef = useRef(null);
  const tipRef = useRef(null);
  const [features, setFeatures] = useState(null);
  const [err, setErr] = useState(null);

  const IBERO = window.APLAUZO.IBERO;             // englishName -> es
  const HAS = window.APLAUZO.countries;           // englishName -> data

  useEffect(() => {
    let dead = false;
    (async () => {
      try {
        const ATLAS_URL = (window.__resources && window.__resources.worldAtlas)
          || "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
        const res = await fetch(ATLAS_URL);
        const topo = await res.json();
        const geo = topojson.feature(topo, topo.objects.countries);
        if (!dead) setFeatures(geo.features);
      } catch (e) { if (!dead) setErr(e.message); }
    })();
    return () => { dead = true; };
  }, []);

  useEffect(() => {
    if (!features || !wrapRef.current) return;
    const W = 1100, H = 680;
    const proj = d3.geoMercator().center([-38, -2]).scale(178).translate([W / 2, H / 2]);
    const path = d3.geoPath(proj);

    const root = d3.select(wrapRef.current);
    root.selectAll("svg").remove();
    const svg = root.append("svg")
      .attr("viewBox", `0 0 ${W} ${H}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("class", "ap-map-svg");

    const g = svg.append("g");

    const isIbero = (f) => Object.prototype.hasOwnProperty.call(IBERO, f.properties.name);
    const hasWorks = (f) => Object.prototype.hasOwnProperty.call(HAS, f.properties.name);

    g.selectAll("path.country")
      .data(features)
      .join("path")
      .attr("d", path)
      .attr("class", (f) => {
        if (hasWorks(f)) return "country ibero active";
        if (isIbero(f)) return "country ibero";
        return "country dim";
      })
      .on("mousemove", function (event, f) {
        if (!isIbero(f)) return;
        const tip = tipRef.current;
        const rect = wrapRef.current.getBoundingClientRect();
        tip.style.opacity = 1;
        tip.style.left = (event.clientX - rect.left) + "px";
        tip.style.top = (event.clientY - rect.top) + "px";
        const n = hasWorks(f) ? window.APLAUZO.filterDemo(HAS[f.properties.name].works).length : 0;
        tip.querySelector(".tip-name").textContent = IBERO[f.properties.name];
        tip.querySelector(".tip-meta").textContent = n > 0
          ? n + (n === 1 ? " obra en cartelera" : " obras en cartelera")
          : "Próximamente";
      })
      .on("mouseleave", function () { tipRef.current.style.opacity = 0; })
      .on("click", function (event, f) {
        if (!isIbero(f)) return;
        onSelect(f.properties.name);
      });

    // Sin etiquetas fijas: el nombre del país aparece en el tooltip al pasar
    // el mouse o tocar (ver el manejador "mousemove" de arriba). Así el mapa
    // queda limpio, sin la maraña de nombres superpuestos.

  }, [features]);

  return (
    React.createElement("div", { className: "ap-map", ref: wrapRef },
      err && React.createElement("div", { className: "ap-map-err" },
        "No se pudo cargar el mapa. Revisa la conexión."),
      !features && !err && React.createElement("div", { className: "ap-map-loading" }, "Cargando mapa…"),
      React.createElement("div", { className: "ap-tip", ref: tipRef },
        React.createElement("div", { className: "tip-name" }),
        React.createElement("div", { className: "tip-meta" })
      )
    )
  );
}

window.AplauzoMap = AplauzoMap;
