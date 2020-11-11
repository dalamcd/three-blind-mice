import { Customer } from "./Customer.js";
import { useCustomers, getEmployeesForSingleCustomer } from "./CustomerProvider.js";

const contentTarget = document.querySelector(".container");

export const CustomerList = () => {
    render(useCustomers());
}

export const render = customerList => {
    let htmlRep = "";
    htmlRep += customerList.map(cust => Customer(cust, getEmployeesForSingleCustomer(cust))).join("");
    contentTarget.innerHTML += htmlRep;
}