import { getEmployeeComputer } from "../computers/ComputerProvider.js";
import { Employee } from "./Employee.js";
import { getCustomersForSingleEmployee, getEmployeeDepartment, getEmployeeLocation, getEmployees, useEmployees } from "./EmployeeProvider.js"

const contentTarget = document.querySelector(".container");

export const EmployeeList = () => {
    render(useEmployees());
}

const render = (employeeArray) => {
    let htmlRep = "";
    htmlRep += employeeArray.map(emp => {
        return Employee(emp, getEmployeeComputer(emp),
            getEmployeeDepartment(emp), getEmployeeLocation(emp),
            getCustomersForSingleEmployee(emp))
    }).join("");
    contentTarget.innerHTML = htmlRep;
}