import { getEmployees } from "./employees/EmployeeProvider.js";
import { getComputers } from "./computers/ComputerProvider.js";
import { getDepartments } from "./departments/DepartmentProvider.js";
import { getLocations } from "./locations/LocationProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getCustomers, getEmployeeCustomers } from "./customers/CustomerProvider.js";
import { CustomerList } from "./customers/CustomerList.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList);