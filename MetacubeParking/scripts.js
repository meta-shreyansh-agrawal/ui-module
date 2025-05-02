var employeeData = {};
document.addEventListener("DOMContentLoaded", function () {
    var employeeSection = document.querySelector("#employee-section");
    var vehicleSection = document.querySelector("#vehicle-section");
    var pricingSection = document.querySelector("#pricing-section");
    if (vehicleSection)
        vehicleSection.style.display = "none";
    if (pricingSection)
        pricingSection.style.display = "none";
    initializeEmployeeForm();
});
var initializeEmployeeForm = function () {
    var employeeForm = document.querySelector("#employee-section form");
    if (!employeeForm)
        return;
    var inputs = employeeForm.querySelectorAll("input, select");
};
