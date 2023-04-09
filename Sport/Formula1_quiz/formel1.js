let question1 = {
    question: "Hvilken fører har vunnet flest løp?",
    options: ["Michael Schumacher", "Lewis Hamilton", "Mick Schumacker", "Sebastian Vettel"], 
    solution: "Lewis Hamilton"
}
let question2 = {
    question: "Når startet Formel 1",
    options: ["1945", "1950", "1954", "1960"], 
    solution: "1950"
}
let question3 = {
    question: "Hvem er den eldste formel 1 føreren gjennom tidene?",
    options: ["Kimi Raikonnen", "Christopher Columub", "Louis Chiron", "Fernando Alonso"], 
    solution: "Louis Chiron"
}
let question4 = {
    question: "Hvem ble verdensmester i 2005?",
    options: ["Michael Schumacher", "Kimi Räikkönen", "Fernando Alonso", "Jenson Button"], 
    solution: "Fernando Alonso"
}
let question5 = {
    question: "Hva er det raskeste en formel 1 bil har kjørt",
    options: ["372,5 km/t", "321,8 km/t", "354,9 km/t", "369,3 km/t"],
    solution: "372,5 km/t" 
}
let question6 = {
    question: "Hvor mye koster en formel 1 bil?",
    options: ["5 millioner $", "7 millioner $", "10 millioner $"],
    solution: "7 millioner $" 
}
let question7 = {
    question: "Hvor mange kvinner har fått poeng i formel 1?",
    options: ["0", "1", "2", "3", "4", "5", "6"],
    solution: "1" 
}
let question8 = {
    question: "Hva er max poeng en fører kan få i et løp",
    options: ["25", "18", "26", "20"],
    solution: "26" 
}
let question9 = {
    question: "Hva var tiden på det raskeste pit stopet?",
    options: ["2,4 sekunder", "2,2 sekunder", "1,9 sekunder", "2,0 sekunder"],
    solution: "2,2 sekunder" 
}
let question10 = {
    question: "Hvor mange lag er det i formel 1?",
    options: ["12", "11", "9", "10"],
    solution: "10" 
}

// Array med spørsmålobjekter 
let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10] 

// Henter elementer fra DOC
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