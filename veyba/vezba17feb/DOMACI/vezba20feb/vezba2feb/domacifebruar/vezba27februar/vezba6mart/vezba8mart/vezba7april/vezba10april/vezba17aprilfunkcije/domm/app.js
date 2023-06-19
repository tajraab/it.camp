const inputText = document.getElementById("inputText");
const addButon = document.getElementById("addButon");
const inputContainer = document.getElementById("inputContainer");
let vrednost = "";
function singleCard(text) {
  const kartica = document.createElement("div");
  kartica.classList.add("task");
  const hatri = document.createElement("h3");
  hatri.innerText;
  const checkInput = document.createElement;
  kartica.appendChild(hatri);
  // kartica.innerText = text;
  return kartica;
}

console.log(inputText);
inputText.addEventListener("input", (e) => {
  vrednost = e.target.value;
});

addButon.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(vrednost);
  inputText.value = "";
  inputContainer.append("vrednost");
  console.log(singleCard(vrednost));
  inputContainer.appendChild(singleCard(vrednost));
});
