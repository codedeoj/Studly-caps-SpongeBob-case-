const textInput = document.querySelector('input');
const result = document.querySelector('.output');
const button = document.querySelector('button');

const spongeBobCase = function(e) {
  e.preventDefault();
  alternateText();
};

button.addEventListener("click", spongeBobCase);

function alternateText() {
  const newText = textInput.value.toLowerCase().split("");
  
  const mockingText = newText.map( function(txt1, txt2) {
    if (txt2 % 2 === 0) {
      return txt1;
    } else {
      return txt1.toUpperCase();
    }
  });

  result.innerHTML = mockingText.join("");
}