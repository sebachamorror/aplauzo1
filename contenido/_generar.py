#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador de contenido por país para Aplauzo.

Lee cada contenido/<País>/datos.json y produce:
  1. src/data-paises.js  — asignaciones a window.APLAUZO (countries/spaces/talleres/funds),
     con demo:true forzado en cada registro (contenido de muestra pendiente de verificación).
  2. contenido/<País>/<País>.docx — documento Word legible con los mismos datos.

No usa dependencias externas: un .docx es un zip con XML (OOXML), generado con zipfile.
Uso:  python3 contenido/_generar.py
"""

import json
import os
import zipfile
from xml.sax.saxutils import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENIDO = os.path.join(ROOT, "contenido")
OUT_JS = os.path.join(ROOT, "src", "data-paises.js")


def load_countries():
    """Devuelve [(carpeta, datos_dict), ...] ordenado por nombre en español."""
    out = []
    for name in sorted(os.listdir(CONTENIDO)):
        folder = os.path.join(CONTENIDO, name)
        datos = os.path.join(folder, "datos.json")
        if os.path.isdir(folder) and os.path.isfile(datos):
            with open(datos, encoding="utf-8") as f:
                out.append((folder, json.load(f)))
    out.sort(key=lambda x: x[1].get("es", x[1].get("engName", "")))
    return out


def clean(d):
    """Copia el dict descartando claves internas (que empiezan con _)."""
    return {k: v for k, v in d.items() if not k.startswith("_")}


def with_demo(rec, **defaults):
    """Nuevo dict con demo:true primero, luego defaults y el registro limpio."""
    out = {"demo": True}
    out.update(defaults)
    out.update(clean(rec))
    return out


# ---------- generación de data-paises.js ----------

def build_js(countries):
    lines = [
        "// === GENERADO automáticamente por contenido/_generar.py — NO editar a mano. ===",
        "// Contenido de muestra (best-effort) por país, pendiente de verificación.",
        "// Para cambiarlo, edita contenido/<País>/datos.json y vuelve a correr el generador.",
        "(function (D) {",
        "  D.countries = D.countries || {};",
        "  D.spaces = D.spaces || {};",
        "  D.talleres = D.talleres || {};",
        "  D.funds = D.funds || {};",
        "",
    ]
    for _, datos in countries:
        eng = datos["engName"]
        es = datos.get("es", eng)
        key = json.dumps(eng, ensure_ascii=False)

        works = [with_demo(w, companyUrl=w.get("companyUrl", "#")) for w in datos.get("works", [])]
        country_obj = {
            "es": es,
            "tag": datos.get("tag", es),
            "intro": datos.get("intro", ""),
            "cities": datos.get("cities", []),
            "works": works,
        }
        spaces = [with_demo(s, country=es) for s in datos.get("spaces", [])]
        talleres = [with_demo(t) for t in datos.get("talleres", [])]
        funds = [with_demo(f) for f in datos.get("funds", [])]

        def dump(obj):
            return json.dumps(obj, ensure_ascii=False, indent=2)

        lines.append("  // ---------- %s ----------" % es)
        lines.append("  D.countries[%s] = %s;" % (key, dump(country_obj)))
        lines.append("  D.spaces[%s] = %s;" % (key, dump(spaces)))
        lines.append("  D.talleres[%s] = %s;" % (key, dump(talleres)))
        lines.append("  D.funds[%s] = %s;" % (key, dump(funds)))
        lines.append("")
    lines.append("})(window.APLAUZO);")
    return "\n".join(lines) + "\n"


# ---------- generación de .docx (OOXML mínimo) ----------

def _p(text, *, bold=False, size=22, space_before=0):
    """Un párrafo Word. size en medios-puntos (22 = 11pt)."""
    rpr = "<w:rPr>%s<w:sz w:val=\"%d\"/></w:rPr>" % ("<w:b/>" if bold else "", size)
    ppr = "<w:pPr><w:spacing w:before=\"%d\" w:after=\"60\"/></w:pPr>" % space_before
    return ("<w:p>%s<w:r>%s<w:t xml:space=\"preserve\">%s</w:t></w:r></w:p>"
            % (ppr, rpr, escape(text or "")))


def build_document_xml(datos):
    es = datos.get("es", datos["engName"])
    body = []
    body.append(_p("APLAUZO · %s" % es, bold=True, size=40))
    if datos.get("tag"):
        body.append(_p(datos["tag"], size=20))
    if datos.get("intro"):
        body.append(_p(datos["intro"], size=22))
    body.append(_p("Contenido de muestra (best-effort), pendiente de verificación.", size=18))

    works = datos.get("works", [])
    if works:
        body.append(_p("EN CARTELERA (%d obras)" % len(works), bold=True, size=30, space_before=240))
        for w in works:
            body.append(_p(w.get("title", ""), bold=True, size=26, space_before=160))
            meta = " · ".join(x for x in [w.get("discipline"), w.get("city"),
                                          w.get("venue"), w.get("dates")] if x)
            body.append(_p(meta, size=18))
            comp = " · ".join(x for x in [w.get("company"), w.get("price"),
                                          w.get("instagram")] if x)
            if comp:
                body.append(_p(comp, size=18))
            if w.get("summary"):
                body.append(_p(w["summary"], size=22))
            for para in (w.get("description", "") or "").split("\n\n"):
                if para.strip():
                    body.append(_p(para.strip(), size=20))

    spaces = datos.get("spaces", [])
    if spaces:
        body.append(_p("ESPACIOS ESCÉNICOS (%d)" % len(spaces), bold=True, size=30, space_before=240))
        for s in spaces:
            body.append(_p(s.get("name", ""), bold=True, size=26, space_before=160))
            meta = " · ".join(x for x in [s.get("type"), s.get("city"), s.get("year"),
                                          s.get("capacity")] if x)
            body.append(_p(meta, size=18))
            if s.get("address"):
                body.append(_p(s["address"], size=18))
            links = " · ".join(x for x in [s.get("url"), s.get("instagram")] if x)
            if links:
                body.append(_p(links, size=18))
            if s.get("summary"):
                body.append(_p(s["summary"], size=22))
            if s.get("description"):
                body.append(_p(s["description"], size=20))

    talleres = datos.get("talleres", [])
    if talleres:
        body.append(_p("TALLERES Y FORMACIÓN (%d)" % len(talleres), bold=True, size=30, space_before=240))
        for t in talleres:
            body.append(_p(t.get("title", ""), bold=True, size=26, space_before=160))
            meta = " · ".join(x for x in [t.get("discipline"), t.get("modality"),
                                          t.get("level"), t.get("city")] if x)
            body.append(_p(meta, size=18))
            teacher = " · ".join(x for x in ["Con " + t["teacher"] if t.get("teacher") else None,
                                             t.get("institution")] if x)
            if teacher:
                body.append(_p(teacher, size=18))
            sched = " · ".join(x for x in [t.get("schedule"), t.get("start"),
                                           t.get("duration"), t.get("price")] if x)
            if sched:
                body.append(_p(sched, size=18))
            if t.get("summary"):
                body.append(_p(t["summary"], size=22))

    funds = datos.get("funds", [])
    if funds:
        body.append(_p("CENTRAL DE FONDOS (%d)" % len(funds), bold=True, size=30, space_before=240))
        for f in funds:
            body.append(_p(f.get("name", ""), bold=True, size=26, space_before=160))
            meta = " · ".join(x for x in [f.get("org"), f.get("scope"), f.get("deadline")] if x)
            body.append(_p(meta, size=18))
            if f.get("url"):
                body.append(_p(f["url"], size=18))
            if f.get("summary"):
                body.append(_p(f["summary"], size=22))
            if f.get("lines"):
                body.append(_p("Líneas: " + " · ".join(f["lines"]), size=18))

    return ("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
            "<w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">"
            "<w:body>" + "".join(body) +
            "<w:sectPr/></w:body></w:document>")


CONTENT_TYPES = ("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
                 "<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\">"
                 "<Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/>"
                 "<Default Extension=\"xml\" ContentType=\"application/xml\"/>"
                 "<Override PartName=\"/word/document.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\"/>"
                 "</Types>")

RELS = ("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>"
        "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">"
        "<Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/>"
        "</Relationships>")


def write_docx(path, datos):
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", CONTENT_TYPES)
        z.writestr("_rels/.rels", RELS)
        z.writestr("word/document.xml", build_document_xml(datos))


def main():
    countries = load_countries()
    if not countries:
        print("No se encontró ningún contenido/<País>/datos.json")
        return
    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write(build_js(countries))
    print("✓ %s (%d países)" % (os.path.relpath(OUT_JS, ROOT), len(countries)))
    for folder, datos in countries:
        es = datos.get("es", datos["engName"])
        docx = os.path.join(folder, es + ".docx")
        write_docx(docx, datos)
        print("✓ %s" % os.path.relpath(docx, ROOT))


if __name__ == "__main__":
    main()
