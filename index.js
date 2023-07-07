// Write your solution in this file!
const employee = {
    name:"Sandy",
    streetAddress:"market"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee}
    newEmployee.name="Sam"
    newEmployee.streetAddress="11 Broadway"
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.name="Sam"
    employee.streetAddress="12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    const updateEmployee={...employee}
    delete updateEmployee.name
    return updateEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name
    return employee
}