
# Portfolio Angular 21

## 📌 Descripción
Este es un portfolio personal construido con Angular 21, SSR, Tailwind CSS y Angular Material.

El objetivo del proyecto es mostrar habilidades de frontend moderno con Angular, diseño UI y buenas prácticas.

---

## ⚙️ Stack

- Angular 21 (standalone components)
- SSR + hydration
- Tailwind CSS
- Angular Material (uso puntual)
- Signals (estado reactivo moderno)

---

## 🎯 Objetivo del proyecto

- Portfolio personal tipo dashboard moderno
- Mostrar proyectos, experiencia y secciones UI
- UI atractiva enfocada en recruiters
- No es una aplicación empresarial

---

## 🧠 Reglas de desarrollo

- Usar standalone components siempre
- Preferir Signals sobre RxJS cuando sea posible
- Mantener código simple y limpio
- Evitar sobrearquitectura
- Evitar lógica compleja en templates

---

## 🎨 UI / Estilos

- Tailwind como sistema principal de estilos
- Angular Material solo para componentes necesarios
- Diseño dark moderno tipo dashboard
- Layout responsive

---

## ⚙️ SSR

- SSR solo para mejorar SEO y carga inicial
- Evitar uso directo de `window` o `document` sin verificación

---

## 🚫 Evitar

- Arquitectura excesiva
- RxJS innecesario
- Código complejo para algo simple
- Dependencias innecesarias

---

## 🧩 Estructura sugerida

src/
  app/
    core/
    shared/
    features/
    layout/