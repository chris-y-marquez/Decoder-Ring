// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const cipher = 
  {
    a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i:42, j:42, k:52, l:13, m:23, n:33, o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55,
  };
  const decipher =
  {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  };
    function polybius(input, encode = true) {
    //lowercase the input to ignore capital letters
  const myInput = input.toLowerCase();
  let encodedMessage = "";
  let decodedMessage = "";

  if (encode === true) {
  
    for ( let i = 0; i < input.length; i++) {
      // if character is a space, add the space to our encodedMessage variable
      if(myInput[i] === " ") {
        encodedMessage += " ";
      }
      else {
        encodedMessage += cipher[myInput[i]];
      }
      }
      return encodedMessage
    }


    if (encode === false) {
      let count = 0;
      // checks to see if length is even
      for (let i = 0; i < input.length; i++) {
        if(input[i] !== " ") count ++ }
        if (count %2 !== 0) return false;
            // decoding 
        for (let i = 0; i < input.length;){
          if( myInput[i] === " ") {
            decodedMessage += " "; i++;
        } else {
          let pair = parseInt(input[i] + input[i+1]); //convert string pairs into integers 
          decodedMessage += decipher[pair]; i+=2; // add the index value of the pairs inside of decipher and then increment by 2 for the next cycle of pairs.
        }
      }
        return decodedMessage
    }
  }
  


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
