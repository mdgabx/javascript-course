const markDownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const previewEl = document.getElementById("preview");

const convertMarkdown = () => {
  const markdownEl = markDownInput.value;
  const result = markdownEl
    .replace(/^#\s+(.+)/gm, "<h1>$1</h1>")
    .replace(/^##\s+(.+)/gm, "<h2>$1</h2>")
    .replace(/^###\s+(.+)/gm, "<h3>$1</h3>")
    .replace(/^\*\*(.+)\*\*$/gm, "<strong>$1</strong>")
    .replace(/^__(.+)__/gm, "<strong>$1</strong>")

  return result
}


markDownInput.addEventListener("input", () => {
  const result = convertMarkdown();
  htmlOutput.textContent = result;
  previewEl.innerHTML = result;
});