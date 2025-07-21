const malla = {
  1: [
    { name: "Fundamentos de Mate" },
    { name: "Desarrollo Personal" },
    { name: "Desafíos de Ingeniería" },
    { name: "Fundamentos de Programación" },
    { name: "Química para Ingeniería" }
  ],
  2: [
    { name: "Cálculo Diferencial", deps: ["Fundamentos de Mate"] },
    { name: "Álgebra", deps: ["Fundamentos de Mate"] },
    { name: "Tópicos de Formación General para Ingeniería Industrial", deps: ["Desarrollo Personal", "Ingeniería Innovación y Emprendimiento"] },
    { name: "Alfabetización Académica para Ingeniería 1", deps: ["Desarrollo Personal"] },
    { name: "Ingeniería Innovación y Emprendimiento", deps: ["Desafíos de Ingeniería"] },
    { name: "Programación", deps: ["Fundamentos de Programación"] },
    { name: "Termodinámica", deps: ["Química para Ingeniería"] },
    { name: "Análisis de Materiales y Diseño de Productos", deps: ["Química para Ingeniería"] }
  ],
  3: [
    { name: "Cálculo Integral y Series", deps: ["Cálculo Diferencial"] },
    { name: "Álgebra Lineal", deps: ["Álgebra"] },
    { name: "Análisis Financiero y Contable", deps: ["Álgebra"] },
    { name: "Física Mecánica", deps: ["Fundamentos de Física"] },
    { name: "Tópicos de Formación General para Ingeniería Industrial", deps: ["Ingeniería Innovación y Emprendimiento"] },
    { name: "Alfabetización Académica para Ingeniería 1", deps: ["Alfabetización Académica para Ingeniería 1"] },
    { name: "TIPE Sello UV 1", deps: ["Ingeniería Innovación y Emprendimiento"] },
    { name: "Idioma 1" }
  ],
  4: [
    { name: "Cálculo en Varias Variables", deps: ["Cálculo Integral y Series", "Álgebra Lineal"] },
    { name: "Ecuaciones Diferenciales Ordinarias", deps: ["Cálculo Integral y Series", "Álgebra Lineal"] },
    { name: "Física Calor y Ondas", deps: ["Física Mecánica"] },
    { name: "Administración de Empresas y Organizaciones", deps: ["Tópicos de Formación General para Ingeniería Industrial", "Alfabetización Académica para Ingeniería 1"] },
    { name: "TIPE Sello UV 2", deps: ["TIPE Sello UV 1"] },
    { name: "Idioma 2", deps: ["Idioma 1"] },
    { name: "Práctica Básica", deps: ["Cálculo en Varias Variables", "Ecuaciones Diferenciales Ordinarias", "Física Calor y Ondas", "Administración de Empresas y Organizaciones", "TIPE Sello UV 2", "Idioma 2"] }
  ],
  5: [
    { name: "Inferencia Estadística", deps: ["Estadística y Probabilidades"] },
    { name: "Gestión Presupuestaria y Costos", deps: ["Análisis Financiero y Contable"] },
    { name: "Procesos Industriales", deps: ["Termodinámica"] },
    { name: "Economía Circular y Sostenibilidad", deps: ["Análisis de Materiales y Diseño de Productos", "Macroeconomía y Microeconomía"] },
    { name: "Gestión de la Innovación y Emprendimiento", deps: ["Análisis de Materiales y Diseño de Productos"] },
    { name: "Pensamiento Sistemático", deps: ["Principios de Data Science"] },
    { name: "Sistemas de Información y Administración de Datos", deps: ["Principios de Data Science", "Pensamiento Sistemático"] },
    { name: "Idioma 3", deps: ["Idioma 2"] },
    { name: "Práctica Básica" }
  ],
  6: [
    { name: "Modelamiento", deps: ["Inferencia Estadística"] },
    { name: "Análisis y Estrategia de Negocios", deps: ["Gestión Presupuestaria y Costos", "Macroeconomía y Microeconomía"] },
    { name: "Ingeniería Económica", deps: ["Gestión Presupuestaria y Costos", "Macroeconomía y Microeconomía"] },
    { name: "Gestión de Talento en las Organizaciones", deps: ["Pensamiento Sistemático"] },
    { name: "Alfabetización Académica para Ingeniería 2" },
    { name: "Idioma 4", deps: ["Idioma 3"] }
  ],
  7: [
    { name: "Proyecto de Licenciatura", deps: ["Procesos Industriales", "Gestión de Talento en las Organizaciones", "Modelamiento", "Sistemas de Información y Administración de Datos", "Economía Circular y Sostenibilidad", "Gestión de la Innovación y Emprendimiento"] },
    { name: "Simulación de Procesos y Sistemas", deps: ["Procesos Industriales", "Modelamiento"] },
    { name: "Investigación de Operaciones", deps: ["Modelamiento"] },
    { name: "Visualización de Datos e Inteligencia de Negocios", deps: ["Sistemas de Información y Administración de Datos"] },
    { name: "Formulación y Evaluación de Proyectos", deps: ["Economía Circular y Sostenibilidad"] },
    { name: "Gestión Energética", deps: ["Economía Circular y Sostenibilidad"] },
    { name: "Gestión de Riesgos", deps: ["Economía Circular y Sostenibilidad"] },
    { name: "Estrategia de Marketing", deps: ["Gestión de la Innovación y Emprendimiento"] },
    { name: "Desarrollo Organizacional", deps: ["Gestión de Talento en las Organizaciones"] }
  ],
  8: [
    { name: "Gestión de Operaciones 1" },
    { name: "Electivo Profesional 1" },
    { name: "Taller de Comunicación Efectiva" },
    { name: "Electivo Profesional 2" },
    { name: "Dirección Estratégica", deps: ["Análisis y Estrategia de Negocios"] },
    { name: "Gestión de Riesgos", deps: ["Análisis y Estrategia de Negocios"] },
    { name: "Desarrollo Organizacional", deps: ["Análisis y Estrategia de Negocios"] },
    { name: "Gestión de la Cadena de Suministros", deps: ["Investigación de Operaciones"] },
    { name: "Formulación y Evaluación de Proyectos", deps: ["Proyecto de Licenciatura"] },
    { name: "Finanzas", deps: ["Ingeniería Económica"] },
    { name: "Proyecto de Licenciatura", deps: ["Proyecto de Licenciatura"] }
  ],
  9: [
    { name: "Gestión de Operaciones 2", deps: ["Gestión de Operaciones 1"] },
    { name: "Project Management", deps: ["Dirección Estratégica", "Formulación y Evaluación de Proyectos"] },
    { name: "Práctica Profesional", deps: ["Gestión de Riesgos", "Gestión de la Cadena de Suministros", "Project Management", "Electivo Profesional 1", "Finanzas", "Taller de Comunicación Efectiva"] }
  ],
  10: [
    { name: "Estrategia de Marketing", deps: ["Estrategia de Marketing"] },
    { name: "Electivo Profesional 1", deps: ["Estrategia de Marketing"] },
    { name: "Electivo Profesional 2", deps: ["Estrategia de Marketing"] },
    { name: "Taller de Comunicación Efectiva", deps: ["Estrategia de Marketing"] }
  ],
  11: [
    { name: "Proyecto de Título" },
    { name: "Práctica Profesional" },
    { name: "Electivo Profesional 2" }
  ]
};

const grid = document.getElementById("grid");

// Crear columnas semestres
for (let i = 1; i <= 11; i++) {
  const col = document.createElement("div");
  col.className = "semester";

  const label = document.createElement("div");
  label.className = "semester-label";
  label.textContent = `Semestre ${i}`;
  col.appendChild(label);

  const courses = malla[i] || [];
  courses.forEach((course) => {
    const div = document.createElement("div");
    div.className = "course locked";
    div.textContent = course.name;
    div.dataset.name = course.name;
    div.dataset.deps = course.deps ? JSON.stringify(course.deps) : "[]";
    div.addEventListener("click", () => togglePassed(div));
    col.appendChild(div);
  });

  grid.appendChild(col);
}

function togglePassed(element) {
  if (element.classList.contains("passed")) {
    element.classList.remove("passed");
    updateUnlocks();
  } else {
    // Solo se puede aprobar si está desbloqueado
    if (!element.classList.contains("unlocked")) return;
    element.classList.add("passed");
    updateUnlocks();
  }
}

function updateUnlocks() {
  document.querySelectorAll(".course").forEach((el) => {
    if (el.classList.contains("passed")) return;
    const deps = JSON.parse(el.dataset.deps);
    const met = deps.every((dep) => {
      return [...document.querySelectorAll(".course")].some(
        (c) => c.dataset.name === dep && c.classList.contains("passed")
      );
    });
    el.classList.remove("passed", "unlocked", "locked");
    el.classList.add(met ? "unlocked" : "locked");
  });
}

// Inicializar desbloqueos
updateUnlocks();

