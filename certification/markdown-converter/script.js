const markDownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const previewEl =  document.getElementById("preview");

const convertMarkdown = () => {
  const phrase = markDownInput.value;
  console.log(phrase);
}

markDownInput.addEventListener("change", convertMarkdown);