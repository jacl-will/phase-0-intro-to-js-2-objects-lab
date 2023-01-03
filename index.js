const employee = {
    name: "Sandy",
    streetAddress: "Road",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // const newEmployee = {...employee};
    // newEmployee[key] = value;
    // return newEmployee;
    return {...employee, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    newEmployee[key];
    return [delete newEmployee.name];
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}