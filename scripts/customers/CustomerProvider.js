import { useEmployees } from "../employees/EmployeeProvider.js"

let customers = [];
let employeeCustomers = [];

export const useCustomers = () => {
    return customers.slice();
}

export const getCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
    .then(response => response.json())
    .then(response => customers = response);
}

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice();
}

export const getEmployeeCustomers = () => {
    return fetch(`http://localhost:8088/employeeCustomers`)
    .then(response => response.json())
    .then(response => employeeCustomers = response);
}

export const getEmployeesForSingleCustomer = cust => {
    const custEmpArr = useEmployeeCustomers().filter(joinObj => cust.id === joinObj.customerId);
    return custEmpArr.map(obj => useEmployees().find(emp => emp.id === obj.employeeId));
}