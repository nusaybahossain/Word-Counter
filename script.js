const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');

const wordsNumberEl = document.querySelector('.stat__number--words');

const inputHandler = () => {
  if (textareaEl.value.includes('<script>')) {
    alert("You can't use that");
    textareaEl.value = textareaEl.value.replace('<script>', '');
  }

  let numberOfWords = textareaEl.value.split(' ').length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaEl.value.length;

  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
};

textareaEl.addEventListener('input', inputHandler);
