console.log('JS loaded!');

// ## Assignment

// ✅ The application should have an input form that collects _employee 
// first name, last name, ID number, job title, annual salary_.

// ✅ A 'Submit' button should collect the form information, store the information 
// to calculate monthly costs, append information to the DOM and clear 
// the input fields.

// Using the stored information, calculate monthly costs 
// and append this to the to DOM. If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.

// ✅ Create a delete button that removes an employee from the DOM. For Base mode, 
// it does **not** need to remove that Employee's salary from the reported total.


$(document).ready(onReady);

function onReady() {
    console.log('JQuery loaded!');


    $('#submit-button').on('click', addEmployeeInfo)

    $('#table-body').on('click', '.delete-button', deleteEmployeeInfo)


}

let salaryMonthlyTotal=0;
// A 'Submit' button should collect the form information, store the information 
// to calculate monthly costs, append information to the DOM and clear 
// the input fields.
function addEmployeeInfo(event){
    console.log('in addEmployeeInfo')
    event.preventDefault();

    //collect and store form info
    let firstNameInputValue = $('#first-name-input').val();
    console.log('firstNameInputValue is:', firstNameInputValue);

    let lastNameInputValue = $('#last-name-input').val();
    console.log('lastNameInputValue is:', lastNameInputValue);

    let idInputValue = $('#id-input').val();
    console.log('idInputValue is:', idInputValue);

    let titleInputValue = $('#title-input').val();
    console.log('titleInputValue is:', titleInputValue);

    let annualSalaryInputValue = $('#annual-salary-input').val();
    console.log('annualSalaryInputValue is:', annualSalaryInputValue);

    // Append employee info into table
    $('#table-body').append(`
        <tr>
            <td>${firstNameInputValue}</td>
            <td>${lastNameInputValue}</td>
            <td>${idInputValue}</td>
            <td>${titleInputValue}</td>
            <td>${annualSalaryInputValue}</td>
            <td><button class="delete-button">delete</button></td>
        </tr>
    `)

    // Using the stored information, calculate monthly costs 
    // and append this to the to DOM. If the total monthly cost exceeds $20,000, 
    // add a red background color to the total monthly cost.
    console.log('value to add to salary-monthly-total is:', `${annualSalaryInputValue}`/12)
    console.log('(this) is: ', this)
    $('#annual-salary-input').val('');
    salaryMonthlyTotal = $('#salary-monthly-total} + `${annualSalaryInputValue}`/12;
    console.log('salaryMonthlyTotal is: ', salaryMonthlyTotal)
    $('#salary-monthly-total').append(`${salaryMonthlyTotal}`)


    // clear form
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');
}


// Create a delete button that removes an employee from the DOM. For Base mode, 
// it does **not** need to remove that Employee's salary from the reported total.
function deleteEmployeeInfo(){
    console.log('in deleteEmployeeInfo');

    $(this).parent().parent().remove();
}


// Using the stored information, calculate monthly costs 
// and append this to the to DOM. If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.
function totalMonthlyCost(){
    console.log('in totalMonthlyCost');


}