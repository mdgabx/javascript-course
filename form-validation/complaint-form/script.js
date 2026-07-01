const fullName = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");

const complaint = document.getElementById("complaints-group");
const complaintGroups = document.querySelectorAll('#complaints-group input[type="checkbox"]');
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");

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

  return {
    "full-name": name === "" ? false : true,
    "email": isValidEmail,
    "order-no": isValidNo,
    "product-code": isValidProductCode,
    "quantity": isValidQuantity,
    "complaints-group": hasComplaints,
    "complaint-description": complaintDescriptionValid  
  }
}


function isValidComplaintDescription (checkedComplaint) {
  if(!checkedComplaint) {
    return true
  }

  if(checkedComplaint && complaintDescription.value.length < 20) {
    return false;
  }

  return checkedComplaint
}



function handleInputChange() {
  const form = validateForm();
  console.log(form);

  fullName.style.borderColor = form["full-name"] ? "green" : "red";
  emailInput.style.borderColor = form["email"] ? "green" : "red";
  orderNoInput.style.borderColor = form["order-no"] ? "green" : "red";
  productCodeInput.style.borderColor = form["product-code"] ? "green" : "red";
  productCodeInput.style.borderColor = form["product-code"] ? "green" : "red";
  quantityInput.style.borderColor = form["quantity"] ? "green" : "red";
  complaint.style.borderColor = form["complaints-group"] ? "green" : "red";
}

fullName.addEventListener("change", handleInputChange)
emailInput.addEventListener("change", handleInputChange)
orderNoInput.addEventListener("change", handleInputChange)
productCodeInput.addEventListener("change", handleInputChange)
quantityInput.addEventListener("change", handleInputChange)
complaintGroups.forEach(checkbox => {
  checkbox.addEventListener("change", handleInputChange)
})