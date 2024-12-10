console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.scrollTop);
// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
// clientHeight is the inner height of the visible (onscreen)element, including padding
// scrollTop is the measurement of pixels that have been scrolled (offscreen) 

// ------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress-bar");

  function getProgress() {
    const topPos = document.documentElement.scrollTop;
    const remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = (topPos / remaining) * 100;
    progressBar.style.width = percentage + "%";
  }

  document.addEventListener("scroll", getProgress);

  function enviarFormulario() {
    const respostas = {
      likert1: parseFloat(document.querySelector('input[name="likert-1"]:checked')?.value),
      likert2: parseFloat(document.querySelector('input[name="likert-2"]:checked')?.value),
      likert3: parseFloat(document.querySelector('input[name="likert-3"]:checked')?.value),
      likert4: parseFloat(document.querySelector('input[name="likert-4"]:checked')?.value),
      likert5: parseFloat(document.querySelector('input[name="likert-5"]:checked')?.value),
      likert6: parseFloat(document.querySelector('input[name="likert-6"]:checked')?.value),
      likert7: parseFloat(document.querySelector('input[name="likert-7"]:checked')?.value),
      likert8: parseFloat(document.querySelector('input[name="likert-8"]:checked')?.value),
      likert9: parseFloat(document.querySelector('input[name="likert-9"]:checked')?.value)
    };

    // Validate responses
    for (const key in respostas) {
      if (isNaN(respostas[key])) {
        alert('Please answer all questions.');
        return;
      }
    }

    // Store responses in localStorage
    localStorage.setItem('respostasFormulario', JSON.stringify(respostas));

    // Redirect to results page
    window.location.href = 'results.html';
  }

  document.getElementById("submit").addEventListener("click", enviarFormulario);
});