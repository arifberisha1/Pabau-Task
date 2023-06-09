const form = document.querySelector("form");

const containers = Array.from(document.querySelectorAll(".containerArray"));

const btnShuffle = document.getElementById("shuffleBtn");
const btnChange = document.getElementById("changeBtn");
const btnShow = document.getElementById("showBtn");
const btnReload = document.getElementById("reloadBtn");

const display = document.getElementById("display");

btnShuffle.onclick = shuffleValues;
btnChange.onclick = changeValues;
btnShow.onclick = printValues;
btnReload.onclick = () => window.location.reload();

function shuffleValues(){
    containers.forEach(container => form.removeChild(container));

    for (let i = 0; i < containers.length - 1; i++) {
        const index1 = Math.floor(Math.random() * (containers.length - 1));
        const index2 = Math.floor(Math.random() * (containers.length - 1));

        if (index1 !== index2) {
            let temp = containers[index1];
            containers[index1] = containers[index2];
            containers[index2] = temp;
        }
    }
    containers.forEach(container => form.appendChild(container));
}

function changeValues(){

}

function printValues(){

}