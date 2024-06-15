const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");

check.addEventListener("click", () => {
  if(showResult(input.value))
    result.insertAdjacentHTML("beforeend", showResult(input.value));
  input.value = "";
});

clear.addEventListener("click", () => {
  clearResult(result)
});



const validateNumber = (number) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return regex.test(number);
};

const showResult = (value) => value.trim() ? (validateNumber(value) ? `<p class="valid">Valid US Number: ${value}</p>` : `<p class="invalid">Invalid US Number: ${value}</p>`) : window.alert("Please provide a phone number");


const clearResult = (result) => result.textContent = "";