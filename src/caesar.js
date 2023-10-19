// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let encodedMessage = '';
        const message = input.toLowerCase();
      if (!shift || shift === 0 || shift < -25 || shift > 25) { return false};

      if (encode === false) { // This is for decoding the message
        for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (alphabet.includes(char)) {
          let pos = alphabet.indexOf(char);
          encodedMessage += alphabet[(pos + -shift + 26) % 26];
        } else {
          encodedMessage += char;
        }
        }
        return encodedMessage 
      }

      for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (alphabet.includes(char)) {
          let pos = alphabet.indexOf(char);
          encodedMessage += alphabet[(pos + shift + 26) % 26];
        } else {
          encodedMessage += char;
        }
        }
  return encodedMessage
  
  }
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };