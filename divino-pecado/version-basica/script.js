document.addEventListener("DOMContentLoaded", () => {
  // Mostrar pasos del bowl si se selecciona "Bowl"
  const tipoInputs = document.querySelectorAll('input[name="tipo"]');
  const pasosBowl = document.getElementById("pasosBowl");

  tipoInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.value === "Bowl" && input.checked) {
        pasosBowl.style.display = "block";
      } else {
        pasosBowl.style.display = "none";
      }
    });
  });

  // Mostrar secciones del bowl personalizado si se elige esa opción
  const tipoBowlInputs = document.querySelectorAll('input[name="tipoBowl"]');
  const bowlPersonalizado = document.getElementById("bowlPersonalizado");

  tipoBowlInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.value === "personalizado" && input.checked) {
        bowlPersonalizado.style.display = "block";
      } else {
        bowlPersonalizado.style.display = "none";
      }
    });
  });
});
