//  Add a Link
// – Q1: Add a link “Back to source” after a paragraph tag which goes to
// https://forcemipsum.com in the markup

const paragraph = document.getElementById("paragraph");
console.dir(paragraph);

const body = paragraph.parentElement;

const link = document.createElement("a");
link.textContent = "Back to source";
link.href = "https://forcemipsum.com";

console.dir(link);

body.appendChild(link);
