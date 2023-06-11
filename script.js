console.log('JS loaded!');

// ## Assignment

// ✅ The application should have an input form that collects _employee 
// first name, last name, ID number, job title, annual salary_.

// ✅ A 'Submit' button should collect the form information, store the information 
// to calculate monthly costs, append information to the DOM and clear 
// the input fields.

// ✅ Using the stored information, calculate monthly costs 
// and append this to the to DOM. If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.

// ✅ Create a delete button that removes an employee from the DOM. For Base mode, 
// it does **not** need to remove that Employee's salary from the reported total.

// STRETCH GOALS
// Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect
// the employee's removal. _HINT:_ You will need to figure out which employee was removed in order
//  to subtract their salary from the total. Consider using `.text()` as a getter, or look into
//  jQuery's `.data()` function. This is tricky! 


$(document).ready(onReady);

function onReady() {
    console.log('JQuery loaded!');


    $('#submit-button').on('click', addEmployeeInfo)

    $('#table-body').on('click', '.delete-button', deleteEmployeeInfo)


}

let salaryMonthlyTotal=0;

let formatter =  Intl.NumberFormat( 'en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});


// A 'Submit' button should collect the form information, store the information 
// to calculate monthly costs, append information to the DOM and clear 
// the input fields.
function addEmployeeInfo(event){
    console.log('in addEmployeeInfo')
    event.preventDefault();

    //collect and store form info
    let firstNameInputValue = $('#first-name-input').val();
    console.log('FirstNameInputValue is:', firstNameInputValue);

    let lastNameInputValue = $('#last-name-input').val();
    console.log('LastNameInputValue is:', lastNameInputValue);

    let idInputValue = $('#id-input').val();
    console.log('IDInputValue is:', idInputValue);

    let titleInputValue = $('#title-input').val();
    console.log('TitleInputValue is:', titleInputValue);

    let annualSalaryInputValue = $('#annual-salary-input').val();
    console.log('AnnualSalaryInputValue is:', annualSalaryInputValue);

//  If NaN is entered in Annual Salary input, exit function, etc.. Ran out of time. 
//  Changed html input to type:number to avoid NaN.
//  if(annualSalaryInputValue == NaN || ''){
//     console.log('Annual Salary must be a Number!:', annualSalaryInputValue);
//     $('#first-name-input').val('');
//     $('#last-name-input').val('');
//     $('#id-input').val('');
//     $('#title-input').val('');
//     $('#annual-salary-input').val('');
//     return;
//  }
//  else {
//     console.log('Annual Salary is a Number:', annualSalaryInputValue);
//  }

    // Format annualSalaryInputValue
    formattedAnnualSalaryInputValue = formatter.format(annualSalaryInputValue);
    console.log('Formatted AnnualSalaryInputValue is: ', formattedAnnualSalaryInputValue);


    // Append employee info into table
    $('#table-body').append(`
        <tr>
            <td>${firstNameInputValue}</td>
            <td>${lastNameInputValue}</td>
            <td>${idInputValue}</td>
            <td>${titleInputValue}</td>
            <td>${formattedAnnualSalaryInputValue}</td>
            <td><button class="delete-button">Delete</button></td>
        </tr>
    `)


    // Using the stored information, calculate monthly costs 
    // and append this to the to DOM.
    console.log('value to add to salary-monthly-total is:', annualSalaryInputValue/12)
    console.log('salaryMonthlyTotal is: ', salaryMonthlyTotal)

    salaryMonthlyTotal += annualSalaryInputValue/12;
    console.log('salaryMonthlyTotal after is: ', salaryMonthlyTotal)

    // format salaryMonthlyTotal
    let formattedSalaryMonthlyTotal = formatter.format(salaryMonthlyTotal);
    console.log('formattedSalaryMonthlyTotal is: ', formattedSalaryMonthlyTotal);

    // Append salary-monthly-total
    $('#salary-monthly-total').text(formattedSalaryMonthlyTotal)

    // If the total monthly cost exceeds $20,000, add a red background color 
    // to the total monthly cost.
    if(salaryMonthlyTotal > 20000.00){
        $('#salary-monthly-total').css('background-color', 'red')
    }

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

