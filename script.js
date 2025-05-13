const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultMessage = document.getElementById("result");

function isPalindrome(text) {
  const clean = text.toLowerCase().replace(/[^a-z0-9\u00C0-\u024F]/g,'');
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
};

checkButton.addEventListener("click", result);

function result() {
  if (textInput.value === "") {
    alert('Please input a value');
    return;
  }
  if (isPalindrome(textInput.value)) {
    resultMessage.innerText = `${textInput.value} is a Palindrome`;
  }
  else {
    resultMessage.innerText = `${textInput.value} is not a Palindrome`;
  }
};
