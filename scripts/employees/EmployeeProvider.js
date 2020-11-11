import { getCustomers, getEmployeeCustomers, useCustomers, useEmployeeCustomers } from "../customers/CustomerProvider.js";
import { useDepartments } from "../departments/DepartmentProvider.js";
import { useLocations } from "../locations/LocationProvider.js";

let employees = [];

export const useEmployees = () => {
    return employees.slice();
}

export const getEmployees = () => {
    return fetch(`http://localhost:8088/employees`)
        .then(response => response.json())
        .then(response => employees = response)
}

export const getEmployeeDepartment = emp => {
    return useDepartments().find(dept => dept.id === emp.departmentId);
}

export const getEmployeeLocation = emp => {
    return useLocations().find(loc => loc.id === emp.locationId);
}

export const getCustomersForSingleEmployee = emp => {
    const custEmpArr = useEmployeeCustomers().filter(joinObj => emp.id === joinObj.employeeId);
    return custEmpArr.map(obj => useCustomers().find(cust => cust.id === obj.customerId));
}