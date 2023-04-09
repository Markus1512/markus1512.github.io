let question1 = {
    question: "I hvilket land heter toppliagen Laliga?",
    options: ["England", "Spania", "Frankrike", "Italia"], 
    solution: "Spania"
}
let question2 = {
    question: "Hvem er Norges toppscorer for herrene",
    options: ["Erling Håland", "Ole Gunnar Solskjær", "Tore André Flo", "Jørgen Juve"], 
    solution: "Jørgen Juve"
}
let question3 = {
    question: "Hvilket lag har vunnet Premier Leauge flest ganger?",
    options: ["Chelsea", "Arsenal", "Manchester City", "Manchester United"], 
    solution: "Manchester United"
}
let question4 = {
    question: "Hvor mange lag har vunnet Serie A siden 2001?",
    options: ["7", "9", "6", "3"], 
    solution: "3"
}
let question5 = {
    question: "Hvilket lag vant Eliteserien i 2022",
    options: ["Bodø/Glimt", "Molde", "Rosenborg"],
    solution: "Molde" 
}
let question6 = {
    question: "Hvor ble VM 2010 spilt?",
    options: ["Qatar", "Brazil", "Sør-Afrika", "Hellas"],
    solution: "Sør-Afrika" 
}
let question7 = {
    question: "Hvilken spiller har vunnet gullballen flest ganger?",
    options: ["Ronaldo", "Messi", "Pele", "Cruyff", "Van Basten", "Maradona"],
    solution: "Messi" 
}

// Array med spørsmålobjekter 
let questions = [question1, question2, question3, question4, question5, question6, question7]

// Henter elementer fra DO
let quizContainerEl = document.querySelector('.quiz-container')

let buttonEl = document.querySelector('button')

let resultatEl = document.querySelector('#resultat')

// Tømmer HTML til quiz containeren 
quizContainerEl.innerHTML = ""

// Går gjennom spørsmålene 
for(let i=0; i<questions.length; i++){
    // Henter spørsmål
    let question = questions[i].question
    let options = questions[i].options
    let solution = questions[i].solution

    // Fyller quiz containeren med spørsmålet 
    quizContainerEl.innerHTML += `
    <article id="question${i+1}">
        <h3>${question}</h3>
    </article>
    `
    // Henter elementene alternativene skal skrives i
    let questionEl = document.querySelector(`#question${i+1}`)

    // Går gjennom alternativene 
    for(let j=0; j<options.length; j++){
        // Lager label element
        let labelEl = document.createElement('label')

        // Lager et input element
        let radioEl = document.createElement('input')

        // Setter typen til input elementet til radio
        radioEl.type = "radio"

        // Sørger for at alle alternativene til spørsmålet er i samme gruppe
        radioEl.name = `q${i+1}`

        if(options[j] == solution){
            radioEl.value = "c" // correct
        }else{
            radioEl.value = "w" // wrong
        }


        // Legger input-elementet med type radio i label elementet 
        labelEl.appendChild(radioEl)

        // Skriver elementet til HTML
        labelEl.innerHTML += options[j]

        // Legger label elementet inni question elementet
        questionEl.appendChild(labelEl)
    }
}

// Legger en lytter til knappen som sjekker svar
buttonEl.addEventListener('click', finnPoeng)

// Funksjon som finner poeng basert på antall rett 
function finnPoeng(){
    console.log("Finner poeng")

    let poeng = 0 

    // Henter radio-elementet
    let radioEls = document.querySelectorAll('input')

    // Går gjennom alle radio-elementene
    for(let i=0; i<radioEls.length; i++){
        // Sjekker om et alternativ er krysset av
        if(radioEls[i].checked){
            if(radioEls[i].value == "c"){
                // Øker antall poeng
                poeng++
            }
        }
    }
    
    // Skriver til resultat elementet 
    resultatEl.innerHTML = `Du fikk ${poeng}/${questions.length} poeng `
}