console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.scrollTop);
// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
// clientHeight is the inner height of the visible (onscreen)element, including padding
// scrollTop is the measurement of pixels that have been scrolled (offscreen) 

// ------------------------------------------------

const progressBar = document.querySelector(".progress-bar");


function getProgress() {
  let topPos = document.documentElement.scrollTop;
  let remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let percentage = (topPos / remaining) * 100;
  
  progressBar.style.width = percentage + "%";
}


document.addEventListener("scroll", function() {
  getProgress();
});

function enviarFormulario() {
  respostas = {
    likert1: parseFloat(document.querySelector('input[name="likert-1"]:checked').value),
    likert2: parseFloat(document.querySelector('input[name="likert-2"]:checked').value),
    likert3: parseFloat(document.querySelector('input[name="likert-3"]:checked').value),
    likert4: parseFloat(document.querySelector('input[name="likert-4"]:checked').value),
    likert5: parseFloat(document.querySelector('input[name="likert-5"]:checked').value),
    likert6: parseFloat(document.querySelector('input[name="likert-6"]:checked').value),
    likert7: parseFloat(document.querySelector('input[name="likert-7"]:checked').value),
    likert8: parseFloat(document.querySelector('input[name="likert-8"]:checked').value),
    likert9: parseFloat(document.querySelector('input[name="likert-9"]:checked').value),
    likert10: parseFloat(document.querySelector('input[name="likert-10"]:checked').value),
    likert11: parseFloat(document.querySelector('input[name="likert-11"]:checked').value),
    likert12: parseFloat(document.querySelector('input[name="likert-12"]:checked').value),
    likert13: parseFloat(document.querySelector('input[name="likert-13"]:checked').value),
    likert14: parseFloat(document.querySelector('input[name="likert-14"]:checked').value),
    likert15: parseFloat(document.querySelector('input[name="likert-15"]:checked').value),
    likert16: parseFloat(document.querySelector('input[name="likert-16"]:checked').value),
    likert17: parseFloat(document.querySelector('input[name="likert-17"]:checked').value),
    likert18: parseFloat(document.querySelector('input[name="likert-18"]:checked').value),
    likert19: parseFloat(document.querySelector('input[name="likert-19"]:checked').value),
    likert20: parseFloat(document.querySelector('input[name="likert-20"]:checked').value)
  };

  // Armazenando respostas no localStorage
  localStorage.setItem('respostasFormulario', JSON.stringify(respostas));

  // Redirecionando para a página de resultados
  window.location.href = 'results.html';
}