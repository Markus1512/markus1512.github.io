let topEl = document.querySelector('.top')
let decreaseEl = document.querySelector('.decrease')
let increaseEl = document.querySelector('.increase')
let resetEl = document.querySelector('.reset')

// Dersom vi ikke har egenskapen count i localStorage, skal den ha verdi 0
if(!localStorage.count){
    localStorage.count = 0
}

// Setter tallet inn i HTML
topEl.innerHTML = localStorage.count 
// topEl.innerText kan også brukes 

// Legger til lyttere for å øke eller minke count
decreaseEl.addEventListener('click', changeNumber)
increaseEl.addEventListener('click', changeNumber)

// Funksjon som minker count 
function changeNumber(e){
    if (e.target.classList.contains('decrease') || e.target.classList.contains('fa-circle-minus')){
        localStorage.count = Number (localStorage.count) - 1
    }else if(e.target.classList.contains('increase') || e.target.classList.contains('fa-circle-plus')){
        localStorage.count = Number (localStorage.count) + 1
    }

    // Oppdaterer tallet i HTML 
    topEl.innerHTML = localStorage.count
}

resetEl.addEventListener('click', reset);

function reset() {
  localStorage.count = 0;
  topEl.innerHTML = localStorage.count;
}
