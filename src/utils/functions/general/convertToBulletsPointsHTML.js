export default function convertToBulletsPointsHTML(content = "") {

  if (!content) return "";

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;

  const text = tempDiv.textContent || tempDiv.innerText;
  const lines = text.split(/\r?\n/).map(line => line.trim()).filter(line => line !== "");

  return lines.map(line => `<li>${line}</li>`).join("");
}