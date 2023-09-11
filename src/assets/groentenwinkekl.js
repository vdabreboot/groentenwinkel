"use strict";

const keuzeGroente = document.getElementById("groente");
const bestellingLijst = document.getElementById("bestellingLijst");
const keuzeAantal = document.getElementById("aantal");
const totaalTeBetalen = document.getElementById("totaalTeBetalen")

async function leesData(){
    const data = await fetch ("groenten.json");
    if (data.ok){
        const groenten = await data.json();        
        groenten.forEach(groente => {
            const optionGroente = document.createElement("option");
            optionGroente.id = groente.naam;
            optionGroente.value = groente.naam;
            optionGroente.innerText = `${groente.naam} (${groente.prijs}/${groente.eenheid})`;
            optionGroente.dataset.prijs = groente.prijs;
            optionGroente.dataset.eenheid = groente.eenheid;
            keuzeGroente.appendChild(optionGroente);
        });
    }
}

leesData();

function toevoegenLijn(){
    const selectedOption = keuzeGroente.selectedOptions[0];
    const selectedLijn = document.querySelectorAll(`tr.${selectedOption.id}`);
    let tr;
    let tdTeBetalen;
    let tdAantal;
    let tdPrijs;    
    if (selectedLijn.length === 0) {
        tr = document.createElement("tr")  
        tr.classList.add("bestelLijn");
        tr.classList.add(selectedOption.id);
        const tdGroente = document.createElement("td");
        tdAantal = document.createElement("td");
        tdPrijs = document.createElement("td");
        tdPrijs.id=`${selectedOption.id}Prijs`;
        tdTeBetalen = document.createElement("td");
        tdTeBetalen.id=`${selectedOption.id}TeBetalen`;
        const tdVerwijderen = document.createElement("td");
        const imgVerwijderen = document.createElement("img");
        bestellingLijst.appendChild(tr);
        tdGroente.innerText = keuzeGroente.value;
        tdAantal.id=`${selectedOption.id}Aantal`;
        tdAantal.innerText = keuzeAantal.value;
        tdPrijs.innerText = selectedOption.dataset.prijs;
        imgVerwijderen.src = "vuilbak.png";
        imgVerwijderen.onclick=verwijderLijn;
        tdVerwijderen.appendChild(imgVerwijderen);
        tr.appendChild(tdGroente);
        tr.appendChild(tdAantal);
        tr.appendChild(tdPrijs);
        tr.appendChild(tdTeBetalen);
        tr.appendChild(tdVerwijderen);
    } else {
        tr = selectedLijn.item(0);
        tdAantal = document.getElementById(`${selectedOption.id}Aantal`);
        tdPrijs = document.getElementById(`${selectedOption.id}Prijs`);
        tdTeBetalen = document.getElementById(`${selectedOption.id}TeBetalen`);
        tdAantal.innerText = Number(tdAantal.innerText) + Number(keuzeAantal.value);
        tdPrijs.innerText = selectedOption.dataset.prijs;
    }                
    
    const tebetalen = Number(tdAantal.innerText) * Number(tdPrijs.innerText);    
    tdTeBetalen.innerText = tebetalen.toFixed(2);
    tdTeBetalen.dataset.tebetalen = tebetalen;    
    tr.dataset.tebetalen = tebetalen;    
    berekenEnToonTotaalTeBetalen();
}
function verwijderLijn(){
    const selectedRow = this.parentNode.parentNode;        
    selectedRow.remove();    
    berekenEnToonTotaalTeBetalen();
}
function berekenEnToonTotaalTeBetalen(){
    let totaalBedragTeBetalen=0;
    document.querySelectorAll(".bestelLijn").forEach( lijn => totaalBedragTeBetalen+= Number(lijn.dataset.tebetalen));
    totaalTeBetalen.innerText = totaalBedragTeBetalen.toFixed(2);
}
document.getElementById("toevoegen").onclick = function (){
    const invalids = document.querySelectorAll("input:invalid , select:invalid");
    const valids = document.querySelectorAll("input:valid , select:valid");
    invalids.forEach(element => document.getElementById(`${element.id}Fout`).hidden=false);
    valids.forEach(element => document.getElementById(`${element.id}Fout`).hidden=true);
    if (keuzeGroente.checkValidity() && keuzeAantal.checkValidity()){        
        toevoegenLijn();
    }
}