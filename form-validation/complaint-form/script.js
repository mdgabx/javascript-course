const fullName = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");

function validateForm() {
  const name = fullName.value;
  const email = emailInput.value;
  const orderNo = orderNoInput.value;

  const regex = /.+@.+\..+/g;
  const isValidEmail = regex.test(email);
  const isValidNo = /^2024\d{6}$/.test(orderNo)

  return {
    "full-name": name === "" ? false : true,
    "email": isValidEmail ? true : false,
    "order-no": isValidNo ? true : false
  }
}

function handleInputChange() {
  const form = validateForm();

  console.log(form);

  fullName.style.borderColor = form["full-name"] ? "green" : "red";
  emailInput.style.borderColor = form["email"] ? "green" : "red";
  orderNoInput.style.borderColor = form["order-no"] ? "green" : "red";

}

fullName.addEventListener("change", handleInputChange)
emailInput.addEventListener("change", handleInputChange)
orderNoInput.addEventListener("change", handleInputChange)