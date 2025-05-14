const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultMessage = document.getElementById("result");

function isPalindrome(text) {
  const clean = text
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g,'')
  .replace(/[^a-z0-9]/gi, '');
    
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
};

checkButton.addEventListener("click", result);

textInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    result();
      }
});

function result() {
  
  if (textInput.value === "") {
    alert('Please input a value');
    return;
  }

  if (!/[a-zA-Z]/.test(textInput.value)) {
    alert('Please input text containing at least a letter');
    return;
  }

  if (isPalindrome(textInput.value)) {
    resultMessage.innerText = `${textInput.value} is a Palindrome`;
  }
  else {
    resultMessage.innerText = `${textInput.value} is not a Palindrome`;
  }
}

