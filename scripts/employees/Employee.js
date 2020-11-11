export const Employee = (emp, comp, dept, loc, custArr) => {
    
    return `<div class="employee">
    <header class="employee__name">
        <h1>${emp.firstName} ${emp.lastName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${comp.year} ${comp.model}
    </section>
    <section class="employee__department">
        Works in the ${dept.name} department
    </section>
    <section class="employee__location">
        Works at the ${loc.name} office
    </section>
    <section class="employee__customers">
    Has worked for the following customers.
    <ul>
        ${custArr.map(cust => `<li>${cust.name}</li>`).join("")}

    </ul>
</section>
</div>`;
}