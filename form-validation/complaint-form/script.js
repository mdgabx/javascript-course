const fullName = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");

const complaint = document.getElementById("complaints-group");
const complaintGroups = document.querySelectorAll('#complaints-group input[type="checkbox"]');
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroups = document.querySelectorAll('#solutions-group input[type="radio"]')
const solutionsContainer = document.getElementById('solutions-group');
const otherSolutions = document.getElementById('other-solution')
const solutionDescription = document.getElementById('solution-description');


function validateForm() {
  const name = fullName.value;
  const email = emailInput.value;
  const orderNo = orderNoInput.value;
  const productCode = productCodeInput.value;
  const quantity = quantityInput.value;

  const isValidEmail = /.+@.+\..+/g.test(email);
  const isValidNo = /^2024\d{6}$/.test(orderNo);
  const isValidProductCode = /^\w{2}\d{2}-\w\d{3}-\w{2}\d$/.test(productCode);
  const isValidQuantity = /^\d+$/.test(quantity) && Number(quantity) > 0;
  const hasComplaints = Array.from(complaintGroups).some((complaint) => complaint.checked);
  const checkedOtherComplaint = otherComplaint.checked ? true : false;
  const complaintDescriptionValid = isValidComplaintDescription(checkedOtherComplaint);
  const hasSolutions = Array.from(solutionsGroups).some(solution => solution.checked)
  const checkedOtherSolutions = otherSolutions.checked ? true : false
  const solutionsValid = isValidSolution(checkedOtherSolutions);
  


  return {
    "full-name": name === "" ? false : true,
    "email": isValidEmail,
    "order-no": isValidNo,
    "product-code": isValidProductCode,
    "quantity": isValidQuantity,
    "complaints-group": hasComplaints,
    "complaint-description": complaintDescriptionValid,
    "solutions-group": hasSolutions,
    "solution-description": solutionsValid
  }
}


function isValidSolution(checkedSolution) {
  if(!checkedSolution) return true;

  if(checkedSolution && solutionDescription.value.length < 20) { return false};

  return checkedSolution
}

function isValidComplaintDescription (checkedComplaint) {
  if(!checkedComplaint) {
    return true
  }

  if(checkedComplaint && complaintDescription.value.length < 20) {
    return false;
  } 

  return checkedComplaint;
}

function handleInputChange() {
  const form = validateForm();

  fullName.style.borderColor = form["full-name"] ? "green" : "red";
  emailInput.style.borderColor = form["email"] ? "green" : "red";
  orderNoInput.style.borderColor = form["order-no"] ? "green" : "red";
  productCodeInput.style.borderColor = form["product-code"] ? "green" : "red";
  productCodeInput.style.borderColor = form["product-code"] ? "green" : "red";
  quantityInput.style.borderColor = form["quantity"] ? "green" : "red";
  complaint.style.borderColor = form["complaints-group"] ? "green" : "red";
  complaintDescription.style.borderColor = form["complaint-description"] ? "green" : "red";
  solutionsContainer.style.borderColor = form['solutions-group'] ? "green" : "red";
  solutionDescription.style.borderColor = form['solution-description'] ? "green": "red"
}

fullName.addEventListener("change", handleInputChange)
emailInput.addEventListener("change", handleInputChange)
orderNoInput.addEventListener("change", handleInputChange)
productCodeInput.addEventListener("change", handleInputChange)
quantityInput.addEventListener("change", handleInputChange)
complaintGroups.forEach(checkbox => {
  checkbox.addEventListener("change", handleInputChange)
})
complaintDescription.addEventListener("change", handleInputChange)
solutionsGroups.forEach((radio => {
  radio.addEventListener("change", handleInputChange);
}))
solutionDescription.addEventListener("change", handleInputChange)


function isValid(formResult) {
  return Object.values(formResult).every((value) => value === true);
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid(validateForm());
});