document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("password");
  const generate = document.getElementById("generate");
  const numberOfCharacters = document.getElementById("numberOfCharcters");

  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const allChars = str + numeric + punctuation;

  const generatePassword = (length) => {
    return Array.from({ length }, () =>
      allChars.charAt(Math.floor(Math.random() * allChars.length))
    ).join("");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Password copied to clipboard!"))
      .catch((err) => console.error("Could not copy text: ", err));
  };

  generate.addEventListener("click", () => {
    const length = parseInt(numberOfCharacters.value) || 12; // Default length to 12 if not provided
    const password = generatePassword(length);
    input.value = password;
    copyToClipboard(password);
  });
});
