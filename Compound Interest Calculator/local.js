document.getElementById('income').value = localStorage.getItem('income');
document.getElementById('expenses').value = localStorage.getItem('expenses');
document.getElementById('capital').value = localStorage.getItem('capital');
document.getElementById('months').value = localStorage.getItem('months');
document.getElementById('rate').value = localStorage.getItem('rate');
let button = document.getElementById("button");
button.addEventListener("click", setStorage);
function setStorage() {
localStorage.setItem('income', income.value);
localStorage.setItem('expenses', expenses.value);
localStorage.setItem('capital', capital.value);
localStorage.setItem('months', months.value);
localStorage.setItem('rate', rate.value);
}
let inputishe = true;
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener("input", () => {
    inputishe = true;
  });
});
window.onbeforeunload = function() {
    inputishe = true;
};
let buttonishe = false
button.addEventListener("click", ()=>{
let cap = Number(document.getElementById('capital').value);
const p = Number(document.getElementById('rate').value) / 100;
const m = Number(document.getElementById('months').value);
const inc = Number(document.getElementById('income').value);
const exp = Number(document.getElementById('expenses').value);
let h = [];
buttonishe = true
if (inputishe && buttonishe) {
    document.querySelectorAll(".msg").forEach(str => str.remove());
    inputishe = false;
    buttonishe = false;
let f = cap;
const N = inc - exp;
const R = 1 + p / m;
for (let i = 0; i < m; i++) {
   f = (((f + N) * R + N) * R)-N; 
   h.push(f.toFixed(2));
   let n = i + 1;
   const newDiv = document.createElement("div");
   const newContent = document.createTextNode("Месяц № " + n + "  = " + h[i]);
   newDiv.appendChild(newContent);
   const currentDiv = document.getElementById("div1");
   newDiv.classList.add("msg");
   document.body.insertBefore(newDiv, currentDiv);

}
}
}
)
let divan = document.querySelectorAll('.divan');
let msg = document.querySelectorAll('.msg');
let gol1 = document.getElementById("switch");

gol1.onclick = () => {
let count = 0
gol1.addEventListener('click', cound)
function cound() {
  count += 1
}

gol1.onclick = () => {
  if (count % 2 === 0){
    svetlo()
  }
  else {
    temno()
  }

function temno() {
  divan.forEach(element => {
   element.style.setProperty('--main-tx-color', '#1a1a1a');
  });
  document.body.style.setProperty('--main-bg-color', '#f5f5f5');
} 

function svetlo() {
    divan.forEach(element => {
    element.style.setProperty('--main-tx-color', '#f5f5f5');
  });
  document.body.style.setProperty('--main-bg-color', '#1a1a1a');
}
}
}