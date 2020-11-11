export const Customer = (cust, empArr) => {
    return `<div class="customer">
        <header class="customer__name">
            <h1>${cust.name}</h1>
        </header>
        <section class="customer__employee">
            Has the following employees.
            <ul>
            ${empArr.map(emp => `<li>${emp.firstName} ${emp.lastName}</li>`).join("")}
            </ul>
        </section>`
}