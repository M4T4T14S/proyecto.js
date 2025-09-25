function calcularTrivia() {
  let puntaje = 0;

  // Respuestas correctas
  let respuestas = {
    q1: "b", // Francisco Felipe Naya
    q2: "c", // 1995
    q3: "a"  // Cocinero
  };

  let form = document.getElementById("quizForm");

  // Recorre cada pregunta y suma si la respuesta es correcta
  for (let pregunta in respuestas) {
    let seleccionada = form.querySelector('input[name="'+pregunta+'"]:checked');
    if (seleccionada && seleccionada.value === respuestas[pregunta]) {
      puntaje++;
    }
  }

  // Mensaje final
  let mensaje = "Tu puntaje es: " + puntaje + " de 3.";
  if (puntaje === 3) {
    mensaje += " 🎉 ¡Excelente, lo sabes todo!";
  } else if (puntaje === 2) {
    mensaje += " 👍 ¡Muy bien!";
  } else {
    mensaje += " 📖 Te invito a volver a leer la página 😉";
  }

  document.getElementById("resultado").textContent = mensaje;
}