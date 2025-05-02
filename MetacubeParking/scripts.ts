type gender = "Male"|"Female"|"other"; 

interface Employee{
    fullName: string; 
    gender: gender; 
    email: string; 
    password: string; 
    confirmPassword: string; 
    contactNumber: string; 
}

let employeeData : Employee = {} as Employee; 


document.addEventListener("DOMContentLoaded",():void=>{
    const employeeSection:HTMLElement | null = document.querySelector("#employee-section")
    const vehicleSection:HTMLElement | null = document.querySelector("#vehicle-section")
    const pricingSection:HTMLElement | null = document.querySelector("#pricing-section")
    
    if(vehicleSection) vehicleSection.style.display = "none"; 
    if(pricingSection) pricingSection.style.display = "none"; 

    initializeEmployeeForm(); 
})

const initializeEmployeeForm = ():void => {
    const employeeForm : HTMLFormElement  | null = document.querySelector("#employee-section form"); 
    if(!employeeForm)return; 

    const inputs: NodeListOf<HTMLInputElement|HTMLSelectElement> = employeeForm.querySelectorAll("input, select"); 

}