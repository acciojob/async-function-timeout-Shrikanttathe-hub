// script.js
async function delayAndDisplay(text, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  document.getElementById('output').innerText = text;
}

function handleSubmit() {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');

  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  if (text && !isNaN(delay)) {
    delayAndDisplay(text, delay);
  } else {
    alert('Please enter valid values for text and delay.');
  }
}
