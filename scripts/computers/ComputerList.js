import { Computer } from "./Computer.js";
import { getComputers, useComputers } from "./ComputerProvider.js"

const contentTarget = document.querySelector(".container");

export const ComputerList = () => {
    getComputers()
    .then(() => {
        render(useComputers());
    })
}

const render = (computerArray) => {
    let htmlRep = "";
    htmlRep = computerArray.map(comp => Computer(comp));
    contentTarget.innerHTML = htmlRep;
}