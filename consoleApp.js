const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso.";


function generateStats() {

    let textArea = document.getElementById("text-to-stats");
    let string = textArea.value;
    const charNumber = string.length;
    const cleanArrayFromString = cleanStringAndConvertInArray(string)
    const wordNumber = cleanArrayFromString.length;
    const wordOccurrency = generateOccurrencyCount(cleanArrayFromString);

    const charOccurrency = generateOccurrencyCount([...string]);

    //console.log("Il numero dei caratteri è: " + charNumber);
    let par = document.getElementById("stats-paragraph");
    par.innerHTML = '';
    let node = document.createTextNode("Il numero dei caratteri è: " + charNumber);
    par.appendChild(node);

    for (const key in charOccurrency) {
        if (Object.hasOwnProperty.call(charOccurrency, key)) {
            const count = charOccurrency[key];
            let node = document.createTextNode("il carattere " + key + " compare: " + count + (count === 1 ? " volta"  : " volte"));
            par.appendChild(node);
            let br = document.createElement("br");
            par.appendChild(br);
            //console.log("il carattere " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
        }
    }
    //console.log("---------------------------------------------------")

    let node2 = document.createTextNode("---------------------------------------------------");
    par.appendChild(node2);
    let br = document.createElement("br");
    par.appendChild(br);
    let node3 = document.createTextNode("Il numero delle parole è: " + wordNumber);
    par.appendChild(node3);
    let br2 = document.createElement("br");
    par.appendChild(br2);
    //console.log("Il numero delle parole è: " + wordNumber);
    for (const key in wordOccurrency) {
        if (Object.hasOwnProperty.call(wordOccurrency, key)) {
            const count = wordOccurrency[key];
            let node = document.createTextNode("la parola " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
            let br = document.createElement("br");
            par.appendChild(node);
            par.appendChild(br);
            //console.log("la parola " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
        }
    }
}


function cleanStringAndConvertInArray(string){

    const cleanedString = string.replace(/'/g, " ")
                                .replace(/,/g, "")
                                .replace(/;/g, "")
                                .replace(/\./g, "")
                                .replace(/:/g, "")
                                


    debugger;
    const stringArray = cleanedString.split(" ");
    return stringArray;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}



function generateOccurrencyCount(stringArray){

    const occurrencyCount = {};

    for (const word of stringArray) {
        if (occurrencyCount[word]) {
            occurrencyCount[word]++;
        } else {
            occurrencyCount[word] = 1;
        }
    }

    return occurrencyCount;
}


//generateStats(text);


function searchWord(text, wordToSearch, isCaseSensitive, isFullWord){
    const arrayOfIndex = []
    let textToSearch = text;
    let index = 0;
    while(true){
        index = textToSearch.toLowerCase().indexOf(wordToSearch.toLowerCase())
        if (index === -1) {
            break;
        } else {
            arrayOfIndex.push(index);
            textToSearch = textToSearch.substring(index + wordToSearch.length);
        }
    }
    return arrayOfIndex;
}

console.log(searchWord(text, "Milziade"));


function startSearch(){
    const wordToSearch = prompt("inserisci la parola da cercare")
    const arrayOfIndex = searchWord(text, wordToSearch);
    alert("le occorrenze sono " + arrayOfIndex.length)


    let par = document.getElementById("stats-paragraph")
}

//1) statistiche testo;

//2) funzione di ricerca;

//3) prompt attivato da tasto che attiva la funzione di ricerca;