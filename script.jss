const convertBtn = document.getElementById("convertBtn");
const urlInput = document.getElementById("urlInput");
const status = document.getElementById("status");

convertBtn.addEventListener("click", async () => {

const url = urlInput.value;

if(!url){

status.innerText = "Paste a URL first.";
return;

}

status.innerText = "Processing...";

try{

const response = await fetch("/.netlify/functions/convert",{

method:"POST",

body:JSON.stringify({url})

});

const data = await response.json();

window.markdown = data.markdown;
window.pdf = data.pdf;

status.innerText = "Ready.";

}catch(e){

status.innerText = "Error processing URL.";

}

});


document.getElementById("downloadMD").onclick = () => {

if(!window.markdown) return;

const blob = new Blob([window.markdown],{type:"text/markdown"});

const link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "page.md";

link.click();

};


document.getElementById("downloadPDF").onclick = () => {

if(!window.pdf) return;

window.open(window.pdf);

};
