const ramosPorSemestre = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Introducción a la Ingeniería Industrial", id: "intro", prer: [] },
      { nombre: "Álgebra", id: "algebra", prer: [] },
      { nombre: "Cálculo I", id: "calculo1", prer: [] },
      { nombre: "Comunicación Oral y Escrita", id: "comunicacion", prer: [] },
      { nombre: "Historia del Pensamiento Económico", id: "historiaeco", prer: [] }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Álgebra Lineal", id: "algebra_lineal", prer: ["algebra"] },
      { nombre: "Cálculo II", id: "calculo2", prer: ["calculo1"] },
      { nombre: "Contabilidad y Costos", id: "contabilidad", prer: [] },
      { nombre: "Introducción a la Programación", id: "programacion", prer: [] },
      { nombre: "Física I", id: "fisica1", prer: ["calculo1"] }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Probabilidades y Estadística", id: "estadistica", prer: ["algebra_lineal", "calculo2"] },
      { nombre: "Mecánica", id: "mecanica", prer: ["fisica1"] },
      { nombre: "Programación Aplicada", id: "prog_aplicada", prer: ["programacion"] },
      { nombre: "Microeconomía", id: "microeconomia", prer: ["historiaeco"] },
      { nombre: "Gestión Organizacional", id: "gestion_org", prer: ["intro"] }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Inferencia Estadística", id: "inferencia", prer: ["estadistica"] },
      { nombre: "Electromagnetismo", id: "electro", prer: ["mecanica"] },
      { nombre: "Economía Aplicada", id: "eco_aplicada", prer: ["microeconomia"] },
      { nombre: "Gestión de Personas", id: "gestion_personas", prer: ["gestion_org"] },
      { nombre: "Contabilidad Financiera", id: "conta_financiera", prer: ["contabilidad"] }
    ]
  }
  // Agrega más semestres si quieres que siga con la misma estructura
];

const container = document.getElementById("semestres-container");
const estadoRamos = {};

function crearMalla() {
  ramosPorSemestre.forEach((semestreObj) => {
    const col = document.createElement("div");
    col.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestreObj.semestre;
    col.appendChild(titulo);

    semestreObj.ramos.forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = ramo.id;
      div.textContent = ramo.nombre;
      div.classList.add(ramo.prer.length ? "bloqueado" : "abierto");

      estadoRamos[ramo.id] = ramo.prer.length ? "bloqueado" : "abierto";

      div.onclick = () => {
        if (estadoRamos[ramo.id] !== "abierto") return;
        div.classList.remove("abierto");
        div.classList.add("aprobado");
        estadoRamos[ramo.id] = "aprobado";

        actualizarRamos();
      };

      col.appendChild(div);
    });

    container.appendChild(col);
  });
}

function actualizarRamos() {
  for (const semestre of ramosPorSemestre) {
    for (const ramo of semestre.ramos) {
      if (estadoRamos[ramo.id] !== "bloqueado") continue;

      const puedeAbrirse = ramo.prer.every((id) => estadoRamos[id] === "aprobado");
      if (puedeAbrirse) {
        const div = document.getElementById(ramo.id);
        div.classList.remove("bloqueado");
        div.classList.add("abierto");
        estadoRamos[ramo.id] = "abierto";
      }
    }
  }
}

crearMalla();

